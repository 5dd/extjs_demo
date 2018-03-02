Ext.define('testMVVM.view.changeTenantStatus.ChangeTenantStatusController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.changeTenantStatus',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var tenant = Ext.getCmp('panel_tenants').getSelectionModel().getSelected().items[0];

        	if (tenant==null) {
        		Ext.Msg.alert('请选择租户！');
        		changeTenantStatus_win.close();
			} else {
				var tenantId = tenant.id;
	        	console.log('tenantId:'+tenantId);
	        	
	        	var form = changeTenantStatus_win.getComponent('item_changeTenantStatus').getForm();	
	        	var value = form.getValues();
	        	console.log('value:'+JSON.stringify(value));
	        	
	        	var params = {};
	        	params.status = value.tenantStatus;
	        	params = JSON.stringify(params);
	        	console.log('params:'+params);
	        	
	        	if (form.isValid()) {
	        		Ext.Ajax.request({
	    				url:'http://'+host+'/api/operation/operation/tenants/'+tenantId,
	                    method:'PUT',
	                    params:params,
	                    defaultPostHeader:'application/json;charset=UTF-8',
	                    success:function(){
	                    	Ext.Msg.alert('恭喜你，更改租户状态成功！');
	                    	Ext.getCmp('panel_tenants').getStore().load();
	                    	changeTenantStatus_win.close();
	                    },
	                    failure:function(response,opts){
	                    	Ext.Msg.alert('更新失败，请重试！');
	                    }
	    			});
	    		}
			}

        }
    },
    cancel:function() {
    	changeTenantStatus_win.close();
    }
});