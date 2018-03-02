Ext.define('testMVVM.view.changeAgentWorkMode.ChangeAgentWorkModeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.changeAgentWorkMode',
    
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
        		changeAgentWorkMode_panel.close();
			} else {
				var tenantId = tenant.id;
	        	console.log('tenantId:'+tenantId);
	        	
	        	var form = changeAgentWorkMode_panel.getComponent('item_changeAgentWorkMode').getForm();	
	        	var value = form.getValues();
	        	console.log('value:'+JSON.stringify(value));
	        	
	        	var params = {};
	        	params.defauktAgentWorkMode = value.agentWorkMode;
	        	params = JSON.stringify(params);
	        	console.log('params:'+params);
	        	
	        	if (form.isValid()) {
	        		Ext.Ajax.request({
	    				url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/contactcenter',
	                    method:'PUT',
	                    params:params,
	                    defaultPostHeader:'application/json;charset=UTF-8',
	                    success:function(){
	                    	Ext.Msg.alert('恭喜你，更改座席工作模式成功！');
	                    	Ext.getCmp('panel_tenants').getStore().load();
	                    	changeAgentWorkMode_panel.close();
	                    },
	                    failure:function(response,opts){
	                    	Ext.Msg.alert('更新失败，请重试！');
	                    }
	    			});
	    		}
			}
        	

        	var tenantId = tenant.id;
        	console.log('tenantId:'+tenantId);
        	
        	var form = changeAgentWorkMode_panel.getComponent('item_changeAgentWorkMode').getForm();	
        	var value = form.getValues();
        	console.log('value:'+JSON.stringify(value));
        	
        	var params = {};
        	params.defauktAgentWorkMode = value.agentWorkMode;
        	params = JSON.stringify(params);
        	console.log('params:'+params);
        	
        	if (form.isValid()) {
        		Ext.Ajax.request({
    				url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/contactcenter',
                    method:'PUT',
                    params:params,
                    defaultPostHeader:'application/json;charset=UTF-8',
                    success:function(){
                    	Ext.Msg.alert('恭喜你，更改座席工作模式成功！');
                    	Ext.getCmp('panel_tenants').getStore().load();
                    	changeAgentWorkMode_panel.close();
                    },
                    failure:function(response,opts){
                    	Ext.Msg.alert('更新失败，请重试！');
                    }
    			});
    		}

        }
    },
    cancel:function() {
    	changeAgentWorkMode_panel.close();
    }
});