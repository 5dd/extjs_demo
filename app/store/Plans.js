Ext.define('testMVVM.store.Plans', {
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.PlansModel',
	
	alias: 'store.plans',
	
	proxy:{
		type:'ajax',
//		url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/account/price',
		api:'read',
		noCache:false,
		
		reader:{
			rootProperty:'plans',
			type:'json',
			totalProperty:'total'
		}
	},
	autoLoad:true
});
	


   