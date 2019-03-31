# React Manager

#### 项目介绍

学习react 项目实践 react 的后台搭建 
React全家桶 + AntD共享单车 后台管理系统开发

运用了Redux+React Router+Node.js全栈开发知识，

一些基本版本支持情况：

"antd-mobile": "^2.2.2"<br />
"react": "^16.4.1",<br />
"react-dom": "^16.4.1",<br />
"react-redux": "^5.0.7",<br />
"react-router-dom": "^4.3.1",<br />
"webpack": "3.8.1"<br />

<!-- #### 效果展示 -->


<!-- ######  <div align="center"> ======注册功能 分为两种身份======</div> -->



<!-- <div align="center"><img width="375" height="667" src="https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/register.gif"/></div> -->
<!-- ![image](https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/register.gif) -->



<!-- ######   <div align="center">====== ======</div> -->


<!-- ![image](https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/login.gif) -->


<!-- <div align="center"><img width="375" height="667" src="https://github.com/well-monkey/LearnReact-Redux-Route-node/raw/master/example/static/login.gif"/></div> -->






#### 教程说明

 这里面是一个文件夹  

<!-- 1. 一个是example是react的一些简单的小例子，可以根据官网和本文件进行演练熟悉 react的一些基本的知识 -->
<!-- 2. 另外一个是一个整体的项目 引入antUI组件 做的一个招聘求职的app 下面是APP文件的使用方式 -->

#### 使用说明

<!-- 1. cd imooc             //进入整体项目目录 -->
<!-- 2. npm install          //安装依赖
3. npm run server       //启动后台服务 端口9093
4. npm run start        //启动项目查看 端口3000 -->

#### 学习说明

 ======整理不易，star支持一下吧:smile:======   

```
第1章 导学
    面对产品需求的的问题：

        技术选型
        项目架构
        项目规范
        封装项目公共机制
        提高开发效率

    课程描述

        React基础知识、生命周期
        Router4.0语法讲解
        Redux集成开发

    React全家桶 AntD UI组件 

        最实用的基础组件
        AntD栅格系统
        ETable组件封装
        BaseForm组件封装
        表格内嵌单选、复选封装

    公共机制封装

        Axios请求插件封装
        API封装
        错误拦截
        权限、菜单封装
        日期、金额、手机号封装
        Loading、分页、Mock

    项目特色

        前沿的技术栈
        健全的架构
        丰富的UI组件
        共享单车项目

    项目整体架构
        
        Mock-server

        React 16 Router4.0 Redux
        Axios Map Echarts AntD 
        菜单 权限 Header Footer……
    
    课程安排

        第一章主要介绍React基础知识
        第二章讲解主页面的架构设计
        第三章讲解Router4.0路由实战演练
        第四-六章讲解常用UI
        第七八章讲解单车业务基本功能开发
        第九章到十三章讲解单车业务核心莫苦熬
        第十四章讲解Redux集成
    
    前置知识
        H5/C3/JS React ES6

    课程收货

        掌握React全家桶技能
        掌握地图的React集成技能
        掌握前端图表开发技巧
        掌握基于React的UI框架
        前端后台架构设置及、公共机制的封装、后台管理开发经验
    
```




```
第二章 React基础知识

    React介绍

        第一节：React基本介绍
        第二节：React脚手架、Yarn介绍
        第三节：React生命周期的介绍

    2-1 基本介绍

        Facebook开源的JavaScript库
        React结合生态构成一个MV*框架
        React特点
            Declarative(声明式编码)
            Component-Based(组件式编码)
            高效-高效的DOM Diff算法，最小化页面重绘
            单项数据流 => a-b-c  没有关系的组件数据通信 使用Redux

        MV*框架的代表-只关注视图view层+数据层Model
        生态介绍

            Vue生态: Vue + Vue-Router+ Vuex + Axios + Babel + Webpack
            React生态: React + React-Router + Redux + Axios + Babel + Webpack

        编程式实现

            需要以具体代表表达在哪里(where) 做什么(what) 如何实现(how)
        
        声明式实现

            只需要生命在哪里(where) 做什么(what) 无需关心如何实现(how)
    
    2-2 React脚手架、Yarn介绍

        结构：

            如何安装React脚手架
            如何使用脚手架初始化项目
            什么是Yarn，为什么要使用Yarn
            如何使用Yarn

        如何安装React脚手架

            npm install -g create-react-app
            create-react-app my-app
            cd my-app
            npm start

        什么是Yarn 

            Yarn是新一代包管理工具 (facebook联合巨头一起开发的，认为npm不能满足)
        
        为什么使用Yarn   

            速度快       
            安装版本统一、更安全    (lock文件 锁定=>统一)
            更简洁的输出        
            更好的语义化          （错误提示，语义化提示）

        如何使用Yarn 

            yarn init 
            yarn add                添加
            yarn remove             删除
            yarn /yarn install 
            
        
        npm install create-react-app -g
        npm install yarn -g
        create-react-app imoocmanager 
        cd  imoocmanager 
        yarn add react-router

        脚手架把webpack隐藏起来了 
        yarn run eject 可以把react的webpack暴露出来
    
    2-3 React生命周期的介绍

        getDefaultProps  组件传递
        getInitialState  
        componentWillMount
        render              初始化后 
        componentDidMount 
        componentWillReceiveProps
        shouldComponentUpdate 组件更新
        componentWillUpdate
        componentDidUpdate
        componentWillUnmount 组件销毁   

        src/pages/demo/Life.js
        
```


```
第三章 主页面架构设计

    课程目标介绍
        第一节:基础插件安装，less文件加载配置
        第二节:项目主页结构开发
        第三节:菜单组件开发
        第四节:头部组建开发
        第五节:底部组件开发

    3-1 3-2 基础插件安装

        安装React-Router、axios
        安装AntD
        暴露webpack配置文件
        安装less-loader
        修改less-loader

        yarn add react-router-dom   官方从3.0 => 4.0 路由混合使用
        yarn add axios less-loader

        AntD 基于less开发的 所以需要暴露webpack装置
        yarn eject

        webpack.config.js 里面增加less配置 安装less less-loader

        yarn add antd 安装支付宝组件

        按照官网提示 引入ant和css

        实现按需加载 babel-plugin-import 

            删掉引入的css
            yarn add babel-plugin-import --dev
            文件暴露修改方式
            options:{
                plugins:[
                    ['import',[{
                        libraryName:'antd',
                        style:true
                    }]]
                ]
            }
            yarn add less@2.7.3 版本有问题 具体google
    
    3.3 项目主页结构开发

        主页结构定义

            页面结构定义
            目录结构定义
            栅格系统使用
            calc计算方法的使用

        admin.js
            component 
                Header
                Footer
                NavLeft

                用栅格系统搭建页面

    3.4 calc计算方法的使用

        calc 四则运算 动态计算长度值
        任何长度值都可以使用calc  
        calc 函数支持 + - * /

        100vh 屏幕等分  100vh 类似于100%
        height:calc(100vh)

    3.5 3.6 菜单样式 递归函数

        菜单使用递归函数实现菜单的渲染
```