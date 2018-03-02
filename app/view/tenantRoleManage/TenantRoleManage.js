Ext.define('testMVVM.view.tenantRoleManage.TenantRoleManage',{
	extend:'Ext.window.Window',
	title : '租户角色管理',
	controller : 'tenantRoleManage',
	requires: [
       'testMVVM.view.tenantRoleManage.TenantRoleManageController'
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
			columnWidth: 1, 
			labelWidth: 55,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_tenantRoleManage',
		items:[
		       {
		    	   xtype:'textfield',
		    	   allowBlank:false,
		    	   labelWidth: 100,
		    	   name:'domain',
		    	   blankText:'请输入要设置的域名！',
		    	   fieldLabel:'输入需要设置的租户域名:'
		       }
        ],
		buttons: [
	                {
	                    text: "确定", 
	                    listeners: {
	                        click: 'query'
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