Ext.define('testMVVM.model.PartnersModel',{
	extend:'Ext.data.Model',
	fields:[
	    {name:'companyName',type:'string'},
	    {name:'creator',type:'auto'},
	    {name:'companyType',type:'string'},
	    {name:'area',type:'string'},
	    {name:'createTime',type:'string'}
	]
});