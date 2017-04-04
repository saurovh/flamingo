(function () {
    'use strict';
    // eslint-disable no-unused-vars
    var dkrm = new Flamingo('#target', {
      // Size options
        minWidth: 100,
        minHeight: 100,
        maxWidth: 600,
        maxHeight: 500,
        ratio: 4 / 3,
        backgroundColor: '#000',

      // Plugins options
        plugins: {
        // save: false,
            crop: {
                quickCropKey: 67, //key "c"
          //minHeight: 50,
          //minWidth: 50,
          //ratio: 4/3
            },
        },

      // Post initialize script
        initialize: function () {
            var cropPlugin = this.plugins.crop;
        // cropPlugin.selectZone(170, 25, 300, 300);
            cropPlugin.requireFocus();
        },
    });

    dkrm.init();
    dkrm.addPlugin({
        cliker : 'asdasdDarkroom'
        applyTransformation: function(){
            this.canvas
            this.image
        }
    })
})();

