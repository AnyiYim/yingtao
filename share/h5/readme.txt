1. 确定不使用的页面直接删除，不要保留，否则会被打包进app-service.js文件，增加该基础文件大小，
影响加载速度。

2. 编译前端代码使用微信编译器 DFT_CMP=true ./bin/weweb yt131-html5/ -t
