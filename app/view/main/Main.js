Ext.define('testMVVM.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'testMVVM.view.main.MainController',
        'testMVVM.view.main.MainModel',
        'testMVVM.view.tenants.Tenants',
        'testMVVM.view.partners.Partners',
        'testMVVM.view.createPartner.CreatePartner',
        'testMVVM.view.updatePartner.UpdatePartner',
        'testMVVM.view.tenant.Tenant',
        'testMVVM.view.subscription.Subscription',
	    'testMVVM.view.addTenant.AddTenant',
	    'testMVVM.view.role.Role',
	    'testMVVM.view.createContactCenter.CreateContactCenter',
	    'testMVVM.view.rolePermission.RolePermission',
	    'testMVVM.view.serviceNo.ServiceNo',
	    'testMVVM.view.addRole.AddRole',
	    'testMVVM.view.updateRole.UpdateRole',
	    'testMVVM.view.roleManager.RoleManager',
	    'testMVVM.view.createTariff.CreateTariff',

	    'testMVVM.view.changeAgentWorkMode.ChangeAgentWorkMode',
	    'testMVVM.view.changeMaxAgentCount.ChangeMaxAgentCount',
	    'testMVVM.view.updateSubscription.UpdateSubscription',
	    'testMVVM.view.tenantRoleManage.TenantRoleManage',
	    'testMVVM.view.tenantAddRole.TenantAddRole',
	    'testMVVM.view.changeTenantStatus.ChangeTenantStatus'

    ],

    controller: 'main',
    viewModel: 'main',

    plugins: 'viewport',
    
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
   
    items: [{
        title: '合作伙伴管理',
        iconCls: 'fa-users',
        items: [{
            xtype: 'partnerslist'
        }]
    },{
        title: '租户管理',
        iconCls: 'fa-home',
        items: [{
            xtype: 'tenantslist'
        }]
    },
    {
        title: '角色管理',
        iconCls: 'fa-user',
        items: [{
            xtype: 'rolesManager'
        }]
    },
    {
        title: '号码池管理',
        iconCls: 'fa-slack',
        items: [{
            xtype: 'serviceNolist'
        }]
    }]
    
});
