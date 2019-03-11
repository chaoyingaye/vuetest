import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from 'pages/Home/Home';
import Categray from 'pages/Categray/Categray';
import Shopcar from 'pages/Shopcar/Shopcar';
import My from 'pages/My/My';
import Login from 'pages/My/Login';
import Reg from 'pages/My/Reg';
import Info from 'pages/My/Info';
import Theme from 'pages/Theme/Theme';
import Err from 'common/Err';
import Goodsdetail from 'pages/Goodsdetail/Goodsdetail';
let router=new VueRouter({
	routes:[
	//vue中页面的切换是监听hash值的变化
			{path:'/',redirect:'/home'},
			{path:'/home',component:Home},
			{path:'/categray',component:Categray},
			{path:'/shopcar',component:Shopcar},
			{path:'/theme/:themeId/:title',component:Theme},
			{path:'/my',
			component:My,
			children:[
					  {path:'login',component:Login},
					  {path:'reg',component:Reg},
					  {path:'info',component:Info},
					  {path:'',component:Login}  //默认界面
					  ]
			},
			{path:'/goodsdetail',component:Goodsdetail},
			{path:'/nofind',component:Err},
			{path:'**',redirect:'/nofind'}
			]
})
export default router
/*router的配置项*/