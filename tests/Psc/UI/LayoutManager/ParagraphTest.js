define(['psc-tests-assert','require','Psc/TextEditor', 'Psc/UI/LayoutManager/Paragraph','Psc/Test/DoublesManager'], function(t, require) {
  
  module("Psc.UI.TextEditor");
  
  var setup = function(test) {
    var dm = new Psc.Test.DoublesManager();
    
    var $container = $('<div/>');
    $('#visible-fixture').empty().append($container);
    
    var p = new Psc.UI.LayoutManager.Paragraph({
      label: 'Paragraph',
      content: 'Lorem ipsum dolor sit amet...'
    });
    
    var interactionProvider = dm.injectInteractionProvider(p);
    
    test = t.setup(test, {paragraph: p, $container: $container, interactionProvider: interactionProvider});
    
    var editor;
    test.editor = function () {
      if (!editor) {
        editor = new Psc.TextEditor({ widget: $container.find('textarea:first')});
      }
      
      return editor;
    };
    
    test.setupButton = function (button) {
      var $widget = test.paragraph.create();
      test.$container.append($widget);
      
      return $widget.find('button.'+button);
    };
    
    test.setupLinkButton = function() {
      return test.setupButton('add-link');
    };
    
    return test;
  };

  test("paragraph shows a button to add a link", function() {
    setup(this);
    var $button = this.setupLinkButton();
    
    this.assertjQueryLength(1, $button);
    this.assertjQueryHasClass('psc-cms-ui-button', $button);
  });
  
  test("paragraph inserts a link with prompting for both informations, when caret is somewhere in the text", function () {
    var that = setup(this);
    var $button = this.setupLinkButton();
    
    this.interactionProvider.answerToPrompt("http://www.ps-webforge.com/");
    this.interactionProvider.answerToPrompt("ps-webforge");
    
    this.editor().move(12);
    
    $button.trigger('click');
    
    this.assertEquals(
      "Lorem ipsum [[http://www.ps-webforge.com/|ps-webforge]] dolor sit amet...",
      this.editor().getText(),
      "text template is inserted into textarea on position 4"
    );
  });
  
  test("paragraph inserts a link with prompting for both informations, when caret is at the really beginning of the text", function () {
    var that = setup(this);
    var $button = this.setupLinkButton();

    this.interactionProvider.answerToPrompt("http://www.ps-webforge.com/");
    this.interactionProvider.answerToPrompt("ps-webforge");

    this.editor().move(0);
    
    $button.trigger('click');

    this.assertEquals(
      "[[http://www.ps-webforge.com/|ps-webforge]] Lorem ipsum dolor sit amet...",
      this.editor().getText(),
      "link template is inserted into textarea on position 0"
    );
  });
  
  test("when link button is cancelled, no link is inputted", function () {
    var that = setup(this);
    var $button = this.setupLinkButton();
    
    this.editor().setSelection(0,73); // all
    
    // cancel url prompt
    this.interactionProvider.cancelNextPrompt();
    // to "fake" the browser behaviour the second is given
    this.interactionProvider.answerToPrompt('link-description');
    
    $button.click();
    
    this.assertEquals(
      "Lorem ipsum dolor sit amet...",
      this.editor().getText(),
      "text template should be non modified, because button cancelled"
    );
  });
  
  test("paragraph replaces marked word with bold tag", function () {
    var that = setup(this);    
    var $button = this.setupButton('bold');
    
    this.editor().unwrap().selection(0,5);
    $button.trigger('click');
    
    this.assertEquals(
      "**Lorem** ipsum dolor sit amet...",
      this.editor().getText(),
      "lorem is replaced with bold lorem"
    );
  });


  test("paragraph replaces marked word with // tag", function () {
    var that = setup(this);    
    var $button = this.setupButton('italic');
    
    this.editor().unwrap().selection(0,5);
    $button.trigger('click');
    
    this.assertEquals(
      "//Lorem// ipsum dolor sit amet...",
      this.editor().getText(),
      "lorem is replaced with italic lorem"
    );
  });
  
  test("paragraph replaces marked word with underline tag", function () {
    var that = setup(this);    
    var $button = this.setupButton('underlined');
    
    this.editor().unwrap().selection(6,11);
    $button.trigger('click');
    
    this.assertEquals(
      "Lorem __ipsum__ dolor sit amet...",
      this.editor().getText(),
      "lorem is replaced with underline ipsum"
    );
  });  
});