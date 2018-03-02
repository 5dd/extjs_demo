var createPartner_win;
var updatePartner_win;
Ext.define('testMVVM.view.partners.PartnersController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.partners',
    
    createPartner:function(){
    	createPartner_win = new testMVVM.view.createPartner.CreatePartner();
    	createPartner_win.show();
    },
    deletePartner:function(){
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'confirmDelete', this);
    },
    confirmDelete: function (choice) {
    	if (choice === 'yes') {
    		var partner = Ext.getCmp('panel_partners').getSelectionModel().getSelected().items[0];
        	if (partner==null) {
        		Ext.Msg.alert('请选择partner！');
    		} else {
    			var id = partner.id;
    			Ext.Ajax.request({
        			url: 'http://'+host+'/api/operation/operation/partner/'+id,
        			method: 'DELETE',
        			success: function(result){ 
        				Ext.Msg.alert('删除成功！');
        				Ext.getCmp('panel_partners').getStore().load();
        			},
        			failure:function(response,opts){
                    	Ext.Msg.alert('删除失败，请重试！');
                    }
        		});
    		}
    	}
    },
    updatePartner:function(){
    	var partner = Ext.getCmp('panel_partners').getSelectionModel().getSelected().items[0];
    	if (partner==null) {
    		Ext.Msg.alert('请选择partner！');
		} else {
			console.log(partner);
			updatePartner_win = new testMVVM.view.updatePartner.UpdatePartner();
	    	updatePartner_win.show();
    		var updatePartnerForm = updatePartner_win.getComponent('item_updatePartner').getForm();
    		var partnerValues = {
    			companyName: partner.data.companyName,
    			email: partner.data.creator.email,
    			companyType: partner.data.companyType,
    			area: partner.data.area,
    			userName: partner.data.creator.userName,
    			phone: partner.data.creator.phone
    		};
    		updatePartnerForm.setValues(partnerValues);
		} 	
    },
    getPartner:function(field,e){
    	if (e.getKey()==Ext.EventObject.ENTER){    
            console.log(field.value);
            Ext.Ajax.request({
    			url: 'http://'+host+'/api/operation/operation/partners'+'?query=companyName<like>%25'+field.value+'%25',
    			method: 'GET',
    			success: function(result){ 
    				console.log(result.responseText);
    				var partner = JSON.parse(result.responseText);
    				console.log(partner.root);
    	    		Ext.getCmp('panel_partners').getStore().loadData(partner.root);
    			},
    			failure:function(response,opts){
                	Ext.Msg.alert('请输入正确的公司名称！');
                }
    		});
    	}
    },
    resetPassword:function(){
    	var partner = Ext.getCmp('panel_partners').getSelectionModel().getSelected().items[0];
    	if (partner==null) {
    		Ext.Msg.alert('请选择partner！');
		} else {
			var id = partner.id;
			Ext.Ajax.request({
    			url: 'http://'+host+'/api/operation/operation/partner/'+id+'/resetPassword',
    			method: 'POST',
    			success: function(result){ 
    				Ext.Msg.alert('已重置为Aa123456！');
    			},
    			failure:function(response,opts){
                	Ext.Msg.alert('重置失败！');
                }
    		});
		} 	
    }
});