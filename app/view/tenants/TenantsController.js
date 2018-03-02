var panel;
var addTenant_panel;
var changeAgentWorkMode_panel;
var changeTenantStatus_win;;
var changeMaxAgentCount_panel;
var ccc_win;
var tenantId;
var plans_tagfield;
var combobox_accessNum;
var sub_panel;
var updateSub_panel;
Ext.define('testMVVM.view.tenants.TenantsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.tenants',
    
    linkClick:function(thisTab, td, cellIndex,record,tr,rowIndex,event,eventObj) {
    	
    	if (cellIndex == 7) {
    		tenantId = record.id;
    		Ext.Ajax.request({
    			url: 'http://'+host+'/api/operation/operation/tenants/'+tenantId,
    			method: 'GET',
    			success: function(result){ 
    				console.log(result.responseText);
    				var tenant = JSON.parse(result.responseText);
    				var contactCenter = tenant.contactCenter;
    				if(contactCenter instanceof Object){
    					contactCenter = JSON.stringify(contactCenter);
    					tenant = JSON.parse((result.responseText+contactCenter).replace("}{",","));        				
    				}
    				console.log(tenant);
    	    		var arr = [];
    	    		arr[0] = tenant;
    	    		console.log(arr);
    	    		panel = new testMVVM.view.tenant.Tenant();
    	    		panel.getComponent('item_tenant').getStore().loadData(arr);
    	    		panel.show();
    			}
    			
    		});
    		
		} else if (cellIndex == 8) {
			tenantId = record.id				
			
			ccc_win = new testMVVM.view.createContactCenter.CreateContactCenter();
			
			combobox_accessNum = Ext.getCmp('combobox_accessNum');
			var accessNum_store = combobox_accessNum.getStore();
			var accessNumProxy = accessNum_store.getProxy();
			accessNumProxy.url = 'http://'+host+'/api/operation/operation/tenants/resources/serviceNo';
			accessNum_store.load();	
			
			plans_tagfield = Ext.getCmp('plans_tagfield');
			var plans_store = plans_tagfield.getStore();
			var plansProxy = plans_store.getProxy();
			plansProxy.url = 'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/account/price';
			plans_store.load();
			
			
			ccc_win.show();
		}
		
    },
    addTenants:function(){
    	addTenant_panel = new testMVVM.view.addTenant.AddTenant();
    	addTenant_panel.show();
    },
    deleteTenant:function(){
    	var tenant = Ext.getCmp('panel_tenants').getSelectionModel().getSelected().items[0];
    	if (tenant==null) {
    		Ext.Msg.alert('请选择租户！');
		} else {
			Ext.MessageBox.buttonText.yes = '是';
	    	Ext.MessageBox.buttonText.no = '否';
	    	Ext.Msg.confirm('提示', '您确定吗？', 'confirmDeleteTenant', this);
		}
    },
    confirmDeleteTenant:function(choice){
    	if (choice === 'yes') {
    		var tenantId = Ext.getCmp('panel_tenants').getSelectionModel().getSelected().items[0].id;
    		Ext.Ajax.request({
    			url: 'http://'+host+'/api/operation/operation/tenants/'+tenantId,
    			method: 'DELETE',
    			success: function(){ 
    				Ext.Msg.alert('删除成功！');
    				Ext.getCmp('panel_tenants').getStore().load();
    			},
    			failure:function(){
                	Ext.Msg.alert('删除失败，请重试！');
                }
    		});
    	}
    },
    createTariff:function(){
    	createTariff_panel = new testMVVM.view.createTariff.CreateTariff();
    	createTariff_panel.show();
    },
    changeAgentWorkMode:function(){
    	changeAgentWorkMode_panel = new testMVVM.view.changeAgentWorkMode.ChangeAgentWorkMode();
    	changeAgentWorkMode_panel.show();

    },
    changeTenantStatus:function(){
    	changeTenantStatus_win = new testMVVM.view.changeTenantStatus.ChangeTenantStatus();
    	changeTenantStatus_win.show();
    	

    },
    changeMaxAgentCount:function(){
    	changeMaxAgentCount_panel = new testMVVM.view.changeMaxAgentCount.ChangeMaxAgentCount();
    	changeMaxAgentCount_panel.show();

    },
    updateTariff:function(record){
    	var tenantPanel = Ext.getCmp('panel_tenants');
    	var tenantPanelSelectModel = tenantPanel.getSelectionModel();
    	if(tenantPanelSelectModel.hasSelection()) {
    		var recordSelected = tenantPanelSelectModel.getSelected();
    		var tenantId = recordSelected.items[0].id;
    		console.log(recordSelected);
    		console.log(tenantId);
    		Ext.Ajax.request({
    			url: 'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/account/subscriptions',			
    			method: 'GET',
    			success: function(result){ 
    				  				
    				var subscriptions = [];
    				var k = 0;
//    				console.log(result.responseText);
    				var sub1 = JSON.parse(result.responseText);
    				for (var i = 0; i < sub1.length; i++) {
						var sub2 = sub1[i].subscriptions;
//						console.log(sub2);
						for (var j = 0; j < sub2.length; j++) {
							var sub3 = sub2[j];
							console.log(sub3);
							
							var subscription = {};
							subscription.id = sub3.id;
							subscription.planName = sub3.plan.planName;
							subscription.state = sub3.state;
							subscription.billingPeriod = sub3.billingPeriod;
							subscription.description = sub3.plan.description;
							if (sub3.plan.blocks.length>0) {
								subscription.usagePrice = sub3.plan.blocks[0].usagePrice;
							}
							subscriptions[k++] = subscription;							
						}
					}
    				
    				console.log('--------------');
    				console.log(subscriptions);
    				
    				sub_panel = new testMVVM.view.subscription.Subscription();
    				sub_panel.getComponent('item_subscription').getStore().loadData(subscriptions);
    				sub_panel.show();
    			}
    			
    		});

        	updateSub_panel = new testMVVM.view.updateSubscription.UpdateSubscription();
    		var updateSub_grid = updateSub_panel.getComponent('item_updateSubscription');
			var plans_store = updateSub_grid.getStore();
			var plansProxy = plans_store.getProxy();
			plansProxy.url = 'http://'+host+'/api/operation/operation/tenants/'+tenantId+'/account/price';
			plans_store.load();	
			
    	} else {
    		Ext.MessageBox.alert("提示" ,"请选择租户！"); 
    	}	
    },
    findTenant:function(field,e){
    	if (e.getKey()==Ext.EventObject.ENTER){    
            console.log(field.value);
            Ext.Ajax.request({
    			url: 'http://'+host+'/api/operation/operation/tenants'+'?query=companyName<like>%25'+field.value+'%25',
    			method: 'GET',
    			success: function(result){ 
    				console.log(result.responseText);
    				var tenant = JSON.parse(result.responseText);
//    				console.log(tenant);
//    	    		var arr = [];
//    	    		arr[0] = tenant;
//    	    		console.log(arr);
    	    		Ext.getCmp('panel_tenants').getStore().loadData(tenant.root);
    			},
    			failure:function(response,opts){
                	Ext.Msg.alert('请输入正确的公司名！');
                }
            	
    		});
	
    	}
    },
    findPartnerTenants:function(field,e){
    	if (e.getKey()==Ext.EventObject.ENTER){
    		console.log(field.value);
    		var url = 'http://'+host+'/api/operation/operation/tenants/';
    		if (field.value!='') {
    			url += '?query=partnerCompanyName<like>%25'+field.value+'%25';
			}
    		Ext.Ajax.request({
    			url: url,
    			method: 'GET',
    			success: function(result){ 
    				var partner = JSON.parse(result.responseText);
    	    		Ext.getCmp('panel_tenants').getStore().loadData(partner.root);
    			},
    			failure:function(response,opts){
                	Ext.Msg.alert('请输入正确的公司名！');
                }
            	
    		});
    	}
    }
});