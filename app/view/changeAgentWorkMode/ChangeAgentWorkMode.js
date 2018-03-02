Ext.define('testMVVM.view.changeAgentWorkMode.ChangeAgentWorkMode',{
	extend:'Ext.window.Window',
	title : '座席工作模式',
	controller:'changeAgentWorkMode',
	
	requires: [
       'testMVVM.view.changeAgentWorkMode.ChangeAgentWorkModeController'
	],
	
	width : 300,
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
			labelWidth: 70,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_changeAgentWorkMode',
		items:[
		       {
		    	   xtype:'radiogroup',
		    	   items:[
		    	          {
		    	        	  name:'agentWorkMode',
		    	        	  inputValue:'AutoIn',
		    	        	  boxLabel:'AutoIn'
		    	          },{
		    	        	  name:'agentWorkMode',
		    	        	  inputValue:'ManualIn',
		    	        	  boxLabel:'ManualIn'
		    	          },{
		    	        	  name:'agentWorkMode',
		    	        	  inputValue:'NotSupported',
		    	        	  boxLabel:'NotSupported'
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