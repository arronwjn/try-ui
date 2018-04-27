
export const menuList = [
  {
    id: 1,
    href: "/sdas",
    name: "系统功能设置",
    icon: "fa fa-id-badge",
    code:'',
    children: [
      {
        id: 2,
        parentId: 1,
        href: "/companyinfo",
        name: "公司信息",
        icon: "fa fa-info-circle",
        code:'System@companyInfo',
        children:[]
      },
      {
        id: 3,
        parentId: 1,
        href: "/authority",
        name: "权限管理",
        icon: "fa fa-certificate",
        code:'System@systemAuthList',
        children:[]
      },
      // {
      //   id: 4,
      //   parentId: 1,
      //   href: "/menu",
      //   name: "菜单管理",
      //   icon: "fa fa-certificate"
      // },
      {
        id: 5,
        parentId: 1,
        href: "/permission",
        name: "角色权限",
        icon: "fa fa-address-book",
        code:'System@adminRole',
        children:[]
      },
      {
        id: 6,
        parentId: 1,
        href: "/service",
        name: "服务管理",
        icon: "fa fa-server",
        code:'Goods@getCategory',
        children:[]
      },
      {
        id: 7,
        parentId: 1,
        href: "/carousel",
        name: "轮播广告",
        icon: "fa fa-file-image-o",
        code:'System@adList',
        children:[]
      },
      {
        id: 8,
        parentId: 1,
        href: "/city",
        name: "城市区域",
        icon: "fa fa-cc",
        code:'System@cityList',
        children:[]
      },
    ]
  },
  {
    id: 9,
    name: '管理员管理',
    href: "/asd",
    icon: "fa fa-user-circle",
    code:'',
    children: [
      {
        id: 10,
        parentId: 9,
        href: "/regional",
        name: "大区经理",
        icon: "fa fa-address-card",
        code:'Admin@branchManagerList',
        children:[]
      },
      {
        id: 11,
        parentId: 9,
        href: "/customer",
        name: "客服",
        icon: "fa fa-users",
        code:'Admin@customerServiceList',
        children:[]
      },
    ]
  },
  {
    id: 12,
    name: '用户管理',
    href: "/fdgfdg",
    icon: "fa fa-user-o",
    code:'',
    children: [
      {
        id: 13,
        parentId: 12,
        href: "/area",
        name: "区域经理",
        icon: "fa fa-id-card-o",
        code:'Staff@areaManagerList',
        children:[]
      },
      {
        id: 14,
        parentId: 12,
        href: "/home",
        name: "员工",
        icon: "fa fa-user-plus",
        code:'Staff@employeeList',
        children:[]
      },
      {
        id: 15,
        parentId: 12,
        href: "/user",
        name: "用户",
        icon: "fa fa-user",
        code:'User@userSearch',
        children:[]
      },
    ]
  },
  {
    id: 16,
    href: "/order",
    name: "订单管理",
    icon: "fa fa-first-order",
    code:'Order@getOrderList',
    children:[]
  },
  {
    id: 17,
    href: "/comment",
    name: "评价管理",
    icon: "fa fa-comment",
    code:'Comments@commentList',
    children:[]
  },
  {
    id: 18,
    href: "/log",
    name: "日志管理",
    icon: "fa fa-newspaper-o",
    code:'System@logsList',
    children:[]
  },
  {
    id: 19,
    href: "/answer",
    name: "客服问答",
    icon: "fa fa-commenting",
    code:'System@feedbackList',
    children:[]
  },
]
