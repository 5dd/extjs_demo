/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
//var host = window.location.host;
var host = "192.168.2.163:58080";
Ext.define('testMVVM.Application', {
    extend: 'Ext.app.Application',
    
    name: 'testMVVM',

    stores: [

    ],
    
    
    views: [
       'testMVVM.view.login.Login'
    ],
    
    launch: function () {
        console.log("host:" + host);  
        Ext.create({
            xtype:'login'
        });
    }
});
