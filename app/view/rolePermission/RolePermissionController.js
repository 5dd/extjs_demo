Ext.define('testMVVM.view.rolePermission.RolePermissionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rolePermission',
   
    save:function(){
    	/*
    	 * 得到所有选择项 
    	 */
    	var recordsSelected = rolePermissonPanel.getSelectionModel().getSelected();
        /*
         * 参数处理
         */
    	var data={};
    	data.id=roleId;
    	var permissions=[];
    	for (var i = 0; i < recordsSelected.length; i++) {
    		var permission={};
			 var permissiond = recordsSelected.items[i].data.permission;
			 permission.permission=permissiond;
			 permissions[i]=permission;	
		}
    	data.permissions=permissions;
    	var params = JSON.stringify(data);
    	/*
    	 * 权限处理
    	 */
		Ext.Ajax.request({
//			url:'http://'+security_host+'/api/security/roles',
			url:'http://'+ host +'/api/security/security/roles',
            method:'PUT',
            params:JSON.stringify(data),
            defaultPostHeader:'application/json;charset=UTF-8',
            headers: {'sessionid':sessionId},
            success:function(){
            	Ext.Msg.alert('保存权限成功');	
            },
            failure:function(response,opts){
            	Ext.Msg.alert('保存权限失败,请重试');
            }
		});	
    }
}); 