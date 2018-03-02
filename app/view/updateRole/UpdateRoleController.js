Ext.define('testMVVM.view.updateRole.UpdateRoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.updateRole',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = win_updateRole.getComponent('item_updateRole').getForm();
        	var formData = form.getValues();
        	var rolePanel = Ext.getCmp('panel_role');
        	var rolePanelSelectModel = rolePanel.getSelectionModel();
        	var recordSelected = rolePanelSelectModel.getSelected();
    		var roleId = recordSelected.items[0].id;
    		var params = {};
    		params.id = roleId;
    		params.roleName = formData.roleName;
    		params.roleDesc = formData.roleDesc;
    		params = JSON.stringify(params);
    		if(form.isValid()) {
        		Ext.Ajax.request({
//				   url:'http://'+security_host+'/api/security/roles',
				   url:'http://'+host+'/api/security/security/roles',
	                method:'PUT',
	                headers: {'sessionid':sessionId},
	                defaultPostHeader:'application/json;charset=UTF-8',
	                params:params,   
	                success:function(){
	                	Ext.Msg.alert('更新角色成功');
	                	Ext.getCmp('panel_role').getStore().load();
	                	win_updateRole.close(); 	
	                },
	                failure:function(response,opts){
	                	Ext.Msg.alert('更新角色失败，请重试');
	                }
				});	
    		}	
        }	
    },
    cancel:function() {
    	win_updateRole.close();
    }
});