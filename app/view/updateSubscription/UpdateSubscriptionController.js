Ext.define('testMVVM.view.updateSubscription.UpdateSubscriptionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.updateSubscription',
   
    confirm:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    
    onConfirm:function(){
    	
    	var tenantPanel = Ext.getCmp('panel_tenants');
    	var tenantPanelSelectModel = tenantPanel.getSelectionModel();
		var recordSelected = tenantPanelSelectModel.getSelected();
		var tenantId = recordSelected.items[0].id;
		console.log('tenantId---------'+tenantId);
		
		var subWin = sub_panel.getComponent('item_subscription');
    	var subWinSelectModel = subWin.getSelectionModel();
		var recordSelected = subWinSelectModel.getSelected();
		var subId = recordSelected.items[0].id;
		console.log('subId--------------'+subId);
		
		var updateSubWin = updateSub_panel.getComponent('item_updateSubscription');
		var recordSelected = updateSubWin.getSelectionModel().getSelected();
		var planName = recordSelected.items[0].data.planName;
		console.log('planName--------'+planName);
		
		Ext.Ajax.request({
			 url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/account/subscription?subscriptionId='+subId+'&planName='+planName,
             method:'PUT',
             success:function(){
             	Ext.Msg.alert('更新订购成功');
             	updateSub_panel.close();
             	sub_panel.close();
             },
             failure:function(response,opts){
             	Ext.Msg.alert('更新订购失败，请重试');
             }
			});	  	
    }
}); 