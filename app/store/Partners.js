Ext.define('testMVVM.store.Partners', {
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.PartnersModel',
	
	alias: 'store.partners',
	
	pageSize:15,
	
	proxy:{
		type:'ajax',
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
	


   