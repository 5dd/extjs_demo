Ext.define('testMVVM.view.tenant.TenantController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tenant',
    
    check:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	Ext.Ajax.request({
        		url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/check',
        		method: 'PUT',
        		success: function(){ 
        			Ext.getCmp('panel_tenants').getStore().load();
                	panel.close();
        		}
        	});
        }
    }
});