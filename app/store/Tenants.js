Ext.define('testMVVM.store.Tenants', {
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.TenantsModel',
	
	alias: 'store.tenants',
	
	pageSize:15,
	
	proxy:{
		type:'ajax',
//		url:'http://'+host+'/api/operation/operation/tenants',
		api:'read',
		noCache:false,
		
		reader:{
			rootProperty:'root',
			type:'json',
			totalProperty:'total'
		}
	},
	
	sorters: [{
        property: 'createTime',
        direction: 'DESC'
    }],
	
	autoLoad:false
});
	


   