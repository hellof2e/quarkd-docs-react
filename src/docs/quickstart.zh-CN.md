# 快速上手

## 预览

> 扫描下方二维码体验，体验 Quark 组件库示例

<img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png">

## CDN

使用 Quarkd 最简单的方式是直接在 HTML 文件中引入 CDN 链接，之后你可以全局中任意使用。由于 quark 做到了 CSS-IN-JS，因此您只需加载下面链接即可！

> CDN 体积只有 80kb，超乎你想象！（远小于其它第三方组件库体积）

```
<script src="https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.js" />
```

## 通过 NPM 安装

在现有项目中使用 Quark Design 时，可以通过 `npm` 进行安装：

```bash
npm i @quarkd/quark-react
```

## 按需加载

借助 `babel` 插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)实现按需。

```js
import { Button } from "@quarkd/quark-react";
```

在 `.babelrc` 配置如下：

```js
module.exports = {
  plugins: [["import", { libraryName: "@quarkd/quark-react" }]],
};
```

或者您也可以采用手动按需加载的方式。

```js
import Button from "@quarkd/quark-react/lib/button";
```

## 使用示例

```jsx
import { Button } from "@quarkd/quark-react";

class Demo extends React.Component {
  render() {
    return (
      <Button type="primary" onClick="() => handleClick()">
        Button
      </Button>
    );
  }
}
```


<br />
<details>
<summary>@quarkd/quark-react 内部原理</summary>

由于 `quarkd` 提供的组件均为原生自定义元素（类比 div），因此组件内派发（dispatch）的事件需要使用 `addEventLisener` 接收。比如 `dialog` 组件内部的自定义关闭事件 `close`。而 Vue 技术栈则可以直接使用 `@xx` 即可接收原生派发的事件，因此不需要使用 `addEventLisener` 接收。
<br />
<br />
为了提升开发体验，我们对 `quarkd` 进行了 [Reactify(React 化)](https://github.com/BBKolton/reactify-wc/)！

</details>




## Polyfill

> Quarkd(Web components) 支持现代浏览器，如需兼容更低版本（ iOS 10 以下，Android 7 以下），请在 HTML 头部加入 polyfill。

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/"></script>
```

更多详情，参考官方 Polyfill [点击查看更多](https://www.webcomponents.org/polyfills)。


