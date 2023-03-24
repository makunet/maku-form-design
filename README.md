## 介绍
- MAKU 表单设计器，基于vue3、element-plus开发的表单设计器，主要用于低代码开发平台。
- 演示环境：https://demo.maku.net/maku-form-design
- 官网地址：https://maku.net

## 安装

```bash
npm install maku-form-design

# TypeScript 需要在d.ts文件里面，进行如下配置：
declare module 'maku-form-design'
```

## main.ts，如下所示：

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import MakuFormDesign from 'maku-form-design'
import 'maku-form-design/lib/style.css'

const app = createApp(App)
// 需要安装element-plus
app.use(ElementPlus)
// 使用表单设计器
app.use(MakuFormDesign)
app.mount('#app')
```


## 使用方式
```html
<template>
  <DesignForm />
</template>
```

## 微信交流群
为了更好的交流，我们新提供了微信交流群，需扫描下面的二维码，关注公众号，回复【加群】，根据提示信息，作者会拉你进群的，感谢配合！

![](https://maku.net/app/img/qrcode.jpg)


## 开源汇总
- 低代码开发平台（单体版）：https://gitee.com/makunet/maku-boot
- 低代码开发平台（微服务）：https://gitee.com/makunet/maku-cloud
- 超好用的代码生成器：https://gitee.com/makunet/maku-generator
- Vue3.x 后台管理UI：https://gitee.com/makunet/maku-admin
- Vue3.x 表单设计器：https://gitee.com/makunet/maku-form-design



## 支持
如果觉得框架还不错，或者已经在使用了，希望你可以去 [Github](https://github.com/makunet/maku-form-design) 或 [Gitee](https://gitee.com/makunet/maku-form-design) 帮作者点个 ⭐ Star，这将是对作者极大的鼓励与支持。


## 效果图
![输入图片说明](images/1.png)
![输入图片说明](images/2.png)
![输入图片说明](images/3.png)
