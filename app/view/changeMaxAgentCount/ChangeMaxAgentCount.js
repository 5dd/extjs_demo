Ext.define('testMVVM.view.changeMaxAgentCount.ChangeMaxAgentCount',{
	extend:'Ext.window.Window',
	title : '修改座席最大并发数',
	controller:'changeMaxAgentCount',
	
	requires: [
       'testMVVM.view.changeMaxAgentCount.ChangeMaxAgentCountController'
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
			columnWidth: 0.95, 
			labelWidth: 50,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_changeMaxAgentCount',
		items:[
		       {
		    	   xtype:'numberfield',
		    	   name:'agentCount',
		    	   allowBlank:false,
		    	   blankText:'请输入座席最大并发数！',
		    	   fieldLabel:'并发数'
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