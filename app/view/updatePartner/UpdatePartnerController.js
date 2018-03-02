Ext.define('testMVVM.view.updatePartner.UpdatePartnerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.updatePartner',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = updatePartner_win.getComponent('item_updatePartner').getForm();
        	var formData = form.getValues();
        	var partnerPanel = Ext.getCmp('panel_partners');
        	var partner = partnerPanel.getSelectionModel().getSelected().items[0];
    		var partnerId = partner.id;
    		var userId = partner.data.creator.id;
    		var params = {};
    		var creator = {};
    		params.id = partnerId;
    		params.companyName = formData.companyName;
    		params.companyType = formData.companyType;
    		params.area = formData.area;
    		creator.id = userId;
    		creator.email = formData.email;
    		creator.userName = formData.userName;
    		creator.loginName = partner.data.creator.loginName;
    		creator.phone = formData.phone;
    		params.creator = creator;
    		params = JSON.stringify(params);
    		console.log(params);
    		if(form.isValid()) {
        		Ext.Ajax.request({
				   url:'http://'+host+'/api/operation/operation/partner',
	                method:'PUT',
	                defaultPostHeader:'application/json;charset=UTF-8',
	                params:params,   
	                success:function(){
	                	Ext.Msg.alert('更新partner成功');
	                	Ext.getCmp('panel_partners').getStore().load();
	                	updatePartner_win.close(); 	
	                },
	                failure:function(response,opts){
	                	Ext.Msg.alert('更新partner失败，请重试');
	                }
				});	
    		}	
        }	
    },
    cancel:function() {
    	updatePartner_win.close();
    }
});