/**
 * Created by Administrator on 2018/4/16.
 */
function showSuccess(msg){
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.alert(msg, {icon: 1});
});
}

var a,b;
obj={'name':'W_Juan','age':23}
with(obj){
    a=name;
    b=age;
}
console.log('a:'+a);//输出W_Juan
console.log('b:'+b);//输出23

arr=[4,5,2]
delete arr[2]
//输出undefined
console.log(arr[2]);
//输出3
console.log(arr.length);