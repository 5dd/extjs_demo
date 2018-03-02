Ext.define('testMVVM.view.rolePermission.RolePermission',{
	extend: 'Ext.grid.Panel',
	
	xtype: 'permissionslist',
	
	controller:'rolePermission',
	
	requires:[
	    'testMVVM.store.RolePermission',
	    'testMVVM.view.rolePermission.RolePermissionController'
	],
	
	id:'panel_rolepermission',
	
	title: '权限列表',
	
	store: {
		type:'rolePermission'
	},
	
	margin : '10 5 15 20',
	
	height:'100%',
	
	scrollable:true,
	
	columns: [
	   {
		   text:'权限名称',
		   dataIndex:'permission',
		   align:"left",
	       flex:1 
	   }
	],
	
	selModel: {
		selType: 'checkboxmodel'
    },
    
    buttons: [
              {
            	  text: "保存", 
            	  listeners: {
            		  click: 'save'
            	  }
              }
    ]

});