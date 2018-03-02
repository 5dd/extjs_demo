var main_panel;
var sessionId;
Ext.define('testMVVM.view.login.LoginController',{
	extend:'Ext.app.ViewController',
	alias: 'controller.login',
	
	onLoginClick: function() {	
		
		var view = this.getView();
		var form = Ext.getCmp('form_login').getForm();
		var formData = form.getValues();
		
		// invoke the login interface
    	if (form.isValid()) {
    		Ext.Ajax.request({
//				url: 'http://'+security_host+'/api/login',
    			url: 'http://'+ host +'/api/security/login',
	            method:'POST',
                params:'username='+formData.username+'&password='+formData.password +'&namespace=_system',
	            success:function(response,opts){
	            	
	            	sessionId = JSON.parse(response.responseText).sessionId;
	            	view.destroy();
	            	
	        		Ext.create({
	                    xtype: 'app-main'
	                });
	        		
	        		/*
	        		 * 角色初始化
	        		 */
	        		var role_store = Ext.getCmp("panel_role").getStore();
	        		var roleProxy = role_store.getProxy();
	        		roleProxy.headers = {'sessionid':sessionId};
	        		// 动态改变proxy url
	        		roleProxy.url = 'http://'+host+'/api/security/security/roles';
	        		role_store.load();
	        		
	        		/*
	        		 * 权限初始化
	        		 */
	        		var permisssion_store = Ext.getCmp("panel_rolepermission").getStore();
	        		var permissionProxy = permisssion_store.getProxy();
	        		permissionProxy.headers = {'sessionid':sessionId};
	        		permissionProxy.url = 'http://'+host+'/api/security/security/roles/ROLE_TAdmin';
	        		permisssion_store.load();
	        		
	        		var tenants_panel = Ext.getCmp("panel_tenants");
	        		var tenants_store = tenants_panel.getStore();
	        		var tenantsProxy = 	tenants_store.getProxy();
	        		tenantsProxy.url = 'http://'+host+'/api/operation/operation/tenants';
	        		tenants_store.load();
	        		
	        		var partners_panel = Ext.getCmp("panel_partners");
	        		var partners_store = partners_panel.getStore();
	        		var partnersProxy = 	partners_store.getProxy();
	        		partnersProxy.url = 'http://'+host+'/api/operation/operation/partners';
	        		partners_store.load();
	        		
	        		var serviceNo_store = Ext.getCmp("panel_serviceNo").getStore();
	        		var serviceNoProxy = serviceNo_store.getProxy();
	        		serviceNoProxy.url = 'http://'+host+'/api/operation/operation/tenants/resources/serviceNo';
	        		serviceNo_store.load();
	            },
	            failure:function(response,opts){
	            	Ext.MessageBox.alert("提示","用户名或者密码错误！");
	            }
    		});
    	}
	},
	
	onResetClick: function() {
		var form = Ext.getCmp('form_login').getForm();
		form.reset();
	}
});