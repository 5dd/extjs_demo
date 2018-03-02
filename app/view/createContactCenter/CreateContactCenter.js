Ext.define('testMVVM.view.createContactCenter.CreateContactCenter',{
	extend:'Ext.window.Window',
	title : '开通联络中心',
	controller:'createContactCenter',
	
	requires: [
	   'testMVVM.store.Plans',
	   'testMVVM.store.ServiceNo',
       'testMVVM.view.createContactCenter.CreateContactCenterController'
	],
	width : 400,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "destroy",
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
		itemId:'item_createContactCenter',
		items:[
		       {
		    	   xtype:'textfield',
		    	   name:'domain',
		    	   allowBlank:false,
		    	   blankText:'请输入域名！',
		    	   regex:/\w+([-.]\w+)*\.\w+([-.]\w+)*/,
		    	   regexText:'请输入正确的域名！',
		    	   fieldLabel:'域名'
		       },{
		    	   xtype:'combobox',
		    	   name:'accessNum',
		    	   id:'combobox_accessNum',
		    	   editable:false,
		    	   displayField:'code',
		    	   valueField:'code',
		    	   emptyText:'--请选择--',
		    	   allowBlank:false,
		    	   blankText:'请选择接入号！',
		    	   forceSelection:true,
		    	   queryMode:'local',
		    	   store:{
		    		 type:'serviceNo'
		    	   },
		    	   
		    	   fieldLabel:'接入号'
		       },{
		    	   xtype:'numberfield',
		    	   name:'agentCount',
		    	   allowBlank:false,
		    	   value:2,
		    	   minValue:2,
		    	   minText:'最少2个座席！',
		    	   blankText:'请输入座席数量！',
		    	   fieldLabel:'座席数量'
		       },{
		    	   xtype:'numberfield',
		    	   name:'extCount',
		    	   allowBlank:false,
		    	   value:2,
		    	   minValue:2,
		    	   minText:'最少2个分机！',
		    	   blankText:'请输入分机数量！',
		    	   fieldLabel:'分机数量'
		       },{
		    	   xtype:'tagfield',
		    	   name:'plans',
		    	   id:'plans_tagfield',
		    	   editable:false,
		    	   selectOnFocus:false,
		    	   displayField:'description',
		    	   valueField:'planName',
		    	   emptyText:'--请选择--',
		    	   allowBlank:false,
		    	   blankText:'请选择套餐！',
		    	   queryMode:'local',	    	  
		    	   store:{
		    		   type:'plans'
		    	   },
		    	   fieldLabel:'套餐'
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