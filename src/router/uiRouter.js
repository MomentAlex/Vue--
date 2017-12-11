export const uiRouter = [
    /****** test FED UI ******/
    {
        path: '/',
        meta: {
            title: '云商-订单列表',
        },
        component: r => require.ensure([], () => r(require('../views/ys-orderlist')), 'ys-orderlist')
    },{
        path: '/ys-orderdetail',
        meta: {
            title: '云商-订单详情',
        },
        component: r => require.ensure([], () => r(require('../views/ys-orderdetail')), 'ys-orderdetail')
    }
]
