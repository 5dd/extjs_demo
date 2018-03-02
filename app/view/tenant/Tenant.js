Ext.define('testMVVM.view.tenant.Tenant',{
	extend:'Ext.window.Window',
	title : '租户详情',
	controller:'tenant',
	
	requires: [
       'testMVVM.store.Tenant',
       'testMVVM.view.tenant.TenantController'
	],
	width : 1000,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "hide",
	items : [{
		xtype:'grid',
		itemId:'item_tenant',
		store: {
	        type: 'tenant'
	    },
		columns: [
		          { 
		          	text: '公司名称',
		          	dataIndex: 'companyName',
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '联系人', 
		          	dataIndex: 'applicant', 
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '手机', 
		          	dataIndex: 'creator', 
		          	renderer:function(value){
		        		return value.phone;
		        	},
		          	align:"center", 
		          	flex: 1 
		          },
		          { 
		          	text: '邮箱', 
		          	dataIndex: 'creator',
		          	renderer:function(value){
		        		return value.email;
		        	},
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '审核状态', 
		          	dataIndex: 'status', 
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '接入号',
		          	dataIndex: 'accessNum',
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '域名', 
		          	dataIndex: 'domain', 
		          	align:"center" ,
		          	flex:1
		          },
		          { 
		          	text: '坐席数量', 
		          	dataIndex: 'agentCount', 
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '分机数量', 
		          	dataIndex: 'extCount', 
		          	align:"center",
		          	flex:1
		          },
		          { 
		          	text: '座席工作模式', 
		          	dataIndex: 'defauktAgentWorkMode', 
		          	align:"center",
		          	flex:1

		          },
		          { 
		          	text: '座席最大并发数', 
		          	dataIndex: 'agentCount', 
		          	align:"center",
		          	flex:1


		          }
		          
		      ],
		buttons: [
	                {
	                    text: "审核", 
	                    listeners: {
	                        click: 'check'
	                    }
	                }
	            ]
	}]
});