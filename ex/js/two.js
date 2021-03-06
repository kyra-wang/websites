var arr_product = ["请选择产品分类","丝网印刷","过滤与筛分","门窗用品与门窗防护","养殖类产品","建材类产品"];
     var arr_type = [
                     ["请选择产品型号"],
                     ["聚酯网","不锈钢丝网","尼龙网"],
                     ['聚酯网','不锈钢丝网','尼龙网', '面料筛网','轧花网'],
                     ['金钢网', '玻璃纤维窗纱', '塑料窗纱'],
                     ['塑料平网', '六角网', '电焊网', '勾花网'],
                     ['电焊网','勾花网','钢板网','刺绳','刀片剌绳','螺纹钢电焊网']
                 ];
     //网页加载完成，初始化菜单
     window.onload = init;//传入函数地址
     function init(){
         //首先获取对象
         var product = document.form1.product;
         var type = document.form1.type;
 
         //指定省份中<option>标记的个数
         product.length = arr_product.length;
 
         //循环将数组中的数据写入<option>标记中
         for(var i=0;i<arr_product.length;i++){
             product.options[i].text = arr_product[i];
             product.options[i].value = arr_product[i];
         }
 
         //修改省份列表的默认选择项
         var index = 0;
         product.selectedIndex = index;
 
         //指定城市中<option>标记的个数
         type.length = arr_type[index].length;
 
         //循环将数组中的数据写入<option>标记中
         for (var j = 0; j<arr_type[index].length;j++) {
             type.options[j].text = arr_type[index][j];
             type.options[j].value = arr_type[index][j];
         }
 
     }
     function  changeSelect(index){
         //选择对象
         var type = document.form1.type;
         //修改省份列表的选择项
         product.selectedIndex = index;
 
         //指定城市中<option>标记的个数
         type.length = arr_type[index].length;
 
         for (var j = 0; j<arr_type[index].length;j++) {
             type.options[j].text = arr_type[index][j];
             type.options[j].value = arr_type[index][j];
         }
     }