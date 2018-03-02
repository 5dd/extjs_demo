Ext.define('testMVVM.view.tenantAddRole.TenantAddRole',{
	extend:'Ext.window.Window',
	title : '新增租户角色',
	controller:'tenantAddRole',
	requires: [
       'testMVVM.view.tenantAddRole.TenantAddRoleController'
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
		itemId:'item_tenantAddRole',
		items:[
		       {
		    	   xtype:'textfield',
		    	   allowBlank:false,
		    	   name:'domain',
		    	   blankText:'请输入需要添加角色租户的域名！',
		    	   fieldLabel:'域名'  
		       },
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