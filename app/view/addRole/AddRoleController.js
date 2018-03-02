Ext.define('testMVVM.view.addRole.AddRoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.addRole',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = addRole_panel.getComponent('item_addRole').getForm();
        	var params = form.getValues();
        	console.log("roleName:" + params.roleName + "****roleDesc:" + params.roleDesc);
        	var data = {};
        	data.id = params.roleName;
        	data.roleName = params.roleName;
        	data.roleDesc = params.roleDesc;
        	params = JSON.stringify(data);
        	if (form.isValid()) {
    		Ext.Ajax.request({
//				url:'http://'+security_host+'/api/security/roles',
				url:'http://'+ host +'/api/security/security/roles',
                method:'POST',
                headers: {'sessionid':sessionId},
                defaultPostHeader:'application/json;charset=UTF-8',
                params:params,
                waitTitle : "提示",
                waitMsg: '正在提交数据...',    
                success:function(){
                	Ext.Msg.alert('新增角色成功');
                	Ext.getCmp('panel_role').getStore().load();
                	addRole_panel.close(); 	
                },
                failure:function(response,opts){
                	Ext.Msg.alert('添加失败，请重试');
             }
			});	
		}    	
        }
    	
    },
    cancel:function() {
    	addRole_panel.close();
    }
});