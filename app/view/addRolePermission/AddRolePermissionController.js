Ext.define('testMVVM.view.addRolePermission.AddRolePermissionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.addRolePermission',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = addRolePer_win.getComponent('item_addRolePermission').getForm();
        	if (form.isValid()) {
    			form.submit({
    				url:'http://localhost:58080/api/security/permission_extjs/'+roleId,
                    method:'POST',
                    waitTitle : "提示",
                    waitMsg: '正在提交数据...',    
                    success:function(){
                    	Ext.Msg.alert('恭喜你，增加权限成功！');
                    	addRolePer_win.close();
                    	win_rolePer.close();
                    },
                    failure:function(response,opts){
                    	Ext.Msg.alert('添加失败，请重试！');
                    }
    			});	
    		}
        	
        }
    	
    },
    cancel:function() {
    	addRolePer_win.close();
    }
});