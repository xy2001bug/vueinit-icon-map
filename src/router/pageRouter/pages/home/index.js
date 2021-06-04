export default [
    {
        path: '/',
        name: 'home',
        component (resolve) {
            require(['@/views/pages/home/index'], resolve)
        },
        mete: {
            title: '首页'
        }
    }
]
