Ext.define('testMVVM.model.TenantsModel',{
	extend:'Ext.data.Model',
	fields:[
	    {name:'companyName',type:'string'},
	    {name:'applicant',type:'string'},
	    {name:'status',type:'string'},
	    {name:'contactCenter',type:'auto'},
	    {name:'createTime',type:'auto'},
	    {name:'partner',type:'auto'}
	]
});