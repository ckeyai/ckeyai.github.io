<div align="center">

# 像 素 报

**Pixel Daily** · 一份用网页排印的报纸

一个人，一份报纸，四个版面。<br>
设计、代码，以及留在屏幕边缘的一点毛边。

<br>

![纯静态](https://img.shields.io/badge/%E7%BA%AF%E9%9D%99%E6%80%81-HTML%20%2F%20CSS%20%2F%20JS-9e2f1e?style=flat-square&labelColor=1a1713)
![零依赖](https://img.shields.io/badge/%E4%BE%9D%E8%B5%96-0-9e2f1e?style=flat-square&labelColor=1a1713)
![无构建](https://img.shields.io/badge/%E6%9E%84%E5%BB%BA-%E6%97%A0-9e2f1e?style=flat-square&labelColor=1a1713)
![响应式](https://img.shields.io/badge/%E6%96%AD%E7%82%B9-640%20%2F%20820%20%2F%201080-9e2f1e?style=flat-square&labelColor=1a1713)

<br>

**[ckeyai.github.io](https://ckeyai.github.io/)** — 第七期，已付印

</div>

---

## 关于这一期

这是一个个人主页，但它的灵感不是作品集。

作品集想证明「我能做什么」；报纸只想说清「今天发生了什么」。所以这里没有滚动的视差、没有跟随光标的光晕、没有一进页面就自动播放的开场动画——只有四块版、三种字体、一条红色的下划线，和一枚盖晚了半秒的「已阅」章。

页面排布沿用真实报纸的秩序：报头、报眼、双线、要目、栏线、书眉、版权页。所有内容挤在同一张「纸」上，读到底也不过六分钟。

> 设计目标不是让人惊叹，而是让人愿意读完。

---

## 四个版面

| 版次 | 名称 | 内容 |
| :---: | --- | --- |
| 01 | **头版 · 自述** | 本期要目、封面故事、木刻插画、今日宜忌、人物档案 |
| 02 | **作品** | 四件代表作的标题、导语与注解，12 栏网格错落排布 |
| 03 | **年表** | 2016 — 2026 的时间线，引导点线一直连到年份 |
| 04 | **启事** | 「寻人」启事、来信地址、一枚可兑换的虚线兑换券 |

页眉的粘性导航会跟随滚动高亮当前版面，并实时改写右侧的「第 0X 版」；进入头版约半秒后，印章落下。

---

## 技术清单

| | |
| --- | --- |
| **框架** | 无。三个文件，手写到底 |
| **样式** | 单文件 CSS，841 行，变量集中管理纸张、墨色与印刷红 |
| **脚本** | 75 行原生 JS，只做三件事：中文数字日期、版次感知、落章 |
| **字体** | Noto Serif SC（标题）/ Playfair Display（数字与邮箱）/ Archivo（小号字距标签） |
| **交互** | 仅三处，且全部可被 `prefers-reduced-motion` 关闭 |
| **质感** | CSS 径向网点叠印 + 纸张噪点，无图片纹理 |
| **打印** | `@media print` 已处理，可直接存成 PDF |
| **适配** | 1080 / 820 / 640 三档断点；窄屏自动收为单栏 |

总重量：约 **40 KB** 代码 + 一张 265 KB 的插画。

---

## 目录

```
.
├── index.html          # 四个版面的全部内容与语义结构
├── styles.css          # 版式、栏线、网点、响应式与打印样式
├── main.js             # 日期、版次高亮、印章
├── assets/
│   └── lead.jpg        # 头版插画（木刻风排字工）
└── README.md
```

没有 `package.json`，没有 `node_modules`，没有构建产物。

---

## 本地预览

任意静态服务器即可：

```bash
# Python
python3 -m http.server 3000

# 或 Node
npx serve .
```

然后打开 `http://localhost:3000`。

> 直接双击 `index.html` 也能看，只是 `file://` 下字体与部分裁切规线可能略有差异。

---

## 部署

站点由 **GitHub Pages** 直接从 `main` 分支的根目录提供服务。

```bash
git add .
git commit -m "更新版面"
git push origin main
```

推送后约一分钟生效，无需任何 CI 配置。

---

## 定制

改内容不用碰 CSS，改版式不用碰 HTML。

**换纸张与油墨** — `styles.css` 顶部的 `:root`：

```css
--paper:   #efe9dd;   /* 新闻纸 */
--ink:     #1a1713;   /* 正文墨 */
--red:     #9e2f1e;   /* 印刷红 */
--serif:   ...        /* 标题与正文 */
--display: ...        /* 数字与拉丁字 */
--sans:    ...        /* 标签小字 */
```

**换文字** — 直接编辑 `index.html`，四个 `<section>` 依次对应四个版面：`#front`、`#works`、`#chron`、`#notice`。

**换头图** — 替换 `assets/lead.jpg`（建议 3:2，宽度 ≥ 1200px），同步更新 `<img>` 的 `width` / `height` 以免抖动。

**换联系人** — 末版 `mail` 链接与结尾版权页。

**注意**：报头日期由 `main.js` 按访问当天自动生成，无需手动维护。

---

## 一点说明

- 字体经 Google Fonts 加载；网络受限时回退到 `Songti SC` / `PingFang SC`，观感会变，但版面不塌。
- 页面内所有姓名、项目、数字与邮箱均为示例内容，替换成自己的即可。
- 无追踪、无统计、无 Cookie，打开就是全部。

---

<div align="center">
<br>
<sub>像素报 · 第七期 · 二〇二六年十一月 · 杭州</sub><br>
<sub>排印：HTML / CSS / 一点点 JS</sub>
</div>
