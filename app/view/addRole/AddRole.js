Ext.define('testMVVM.view.addRole.AddRole',{
	extend:'Ext.window.Window',
	title : '新增系统角色',
	controller:'addRole',
	requires: [
       'testMVVM.view.addRole.AddRoleController'
	],
	width : 400,
	layout : 'fit',
	plain : true,
	modal : true,
	closeAction : "hide",
	
	items : [{
		xtype:'form',
		layout:'column',
		defaults:{
			anchor: '100%',
			columnWidth: 0.9, 
			labelWidth: 55,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_addRole',
		items:[
		       {
		    	   xtype:'textfield',
		    	   allowBlank:false,
		    	   name:'roleName',
		    	   blankText:'请输入要添加的角色名！',
		    	   fieldLabel:'名称'
		       },
		       {
		    	   xtype:'textfield',
		    	   allowBlank:false,
		    	   name:'roleDesc',
		    	   blankText:'请输入要添加的角色描述！',
		    	   fieldLabel:'描述'
		    	   
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