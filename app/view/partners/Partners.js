Ext.define('testMVVM.view.partners.Partners', {
    extend: 'Ext.grid.Panel',
    xtype: 'partnerslist',
    requires: [
        'testMVVM.store.Partners',
        'testMVVM.view.partners.PartnersController'  
    ],

    title: '合作伙伴列表',

    id:'panel_partners',
    
    controller: 'partners',
    
    height:document.documentElement.clientHeight-20,
	
	scrollable:true,
    
    store: {
        type: 'partners'
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
					 text:'新建合作伙伴',
					 height:35,
					 width:100,
					 flex:1,
					 handler:'createPartner'
				},{
					 xtype:'button',
					 margin:10,
					 text:'编辑合作伙伴',
					 height:35,
					 width:100,
					 flex:1,
					 handler:'updatePartner'
				},{
					 xtype:'button',
					 margin:10,
					 text:'删除合作伙伴',
					 height:35,
					 width:100,
					 flex:1,
					 handler:'deletePartner'
				},{
					 xtype:'button',
					 margin:10,
					 text:'重置密码',
					 height:35,
					 width:100,
					 flex:1,
					 handler:'resetPassword'
				},{
		    	    xtype:'textfield',
		    	    name:'conpanyName',
		    	    margin:10,
		    	    fieldLabel:'查找合作伙伴',
		    	    labelWidth: 100,
		    	    listeners: {  
	                    specialkey:'getPartner'
	                }
		        }
					
	         ]
			 
		 }
    ],
    
    columns: [
              
        { 
        	text: '公司名称',
        	dataIndex: 'companyName',
        	align:"center",
        	flex: 1 
        },
        { 
        	text: '邮箱', 
        	xtype:'templatecolumn',
        	tpl:'{creator.email}', 
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '企业类型',
        	dataIndex: 'companyType',
        	align:"center",
        	flex: 1 
        },
        { 
        	text: '地区',
        	dataIndex: 'area',
        	align:"center",
        	flex: 1 
        },
        { 
        	text: '联系人',
        	xtype:'templatecolumn',
        	tpl:'{creator.userName}', 
        	align:"center",
        	flex: 1 
        },
        { 
        	text: '电话',
        	xtype:'templatecolumn',
        	tpl:'{creator.phone}', 
        	align:"center",
        	flex: 1 
        },
        { 
        	text: '创建时间', 
        	dataIndex: 'createTime', 
        	align: "center", 
        	flex: 1 
        }
    ]
});
