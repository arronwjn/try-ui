export const ROOT_URL = 'http://lovelaiguanjia.com';
// const ROOT_URL = 'http://cio.ueepub.cn';

export const API_URL = {
  /*
  *赵斌接口
  */
  CITYLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/system/cityList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/system/cityList',
    remark: '大区列表',
    method: 'POST',
    writer: '王健男',
  },
  CITYADD: {
    domain: ROOT_URL,
    apiUrl: '/Admin/system/cityAdd',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/system/cityAdd',
    remark: '添加大区',
    method: 'POST',
    writer: '王健男',
  },
  CITYDELETE: {
    domain: ROOT_URL,
    apiUrl: '/Admin/system/cityDelete',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/system/cityDelete',
    remark: '删除大区',
    method: 'POST',
    writer: '王健男',
  },
  CITYEIDT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/system/cityEidt',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/system/cityEidt',
    remark: '编辑大区信息展示',
    method: 'POST',
    writer: '王健男',
  },
  CITYDOEIDT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/system/cityDoEidt',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/system/cityDoEidt',
    remark: '修改大区',
    method: 'POST',
    writer: '王健男',
  },
  BRANCHMANAGER: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/branchManager',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/branchManager',
    remark: '添加大区经理',
    method: 'POST',
    writer: '王健男',
  },
  BRANCHMANAGERLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/branchManagerList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/branchManagerList',
    remark: '大区经理列表',
    method: 'POST',
    writer: '王健男',
  },
  BRANCHMANAGEREDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/branchManagerEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/branchManagerEdit',
    remark: '显示大区经理信息',
    method: 'POST',
    writer: '王健男',
  },
  BRANCHMANAGERDOEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/branchManagerDoEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/branchManagerDoEdit',
    remark: '修改大区经理信息',
    method: 'POST',
    writer: '王健男',
  },
  BRANCHMANAGERDELETE: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/branchManagerDelete',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/branchManagerDelete',
    remark: '删除大区经理',
    method: 'POST',
    writer: '王健男',
  },
  CUSTOMERSERVICELIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/customerServiceList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/customerServiceList',
    remark: '客服列表',
    method: 'POST',
    writer: '王健男',
  },
  CUSTOMERSERVICEEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/customerServiceEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/customerServiceEdit',
    remark: '显示客服信息',
    method: 'POST',
    writer: '王健男',
  },
  CUSTOMERSERVICEDOEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/customerServiceDoEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/customerServiceDoEdit',
    remark: '修改客服信息',
    method: 'POST',
    writer: '王健男',
  },
  CUSTOMERSERVICEADD: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/customerServiceAdd',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/customerServiceAdd',
    remark: '添加客服',
    method: 'POST',
    writer: '王健男',
  },
  CUSTOMERSERVICEDELETE: {
    domain: ROOT_URL,
    apiUrl: '/Admin/admin/customerServiceDelete',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/admin/customerServiceDelete',
    remark: '删除客服',
    method: 'POST',
    writer: '王健男',
  },
  AREAMANAGERLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/areaManagerList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/areaManagerList',
    remark: '区域经理列表',
    method: 'POST',
    writer: '王健男',
  },
  AREAMANAGERADD: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/areaManagerAdd',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/areaManagerAdd',
    remark: '添加区域经理',
    method: 'POST',
    writer: '王健男',
  },
  LEADERLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/leaderList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/leaderList',
    remark: '大区经理/区域经理',
    method: 'POST',
    writer: '王健男',
  },
  AREAMANAGEREDIT: {
    domain: ROOT_URL,
    apiUrl: '/admin/staff/areaManagerEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/admin/staff/areaManagerEdit',
    remark: '显示区域经理信息',
    method: 'POST',
    writer: '王健男',
  },
  AREAMANAGERDOEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/areaManagerDoEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/areaManagerDoEdit',
    remark: '修改区域经理',
    method: 'POST',
    writer: '王健男',
  },
  AREAMANAGERDELETE: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/areaManagerDelete',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/areaManagerDelete',
    remark: '删除区域经理',
    method: 'POST',
    writer: '王健男',
  },
  EMPLOYEELIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/employeeList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/employeeList',
    remark: '员工列表',
    method: 'POST',
    writer: '王健男',
  },
  EMPLOYEEEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/employeeEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/employeeEdit',
    remark: '显示员工修改信息',
    method: 'POST',
    writer: '王健男',
  },
  EMPLOYEEADDEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/employeeAddEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/employeeAddEdit',
    remark: '员工添加/修改',
    method: 'POST',
    writer: '王健男',
  },
  EMPLOYEEDELETE: {
    domain: ROOT_URL,
    apiUrl: '/Admin/staff/employeeDelete',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/staff/employeeDelete',
    remark: '删除员工',
    method: 'POST',
    writer: '王健男',
  },
  USERSEARCH: {
    domain: ROOT_URL,
    apiUrl: '/Admin/user/userSearch',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/user/userSearch',
    remark: '用户列表',
    method: 'POST',
    writer: '王健男',
  },
  USEREDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/User/userEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/User/userEdit',
    remark: '显示用户信息',
    method: 'POST',
    writer: '王健男',
  },
  USERADDEDIT: {
    domain: ROOT_URL,
    apiUrl: '/Admin/user/userAddEdit',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/user/userAddEdit',
    remark: '修改/添加用户',
    method: 'POST',
    writer: '王健男',
  },
  USERLOCK: {
    domain: ROOT_URL,
    apiUrl: '/Admin/user/userLock',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/Admin/user/userLock',
    remark: '冻结用户',
    method: 'POST',
    writer: '王健男',
  },
  COMMENTLIST: {
    domain: ROOT_URL,
    apiUrl: '/admin/comments/commentList',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/admin/comments/commentList',
    remark: '评价列表',
    method: 'POST',
    writer: '王健男',
  },
  REPLYCOMMENT: {
    domain: ROOT_URL,
    apiUrl: '/admin/comments/replyComment',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/admin/comments/replyComment',
    remark: '回复评价',
    method: 'POST',
    writer: '王健男',
  },
  DELCOMMENT: {
    domain: ROOT_URL,
    apiUrl: '/admin/comments/delComment',
    author: '赵斌',
    fetchUrl: ROOT_URL + '/admin/comments/delComment',
    remark: '删除评论',
    method: 'POST',
    writer: '王健男',
  },


  /*
  *王超接口
  */
  HANDLECONFIG: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/handleConfig',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/handleConfig',
    remark: '编辑公司信息',
    method: 'POST',
    writer: '王健男',
  },
  COMPANYINFO: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/companyInfo',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/companyInfo',
    remark: '显示公司信息',
    method: 'POST',
    writer: '王健男',
  },
  HANDLESYSTEMAUTH: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/handleSystemAuth',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/handleSystemAuth',
    remark: '编辑/添加权限',
    method: 'POST',
    writer: '王健男',
  },
  AUTHGROUP: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/authGroup',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/authGroup',
    remark: '权限所属分组',
    method: 'POST',
    writer: '王健男',
  },
  SYSTEMAUTHLIST: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/systemAuthList',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/systemAuthList',
    remark: '权限列表',
    method: 'POST',
    writer: '王健男',
  },
  HANDLESYSTEMAUTH: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/handleSystemAuth',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/handleSystemAuth',
    remark: '添加/编辑权限',
    method: 'POST',
    writer: '王健男',
  },
  AUTHINFO: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/authInfo',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/authInfo',
    remark: '显示权限信息',
    method: 'POST',
    writer: '王健男',
  },
  GETCONTROLLER: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/getController',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/getController',
    remark: '获取权限码第一级',
    method: 'POST',
    writer: '王健男',
  },
  GETACTION: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/getAction',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/getAction',
    remark: '获取权限码第一级',
    method: 'POST',
    writer: '王健男',
  },
  ADLIST: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adList',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adList',
    remark: '轮播广告列表',
    method: 'POST',
    writer: '王健男',
  },
  HANDLEAD: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/handleAd',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/handleAd',
    remark: '编辑轮播',
    method: 'FormData',
    writer: '王健男',
  },
  ADINFO: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adInfo',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adInfo',
    remark: '查看轮播广告',
    method: 'POST',
    writer: '王健男',
  },
  ADDEL: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adDel',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adDel',
    remark: '删除轮播',
    method: 'POST',
    writer: '王健男',
  },
  ADMINROLE: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adminRole',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adminRole',
    remark: '角色列表',
    method: 'POST',
    writer: '王健男',
  },
  ADMININFO: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adminInfo',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adminInfo',
    remark: '查看角色',
    method: 'POST',
    writer: '王健男',
  },
  HANDLEADMINROLE: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/handleAdminRole',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/handleAdminRole',
    remark: '编辑角色',
    method: 'POST',
    writer: '王健男',
  },
  SYSTEMAUTHARRAY: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/systemAuthArray',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/systemAuthArray',
    remark: '所有权限组合',
    method: 'POST',
    writer: '王健男',
  },
  LOGSLIST: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/logsList',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/logsList',
    remark: '日志管理',
    method: 'POST',
    writer: '王健男',
  },
  LOGSDEL: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/logsDel',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/logsDel',
    remark: '日志删除',
    method: 'POST',
    writer: '王健男',
  },
  ADMINLOGIN: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adminLogin',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adminLogin',
    remark: '登录',
    method: 'POST',
    writer: '王健男',
  },
  ADMINOUT: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/adminOut',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/adminOut',
    remark: '退出',
    method: 'POST',
    writer: '王健男',
  },
  FEEDBACKLIST: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/feedbackList',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/feedbackList',
    remark: '用户留言列表',
    method: 'POST',
    writer: '王健男',
  },
  REPLYFEEDBACK: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/replyFeedback',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/replyFeedback',
    remark: '回复用户留言',
    method: 'POST',
    writer: '王健男',
  },
  FEEDBACKCOUNT: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/feedbackCount',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/feedbackCount',
    remark: '未回复留言数量',
    method: 'POST',
    writer: '王健男',
  },
  GETAUTH: {
    domain: ROOT_URL,
    apiUrl: '/admin/system/getAuth',
    author: '王超',
    fetchUrl: ROOT_URL + '/admin/system/getAuth',
    remark: '未回复留言数量',
    method: 'POST',
    writer: '王健男',
  },


  /*
  *刘云鹏接口
  */
  GETCATEGORY: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/getCategory',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/getCategory',
    remark: '获取分类列表',
    method: 'POST',
    writer: '王健男',
  },
  ADDCATEGORY: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/addCategory',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/addCategory',
    remark: '新增分类',
    method: 'POST',
    writer: '王健男',
  },
  GETCATEGORYINFO: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/getCategoryInfo',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/getCategoryInfo',
    remark: '获取分类详情',
    method: 'POST',
    writer: '王健男',
  },
  DELCATEGORY: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/delCategory',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/delCategory',
    remark: '删除分类',
    method: 'POST',
    writer: '王健男',
  },
  ADDGOODS: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/addGoods',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/addGoods',
    remark: '添加服务',
    method: 'FormData',
    writer: '王健男',
  },
  EDITGOODS: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/editGoods',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/editGoods',
    remark: '修改服务',
    method: 'FormData',
    writer: '王健男',
  },
  UPLOAD_ICON: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/upload_icon',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/upload_icon',
    remark: '添加服务图标',
    method: 'FormData',
    writer: '王健男',
  },
  ICONLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/iconList',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/iconList',
    remark: '图标列表',
    method: 'POST',
    writer: '王健男',
  },
  DEL_ICON: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/del_icon',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/del_icon',
    remark: '删除图标',
    method: 'POST',
    writer: '王健男',
  },
  GETGOODSLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getGoodsList',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getGoodsList',
    remark: '服务列表',
    method: 'POST',
    writer: '王健男',
  },
  GETGOODSINFO: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getGoodsInfo',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getGoodsInfo',
    remark: '获取服务详情',
    method: 'POST',
    writer: '王健男',
  },
   DELGOODS: {
     domain: ROOT_URL,
     apiUrl: '/Admin/Goods/delGoods',
     author: '刘云鹏',
     fetchUrl: ROOT_URL + '/Admin/Goods/delGoods',
     remark: '删除服务',
     method: 'POST',
     writer: '王健男',
   },
  EDITGOODSSTATUS: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/editGoodsStatus',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/editGoodsStatus',
    remark: '修改服务状态',
    method: 'POST',
    writer: '王健男',
  },
  GETGOODSBYCATE: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getGoodsByCate',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getGoodsByCate',
    remark: '根据分类获取商品',
    method: 'POST',
    writer: '王健男',
  },
  GETATTRBYGOODS: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getAttrByGoods',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getAttrByGoods',
    remark: '根据商品获取商品属性 传goods_id',
    method: 'POST',
    writer: '王健男',
  },
  GETATTRBYATTR: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getAttrByAttr',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getAttrByAttr',
    remark: '根据商品获取商品属性 传sgp_id',
    method: 'POST',
    writer: '王健男',
  },

  ADDGOODSPACKAGE: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/addGoodsPackage',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/addGoodsPackage',
    remark: '添加服务套餐',
    method: 'FormData',
    writer: '王健男',
  },
  EDITGOODSPACKAGE: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/editGoodsPackage',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/editGoodsPackage',
    remark: '编辑服务套餐',
    method: 'FormData',
    writer: '王健男',
  },
  GETSERVERPACKAGEINFO: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getServerPackageInfo',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getServerPackageInfo',
    remark: '获取服务套餐详情',
    method: 'POST',
    writer: '王健男',
  },
  GETSERVERPACKAGELIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/getServerPackageList',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/getServerPackageList',
    remark: '获取服务套餐列表',
    method: 'POST',
    writer: '王健男',
  },
  DELPACKAGE: {
    domain: ROOT_URL,
    apiUrl: '/admin/Goods/delPackage',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/admin/Goods/delPackage',
    remark: '删除套餐',
    method: 'POST',
    writer: '王健男',
  },
  CHANGESALESTATUS: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Goods/changeSaleStatus',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Goods/changeSaleStatus',
    remark: '修改套餐上架状态',
    method: 'POST',
    writer: '王健男',
  },
  GETORDERLIST: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/getOrderList',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/getOrderList',
    remark: '获取订单列表',
    method: 'POST',
    writer: '王健男',
  },
  GETORDERINFO: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/getOrderInfo',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/getOrderInfo',
    remark: '获取订单信息',
    method: 'POST',
    writer: '王健男',
  },
  DISTRIBUTIONORDER: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/distributionOrderToStaff',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/distributionOrderToStaff',
    remark: '分配订单',
    method: 'POST',
    writer: '王健男',
  },
  GETSTAFFBYGOODS: {
    domain: ROOT_URL,
    apiUrl: '/Admin/order/getStaffByGoods',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/order/getStaffByGoods',
    remark: '根据商品获取对应员工',
    method: 'POST',
    writer: '王健男',
  },
  GETCITYBOSS: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/getCityBoss',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/getCityBoss',
    remark: '获取大区经理',
    method: 'POST',
    writer: '王健男',
  },
  GETAREABOSSBYCITY: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/getAreaBossByCity',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/getAreaBossByCity',
    remark: '根据大区经理获取区域经理',
    method: 'POST',
    writer: '王健男',
  },
  GETDATEADDSEVEN: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/getDateAddSeven',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/getDateAddSeven',
    remark: '获取七天日期',
    method: 'POST',
    writer: '王健男',
  },
  ADDORDER: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/addOrder',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/addOrder',
    remark: '添加订单',
    method: 'POST',
    writer: '王健男',
  },
  DELORDER: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/delOrder',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/delOrder',
    remark: '删除订单',
    method: 'POST',
    writer: '王健男',
  },
  CHANGEORDERSTATUS: {
    domain: ROOT_URL,
    apiUrl: '/Admin/Order/changeOrderStatus',
    author: '刘云鹏',
    fetchUrl: ROOT_URL + '/Admin/Order/changeOrderStatus',
    remark: '改变订单状态',
    method: 'POST',
    writer: '王健男',
  },
  WECHAT_REDIRECT: {
    domain: ROOT_URL,
    apiUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect',
    author: '刘云鹏',
    fetchUrl: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxba724c5782cf1bb8&redirect_uri=${encodeURIComponent(`http://lovelaiguanjia.com/mobile/login/wxRedirecturi`)}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`,
    remark: '微信登录',
    method: 'POST',
    writer: '王健男',
  },





}
