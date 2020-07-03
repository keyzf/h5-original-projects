#### TweenMax 动画效果

###### 加载文件
必须要加载核心工具`TweenLite.min.js`或者`TweenMax.min.js`。此外还需要加载其他需要的插件，例如基础插件，时间轴，拓展时间曲线，商业插件等。
``` javascript
请将x.x.x改成你需要的版本号，例如2.0.1
// 分块添加
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/TweenLite.min.js"> </script> -- 核心工具，可初始化TweenLite对象
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/plugins/CSSPlugin.min.js"> </script>  -- 基础插件，用于制作CSS动画2D，3D动画
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/BezierPlugin.min.js"> </script>  -- 基础插件，用于制作贝塞尔曲线
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/TimelineLite.min.js"> </script>  -- 核心工具，创建时间轴管理动画
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/easing/EasePack.min.js"> </script>  -- 拓展的时间曲线，例如bounce   

// 一了百了
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/x.x.x/TweenMax.min.js"> </script>
```

###### 制作动画
看文档：https://www.tweenmax.com.cn/api/tweenmax/