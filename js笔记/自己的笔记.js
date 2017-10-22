一、js概述
1.js背景
	js:javascript
	javascript:LIVEscript
	1995年网景公司

	网景{
		js解析器
		语法
		。。。
	}

	ie{
		js解析器
		语法
		。。。
	}

	核心js（EXMAscript）
2.js的组成
	ECMAscript 	核心js 兼容性最好
	DOM:文档对象模型
		document
	BOM:浏览器对象模型	
		alert()
3.js的特点
	1）脚本语言
		html xml 
		本身具有行为能力和逻辑能力，需要解析执行
	2）解释性语言
		需要被浏览器中内置js解析器解析执行
	3）弱类型语言
		java：强类型语言


		var a=12;
			a="hello";//字符串
	4）从上往下顺序解析执行
		html
		js
			alert();
			alert(2);

4.在html中嵌入js代码
	1）将js代码嵌入在html标签中
		<div onclick="alert('hello');"></div>	
		<a href="javascript:void(0)"></a>//阻止a标签进行跳转
	2）将js代码嵌入在head标签内部
		<script type="text/javascript">	
		//js代码
		</script>

	3）引入一个外部js文件
		<script src="外部文件"></script>	
		创建以js结尾的文件
5.script标签属性
	type:text/javascript
		:标识script代码类型
	src:引入外部文件

	defer:
		布尔类型
		延迟当前脚本的执行
		延迟到所有js和dom全部解析执行完成后再执行
		只能用在外部引入文件中
		每一个页面中只能写一个defer属性
6.<noscript> </noscript>						/
·告诉用户当前浏览器不支持js 								

7.基本语法
	1.区分大小写
		typeof();
		判断当前变量的数据类型
	2.标识符
		变量、函数/方法名
		1）只能以字母数字下划线&组成
		2）不能以数字开头
		3）不能使用关键字和保留字
		4）尽量使用驼峰命名法
	3.注释
		使代码更具有可读性
		//单行注释
		/*多行注释*/
	4.语句
		建议以分号结尾
		浏览器中js解析器默认找结尾
----------------------------------------------------
二、变量和数据类型
1.变量的声明
	1.变量的声明
		var
		不加 var 声明的是全局变量
	2.变量的初始化
		str="hello"
	3.变量的更改
		str=true;
		str+1;
	4.变量的使用
		alert();
		console.log();

2.变量的声明和初始化
	var str="hello";

	var str="hello",str2="world",str3="22";


	全局变量：
		在js的整个作用域内都可以访问到的变量
		1.使用var操作符，声明在js的全局里面（不能包含在函数内部）
		2.不使用var操作符，声明在js的任意位置

	局部变量
		只能在特定范围内使用的变量

	3.数据类型
		一共有6种数据类型
		5种基本数据类型
			1）undefined：未定义
				1.变量只声明，未赋值
				2.显性的将undefined赋值给变量
				3.既不声明也不赋值（测试是不是报错）
			2）null:
				空引用数据类型
				即将要指向堆区中的一块空间
				typeof(null) //object
			3）Boolean:
				布尔类型
				true
				false
			4）Number：
				数值类型
					整数
					浮点数
						1.0 会解析为1  因为浮点数占用内存是整数的两倍
										所以后面有0会舍去
						浮点数精度的缺失解决方法是：*10变为整数计算完之后再除以10
						科学计数法
							var a=1.2e7;//1.2*10的7次方
				isFinite() 	检测位数是否超过最大值

				NaN: not a number
					NaN属于number类型
					NaN 和任何东西都不相等，包括它本身
					所以判断一个数是不是NaN只能使用 isNaN() ,而不能使用 a==NaN
				isNaN();判断


			5）String:
				字符串类型
				检测字符串的长度
				string.length


		1种引用数据类型
			复杂数据类型
			堆区
			6）Object
				最大父级对象object
				1.使用new关键字
					new Object();
					var student=new Object();//空对象
					student.name="list";
					student.age=12;
					console.log(student.age);
				2.var teacher={
					name:"age12";
				}
					console.log(teacher);
				

				function eat(){

				}
				函数是一种引用数据类型

				constrctor
				teacher.constrctor//object
				查询当前对象的创建者是谁

				toString();

				valueOf();
					返回当前对象
				teacher.toString();

-----------------------------------------------------------------
三、作用域
	1）全局作用域
		写在全局的就是全局作用域
		不加var声明的变量就是全局变量
	2）函数作用域
		写在函数内部的就是函数作用域
		js中只有函数作用域，没有块级作用域
-------------------------------
三、隐式类型转换
1.数据类型转换
	其他数据类型转换为  Boolean 的方法
	Boolean
		通过Boolean()这个函数转换
		null-->false
		undefined-->false
		number 除了0都是-->true
		string 除了""（空）都是-->true
		object-->true

	其他数据类型转换为  Number 的方法
	Number
		1）通过Number()这个函数转换（也可以使用+号来转换）
			true-->1
			false-->0
			null-->0
			undefined-->NaN
			string "hello"-->NaN
			string ""-->0
			string "123"-->123
			string "12.3"-->12.3
			string "+12"-->12
			string "-12"-->-12
			string "012"-->12//八进制自动忽略
			string "0xa"-->10//十进制可以转换

			string "12+1"-->NaN
			string "12abc"-->NaN
			object-->NaN
		2）parseInt() 只对数字和数字开头的有效，否则都为NaN
			null-->NaN
			undefined-->NaN
			false-->NaN
			true-->NaN
			""-->NaN
			"hello"-->NaN
			0-->0
			"123"-->123
			"12.1"-->12
			"12.9"-->12
			"+12"-->12
			"-12"-->-12

			"055"-->55 //八进制自动忽略
			"0xa"-->10//十六进制可以转换

			"12+1"-->12
			"12abc"-->12

		3）parseFloat()
			基本和parseInt()一样
			
			12.3-->12.3
			"12.3"-->12.3
			055-->55
			0xa-->0
		4）+号 
			一元操作符+也可以将其他类型转换为number


	其他数据类型转换为  String 的方法
	String
		1）通过String()函数
			null-->"null"
			undefined-->"undefined"

		2）toString()函数
			var num = 10;
				num.toString();		"10"
				num.toString(2);	"1010"
				num.toString(8);	"12"
				num.toString(16);	"a"
			true-->"true"
			false-->"false"

			null和undefined不能使用toString()方法，因为他们没有



2.操作符
	1）一元操作符
		++,--,+,-（此处是正号和负号，并不是加和减）
			出现以上操作符，先调用 Number()函数将表达式转换后再计算
		
	2）逻辑操作符
		逻辑非 ! 
			出现此操作符，先调用 Boolean(）函数将表达式转换然后再取反 

			小技巧：连用两次逻辑非 ，就可以将任意数据类型转化为Boolean类型

		逻辑与 &&   （a&&b）
			1.如果第一个操作数是 null,NaN,undefined,false,0,""	其中之一
				则返回这个其中之一，不再往后执行（短路）
			2.如果第一个操作数不是 null,NaN,undefined,false,0,"" 其中之一，
				则立马返回第二个操作数


		逻辑或 ||
			如果第一个操作数是 null,NaN,undefined,false,0,"" 
			则返回第二个操作数,不管第二个操作数是什么

	3）算数运算符
		1.加法 +
			1) 当m,n不为String,Object类型的时候，先将m,n转换为Number类型，然后再进行计算
			2）当m,n有一个为String,无论另一个操作数为何（但不为对象）都要转换为String，然后再进行拼接
			3） 当m,n 有一个为对象，如果该对象既重写toString,又重写了valueOf方法，先调用valueOf方法
				获取返回值，将该返回值和另外一个操作数进行运算。如果该对象没有重写valueOf方法，
				将调用toString方法获取返回值，将该返回值和另外一个操作数进行运算。如果都没有重写
				则调用 toString() 方法，转换为字符串再转换为number，再计算（此处需要再验证）
		2.减法 -
			返回值为【数值类型】。无论操作数为任何类型，使用 Number()
			转换为Number类型，然后再计算。
		3.乘法 * 除法 / 取余 % 都是先转换为 Number() 再计算

	4）关系操作符 < > <= >=
		1.如果两个操作数是字符串，比较字符串中对应位置的每个字符的字符编码值
		2.如果一个操作数是数值，将另外一个操作数也转换为数值进行比较
		3.如果一个操作数是对象，先调用valueOf(),再调用toString()将返回值与另外一个操作数比较，
			如果没有重写toString() valueOf()则始终为false

	5）
		1.相等和不相等 ==, != (先转换在比较)
			1.如果两个操作数都为字符串，比较字符序列
			2.如果两个操作数都为数值类型，比较值的是否相等
			3.如果两个操作数都是对象，比较的对象的引用
			4.null == undefined			//true
			5.NaN与任何值（包括NaN）相等比较结果为false
			6.如果一个操作数为number类型，另外一个操作数为undefined,null,boolean,string之一，
				先将这些数据类型转换为数值，再进行比较

		2.全等和不全等
			仅比较不转换，先比较两个数所属的数据类型，如果类型不同则不同，如果类型相同，再继续比较两个数的值


	6）三目运算符
		? : 
	7）赋值运算符
		=
	8）逗号操作符
		var a=3,b=4;

-----------------------------------------------------------------
四、流程控制语句

1）见到函数，先关注函数的参数，然后在关注函数的返回值

2）alert的返回值是undefined
3）prompt()
	参数为提示用户输入的内容
		当用户点击确定的时候，返回用户所输入的内容，并且返回值的类型是string
		当用户没有输入点击确定后返回值是一个空字符串
		当用户点击取消的时候，返回null

4）switch(变量){
	变量和case值进行比较的时候使用===而不是==;
	}

	default 存在的位置
		如果default在最后位置，不需要加break，如果不在最后，name必须加break



1，流程控制语句
    01) if语句
		if(condition){
			statement1
		}else{
			statement2
		}
		condition表示任意表达式，该表达式求值的结果不一定是布尔类型，
		如果不是布尔类型，ECMAScript会调用Boolean() 转换函数将这个表达式结果转换为一个布尔类型，
		如果condition求值结果为true,执行statement1。如果求值结果为false，执行statement2

		if(condition){
			statement1
		}
		statement2

		
    02)switch语句
		switch(expression){
			case val:

				break;
			case val2:

				break;
			default:
		}
		==>
		switch(expression){
			case val:{

				break;
			}
			case val2:{
				break;
			}
			default:
		}
      可以在switch语句中使用任何数据类型。
      case的值不一定是常量，也可以是变量，甚至是表达式。
	  expression === val
	  break

2. 循环语句	
	01)for语句
		for循环是一种前测试循环语句，但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力。
		以下是for循环的语法：
        初始化表达式，控制表达式，循环后表达式
		for(initialization;expression;post-loop-expression){
			//loop option
		}
		三要素：
			初始条件
			结束条件
			迭代条件
		for(var i=9;i<=5;i++){
			//循环体
			console.log();
		}


		例如:
		var sum = 0;
		for(var i=0;i<10;i++){
			sum +=i;
		}
		console.log(i); //10  

		ECMAScript不存在块级作用域，在循环内部定义的变量也可以在外部访问到
	
		死循环
		for(;;){
			//当for中的表达式省略的时候，会创建一个死循环
		}
		while(true){
		
		}
	02) do-while语句  
		do{
			
		}while(condition); 
		后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。循环体内的代码最少被执行一次。

	03)	while语句
		开始条件
		结束条件
		迭代条件

		var i=1;	
		while(结束条件){
			迭代条件
		}
		前测试循环语句，即在循环体内的代码被执行之前，就会对出口条件求值。
		因此，循环体内的代码有可能永远不会被执行。
		while(false){
			//
		}
    04) for-in 语句
		一般用来遍历对象
		
		例如:
		
			for(var key in obj){
				console.log(key,obj[key]);
			}

    三目运算符：

------------------栗子----------------------
<script>
		var day=prompt("请输入一个数值");
		//day=+day;
		if(Number(day)){
			if(day>=1&&day<=7){
				if(day==1){
					console.log("星期1");
				}
				else if(day==2){
					console.log("星期2");
				}
				else if(day==3){
					console.log("星期3");
				}
				else if(day==4){
					console.log("星期4");
				}
				else if(day==5){
					console.log("星期5");
				}
				else if(day==6){
					console.log("星期6");
				}
				else{
					console.log("星期日");
	
				}
			}
			else{
				console.log("请输入一个大于1小于7的数");
			}
		}
		else{
			console.log("有误");
		}
	</script>      /
------------------栗子----------------------
--------------------------------------------------------------------------
五、对象：
先明白变量的提升
	变量的提升：
		js的解析机制：
			1）预解析
				全局window：
					1.查找var，并且将var后面的变量赋值为undefined
					2. 查找function，并且将所有的function以及里面的代码都拿出来 
				函数function：
					1.查找var，并且将var后面的变量赋值为undefined
					2. 查找function，并且将所有的function以及里面的代码都拿出来 
					3.查找参数，并且将var赋值为undefined


			2）逐行的解读代码



			当预解析冲突的时候：
				1）变量和变量冲突：在前面声明了变量，在后面又声明了变量
					var a=1;
					......
					var a=3;

					没关系：预解析 var a 就是undefined
					逐行解读代码 

					在a=1之后a就是等于1

					在a=3之后a就是等于3

				2）变量和函数冲突：前面声明了变量，后面又声明了一个同名的函数
					var a=1;

					function a(){
						console.log("呵呵");
					}

					不管函数在前还是在后，都是函数覆盖变量，因为函数比较牛逼


			栗子：
				1.
					1）
						console.log(a);
						var a=1;
					2）
						console.log(a);
						a=1;
				2.
					console.log(a);
					var a=1;
					console.log(a);
					function a(){
						console.log(2);
					}
					console.log(a);
					var a=3;
					console.log(a);
					function a(){
						console.log(4);
					}
					console.log(a);
					a();
				3.
					1）
						var a=1;
						function fn(){
							console.log(a);
							var a=2;
						}
						fn();
						console.log(a);
					2）
						var a=1;
						function fn(){
							console.log(a);
							a=2;
						}
						fn();
						console.log(a);
					3）
						var a=1;
						function fn(a){
							console.log(a);
							a=2;
						}
						fn();
						console.log(a);
					4）
						var a=1;
						function fn(a){
							console.log(a);
							a=2;
						}
						fn(a);
						console.log(a);


	
	1.创建一个对象：
		1）使用构造函数创建，new Object()
			var person = new Object();
			person.name = "briup";
			person.age = 22;

		2）使用对象字面量表示法
			1.不同的属性之间用','分割，
			2.属性名和属性值之间用':'分割
			var person = {
			    name : "briup",
			    age : 22
			};

			3.属性名默认就是字符串，但是属性值是可以解析的，例如：
			var name="hehe";
			var person = {
			    name : name,//"hehe"
			    age : 22
			};

	2.删除对象的一个属性 delete
		delete obj.age;

	3.对象属性的遍历（只能遍历自有属性）
		for(var key in obj){
			var val=obj[key];
			console.log(key,val);
		}

	4.访问属性的方式
		1）console.log(obj.name);
		2）console.log(obj['name']);
		3）var a="name";
			console.log(obj[a]);

	5.继承
		子函数可以继承父函数原型中的属性和方法
			对象可以调用object.prototype中的所有的属性和方法
		、、、、、、、、、、、、、、、、、
		4.注意toString()和valueOf()方法的作用
		toString()
		valueOf()
		 
	6.如何检测对象是否具有某一个属性
		1）in 既可以检测到自身的属性，也能检测到继承的属性
			（自有属性和继承属性都会返回true）
		  例如：
			1.console.log("name" in obj);//自有属性
			2.	var a="name"
				console.log(a in obj);//
			3.console.log("constructor" in obj);//继承属性

		2）hasOwnProperty()
			检测给定的属性是否是对象的自有属性，自有属性返回true,
				继承来的属性将返回false

		3）propertyIsEnumerable() 
				检测给定的属性是否是该对象的自有属性，
				并且该属性是可枚举的，通常由JS代码创建的属性都是可枚举的，
				但是可以使用特殊的方法改变可枚举性。

	7.对象序列化（就是将对象转换为json字符串）
		1）将对象转换为json
			JSON.stringify(obj)
			例如：var hehe=JSON.stringify(obj);

		2）将json转换为对象
			JSON.parse(json)
			例如：
			var json='{"name":"lerry","age":13}';
			var obj=JSON.parse(json);
--------------------------------------------------------------
六、函数
	1.函数声明：
		function fun(){

		}

	2.函数表达式
		var hehe=function(){

		}

	3.匿名函数

	4.函数调用
		（函数声明好了以后并不会自己执行，而是需要调用）
		1）函数名(实参列表)
			例如：
				function fun(){
					console.log("hehe");
				}
				fun();

		2）函数名.call(执行环境对象,实参列表);
			function test(a,b){
				console.log(a,b);
			}
			test(1,2);
			test.call(this,3,4);

 		3）函数名.apply(执行环境对象,实参列表数组);
 			function test(a,b){
				console.log(a,b);
			}
			test(1,2);
			test.apply(this,[5,6]);

	5.this
		this在未执行前无法确定指向谁
		谁驱动当前的方法，谁就是this
			举个栗子：
			var name1=1;
			function sayHello(){
				console.log("hello "+this.name1);
			}
			var obj={
				name1:"terry",
				sayHello:sayHello
			};
			sayHello();//window驱动的sayHello()方法，所以this是window，
						//又因为window没有name1这个属性所以返回undefined
			obj.sayHello();//obj驱动的sayHello()方法，所以this就是obj

	6.arguments
		1）是类数组对象，包含着传入函数中的参数(实参),它具有.length属性
			（注：函数的 length 指的就是 arguments 的长度）
			举个栗子：
			function add(){
				var result=0;
				for(var key in arguments){
						result+=arguments[key];
				}
				return result;			
			}
			var result=add(1,2,3,4);
			console.log(result);
			或者：
			function add(){
				var result=0;
				for(var i=0;i<arguments.length;i++){
						result+=arguments[i];
				}
				return result;			
			}
			var result=add(1,2,3,4);
			console.log(result);



		2）arguments对象还有一个callee的属性，用来指向拥有这个arguments对象的函数
			（这里有一个阶乘的栗子需要再研究一下，因为它用的是递归算法）
			function aa(n){
				if(n<=1){
					return 1;				
				}
				else {
					return n*arguments.callee(n);
				}
			}

	（arguments 和 this 是函数的内部属性）
	7.length
		函数具有length属性
			它的值就是 arguments 的长度
			例如：
				function add(a,b){
					var result=a+b;
					return result;			
				}
				console.log(add.length);

	8.函数可以作为参数，也可以作为返回值（这里涉及闭包，以后再详细看）
		function test2(){
			var msg="hello";
			return function () {
				console.log(msg);
			}
		}
		test2()();
		函数作为返回值需要调用两次 test2()();
		或者：
		var hehe=test2();
			hehe();
	9.当函数作为参数时，这个函数被亲切的称为回调函数
		举个栗子：
			var arr = ["terry","larry","jacky",true,18];
			
			//封装遍历数组的函数
			function forEach(arr,handler){
				for(var i=0;i<arr.length;i++){
					var item=arr[i];
					handler.call(this,item,i);
					// handler(item,i);
				}
			}
			//调用函数，并且指定传入的函数
			forEach(arr,function(item,index){
				console.log(item,index)
			})

		
-----------------------------------------------------
七、值传递和引用传递
	1.值传递：
		值传递操作的是栈区（基本数据类型）
			var a="larry";
			var a1=a;//将a的内容拷贝一份给a1
			a1+="bob";//对a1进行操作，而不是对a操作
			console.log("值传递",a);//larry
	2.引用传递：
		引用传递操作的是堆区（引用类型）
			var b={
				name:"terry"
			}
			var b1 = b;//b是堆区中对象的一个地址，
						//把这个地址复制了一份给b1
			ba.name +="bob";//根据地址找到堆区中的内容，修改它
			console.log(b.name);//terrybob

-----------------------------------------------------
八、构造函数和原型
	1.创建对象的其他几种方法
		1）工厂函数模式
	        function factory (id,name,age){
	            return {
	                id : id,
	                name:name,
	                age:age,
	                sayName:function(){
	                    console.log(this.name);
	                }
	            }
	        }
	        var p1 = factory(1,'terry',12);
	        var p2 = factory(2,'larry',13);
	        工厂模式的缺点：
	        	1. 数据类型无法细分
	        	2. 每创建一个对象，都要为这个对象初始化函数（函数在内存中重复创建）

	    2）构造函数模式
	        //扩展了引用数据类型 函数，对象，数组，正则对象
	        function Person(id,name,age){
	        	//var obj = {}; this = obj
	            this.id = id;
	            this.name = name;
	            this.age = age;
	            this.sayName=function(){
	                
	            }
            	//return this
	        }

	        构造函数经历的4个步骤：
	        	1）创建一个新对象
				2）将构造函数的作用域赋给新对象（this指向这个新对象）
				3）执行构造函数中的代码
				4）返回新对象。

	        构造函数一般是通过new关键字调用。
	        var p1 = new Person(1,'larry',12);

	        构造函数的优点：
		        解决了类型细分问题
		            p1 instanceof Person
		            p1 instanceof Object

		    构造函数的缺点：
	        	没有解决函数存储的问题

	    3）原型模式与构造函数模式混用
	        将对象的自定义属性保存在对象中
	        将对象可以调用的方法保存到构造函数原型中（共享）
	        function Person(id,name,age){
	            this.id = id;
	            this.name = name;
	            this.age = age;
	        }
	        Person.prototype.sayName = function(){
	            console.log(this.name);
	        }
	        这就解决了类型细分问题和方法的内存重复占用问题

	        当原型中的方法较多的时候，可以将这些方法保存到一个对象中，
	        然后将这个对象赋值给构造函数的原型。
	        当然，这个新建的原型就不再是以前的那个原型了，所以，我们需要将
	        它的constructor属性重新设置
	        Person.prototype = {
	            constructor:Person,
	            sayName:funciton(){

	            },
	            sayAge:function(){
	                
	            }
	        }

	 构造函数是函数，原型也是函数里的，
	 但是我们却用构造函数和原型新建了对象，是不是很神奇？


	 实现新建对象计数功能
	 	function Student(num,name,address){
			this.stuNum=num;
			this.name=name;
			this.address=address;
			Student.prototype.number++;
		}
		Student.prototype.sayname=function(){
		 	console.log(this.name);
		 }
		 Student.prototype.number=0;
		 var stu1=new Student(1,"hehe","jjj");
		 var stu1=new Student(1,"hehe","jjj");
		 var stu1=new Student(1,"hehe","jjj");
		 console.log(Student.prototype.number)

	2.什么是原型
		我们可以通过构造函数创建对象，
		原型就是存放对象所共享的一些属性和方法的地方

			function Student(num,name,address){
				this.stuName=num;
				this.name=name;
				this.address=address;
			}
			//属性放在构造函数中，方法放在原型中
			 Student.prototype.sayname=function(){
			 	console.log(this.name);
			 }
			 var stu1=new Student(1,"terry","江西");
			 var stu2=new Student(2,"larry","lanzhou");
			 console.log(stu1,stu2);

			 console.log(stu1.sayname==stu2.sayname);

	-----------------
	|				|
	|构造函数 	 	|
	|prototype 		|
	|               |
	|				|
	|创建新对象		|
	|				|
	|				|
	|				|
	-----------------

	for-in 可以访问存在于实例中的属性，以及原型中的属性




	3.原型链
		继承：
			1）借用构造函数继承（属性的继承）
				function Animal(id,name) {
				    this.id=id;
				    this.name=name;
				}
				Animal.prototype.sayName=function () {
				    console.log(this.name);
				}
				function Dog(id,name,color) {
				    //this->新对象
				    //借用构造函数继承
				    Animal.call(this,id,name);
				    this.color=color;
				}
			2）原型链继承（方法的继承）
				Dog.prototype=new Animal();
				Dog.prototype.constructor=Dog;
				Dog.prototype.sayColor=function () {
				    console.log(this.color);
				}
				function Bird(id,name,type) {
				    Animal.call(this,id,name);
				    this.type=type;
				}
				Bird.prototype=new Animal();
				Bird.prototype.constructor=Bird;
				Bird.prototype.sayType=function () {
				    console.log(this.type);
				}
				var d1=new Dog(1,"一休",'jinghuangse');
				var b1=new Bird(2,"八哥","花色");
				var result=Animal.prototype.isPrototypeOf(d1);
				//判断Animal的原型是不是d1的原型链中的原型
				console.log("d1 animal",result);


	4.实现原型链的方法分两步
		第一步：
			把底层构造函数的原型换成高层构造函数的实例
			（将高层的一个新实例拿过来当做低层的原型）
		第二部：
			将换过来的原型的 constructor 指向低层
			// 原型链的高层
			function Dog(color){
				this.color=color;
			}
			//原型链的低层
			function Bird(type){
				this.type=type;
			}
			// 实现原型链
			Bird.prototype=new Dog();
			Bird.prototype.constructor=Bird;


我有一个问题，怎么一次给prototype里放多个方法？？？？？？？

----------------------------------------------------
API（应用程序编程接口）
九、数组：
	1.数组和对象的区别
		区别在于属性名，对象的属性名是字符串，数组的属性名是数字

	2.数组的创建
	    1）构造函数
	        var arr = new Array();
	        arr空数组=>[];

	        var arr = new Array(20);
	        创建一个指定长度的数组，长度20，数组中每一个元素都会被初始化undefined

	        var arr = new Array("terry",true,3);
	        创建一个数组，并使用实参进行初始化数组

	    2）字面量
	        var arr = [1,true,false,'hello'];

	3.如何访问数组元素
		数组变量名[索引]

		length 数组的长度（数组中元素的个数）

	4.数组检测
		Array.isArray(数组名);
		（Array可以调用的方法）

	5.数组的遍历
		1）使用 for 循环
			for(var i=0;i<arr.length;i++){
				console.log(i,arr[i]);
			}
		2）使用 for in
			for(var key in arr){
		    	console.log(key,arr[key]);
			}

	6.数组的一些方法
		看到函数先注意 函数的作用 函数的参数 函数的返回值

			调用这些方法，都需要 数组对象.方法名()

		1）push()
			作用：把指定值顺序添加到数组的尾部
			参数：想要添加进数组的内容，参数之间用逗号分隔
			返回值：把指定值添加进数组后的新长度
			原数组改变

		2）pop()
			作用：删除数组的最后一个元素
			参数：不需要添加参数
			返回值：被删除的那个元素
			原数组改变

		3）unshift()
			作用：把指定值顺序添加到数组的头部
			参数：将要添加进数组的元素，参数之间用逗号分隔
			返回值：把指定值添加进数组后的新长度
			原数组改变

		4）shift()
			作用：删除数组的第一个元素
			参数：不需要添加参数
			返回值：被删除的那个元素
			原数组改变

		5）reverse()
			作用：反转数组项的顺序
			参数：不需要添加参数
			返回值：反转后的数组
			原数组改变	

		6）sort()
			作用：对数组元素进行排序
			参数：一个比较函数
			返回值：排序后的数组
			原数组改变

				1）默认排序：
					该方法会调用每个数组项的toString() 方法，然后按照字符序列排序
					（即使数组中每一项都是数值，sort(）方法比较的也是字符串)
				2）自定义排序：
					a.该方法可以接受一个比较函数作为参数，比较函数有两个参数
					b.如果第一个参数位于第二个参数之前，返回负数
					c.如果第一个参数位于第二个参数之后，返回正数 
						栗子：
							var arr = [11,5,23,7,4,1,9,1];			
							console.log(arr.sort(compare));			
							//该比较函数适合于大多数数据类型			
							function compare(v1,v2){				
							    if(v1>v2){
							    	return -1;
							    }
							    else if( v1<v2){
							    	return 1;
							    }
							    else{
							    	return 0;
							    }
							}
							默认是降序，如果想升序，改变形参v1和v2的顺序

						慕课网栗子：
							升序：
								arr.sort(function(a,b){
									return a-b;
								})
							降序：
								arr.sort(function(a,b){
									return b-a;
								})

		7）concat()
			作用：用于连接两个或多个数组
			参数：需要连接的另一个,或多个数组,单个的值也行
			返回值：连接后的新数组
			原数组不发生变化

		8）slice()
			作用：数组切割（从已有的数组中抓取选定的元素）
			参数：(start,end)可接受一个或者两个参数（返回项的起始位置，结束位置），
					当接受一个参数，从该参数指定的位置开始，到当前数组末尾的所有项。
					当接受两个参数，起始到结束之间的项，包括开始项，不包括结束项。
			返回值：抓取(切割)出来的数组
			原数组不发生变化

		9）splice()
				1.删除
					作用：从index处开始删除count个元素
					参数：(index,count) 从index处开始删除，count是删除的数量,如果
						设置为0，则不会删除项目
					返回值：被删除的那些元素又组成的数组
					原数组改变
				2.插入
					作用：在指定位置插入值
					参数：(index,0,item1,item2,...,itemx),index是要插入的位置，
						0是删除0个元素，item是要插入的元素，
					返回值：空数组，因为它删除了0个所以返回一个空数组
					原数组改变				
				3.替换
					作用：替换某个元素，或某些元素（原理就是，在指定位置插入值，
						并且同时删除任意数量的元素）
					参数：(index,count,item1,item2,...,itemx)
					返回值：被删除的那些元素又组成的数组
					原数组改变				

		10）indexof()
			作用：从数组中查找指定的元素，从数组开头向后查找，
				使用全等操作符===，找不到该元素返回-1，	
			参数：(searchValue,startIndex)可接受一个或者两个参数，
				第一个参数为要查找的元素，第二个参数（可选）为索引开始位置
			返回值：查找元素的索引，找不到返回-1;
			原数组不发生变化

		11）lastIndexOf()
			作用：从数组中查找指定的元素，从数组末尾向前查找
			参数：(searchValue,startIndex)可接受一个或者两个参数，
				第一个参数为要查找的元素，第二个参数（可选）为索引开始位置
			返回值：查找元素的索引，找不到返回-1;
			原数组不发生变化

		12）join()
			数组序列化
			作用：将数组转化为字符串，使用指定的分隔符
			参数：分隔符，默认是逗号，如果想不使用分隔符则使用空字符串 ""
			返回值：转化后的字符串
			原数组不发生变化

		13）toString()
			数组序列化
			作用：将数组转化为字符串，默认逗号分隔
			参数：不需要添加参数
			返回值：转化后的字符串
			原数组不发生变化

		14）every()
			作用：对数组中的每一个元素运行给定的函数，如果每一个元素执行过函数都返回true,
					则该函数返回true
			参数：一个回调函数
			返回值：true 或者 false 
			原数组不发生变化
				栗子：
				var arr = [11,5,23,7,4,1,9,1];
				var result = arr.every(function(item,index,arr){
					return item >2;
				});
				console.log(result); //false

		15）some()
			作用：对数组中的每一个元素运行给定的函数，其中如果有一个返回了true，则该函数返回true,
					则该函数返回true
			参数：一个回调函数
			返回值：true 或者 false 
			原数组不发生变化

		16）filter() 
			作用：对数组中的每一个元素运行给定的函数，会返回满足该函数的元素组成的数组
			参数：一个回调函数
			返回值：满足该函数的元素组成的数组
			原数组不发生变化

		17）map()
			作用：对数组中的每一个元素运行给定的函数,返回每次函数调用的结果组成的数组
			参数：一个回调函数
			返回值：每次函数调用的结果组成的数组
			原数组不发生变化
		18）forEach() 
			作用：对数组中的每一个元素运行给定的函数,没有返回值，常用来遍历元素	
			参数：一个回调函数
			返回值：没有返回值
			原数组不发生变化 (这个最坑爹)

			以上所有的参数为函数的方法都类似这样用
				var arr=[1,2,3,4,5];
				console.log(arr);
				console.log(arr.map(function(item,index,arr){
					return item>2;
				}));
				console.log(arr);

			注意回调函数的写法
			function(item,index,arr){
					
			}
			
十、字符串
	1、字符串的一些方法
			由于字符串类型属于基本类型，占据栈内存，
			所以字符串的一些方法都不会改变字符串本身的值，
			而是拷贝出一份，在备份上修改

		1）charAt()
			作用：查找指定下标的字符
			参数：下标
			返回值：查找到的那个字符
			原字符串不发生变化

		2）charCodeAt()
			作用：查找指定下标字符的字符 编码
			参数：下标
			返回值：查找到的那个字符的字符编码
			原字符串不发生变化

		3）indexOf()
			作用：在字符串中查找指定的子字符串
			参数： 要查找的子字符串
			返回值：查找到的子字符串的下标，如果没找到则返回 -1
			原字符串不发生变化

		4）lastIndexOf()
			作用：从后面查找指定的子字符串
			参数：要查找的子字符串
			返回值：查找到的子字符串的下标，如果没找到则返回 -1
			原字符串不发生变化

		5）slice()
			作用：从字符串中截取子字符串（抓取指定的字符串）
			参数：(start,end) 子字符串开始和结束位置的下标
					start指定字符串的开始位置，end指定字符串的结束位置
					[算头不算尾),end可以省略，省略时，默认截取到字符串的尾部
					当参数传入负数时，将传入的负值与字符串的长度相加
			返回值：截取下来的子字符串
			原字符串不发生变化

		6）substring()
			作用：从字符串中截取子字符串（抓取指定的字符串）
			参数：(start,end) 子字符串开始和结束位置的下标
					start指定字符串的开始位置，end指定字符串的结束位置
					[算头不算尾),end可以省略，省略时，默认截取到字符串的尾部
					当参数传入负数时，自动将参数转换为0；
			返回值：截取下来的子字符串
			原字符串不发生变化

				语法和功能和 slice()一样
				区别在于，当参数为负数时，自动将参数转换为0；
				(start,end)默认较小的数为开始位置，较大的数为结束位置
			
		7）substr()
			作用：从字符串中截取子字符串（抓取指定的字符串）
			参数： (start,len) start 开始位置 len 截取字符串的长度，
					省略len时，默认截取到字符串尾部
					当start 为负数时，将负数和字符串的长度相加
					当len为负数时，返回空字符串
			返回值：截取下来的子字符串,当len为负数时，返回空字符串
			原字符串不发生变化

		8）split("")
			作用：把字符串分割成字符串数组
			参数：分隔符（以什么为分隔界限） "" 就是把每个字符分开
			返回值：分隔后的数组
			原字符串不发生变化
				var string1="a1b1c1d1e1fg";
				console.log("执行前",string1);//a1b1c1d1e1fg
				var return1=string1.split("1");
				console.log("返回值",return1);//["a", "b", "c", "d", "e", "fg"]
				console.log("原字符串",string1)//a1b1c1d1e1fg

		9）replace()
			作用：在字符串中，用一些字符替换另一些字符，
					或者替换一个正则匹配的字符串
			参数：(substr,replacement) 将substr替换成replacement
			返回值：替换后的字符串
			原字符串不发生变化

		10）toUpperCase()
			作用：将字符串转换为大写
			参数：不需要添加参数 
			返回值：转换后的字符串
			原字符串不发生变化

		11）toLowerCase()
			作用：将字符串转换为小写
			参数：不需要添加参数 
			返回值：转换后的字符串
			原字符串不发生变化

			将字符串 border-left-color 转换成 borderLeftColor

		12）trim()
			删除前置以及后置中的所有空格，返回结果


		JSON 
			对象 
				{
					"name":"terry",
					"age":12
				}
			数组：
				["terry",12,{
					"name":"terry"
				}]

		13）match() 
			作用：在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
					该方法类似 indexOf() 和 lastIndexOf()，
					但是它返回指定的值，而不是字符串的位置。
			参数：要检索的值
			返回值：检索到的值，没找到返回null
			原字符串不发生变化
十一、Math
		1）Math.min(num1,num2,num3)
			作用：求一组数中的最小值
			参数：一组数，用逗号分隔
			返回值：最小的那个数

		2）Math.max()
			作用：求一组数中的最大值
			参数：一组数，用逗号分隔
			返回值：最大的那个数

		3）Math.ceil()
			作用：向上取整
			参数：一个小数
			返回值：取整后的数

		4）Math.floor()
			作用：向下取整
			参数：一个小数
			返回值：取整后的数

		5）Math.round()
			作用：四舍五入
			参数：一个小数
			返回值：四舍五入后的数

		6）Math.random()
			作用：返回一个大于0小于1的随机数
			参数：不需要添加参数
			返回值：随机数

			求n到m之间的随机整数的公式:
			random=Math.floor(Math.random()*(m-n+1)+n);

		7）Math.abs()
			作用：求绝对值
			参数：需要求绝对值的数
			返回值：绝对值

十二、日期对象
	1.如何创建一个日期对象
		new Date()

		var hehe=new Date();
	
	2.将一个字符串转换为Date对象 (在 new Date（）中传参即可)
		var str = "2012-12-12";
		var date = new Date(str);

	3.获取年月日时分秒日期的方法
		1）getFullYear():返回4位数的年份 
		2）getMonth():返回日期中的月份，返回值为0-11 
		3）getDate():返回月份中的天数 
		4）getDay():返回星期，返回值为0-6 
		5）getHours():返回小时 
		6）getMinutes():返回分 
		7）getSeconds():返回秒 
		8）getTime():返回表示日期的毫秒数　
		
	4.设置年月日时分秒日期的方法
		1）setFullYear(year):设置4位数的年份 
		2）setMonth(mon):设置日期中的月份，从0开始，0表示1月 
		3）setDate():设置日期 
		4）setDay():设置星期，从0开始，0表示星期日 
		5）setHours():设置小时
		6）setMinutes():设置分 
		7）setSeconds():设置秒 
		8）setTime():以毫秒数设置日期，会改变整个日期


十三、正则表达式
	1.创建
		1）构造函数
			var pattern = new RegExp("正则","模式");

		2）字面量
			var pattern = /正则/模式；

	2.方法的调用
		RegExp 原型中的方法，是js提供的

		1）test(str)
			作用：测试参数是否匹配正则
			参数：待检测的字符串
			返回值：boolean，如果匹配返回true，否则返回false
		2）exec(str)
			作用：执行检索操作
				参数为字符串。对一个指定的字符串执行一个正则表达式,
				在一 个字符串中执行匹配检索，如果没有找到任何匹配，返回null,
				如果找到了匹配， 返回一个数组。
				这个数组元素中的第一个元素包含与正则表达式相匹配的子字 符串，
				剩余的元素是 圆括号内的子表达式 （就是分组）相匹配的子串。
				当调用的正则表达式 对象具有修饰符g时，
				它将把当前正则表达式对象的lastIndex属性设置为紧挨 着匹配子串的字符位置，
				当同一个正则表达式第二次调用exec()时，
				它将从 lastIndex属性所指的字符处开始检索。
				如果没有匹配到任何结果将lastIndex重 置为0.
			参数：待检测的字符串
			返回值：数组，数组中保存的是匹配的字符串
					数组，index 数组中匹配的字符串内容
					数组，input 原字符串内容

	3.修饰符：
		1）g :global	全文搜索，不添加的话，搜索到第一个匹配的项就停止了
		2）i :ignore case忽略大小写，如果不加的话，默认是大小写敏感的
		3）m :multiple lines	多行搜索
			栗子：


	4.元字符
		正则表达式由两种基本字符类型组成：
			1）原意文本字符：a b c 是什么就是什么

			2）元字符:在正则表达式中有特殊含义的非字母字符
				\t 水平制表符
				\v 垂直制表符
				\n 换行符
				\r 回车符
				\0 空字符
				\f 换页符
				\cX 与X对应的控制字符（Ctrl+X）;

	5.字符类 
		一般情况下，正则表达式一个字符对应字符串一个字符，如果想匹配某类字符，
		而不是某个字符，这就用到字符类

		我们可以使用元字符 [] 来构建一个简单的类
		栗子：
			[abc]把字符 a 或者 b 或者 c 归为一类（在中括号中出现的，就选中）
				"a1b2c3".replace(/[abc]/g,"X")
				//返回X1X2X3
	6.字符类取反
		使用元字符 ^ 创建反向类，就是不属于某个类（就是除了这类都选中）
		[^abc]表示 不是a 不是b 不是c 剩下的都选中
			"a1b2c3".replace(/[^abc]/g,"X")
			//返回aXbXcXXX
	7.范围类
		选中在某个范围内的字符

		[a-z]选中了从a到z的任意一个字符（闭区间）
			"a1b2d3x4z9".replace(/[a-z]/g,"Q")
			//返回Q1Q2Q3Q4Q9

		范围类可以连写比如说这样 [a-zA-Z]

	8.预定义类
		. 除了回车符和换行符的所有字符
		\. 		.
		\d 		[0-9] 			数字字符
		\D 		[^0-9]			非数字字符
		\s 		[\t\n\x0B\f\r] 	空白符
		\S 		[^\t\n\x0B\f\r]	非空白符
		\w 		[a-zA-Z_0-9] 	单词字符（字母数字下划线）
		\W  	[^a-zA-Z_0-9] 	非单词字符
	9.边界
		^ 	以xxx开始 (这个写在前面)
		$ 	以xxx结束（这个写在后面）
		\b 	单词边界
		\B 	非单词边界

		栗子：
			"This is a boy".replace(/is/g,"0");
			//Th0 0 a boy
			"This is a boy".replace(/\bis\b/g,"0");
			//This 0 a boy
			"This is a boy".replace(/\Bis\b/g,"0");
			//Th0 is a boy

	10.量词
		? 出现零次或一次（最多出现一次）
		+ 出现一次或多次（至少出现一次）
		* 出现零次，或多次（爱出现多少次出现多少次）
		{n} 出现n次
		{n,m} 出现n-m次
		{n,}至少出现n次
		{0,m}最多m次

	11.贪婪模式（默认就是贪婪模式）
		\d{3,6}
		123456

		正则会尽可能的多匹配
			栗子：
				"12345678".replace(/\d{3,6}/g,"X")
				//返回X78
	12.非贪婪模式
		尽可能的少匹配
		怎么能切换到非贪婪模式？
			只要在量词后加 ? 即可 
			"12345678".replace(/\d{3,6}?/g,"X")
			//XX78
	13.分组
		使用 () 可以达到分组的功能，使量词作用于分组，（只有使用量词的时候才会分组）
		"a1b2c3d4".replace(/[a-z]\d{3}/g,"X")
		//返回a1b2c3d4,(没起作用)
		"a1b2c3".replace(/([a-z]\d){3}/g,"X")
		//返回Xd4
	14.或 
		使用 | 可以达到或的效果
		"ByronCasper".replace(/Byron|Casper/g,"X")
		//返回XX
		"ByronsperByrCasper".replace(/Byr(on|Ca)sper/g,"X")
		//返回XX
	15.反向引用
		2015-12-25=>12/25/2015

		"2015-12-25".replace(/(\d{4})-(\d{2})-(\d{2})/g,"$2/$3/$1")
		注意：要想 $1 $2 $3有效，必须先分组

	16.字符串对正则表达式的支持
		search()
		match()
		split()
		replace()

十四、DOM（文档对象模型）
	1.节点：
		1）nodeType 表示节点类型
			Element -->1;TextNode -->3;Comment--> 8;Document--> 9 
			document 是Document构造函数的实例 
			document.body是Element构造函数的实例 
			document.body.firstChild 是Comment构造函数的实例

		2）nodeName 该属性取决于节点类型，如果是元素类型，值为元素的标签名（大写）

		3）nodeValue 该属性取决于节点类型，如果是元素类型，值有null

		4）childNodes
					属性，保存一个NodeList对象，
					NodeList是一种类数组对象用来保存一组有序的 节点，
					NodeList是基于DOM结构动态执行查询的结果，
					DOM结构变化可以自动反应 到NodeList对象中。
					访问时可以通过中括号访问，也可以通过item()方法访问。
					可以 使用slice方法将NodeList转换为数组

					var arr = Array.prototype.slice.call(nodes,0);
		5）parentNode
					指向文档树中的父节点。
					包含在childNodes列表中所有的节点都具有相同的父节 点，
					每个节点之间都是同胞/兄弟节点。

		6）previousSibling	兄弟节点中的前一个节点

		7）nextSibling	兄弟节点中的下一个节点

		8）firstChild	childNodes列表中的第一个节点

		9）lastChild childNodes列表中的最后一个节点

		10）ownerDocument 指向表示整个文档的文档节点。
			任何节点都属于它所在的文档，任何节点都不能同时
 			存在于两个或更多个文档中。

 		11）hasChildNodes() 在包含一个或多个子节点的情况下返回true

 		12）appendChild()
					向childNodes列表末尾添加一个节点。返回新增的节点。
					关系更新如果参数节点已经为文 档的一部分，位置更新而不插入，
					dom树可以看做是由一系列的指针连接起来的，
					任何 DOM节点不能同时出现在文档中的多个位置

		13）insertBefore() 	第一个参数:要插入的节点;第二个参数:作为参照的节点; 
					被插入的节点会变成参照节点的前一个同胞节点,同时被方法返回。
					如果第二个参数为null
					将会将该节点追加在NodeList后面

		14）replaceChild() 第一个参数:要插入的节点;第二个参数:要替换的节点; 
							要替换的节点将由这个方法返回并从文档树中被移除，
							同时由要插入的节点占据其位置

		15）removeChild() 	一个参数，即要移除的节点。
						移除的节点将作为方法的返回值。其他方法,任何节点对象都可以调用。

		16）cloneNode()
						用于创建调用这个方法的节点的一个完全相同的副本。
						有一个参数为布尔类型参数为true 时，表示深复制，
						即复制节点以及整个子节点数。参数为false的时候，
						表示浅复制， 只复制节点本身。
						该方法不会复制添加到DOM节点中的JavaScript属性，
						例如事件处 理程序等。该方法只复制特定,子节点，其他一切都不复制。
						但是IE中可以复制，建议 标准相同，在复制之前，移除所有事件处理程序。
		17）normalize()
					处理文档树中的文本节点，由于解析器的实现或DOM操作等原因，
					可能会出现文本节点 不包含文本，或者接连出现两个文本节点，
					当在某个节点上调用了该方法，会删除空 白节点，
					会找到相邻的两个文本节点，并将他们合并为一个文本节点。

		18）document.createElement() 创建节点

	2.获取元素的方法
		1）getElementById()
		2）getElementsByTagName()
			返回一个类数组对象
		3）getElementsByName()
		4）getElementsByClassName()

			凡是返回一个集合的，都是类数组对象，不能使用forEach方法

			不过可以使用下面这种方法将类数组转换为数组
				var hehe=Array.prototype.slice.call(类数组,0);

		window.document

		document.title
		document.forms
		document.images
		document.links

	3.如何设置元素的css样式
		ele.style.styleName=styleValue

			注意：当styleName为减号连接的复合形式时需要使用驼峰形式
				（font-weight-->fontWeight）
	4.innerHTML
		获取和设置标签之间的文本和html内容

	5.className
		ele.className
		获取和设置元素的class属性(设置得话，会替换掉元素本身的类)
			（你也可以使用getAttribute("class")来获取）

		注：你也可以通过 . 的方式获取其他属性，比如src title什么的
			ele.src=""   ele.title="" ,只不过class比较特殊，你不能
			直接写成ele.class,而是必须写成ele.className

	6.获取和添加元素的属性
		1.获取元素的属性
			1）ele.getAttribute(属性名)

			2）ele.属性名 （除class以外都能获取到，class需要使用className）
				如：p.id
				注：这种方法只能获取和设置标签自带的属性，不能设置用户自定义的属性

		2.设置元素的属性
			1）ele.setAttribute(属性名,属性值)
			2）p.id="hehe";

		3.删除属性
			ele.removeAttribute(属性名)	
	7.创建节点
		document.createElement()
	

十五、事件
	1.什么是事件
		事件就是文档或浏览器窗口中发生的一些特定的交互瞬间
			onload:页面加载时触发
			onunload:页面卸载时触发
			onclick:鼠标点击时触发
			ondblclick:双击鼠标时触发
			onmouseover:鼠标滑过时触发
			onmouseout:鼠标离开时触发
			onfoucs:获得焦点时触发（input,textarea）
			onblur:失去焦点时触发
			select:当用户选择文本框(<input>,<textarea>)中的一个或多个字符时触发
			onchange:域的内容改变时触发（select,checkbox,radio）
			onsubmit:表单中的确认按钮被点击时触发（加在form上的，不是button上的）
			onmousedown:鼠标按下时触发
			onmousemove:鼠标移动时触发
			onmouseup:鼠标抬起时触发
			onresize:调整浏览器窗口时触发
			onscroll:拖动滚动条时触发


			keydown 按下键盘任意键时触发，如果按住不放会重复触发此事件 
			keypress 按下键盘字符键时触发，如果按住不放会重复触发此事件 
			keyup 释放键盘上键时触发
			当键盘事件发生时，event对象的keyCode属性中会包含一个代码与键盘上的特定键对应，
			对数字字母键，keyCode属性的值与ASCII码中对应的小写字母 和数字编码相同

	2.绑定事件的三种方式：
		1）HTML事件：
			就是把事件写在行内
			<p onclick="alert('hehe')">这是一个p标签</p>
			<p onclick="function()">这是一个p标签</p>
		2）DOM 0级事件
			1）绑定事件
				先获取到元素，然后再给元素绑定事件
					hehe.onclick=function(){
						alert("hehe");
					}
			2）解绑事件
				hehe.onclick = null;

			在事件的函数中，可以使用this，因为谁触发的事件，谁就是this

			function clickBtn(){
				alert("hehe");
			}
			btn.onclick=clickBtn;   //这里千万不要加括号，因为这里并不是函数的调用
		3）DOM 2级事件
			1.绑定事件
				addEventListener()
				传递三个参数：
					要绑定的事件名
					作为事件处理的函数
					布尔值:true在捕获阶段调用事件处理程序;false在冒泡阶段调用
			2.解绑事件
				removeEventListener()
				传递两个参数
					要解绑的事件名
					事件处理函数

		IE事件处理程序
			1）attachEvent() 事件绑定 
				参数:
					1.事件处理程序名称
					2.事件处理函数
			2）detachEvent() 事件移除 
				参数:
					1.事件处理程序名称
					2.事件处理函数 
					3.事件处理程序都被添加到冒泡阶段


	3.事件流
		事件冒泡：从具体的元素，一直传递到不具体的元素
		事件捕获：从不具体的元素，一直传递到具体的元素

	4.事件的三要素：
		1）事件源
		2）事件处理函数
		3）事件对象event

			事件对象event
			在触发DOM上的某个事件时，会产生一个事件对象event,
			这个对象包含着所有 与事件相关的信息，包括导致事件的元素，
			事件的类型以及其他与特定事件相关的信息。
			兼容DOM的浏览器默认会将event对象传入到事件处理函数中。

			我们可以使用事件对象这样做
				event.
			1.阻止默认行为
				event.preventDefault()

				IE的是 event.returnValue = false 为阻止
			2.阻止冒泡
				evevt.stopPropagation()
				IE的是 event.cancelBubble = true 是取消冒泡
			3.目标对象（通过target可以实现事件代理）
				target 			鼠标正在操作的dom对象  
				currentTarget	将要操作的对象
				this 			将要操作的对象

			4.事件代理：
					tbody 
						tr 	
							td 

					tbody可以代理tr上的事件绑定，也就是可以将事件绑定到tbody上，
					通过event.target可以获取到当前对象

					栗子：
					window.onload=function(){
						var div=document.getElementsByTagName("div")[0];
						var lis=document.getElementsByTagName("li");
						div.onmouseover=function(event){
							if(event.target.tagName=="LI"){
								event.target.style.background="red";
							}
						}
						div.onmouseout=function(event){
							if(event.target.tagName=="LI"){
								event.target.style.background="green";
							}
						}
					}

			jQuery中也有事件代理
				$('p').on('click','a',function(){
					$(this).addClass("active").siblings().removeClass("active");
				})
				//这句话的意思是，点击p中的其中之一a标签，让这个a变绿，其他的变白
				


			4.相关元素,event特殊属性   
				1）客户区坐标位置
					clientX,clientY 事件发生时，鼠标指针在视口中的水平和垂直坐标位置   
				2）页面坐标位置
					pageX,pageY 事件发生时，鼠标指针在页面本身而非视口的坐标，
					页面没 有滚动的时候，pageX和pageY的值与clientX和clientY值相等

				3）屏幕位置 
					screenX,screenY
  				4）修改键
					值为boolean类型，用来判断对应的按键是否被按下shiftKey，ctrlKey，
					altKey， metaKey
  				5）鼠标按钮 
  					mousedown,mouseup，该事件的event对象中包含了button属性，表示按下
					或释放的按钮。 
					0表示主鼠标按钮
					1表示中间的滚动按钮 
					2表示次鼠标按钮


	5.闭包
		一个函数位于另外一个函数的内部，内部函数引用外部函数的变量，
		 那这个变量和内部函数就组成了闭包
		int a=3;
		function test(){
			alert(a)
		}
		test();

		这里有一道面试题：
		点击li弹出每个li对应的序号，这个知识点考察的就是闭包
			解决的方法有两种
				1）将类数组对象转化为数组对象
					var hehe=Array.prototype.slice.call(类数组,0);
					
				2）将返回值变为一个函数
					window.onload=function(){
						var li=document.getElementsByTagName("li");
						for(var i=0;i<li.length;i++){
							li[i].onclick=function(){
								var a=i
								return function(){
									console.log(a);
								};
							}();
						}
					}



BOM:

----------





	



    





		










	



























