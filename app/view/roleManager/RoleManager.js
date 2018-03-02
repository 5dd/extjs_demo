Ext.define('testMVVM.view.roleManager.RoleManager', {
    extend: 'Ext.panel.Panel',
    xtype: 'rolesManager',
    
    id:'panel_roleManager',
       
    layout: {  
        type: 'hbox'
    }, 
    
    height:document.documentElement.clientHeight-20,
    
    items: [
        {
        	title: '角色列表', 
        	xtype: 'roleslist',
        	flex:3
        },
        
        {  
        	title: '权限列表',
        	xtype: 'permissionslist',
        	flex:4
        }
			
    ]
});