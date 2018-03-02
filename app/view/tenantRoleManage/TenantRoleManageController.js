Ext.define('testMVVM.view.tenantRoleManage.TenantRoleManageController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tenantRoleManage',
    
    query: function() {
    	var form = tenantRoleManage_panel.getComponent('item_tenantRoleManage').getForm();
    	var formData = form.getValues();
    	console.log("domain:" + formData.domain);
    	var domain = formData.domain;
    	if(form.isValid()) {
    		Ext.Ajax.request({
			   url: 'http://'+ host +'/api/operation/operation/tenants/' + domain,
                method:'GET',
                success:function(result){
                	var tenant = JSON.parse(result.responseText);
                	var tenantId = tenant.id;
                	var role_store = Ext.getCmp("panel_role").getStore();
                	role_store.filter('tenantId', tenantId);
                	role_store.load();
                	tenantRoleManage_panel.close();
                },
                failure:function(response,opts){
                	Ext.MessageBox.alert("租户角色权限管理操作失败" ,"检查输入的域名！");
                }
			});	
    	}	
    },
    
    cancel:function() {
    	tenantRoleManage_panel.close();
    }
});