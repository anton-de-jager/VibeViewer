
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-purchase.InAppPurchase",
          "file": "plugins/cordova-plugin-purchase/www/store-ios.js",
          "pluginId": "cordova-plugin-purchase",
        "clobbers": [
          "store"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-purchase": "11.0.0"
    };
    // BOTTOM OF METADATA
    });
    