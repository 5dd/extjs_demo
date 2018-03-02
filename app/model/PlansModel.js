Ext.define('testMVVM.model.PlansModel',{
	extend:'Ext.data.Model',
	fields:[
	    {name:'planName',type:'string'},
	    {name:'description',type:'string'},
	    {name:'billingPeriod',type:'string'}
	]
});