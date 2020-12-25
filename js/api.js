var BaseUrl = 'https://www.sidama.work/'

api = {
    // 获取商品列表
    shopList: BaseUrl + 'goods/page',
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
}
