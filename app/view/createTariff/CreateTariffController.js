Ext.define('testMVVM.view.createTariff.CreateTariffController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.createTariff',
    
    save:function() {
    	Ext.MessageBox.buttonText.yes = '是';
    	Ext.MessageBox.buttonText.no = '否';
    	Ext.Msg.confirm('提示', '您确定吗？', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
        	
        	var tenant = Ext.getCmp('panel_tenants').getSelectionModel().getSelected().items[0];
        	if (tenant==null) {
        		Ext.Msg.alert('请选择租户！');
        		createTariff_panel.close();
			} else {
				var tenantId = tenant.id;
	        	var companyName = tenant.data.companyName;
	        	
	        	var form = createTariff_panel.getComponent('item_createTariff').getForm();	
	        	var value = form.getValues();
	        	console.log('value:'+value);
	        	
	        	var block1 = {};
	        	block1.unitName = 'AgentCount';
	        	block1.max = '99999999999999';
	        	block1.size = '1';
	        	block1.usagePrice = value.agentUsagePrice;
	        	
	        	var blocks1 = [];
	        	blocks1[0] = block1;
	        	
	        	var plan1 = {};
	        	plan1.planName = 'Agent-'+tenantId;
	        	plan1.billingType = 'AgentCount';
	        	plan1.amount = 0;
	        	plan1.billingPeriod = value.agentBillingPeriod;
	        	plan1.description = '坐席使用费';
	        	plan1.product = 'ContactCenter';
	        	plan1.productCategary = 'BASE';
	        	plan1.priceList = 'DEFAULT';
	        	plan1.trialLength = 0;
	        	plan1.trialTimeUnit = 'DAYS';
	        	plan1.durationUnit = 'UNLIMITED';
	        	plan1.usageName = 'Agent-Usage-'+tenantId;
	        	plan1.billingMode = 'IN_ARREAR';
	        	plan1.usageType = 'CONSUMABLE';
	        	plan1.blocks = blocks1;
	        	
	        	var block2 = {};
	        	block2.unitName = 'ExtensionCount';
	        	block2.max = '99999999999999';
	        	block2.size = '1';
	        	block2.usagePrice = value.extensionUsagePrice;
	        	
	        	var blocks2 = [];
	        	blocks2[0] = block2;
	        	
	        	var plan2 = {};
	        	plan2.planName = 'Extension-'+tenantId;
	        	plan2.billingType = 'ExtensionCount';
	        	plan2.amount = 0;
	        	plan2.billingPeriod = value.extensionBillingPeriod;
	        	plan2.description = '分机使用费';
	        	plan2.product = 'ContactCenter';
	        	plan2.productCategary = 'BASE';
	        	plan2.priceList = 'DEFAULT';
	        	plan2.trialLength = 0;
	        	plan2.trialTimeUnit = 'DAYS';
	        	plan2.durationUnit = 'UNLIMITED';
	        	plan2.usageName = 'Extension-Usage-'+tenantId;
	        	plan2.billingMode = 'IN_ARREAR';
	        	plan2.usageType = 'CONSUMABLE';
	        	plan2.blocks = blocks2;
	        	
	        	var block3 = {};
	        	block3.unitName = value.callOutUnitName;
	        	block3.max = '99999999999999';
	        	block3.size = '1';
	        	block3.usagePrice = value.callOutUsagePrice;
	        	
	        	var block4 = {};
	        	block4.unitName = value.trialUnitName;
	        	block4.max = value.trialMax;
	        	block4.size = '1';
	        	block4.usagePrice = '0';
	        	
	        	var blocks3 = [];
	        	blocks3[0] = block4;
	        	blocks3[1] = block3;
	        	
	        	var plan3 = {};
	        	plan3.planName = 'CallOut-'+tenantId;
	        	plan3.billingType = 'Call';
	        	plan3.amount = 0;
	        	plan3.billingPeriod = 'MONTHLY';
	        	plan3.description = '呼出话费';
	        	plan3.product = 'ContactCenter';
	        	plan3.productCategary = 'BASE';
	        	plan3.priceList = 'DEFAULT';
	        	plan3.trialLength = 0;
	        	plan3.trialTimeUnit = 'DAYS';
	        	plan3.durationUnit = 'UNLIMITED';
	        	plan3.usageName = 'CallOut-Usage-'+tenantId;
	        	plan3.billingMode = 'IN_ARREAR';
	        	plan3.usageType = 'CONSUMABLE';
	        	plan3.blocks = blocks3;
	        	
	        	var plan = [];
	        	plan[0] = plan1;
	        	plan[1] = plan2;
	        	plan[2] = plan3;
	        	var params = {};
	        	params.priceName = companyName;
	        	params.plans = plan;
	        	params = JSON.stringify(params);
	        	console.log('params:'+params);
	        	
	        	if (form.isValid()) {
	        		Ext.Ajax.request({
	    				url:'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/account/price',
	                    method:'POST',
	                    params:params,
	                    defaultPostHeader:'application/json;charset=UTF-8',  
	                    success:function(){
	                    	Ext.Msg.alert('恭喜你，创建套餐成功！');
	                    	createTariff_panel.close();
	                    },
	                    failure:function(response,opts){
	                    	Ext.Msg.alert('创建失败，请重试！');
	                    }
	    			});
	    		}
			}
        	
        	
        }
    },
    cancel:function() {
    	createTariff_panel.close();
    }
});