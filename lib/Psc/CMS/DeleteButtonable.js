define(['joose', 'Psc/CMS/Deleteable', 'Psc/CMS/Buttonable'], function (Joose) {
  Joose.Role('Psc.CMS.DeleteButtonable', {
    
    does: [Psc.CMS.Deleteable, Psc.CMS.Buttonable],
    
    methods: {
      // aka: getDeleteButton?
    }
  });
});