Ext.define('testMVVM.view.serviceNo.ServiceNo', {
    extend: 'Ext.grid.Panel',
    xtype: 'serviceNolist',
    requires: [
        'testMVVM.store.ServiceNo',
        'testMVVM.view.serviceNo.ServiceNoController'
    ],

    title: '号码池列表',
    
    height:document.documentElement.clientHeight-20,
    
    id:'panel_serviceNo',
    
    controller:'serviceNo',
    
    store: {
        type: 'serviceNo'
    },
    
    columns: [
              
        { 
        	text: 'ID',
        	dataIndex: 'id',
        	align:"center",
        	flex:1
        },
        { 
        	text: '号码', 
        	dataIndex: 'code', 
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '状态', 
        	dataIndex: 'state', 
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
        	text: '运营商', 
        	dataIndex: 'operator', 
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '是否使用', 
        	dataIndex: 'namespace', 
        	renderer:function(value){
        		if (value.length>0) {
        			return "是";
        		} else {
        			return "否";
        		}
        	},
        	align:"center", 
        	flex: 1 
        },
        { 
        	text: '租户详情', 
        	align:"center", 
        	renderer:function(){
        		var returnStr = "<INPUT type='button' value='租户' style='width:60px;height:25px;border:1px solid #46A3FF;color:white;background:#66B3FF'>";
        		return returnStr;
	        } 
        }
        
    ],
    
    listeners: {
        cellclick: 'linkClick'
    }
});
