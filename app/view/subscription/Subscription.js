Ext.define('testMVVM.view.subscription.Subscription',{
	extend:'Ext.window.Window',
	title : '已订购套餐',
	controller:'subscription',
	
	requires: [
       'testMVVM.store.Subscription',
       'testMVVM.view.subscription.SubscriptionController'
	],
	width : 500,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "hide",
	items : [{
		xtype:'grid',
		itemId:'item_subscription',
		store: {
	        type: 'subscription'
	    },
		columns: [
		          { 
		          	text: '名称',
		          	dataIndex: 'description',
		          	align:"center",
		          	flex:1
		          },{ 
		          	text: '价格',
		          	dataIndex: 'usagePrice',
		          	align:"center",
		          	flex:1
		          },{ 
		          	text: '计费周期',
		          	dataIndex: 'billingPeriod',
		          	renderer:function(value){
		        		if (value=='MONTHLY') {
		        			return "月";
						} else {
							return value;
						}			
		        	},
		          	align:"center",
		          	flex:1
		          },{ 
		          	text: '状态',
		          	dataIndex: 'state',
		          	renderer:function(value){
		        		if (value=='ACTIVE') {
		        			return "正在使用";
						} else {
							return value;
						}			
		        	},
		          	align:"center",
		          	flex:1
		          }
		          
		      ],
		buttons: [
	                {
	                    text: "删除", 
	                    disabled:true,
	                    listeners: {
	                        click: 'remove'
	                    }
	                },{
	                    text: "更改", 
	                    disabled:true,
	                    listeners: {
	                        click: 'update'
	                    }
	                }
	            ]
	}]
});