define(['psc-tests-assert','Psc/HTTPMessage'], function (t) {
  module("Psc.HTTPMessage");
  
  var setup = function (test) {
    t.setup(test);
  };
  
  test("parsesHeaderFromString", function() {
    var that = setup(this);
    var message = new Psc.HTTPMessage({ });
    
    var headerString = "Date: Mon, 19 Mar 2012 06:48:32 GMT\r\nServer: Apache/2.2.22 (Win32) PHP/5.3.10\r\nX-Powered-By: PHP/5.3.10\r\nPragma: no-cache\r\nCache-Control: private, no-cache\r\nVary: Accept\r\nContent-Length: 50\r\nKeep-Alive: timeout=5, max=91\r\nConnection: Keep-Alive\r\nContent-Type: text/html; charset=utf-8\r";
    
    message.parseHeader(headerString);
    
    this.assertEquals({
      "Date": "Mon, 19 Mar 2012 06:48:32 GMT",
      "Server": "Apache/2.2.22 (Win32) PHP/5.3.10",
      "X-Powered-By": "PHP/5.3.10",
      "Pragma": "no-cache",
      "Cache-Control": "private, no-cache",
      "Vary": "Accept",
      "Content-Length": "50",
      "Keep-Alive": "timeout=5, max=91",
      "Connection": "Keep-Alive",
      "Content-Type": "text/html; charset=utf-8"
    }, message.getHeader());
  });
  
  test("setsAndGetsAndDeletesHeaderFields", function() {
    var that = setup(this);
    var message = new Psc.HTTPMessage({});
    
    this.assertEquals(null, message.getHeaderField('Content-Type'));
    message.setHeaderField('Content-Type','text/html');
    this.assertEquals('text/html', message.getHeaderField('Content-Type'));
    message.removeHeaderField('Content-Type');
    this.assertEquals(null, message.getHeaderField('Content-Type'));
    
    message.setHeaderField('Content-Type','text/html');
    message.setHeaderField('Pragma','no-cache');
    this.assertEquals('no-cache', message.getHeaderField('Pragma'));
    this.assertEquals('text/html', message.getHeaderField('Content-Type'));
  });
});