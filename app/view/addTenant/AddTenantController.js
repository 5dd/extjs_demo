Ext.define('testMVVM.view.addTenant.AddTenantController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.addTenant',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = addTenant_panel.getComponent('item_addTenant').getForm();
        	var params = form.getValues();
        	params.creator = {'email':params.email,'userName':params.userName,'phone':params.phone,'password':params.password};
        	params = JSON.stringify(params);
        	console.log(params);
        	if (form.isValid()) {
//    			form.submit({
//    				url:'http://'+host+'/api/operation/extjs/tenant/apply',
//                    method:'POST',
//                    waitTitle : "提示",
//                    waitMsg: '正在提交数据...',    
//                    success:function(){
//                    	Ext.Msg.alert('恭喜你，新建租户成功！');
//                    	Ext.getCmp('panel_tenants').getStore().load();
//                    	addTenant_panel.close();
//                    },
//                    failure:function(response,opts){
//                    	Ext.Msg.alert('创建失败，请重试！');
//                    }
//    			});	
        		Ext.Ajax.request({
    				url:'http://'+host+'/api/operation/operation/tenants',
                    method:'POST',
                    params:params,
                    defaultPostHeader:'application/json;charset=UTF-8',
//                    waitTitle : "提示",
//                    waitMsg: '正在提交数据...',    
                    success:function(){
                    	Ext.Msg.alert('恭喜你，新建租户成功！');
                    	Ext.getCmp('panel_tenants').getStore().load();
                    	addTenant_panel.close();
                    },
                    failure:function(response,opts){
                    	Ext.Msg.alert('创建失败，请重试！');
                    }
    			});
    		}
        }
    	
    },
    cancel:function() {
    	addTenant_panel.close();
    }
});