Ext.define('testMVVM.store.ServiceNo', {
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.ServiceNoModel',
	
	alias: 'store.serviceNo',
	
	proxy:{
		type:'ajax',
		noCache:false,
//		url:'http://'+host+'/api/operation/operation/tenants/resources/serviceNo',
		api:'read'
	},
	autoLoad:false
});
	


   