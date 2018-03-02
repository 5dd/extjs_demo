Ext.define('testMVVM.view.changeTenantStatus.ChangeTenantStatus',{
	extend:'Ext.window.Window',
	title : '租户状态',
	controller:'changeTenantStatus',
	
	requires: [
       'testMVVM.view.changeTenantStatus.ChangeTenantStatusController'
	],
	
	width : 400,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "hide",
	items : [{
		xtype:'form',
		layout:'column',
		defaults:{
			anchor: '100%',
			columnWidth: 1, 
			labelWidth: 100,
			labelAlign: 'center',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_changeTenantStatus',
		items:[
		       {
		    	   xtype:'radiogroup',
		    	   items:[
		    	          {
		    	        	  name:'tenantStatus',
		    	        	  inputValue:'NotCertified',
		    	        	  boxLabel:'NotCertified'
		    	          },{
		    	        	  name:'tenantStatus',
		    	        	  inputValue:'Certified',
		    	        	  boxLabel:'Certified'
		    	          },{
		    	        	  name:'tenantStatus',
		    	        	  inputValue:'Disable',
		    	        	  boxLabel:'Disable'
		    	          },{
		    	        	  name:'tenantStatus',
		    	        	  inputValue:'Removed',
		    	        	  boxLabel:'Removed'
		    	          }
		    	   ]
		       } 
        ],
		buttons: [
	                {
	                    text: "保存", 
	                    listeners: {
	                        click: 'save'
	                    }
	                },
	                {
	                    text: "取消", 
	                    listeners: {
	                        click: 'cancel'
	                    }
	                }
	            ]
	}]
});