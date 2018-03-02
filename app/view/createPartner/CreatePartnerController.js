Ext.define('testMVVM.view.createPartner.CreatePartnerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.createPartner',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = createPartner_win.getComponent('item_createPartner').getForm();
        	var params = form.getValues();
        	params.creator = {'email':params.email,'userName':params.userName,'phone':params.phone,'password':params.password};
        	params = JSON.stringify(params);
        	console.log(params);
        	if (form.isValid()) {

        		Ext.Ajax.request({
    				url:'http://'+host+'/api/operation/operation/partner',
                    method:'POST',
                    params:params,
                    defaultPostHeader:'application/json;charset=UTF-8', 
                    success:function(){
                    	Ext.Msg.alert('恭喜你，新建合作伙伴成功！');
                    	Ext.getCmp('panel_partners').getStore().load();
                    	createPartner_win.close();
                    },
                    failure:function(response,opts){
                    	Ext.Msg.alert('创建失败，请重试！');
                    }
    			});
    		}
        }
    	
    },
    cancel:function() {
    	createPartner_win.close();
    }
});