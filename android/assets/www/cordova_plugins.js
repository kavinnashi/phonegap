cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/jp.wizcorp.phonegap.plugin.wizSpinnerPlugin/www/phonegap/plugin/wizSpinner/wizSpinner.js",
        "id": "jp.wizcorp.phonegap.plugin.wizSpinnerPlugin.wizSpinnerPlugin",
        "clobbers": [
            "window.wizSpinner"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "jp.wizcorp.phonegap.plugin.wizSpinnerPlugin": "1.2.0",
    "cordova-plugin-dialogs": "1.1.1",
    "cordova-plugin-device": "1.1.0",
    "com.phonegap.plugins.PushPlugin": "2.5.0",
    "cordova-plugin-geolocation": "1.0.1",
    "cordova-plugin-splashscreen": "3.0.0"
}
// BOTTOM OF METADATA
});