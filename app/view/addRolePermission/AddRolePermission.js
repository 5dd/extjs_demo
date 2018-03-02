Ext.define('testMVVM.view.addRolePermission.AddRolePermission',{
	extend:'Ext.window.Window',
	title : '增加权限',
	controller:'addRolePermission',
	
	requires: [
       'testMVVM.view.addRolePermission.AddRolePermissionController'
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
			columnWidth: 0.9, 
			labelWidth: 55,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_addRolePermission',
		items:[
		       {
		    	   xtype:'textfield',
		    	   name:'permission',
		    	   allowBlank:false,
		    	   blankText:'请输入要添加的权限！',
		    	   fieldLabel:'权限'
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