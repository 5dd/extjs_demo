var addRole_panel;
var roleId;
var rolePermissonPanel;
var win_updateRole;
var tenantRoleManage_panel;
var tenantAddRole_panel;
Ext.define('testMVVM.view.role.RoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.role',
    
    tenantRoleManage: function() {
    	tenantRoleManage_panel = new testMVVM.view.tenantRoleManage.TenantRoleManage();
    	tenantRoleManage_panel.show();
    },
    systemRoleManage: function() {
    	var role_store = Ext.getCmp("panel_role").getStore();
    	role_store.filter('tenantId', null);
    	role_store.load();
    },
    
    addRole: function() {
    	addRole_panel = new testMVVM.view.addRole.AddRole();
    	addRole_panel.show();
    },
    
    tenantAddRole: function() {
    	tenantAddRole_panel = new testMVVM.view.tenantAddRole.TenantAddRole();
    	tenantAddRole_panel.show();
    },
    
    updateRole: function() {
    	var rolePanel = Ext.getCmp('panel_role');
    	var rolePanelSelectModel = rolePanel.getSelectionModel();
    	if(rolePanelSelectModel.hasSelection()) {
    		var recordSelected = rolePanelSelectModel.getSelected();
    		win_updateRole = new testMVVM.view.updateRole.UpdateRole();
    		win_updateRole.show();
    		var updateRoleForm = win_updateRole.getComponent('item_updateRole').getForm();
    		var roleValues = {
				roleDesc: recordSelected.items[0].data.roleDesc,
				roleName: recordSelected.items[0].data.roleName
    		};
    		updateRoleForm.setValues(roleValues);
    	} else {
    		Ext.MessageBox.alert("提示" ,"请选择要更新的角色！"); 
    	}	
    },
    
    deleteRole: function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定要删除吗？', 'onDeleteConfirm', this);
    	
    },
    onDeleteConfirm: function (choice) {
        if (choice === 'yes') {
        	var rolePanel = Ext.getCmp('panel_role');
        	var rolePanelSelectModel = rolePanel.getSelectionModel();
        	if(rolePanelSelectModel.hasSelection()) {
        		var recordSelected = rolePanelSelectModel.getSelected();
        		var roleIdSelected = recordSelected.items[0].id;
        		
        		Ext.Ajax.request({
//        			url: 'http://'+security_host+'/api/security/roles/'+roleIdSelected,
        			url: 'http://'+host+'/api/security/security/roles/'+roleIdSelected,
        			method: 'DELETE',
        			headers: {'sessionid':sessionId},
        			success: function(result){ 
        				Ext.Msg.alert('删除角色成功');
        				Ext.getCmp('panel_role').getStore().load();	    	
        			}	
        		});
        	} else {
        		Ext.MessageBox.alert("提示" ,"请选择要删除的角色！"); 
        	}	
      }
   },
    

    linkClick:function(thisTab, td, cellIndex, record, tr, rowIndex, event, eventObj) {  
    	// 取得角色所具有的权限
    	roleId = record.data.id;
    	Ext.Ajax.request({
//			url: 'http://'+security_host+'/api/security/roles/'+roleId,
    		url: 'http://'+host+'/api/security/security/roles/'+roleId,
			method: 'GET',
			headers: {'sessionid':sessionId},
			success: function(result){ 
				
				var rolePermission = JSON.parse(result.responseText).permissions;		
				rolePermissonPanel = Ext.getCmp('panel_rolepermission');
				rolePermissonPanel.getSelectionModel().deselectAll();

				var total = rolePermissonPanel.getStore().getCount();
				for (var i = 0; i < total; i++) {	
					var permission = rolePermissonPanel.getStore().getAt(i).data.permission;
					for (var j = 0; j < rolePermission.length; j++) {
						if(rolePermission[j].permission == permission) {
							rolePermissonPanel.getSelectionModel().selectRange(i,i,true);
						}
					}
				}	    	
			}	
		});
   } 
});