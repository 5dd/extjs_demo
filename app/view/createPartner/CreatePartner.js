Ext.define('testMVVM.view.createPartner.CreatePartner',{
	extend:'Ext.window.Window',
	title : '新建合作伙伴',
	controller:'createPartner',
	
	requires: [
	    'testMVVM.view.createPartner.CreatePartnerController'
	],
	width : 400,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "hide",
	items : [{
		xtype:'form',
		layout:'column',
		defaults:{
			anchor: '100%',
			columnWidth: 0.9, 
			labelWidth: 80,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_createPartner',
		items:[
		       {
		    	   xtype:'textfield',
		    	   name:'companyName',
		    	   allowBlank:false,
		    	   blankText:'请输入企业名称！',
		    	   fieldLabel:'公司名称'
		       },{
		    	   xtype:'textfield',
		    	   name:'email',
		    	   allowBlank:false,
		    	   blankText:'请输入邮箱信息！',
		    	   regex:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
		    	   regexText:'请输入正确的邮箱！',
		    	   fieldLabel:'企业邮箱'
		       },{
		    	   xtype:'combobox',
		    	   name:'companyType',
		    	   editable:false,
		    	   displayField:'Type',
		    	   valueField:'Value',
		    	   emptyText:'--请选择--',
		    	   allowBlank:false,
		    	   blankText:'请选择企业类型！',
		    	   forceSelection:true,
		    	   queryMode:'local',
		    	   store:{
		    		 type:'companyType'  
		    	   },
		    	   border:10,
		    	   fieldLabel:'企业类型'
		       },{
		    	   xtype:'combobox',
		    	   name:'area',
		    	   editable:false,
		    	   displayField:'Area',
		    	   valueField:'Value',
		    	   emptyText:'--请选择--',
		    	   allowBlank:false,
		    	   blankText:'请选择地区！',
		    	   forceSelection:true,
		    	   queryMode:'local',
		    	   store:{
		    		 type:'area'  
		    	   },
		    	   fieldLabel:'地区'
		       },{
		    	   xtype:'textfield',
		    	   name:'userName',
		    	   allowBlank:false,
		    	   blankText:'请输入您的姓名！',
		    	   fieldLabel:'姓名'
		       },{
		    	   xtype:'textfield',
		    	   name:'phone',
		    	   allowBlank:false,
		    	   blankText:'请输入手机号码！',
		    	   regex:/^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/,
		    	   regexText:'请输入正确的手机号码！',
		    	   fieldLabel:'手机号'
		       },{
		    	   xtype:'textfield',
		    	   name:'password',
		    	   maxLength:16,
		    	   maxLengthText:'密码至多16位！',
		    	   minLength:8,
		    	   minLengthText:'密码至少8位！',
		    	   allowBlank:false,
		    	   emptyText:'请输入8-16位的密码',
		    	   blankText:'请输入登录密码！',
		    	   fieldLabel:'登录密码'
		       }
        ],
		buttons: [
	                {
	                    text: "保存", 
	                    listeners: {
	                        click: 'save'
	                    }
	                },
	                {
	                    text: "取消", 
	                    listeners: {
	                        click: 'cancel'
	                    }
	                }
	            ]
	}]
});