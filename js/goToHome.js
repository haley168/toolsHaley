/**
 * Created by 昊商易通 haley on 2017/3/4.
 */
window.addEventListener('load',function(){
    (function(){
        var links=[
            {link:"https://haley168.github.io/toolsHaley/index",t:"返回首页"}//link为页面的地址，t为跳转页面的提示文字，数量依据需求添加
            //{link:"userCenter",t:"进入用户中心"},
        ];
        var len=links.length;
        var ul = document.createElement("ul");//js新建元素
        ul.setAttribute("class", "haleyMenu");//给元素加属性
        for(var lis="",i=0;i<len;i++){
            lis+='<li><a href="'+links[i].link+'.html'+'"><h5>'+links[i].t+'</h5></a></li>';
        }
        ul.innerHTML='<style>'
        +'ul.haleyMenu{position: fixed;top:30px;right:10px;color:#fff;text-align: center;}'
        +'ul.haleyMenu li{background-color: #005599;border-bottom:1px solid #1738bc;list-style: none;}'
        +'ul.haleyMenu li h4{padding-top:10px;margin: 10px 0;background-color: #fff;color:#005599;border:1px solid #1738bc;height:60px;border-bottom:10px solid #009900;}'
        +'ul.haleyMenu li a{color:#fff;text-decoration: none;}'
        +'ul.haleyMenu li:hover{background-color:#009900;border-bottom:1px solid #fff;}'
        +'ul.haleyMenu li h5{text-align:center;padding:15px 8px;margin:0;font-weight: normal;font-family: "微软雅黑", "宋体";}'
        +'</style>'
        +lis;
        document.body.appendChild(ul);//把元素放进body标签里面
    })();
});
