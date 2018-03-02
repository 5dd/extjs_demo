Ext.define('testMVVM.view.serviceNo.ServiceNoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.serviceNo',
    
    linkClick:function(thisTab, td, cellIndex,record,tr,rowIndex,event,eventObj) {
    	
    	if (cellIndex == 6) {
    		Ext.Msg.alert('66666');
		} 
		
    }
});