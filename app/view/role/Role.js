Ext.define('testMVVM.view.role.Role', {
	extend : 'Ext.grid.Panel',
	
	xtype : 'roleslist',
	
	requires : [ 
	    'testMVVM.store.Role', 
	    'testMVVM.view.role.RoleController'
	],

	title : '角色权限',

	id : 'panel_role',

	controller : 'role',
	
	margin : '10 5 15 20',
	
	store : {
		type : 'role'
	},
	
	height:'100%',
	
	scrollable:true,
	
	buttons: [
      {
          text: "系统角色新增", 
          listeners: {
              click: 'addRole'
          }
      },
      {
    	  text: "租户角色新增",
    	  listeners: {
    		  click: 'tenantAddRole'
    	  }  
      },
      {
          text: "更新", 
          listeners: {
              click: 'updateRole'
          }
      },
      {
    	  text: "删除",
    	  listeners: {
    		  click: 'deleteRole'
    	  } 
      },
      {
    	  text: "系统",
    	  listeners: {
    		  click: 'systemRoleManage'
    	  }
      },
      {
    	  text: "租户",
    	  listeners: {
    		  click: 'tenantRoleManage'
    	  }
      }
	],
	columns : [
		/*
		 {
		 text: 'ID',
		 dataIndex: 'id',
		 align:"center",
		 flex:1
		 },
		 */
		{
			text : '角色名称',
			dataIndex : 'roleName',
			align : "center",
			flex : 1
		},
		{
			text : '角色描述',
			dataIndex : 'roleDesc',
			align :"center",
			flex : 1
	    }

	],
	
	listeners : {
		cellclick : 'linkClick'
	}
});
