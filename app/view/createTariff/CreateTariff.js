Ext.define('testMVVM.view.createTariff.CreateTariff',{
	extend:'Ext.window.Window',
	title : '资费配置',
	controller:'createTariff',
	
	requires: [
       'testMVVM.view.createTariff.CreateTariffController'
	],
	
	width : 500,
	layout : "fit",
	plain : true,
	modal : true,
	closeAction : "hide",
	items : [{
		xtype:'form',
		layout:'column',
		defaults:{
			anchor: '100%',
			columnWidth: 0.49, 
			labelWidth: 70,
			labelAlign: 'right',
			margin: '0 0 10 0',
			allowBlank: false
		},
		padding: 10,
		itemId:'item_createTariff',
		items:[
		       {
		    	   xtype:'numberfield',
		    	   name:'agentUsagePrice',
		    	   allowBlank:false,
		    	   minValue:0,
		    	   minText:'请确认！',
		    	   blankText:'请输入坐席价格！',
		    	   fieldLabel:'坐席价格'
		       }, {
		    	   xtype:'radiogroup',
		    	   items:[
//		    	          {
//		    	        	  name:'agentBillingPeriod',
//		    	        	  inputValue:'ANNUAL',
//		    	        	  boxLabel:'元/年'
//		    	          },
		    	          {
		    	        	  name:'agentBillingPeriod',
		    	        	  inputValue:'MONTHLY',
		    	        	  boxLabel:'元/月'
		    	          }
		    	   ]
		       }, {
		    	   xtype:'numberfield',
		    	   name:'extensionUsagePrice',
		    	   allowBlank:false,
		    	   minValue:0,
		    	   minText:'请确认！',
		    	   blankText:'请输入分机价格！',
		    	   fieldLabel:'分机价格'
		       }, {
		    	   xtype:'radiogroup',
		    	   items:[
//		    	          {
//		    	        	  name:'extensionBillingPeriod',
//		    	        	  inputValue:'ANNUAL',
//		    	        	  boxLabel:'元/年'
//		    	          },
		    	          {
		    	        	  name:'extensionBillingPeriod',
		    	        	  inputValue:'MONTHLY',
		    	        	  boxLabel:'元/月'
		    	          }
		    	   ]
		       }, {
		    	   xtype:'numberfield',
		    	   name:'callOutUsagePrice',
		    	   decimalPrecision:5,
		    	   allowBlank:false,
		    	   minValue:0,
		    	   minText:'请确认！',
		    	   blankText:'请输入呼出话费价格！',
		    	   fieldLabel:'呼出话费'
		       }, {
		    	   xtype:'radiogroup',
		    	   items:[
		    	          {
		    	        	  name:'callOutUnitName',
		    	        	  inputValue:'CallLengthInMin',
		    	        	  boxLabel:'元/分钟'
		    	          }
//		    	          ,{
//		    	        	  name:'callOutUnitName',
//		    	        	  inputValue:'CallLengthInSecond',
//		    	        	  boxLabel:'元/6秒'
//		    	          }
		    	   ]
		       },{
		    	   xtype:'numberfield',
		    	   name:'trialMax',
		    	   allowBlank:true,
		    	   minValue:0,
		    	   minText:'请确认！',
		    	   blankText:'请输入赠送话费时长！',
		    	   fieldLabel:'赠送话费'
		       }, {
		    	   xtype:'radiogroup',
		    	   items:[
		    	          {
		    	        	  name:'trialUnitName',
		    	        	  inputValue:'CallLengthInMin',
		    	        	  boxLabel:'分钟/月',
		    	        	  checked: true
		    	          }
		    	   ]
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