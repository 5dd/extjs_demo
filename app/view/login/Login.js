Ext.define('testMVVM.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    
    requires: [
       'testMVVM.view.main.Main',
	   'testMVVM.view.login.LoginController'
    ],
    
    controller: 'login',
    
    bodyPadding: 10,
    
    title: '运营管理',
    closable: false,
    autoShow: true,

    plain : true,  
    modal : true,  
    draggable : false,   
    resizable : false, 
  
    width : 300,
	layout : "fit",
    
    items: {
    	id: 'form_login',
        xtype: 'form',
        reference: 'form',
        defaults:{
			anchor: '100%',
			columnWidth: 0.9, 
			labelWidth: 55,
			labelAlign: 'left',
			margin: '0 0 10 0',
			allowBlank: false
		},
		items : [ {
			xtype : 'textfield',
			name : 'username',
			allowBlank : false,
			blankText : '请输入用户',
			emptyText : '请输入用户',
			fieldLabel : '用户'
		}, {
			xtype : 'textfield',
			inputType: 'password',
			name : 'password',
			maxLength : 16,
			maxLengthText : '密码至多16位！',
			allowBlank : false,
			emptyText : '请输入密码',
			blankText : '请输入登录密码！',
			fieldLabel : '密码'
		}],
        buttons: [
          {
            text: '登录',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
          },
          {
        	text: '取消',
            formBind: true,
            listeners: {
                click: 'onResetClick'
            } 
          }
        ]
    }
});