Ext.define('testMVVM.view.createContactCenter.CreateContactCenterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.createContactCenter',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = ccc_win.getComponent('item_createContactCenter').getForm();
        	var params = {};
        	var value = form.getValues();
//        	value = JSON.stringify(value);
        	params.domain = value.domain;
        	params.accessNum = value.accessNum;
        	params.agentCount = value.agentCount;
        	params.extCount = value.extCount;
        	params.useRecording = true;
        	params.useCrm = true;
        	var plans = value.plans;
        	var str = '';
        	for(i=0;i<plans.length;i++){		
        		if(i==plans.length-1){
        			str = str + plans[i];
        			continue;
        		}
        		str = str + plans[i] + ';';
        	}
        	params.plans = str;
        	params = JSON.stringify(params);
        	console.log("tenantId="+tenantId);
        	console.log(params);
        	if (form.isValid()) {
//    			form.submit({
//    				url:'http://localhost:58084/api/operation/extjs/contactcenter/'+tenantId,
//                    method:'POST',
//                    waitTitle : "提示",
//                    waitMsg: '正在提交数据...',    
//                    success:function(){
//                    	Ext.Msg.alert('恭喜你，创建联络中心成功！');
//                    	Ext.getCmp('panel_tenants').getStore().load();
//                    	ccc_win.close();
//                    },
//                    failure:function(response,opts){
//                    	Ext.Msg.alert('创建失败，请重试！');
//                    }
//    			});	
        		Ext.Ajax.request({
    				url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/contactcenter',
                    method:'POST',
                    params:params,
                    defaultPostHeader:'application/json;charset=UTF-8',
//                    waitTitle : "提示",
//                    waitMsg: '正在提交数据...',    
                    success:function(){
                    	Ext.Msg.alert('恭喜你，创建联络中心成功！');
                    	Ext.getCmp('panel_tenants').getStore().load();
                    	ccc_win.close();
                    },
                    failure:function(response,opts){
                    	Ext.Msg.alert('创建失败，请重试！');
                    }
    			});
    		}
        	
        }
    },
    cancel:function() {
    	plans_tagfield.destroy();
    	combobox_accessNum.destroy();
    	ccc_win.close();
    }
});