Ext.define('testMVVM.view.updateSubscription.UpdateSubscription',{
	extend:'Ext.window.Window',
	title : '已创建套餐',
	controller:'updateSubscription',
	
	requires: [
       'testMVVM.store.Plans',
       'testMVVM.view.updateSubscription.UpdateSubscriptionController'
	],
	width : 500,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "hide",
	items : [{
		xtype:'grid',
		itemId:'item_updateSubscription',
		store: {
	        type: 'plans'
	    },
		columns: [
		          { 
		          	text: '名称',
		          	dataIndex: 'description',
		          	align:"center",
		          	flex:1
		          },{ 
		          	text: '计费周期',
		          	dataIndex: 'billingPeriod',
		          	renderer:function(value){
		        		if (value=='MONTHLY') {
		        			return "月";
						}					
		        	},
		          	align:"center",
		          	flex:1
		          }
		          
		      ],
		buttons: [
	                {
	                    text: "确定", 
	                    listeners: {
	                        click: 'confirm'
	                    }
	                }
	            ]
	}]
});