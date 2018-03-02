Ext.define('testMVVM.store.CompanyType',{
	extend: 'Ext.data.Store',
	
	model:'testMVVM.model.CompanyTypeModel',
	
	data:[
      {Type:'国有企业',Value:'国有企业'},
      {Type:'集体企业',Value:'集体企业'},
      {Type:'联营企业',Value:'联营企业'},
      {Type:'股份合作制企业',Value:'股份合作制企业'},
      {Type:'私营企业',Value:'私营企业'},
      {Type:'合伙企业',Value:'合伙企业'},
      {Type:'有限责任公司',Value:'有限责任公司'},
      {Type:'股份有限公司',Value:'股份有限公司'},
      {Type:'个体户',Value:'个体户'},
      {Type:'港、澳、合资经营企业',Value:'港、澳、合资经营企业'},
      {Type:'合作经营企业',Value:'合作经营企业'},
      {Type:'港、澳、台商独资经营企业',Value:'港、澳、台商独资经营企业'},
      {Type:'港、澳、台商投资股份有限公司',Value:'港、澳、台商投资股份有限公司'},
      {Type:'中外合资经营企业',Value:'中外合资经营企业'},
      {Type:'中外合作经营企业',Value:'中外合作经营企业'},
      {Type:'外商投资股份有限公司',Value:'外商投资股份有限公司'},
      {Type:'外资企业',Value:'外资企业'},
      {Type:'其他企业',Value:'其他企业'}
	],
	
	alias: 'store.companyType'

});