Ext.define('testMVVM.view.tenants.Tenants', {
    extend: 'Ext.grid.Panel',
    xtype: 'tenantslist',
    requires: [
        'testMVVM.store.Tenants',
        'testMVVM.view.tenants.TenantsController'
    ],

    title: '租户列表',

    id:'panel_tenants',
    
    controller: 'tenants',
    
    height:document.documentElement.clientHeight-20,
	
	scrollable:true,
    
    store: {
        type: 'tenants'
    },
    
    
    dockedItems:[
	    {
	    	xtype:"pagingtoolbar",
	    	dock:'bottom',
	    	displayInfo:true
	    },{
			 xtype:'panel',
			 items:[
				{
					 xtype:'button',
					 margin:10,
					 text:'新建租户',
					 height:35,
					 width:75,
					 flex:1,
					 handler:'addTenants'
				},{
					 xtype:'button',
					 margin:10,
					 text:'编辑租户',
					 height:35,
					 width:75,
					 flex:1,
					 handler:'addTenants'
				},{
					 xtype:'button',
					 margin:10,
					 text:'删除租户',
					 height:35,
					 width:75,
					 flex:1,
					 handler:'deleteTenant'
				},{
					 xtype:'button',
					 margin:10,
					 text:'创建套餐',
					 height:35,
					 width:75,
					 flex:1,
					 handler:'createTariff'
				},{
					 xtype:'button',
					 margin:10,
					 text:'查看套餐',
					 height:35,
					 width:75,
					 flex:1,
					 handler:'updateTariff'
				},{
					 xtype:'button',
					 margin:10,

					 text:'座席模式',

					 height:35,
					 width:75,
					 flex:1,
					 handler:'changeAgentWorkMode'

				},{
					 xtype:'button',
					 margin:10,
					 text:'租户状态',
					 height:35,
					 width:75,
					 flex:1,
					 handler:'changeTenantStatus'
				},{
					 xtype:'button',
					 margin:10,
					 text:'座席并发数',
					 height:35,
					 width:86,
					 flex:1,
					 handler:'changeMaxAgentCount'

				},{
					 xtype:'panel',
					 layout:'column',
					 items:[
						{
						    xtype:'textfield',
						    name:'domain',
						    margin:10,
						    fieldLabel:'查找租户',
						    labelWidth: 60,
						    listeners: {  
						        specialkey:'findTenant'
						    }
						},{
						    xtype:'textfield',
						    name:'companyName',
						    margin:10,
						    fieldLabel:'合作伙伴租户',
						    labelWidth: 100,
						    listeners: {  
						        specialkey:'findPartnerTenants'
						    }
						}
					 ]
				}
					
	         ]
			 
		 }
    ],
    
    columns: [
              
        { 
        	text: '公司名称',
        	dataIndex: 'companyName',
        	align:"center"
        },
        { 
        	text: '管理员姓名', 
        	xtype:'templatecolumn',
        	tpl:'{creator.userName}',
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '租户状态', 
        	dataIndex: 'status', 
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '是否已开通联络中心', 
        	dataIndex: 'contactCenter', 
        	renderer:function(value){
        		if (value instanceof Object) {
        			return "是";
				} else {
					return "否";
				}
        	},
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '域名', 
        	xtype:'templatecolumn',
        	tpl:'{contactCenter.domain}',
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '合作伙伴', 
        	xtype:'templatecolumn',
        	tpl:'{partner.companyName}',
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '创建时间', 
        	dataIndex: 'createTime', 
        	align: "center", 
        	flex: 1 
        },
        { 
        	text: '详情链接', 
        	align:"center", 
        	renderer:function(){
        		var returnStr = "<INPUT type='button' value='详情' style='width:60px;height:25px;border:1px solid #46A3FF;color:white;background:#66B3FF'>";
        		return returnStr;
	        } 
        },
        { 
        	text: '开通联络中心', 
        	align:"center", 
        	renderer:function(){
//        		var returnStr = "<INPUT type='button' value='开通'>";
        		var returnStr = "<INPUT type='button' value='开通' style='width:60px;height:25px;border:1px solid #46A3FF;color:white;background:#66B3FF'>";
        		return returnStr;
	        } 
        }
    ],
    
    listeners: {
        cellclick: 'linkClick'
    }
});
