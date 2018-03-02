Ext.define('testMVVM.view.tenantAddRole.TenantAddRoleController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tenantAddRole',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	var form = tenantAddRole_panel.getComponent('item_tenantAddRole').getForm();
        	var params = form.getValues();
        	if(form.isValid()) {
        		Ext.Ajax.request({
    			   url: 'http://'+ host +'/api/operation/operation/tenants/' + params.domain,
                    method:'GET',
                    success:function(result){
                    	var tenant = JSON.parse(result.responseText);
                    	var tenantId = tenant.id;
                    	var data = {};
                    	data.tenantId = tenantId;
                    	data.roleName = params.roleName;
                    	data.roleDesc = params.roleDesc;
                    	params = JSON.stringify(data);
                    	Ext.Ajax.request({
            				url:'http://'+ host +'/api/security/security/roles',
                            method:'POST',
                            headers: {'sessionid':sessionId},
                            defaultPostHeader:'application/json;charset=UTF-8',
                            params:params,
                            waitTitle : "提示",
                            waitMsg: '正在提交数据...',    
                            success:function(){
                            	Ext.Msg.alert('新增租户角色成功');
                            	Ext.getCmp('panel_role').getStore().load();
                            	tenantAddRole_panel.close(); 	
                            },
                            failure:function(response,opts){
                            	Ext.Msg.alert('租户角色添加失败，请重试');
                         }
            			});   
                    },
                    failure:function(response,opts){
                    	Ext.MessageBox.alert("新增租户角色失败" ,"检查输入的域名！");
                    }
    			});	
        	}	
        }
    },
    cancel:function() {
    	addRole_panel.close();
    }
});