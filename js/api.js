var BaseUrl = 'https://www.sidama.work/'

api = {
    // 获取商品列表
    shopList: BaseUrl + 'goods/list',
    shopDetails: BaseUrl + 'goods/',
    sendMsg: BaseUrl + 'user/sendMs',
    regeister: BaseUrl + 'user/register',
    addGoodsCart: BaseUrl + 'cart/save',
    goodsCartList: BaseUrl + 'cart/page',
    goodsCartDel: BaseUrl + 'cart/delete',
    team: BaseUrl + 'userManager/team',
    userInfo: BaseUrl + 'userManager/userInfo',
    addressList: BaseUrl + 'address/getMyAddress',
    addAddress: BaseUrl + 'address/saveMyAddress',
    updateAddress: BaseUrl + 'address/updateMyAddress',
    addressDelete: BaseUrl + 'address/delete',
    bankInfo: BaseUrl + 'userManager/getSelfAccount',
    saveBankInfo: BaseUrl + 'userManager/updateSelfAccount',
    personalInfo: BaseUrl + 'userManager/getIdentity',
    savePersonalInfo: BaseUrl + 'userManager/updateIdentity',
    defaultAddress: BaseUrl + 'address/getDefaultAddress',
    addOrder: BaseUrl + 'order/add',
    orderList: BaseUrl + 'order/list',
    delOrder: BaseUrl + 'order/delete',
    updateOrder: BaseUrl + 'order/edit',
    orderNonceStr: BaseUrl + 'order/unfiedOrder',//下单生成随机字符串
    getBalance: BaseUrl + 'wallet/get',
    rawalApply: BaseUrl + 'wallet/withdrawalApply',
    rechargeRecord: BaseUrl + 'wallet/rechargeRecord',
    accountDetail: BaseUrl + 'wallet/accountDetail',
    grantRecord: BaseUrl + 'wallet/grantRecord',
    withdrawalRecord: BaseUrl + 'wallet/withdrawalRecord',
    unfiedRecharge: BaseUrl + 'wallet/unfiedRecharge',
    recharge: BaseUrl + 'wallet/recharge',
}
