Ext.define('testMVVM.store.Role', {
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.RoleModel',
	
	alias: 'store.role',
	filterOnLoad:true,	
	proxy:{
		type:'ajax',
//		url:'http://localhost:58084/api/security/roles',
//		url: 'http://'+host+'/api/security/security/roles',	
		noCache:false,
		api:'read'
	},
	
	sorters: [{
        property: 'roleName',
        direction: 'ASC'
    }],
	
	filters: [
        {
            property: 'tenantId',
            value : null
        }
	],

	autoLoad:false
	
});
	


   