Ext.define('testMVVM.store.RolePermission', {
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.RolePermissionModel',
	
	alias: 'store.rolePermission',
	
	proxy:{
		type:'ajax',
//		headers:{'sessionid':sessionId},
//		url:'http://localhost:58084/api/security/roles/ROLE_TAdmin',
//		url:'http://'+host+'/api/security/security/roles/ROLE_TAdmin',
		api:'read',
		noCache:false,
		reader:{
			rootProperty:'permissions'
		}
	},
	
	sorters: [{
        property: 'permission',
        direction: 'ASC'
    }],
    
	autoLoad:false

});
	


   