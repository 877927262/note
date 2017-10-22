1变量和数据类型
  面试题
	1.js中使用 typeof 能得到的类型
	答：typeof undefined // undefined
		typeof 'abc' //string
		typeof 123 //number
		typeof true //boolean
		typeof {} //object
		typeof [] //object
		typeof null //object
		typeof console.log //function

	2.何时使用 === 何时使用 == 
		答：只有下面这句话用 == 其他所有情况都用=== 
			if (obj==null) {
			//这里相当于 obj.a === null || abj.a === undefinde ,简写形式
			//这里是jQuery源码中推荐的写法
			}

	3.js中有哪些内置函数--数据封装类对象
		答：Object
			Array
			Boolean
			Number
			String
			Function
			Date
			RegExp //正则
			Error


		内置对象
		Math
		JSON

	4.js变量按照存储方式区分为哪些类型，并描述其特点
		答：值类型和引用类型
			//值类型
			var a = 10 ;
			var b = a;
			a = 11;
			console.log(b) ;//10

			//引用类型
			var obj1={x:100};
			var obj2=obj1;
			obj1.x=200;
			console.log(obj2.x); //200

		////////	特点：再看一遍h5+c3的视频
		特点：值类型：两个相同的值占用不同的空间，值是拷贝
			 引用类型：两个相同的值公用一块空间，只是有两个指针，引用是新建一个指针

	5.如何理解JSON
		答：JSON只不过是一个js对象而已，它也是一种数据格式
			JSON.stringify({a:10,b:20}) //把对象变为字符串
			JSON.parse('{"a":10,"b":20}')//把字符串变为对象


一、变量类型和计算
	1.变量类型
		1）值类型和引用类型
			值类型：
			引用类型：对象、数组、函数 (它保存的是一个地址，修改的是地址指向的内容)
		2）typeof 运算符 （它只能区分出值类型，除了function之外，它区分不了其他的引用类型  ）
				typeof undefined // undefined
				typeof 'abc' //string
				typeof 123 //number
				typeof true //boolean
				typeof {} //object
				typeof [] //object
				typeof null //object
				typeof console.log //function
	2.隐式类型转换


	3.变量计算
		1）值类型的计算
			强制类型转换
				字符串的拼接
					var a=100+10; //100
					var b=100+'10' ;//10010

				==运算符
					100=='100';//true
					0=='';//true
					null==undefined;//true

				if 语句
					var a=true ;  //true
					if(a){
						//....
					}

					var b=100;		//true
					if(b){
						//....
					}

					var c='';		//false
					if(c){
						//....
					}

				逻辑运算符
					console.log(10 && 0) //0
					console.log('' || 'abc') //abc
					console.log(!window.abc) //true

					//判断一个变量会被当做true还是false
					var a=100;
					console.log(!!a);

		2）引用类型的计算




-------------------------------------------------------------------
二、原型和原型链
	面试题
		1.如何准确判断一个变量是数组类型
		2.写一个原型链继承的栗子
		3.描述new一个对象的过程
		4.zepto(或其他框架)源码中是如何使用原型链的？
	知识点：
		1.构造函数（一般用new新建的函数就是构造函数）
			1）构造函数的函数名以大写字母开头
			function Foo(name,age){
				this.name=name;
				this.age=age;
				this.class='class-1';
				//return this;    //默认有这一行
			}
			var f=new Foo('zhangsan',20)
			// var f1 =new Foo('list',22) //创建多个对象

			2）构造函数新建对象的过程：
				创建一个新对象
				将构造函数的作用域赋给新对象，(因此this就指向了这个新对象)
				执行构造函数中的代码（为这个新对象添加属性）
				返回新对象

		2.构造函数-扩展
			var a={}其实是var a=new Object()的语法糖
			var a=[]其实是var a=new Array()的语法糖
			function Foo(){...}其实是var Foo=new Function()的语法糖
			使用instanceof判断一个函数是否是一个变量的构造函数

		3.原型规则和示例
			5条原型规则（原型规则是学习原型链的基础）
				1）所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了null之外）
					例如：
						var obj ={}; obj.a=100;
						var arr =[]; arr.a=100;
						function fn(){}
						fn.a=100
				2）所有的引用类型（数组、对象、函数），都有一个_proto_属性，属性值是一个普通的对象
													（_proto_隐式原型）
					例如：
						console.log(obj._proto_);
						console.log(arr._proto_);
						console.log(fn._proto_);

				3）所有的函数，都有一个prototype属性，属性值也是一个普通对象
								（prototype显式原型）
					例如：
						console.log(fn.prototype);

				4）所有的引用类型（数组、对象、函数），_proto_属性指向它的构造函数的"prototype"属性值
					例如：
						console.log(abj._proto_===Object.prototype)
				5）当视图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的_proto_(即它的构造函数的prototype)中寻找
					例如：
						//构造函数
						function Foo(name,age){
							this.name=name;
						}
						Foo.prototype.alertName=function(){
							alert(this.name);
						}
						//创建示例
						var f=new Foo('zhangsan')
						f.printName=function(){
							console.log(this.name);
						}
						//测试
						f.printName();
						f.alertName();

				6）遍历对象属性的时候使用 for in 但是，for in 会遍历对象所有属性，
					包括自身属性和继承来的属性
					如果想只遍历自身的属性可以使用如下方法：
						for ( var key in o ){
							if(o.hasOwnProperty(key)){
								console.log(key);
							}
						}

		4.原型链
			一个比较土的栗子：
			//动物
				function Animal(){
					this.eat = function(){
						console.log("animal eat");
					}
				}  
			//狗
				function Dog(){
					this.bark=function(){
						console.log("dog bark");
					}
				}
				Dog.prototype=new Animal();
			//哈士奇
				var hashiqi = new Dog();

			一个贴近工作的栗子：


		5.instanceof 
			使用instanceof判断一个对象是否属于一个构造函数
			console.log(dog instanceof Penson);//false

	面试题答案：
		1.如何准确判断一个变量是数组类型
			答：var arr = [];
				console.log(arr instanceof Array);//true
				注：typeof 无法判断引用类型
		2.写一个原型链继承的栗子
			一个比较土的栗子：
			//动物
				function Animal(){
					this.eat = function(){
						console.log("animal eat");
					}
				}  
			//狗
				function Dog(){
					this.bark=function(){
						console.log("dog bark");
					}
				}
				Dog.prototype=new Animal();
			//哈士奇
				var hashiqi = new Dog();

			一个贴近工作的栗子：
				
		3.描述new一个对象的过程
			1）创建一个新对象
			2）将构造函数的作用域赋给新对象（将this指向新对象）
			3）执行构造函数中的代码
			4）返回这个新对象
		4.zepto(或其他框架)源码中是如何使用原型链的？

					未完待续。。。。。。。慕课网js面试技巧 2-11 然后就没了
+++++++++++++++++++++++++++++++++++++++++++++++++
------------------------------------------------------------------------
作用域和闭包
	面试题
		1.说一下对变量提升的理解
		2.说明this几种不同是使用场景
		3.创建10个a标签，点击的时候弹出来对应的序号
		4.如何理解作用域
		5.实际开发中闭包的作用

	知识点：
		1.执行上下文
		2.this
		3.作用域
		4.作用域链
		5.闭包

		1.执行上下文
			console.log(a) //undefined
			var a=100;
			fn('zhangsan') //张三 20
			function fn(name){
				age=20;
				console.log(name,age);
				var age;
			}


			范围：一段 <script>或者一个函数
			1）全局：变量定义、函数声明（在一段<script>中）
			2）函数：变量定义、函数声明、this、arguments

			注意函数声明和函数表达式的区别:
				函数声明：
					function fn(){
						...
					}
				函数表达式：
					var a=function(){
						...
					}

					未完待续。。。。。。。观看慕课网c3+h5中js新增的内容变量和作用域，作用域链
+++++++++++++++++++++++++++++++++++++++++++++++++
		2.this
			this要在执行时才能确认值，定义时无法确认

				var a={
					name:'A',
					fn:function(){
						console.log(this.name);
					}
				};
				a.fn(); //this===a
				a.fn().call({name:'B'});//this==={name:'B'}
				var fn1=a.fn;
				fn1(); //this===window

			几种场景：
				1）作为构造函数执行
				2）作为对象属性执行
				3）作为普通函数执行
				4）call apple bind
				未完待续。。。。。。面试技巧的栗子
+++++++++++++++++++++++++++++++++++++++++++++++++++

		3.作用域
			1）js没有块级作用域
			2）只有函数作用域和全局作用域


			//无块级作用域
			if(true){
				var name='zhangsan';
			}
			console.log(name);

			//函数和全局作用域
			var a=100;
			function fn(){
				var a=200;
				console.log('fn',a);
			}
			console.log('global',a);
			fn();


		4.作用域链
			var a=100;
			function fn(){
				var b=200;

				//当前的作用域没有定义的变量，即'自由变量'
				console.log(a);
				console.log(b);
			}
			fn();

			//第二个栗子
			var a=100;
			function F1(){
				var b=200;
				function F2(){
					var c=300;
					console.log(a);//a是自由变量
					console.log(b);//b是自由变量
					console.log(c);
				}
				F2();
			}
			F1();

		5.闭包
			//栗子
				function F1(){
					var a=100;
					//返回一个函数（函数作为返回值）
					return function(){
						console.log(a);
					}
				}
				//f1得到一个函数
				var f1=F1();
				var a=200;
				f1();
		到目前为止还不知道闭包的概念，自己观察，也就是函数的return是个函数，函数的参数是个函数就叫闭包，
		并且无论在什么作用域下执行，它始终在自己父级作用域下查找，并不是在执行作用域下查找

		6.闭包的使用场景
			1）函数作为返回值（上一个例子）
			2）函数作为参数传递

	作用域面试题答案
		1.说一下对变量提升的理解
			变量和函数声明后的预解析，还有执行上下文的知识点
		2.说明this几种不同是使用场景
			1）作为构造函数执行
			2）作为对象属性执行
			3）作为普通函数执行
			4）call apply bind
		3.创建10个a标签，点击的时候弹出来对应的序号
			//未完待续。。。
			正确的写法：
			var i 
			for(i=0;i<10;i++){
				(function(i){
					var a=document.createElement('a')
					a.innerHTML=i +"<br/>"
					a.addEventListener("click",function(e){
						e.preventDefault()
						alert(i)
					})
					document.body.appendChild(a)
				})(i)
			}
			错误的写法：
			var i,a
			for(i=0;i<10;i++){
				a=document.createElement('a')
				a.innerHTML=i +"<br/>"
				a.addEventListener("click",function(e){
					e.preventDefault()
					alert(i)
				})
				document.body.appendChild(a)
			}
		4.如何理解作用域
		5.实际开发中闭包的作用
			闭包实际应用中主要用于封装变量，收敛权限
				function isFirstLoad(){
					var _list=[];
					return function (id){
						if(_list.indexOf(id)>=0){
							reture false;
						}
						else{
							_list.push(id);
							reture true;
						}
					}
				}

				var firstLoad=isFirstLoad();
				firstLoad(10) //true
				firstLoad(10) //false
				firstLoad(20) //true

----------------------------------------------------------------
异步和单线程
	1.面试题
		1）同步和异步的区别是什么？分别举一个同步和异步的例子
		2）一个关于setTimeout的笔试题
		3）前端使用异步的场景有哪些？
	2.知识点：
		1）什么是异步？（对比同步）

		2）前端使用异步的场景
		3）异步和单线程

		//栗子：
			console.log(100);
			setTimeout(function(){
				console.log(200);
			},1000)
			console.log(300);
			//这个程序一般按思路是：先打印100，等1s后打印200；然后再打印300
			//但是,这个程序却是先打印100然后打印300，等1s后才打印200
		同步会阻塞程序（就是延时的时候程序就停在那里）
		异步不会阻塞程序（遇见延时的程序时，先往下执行，等下面的程序都执行完，再回来执行延时程序）

			console.log(100);
			alert(200);
			console.log(300);
			这就是阻塞程序

	3.何时需要异步？
		1）在可能发生等待的情况
		2）等待过程中不能像alert一样阻塞程序运行
		3）因此，所有的“等待的情况”都需要异步
			1.定时任务：setTimeout,setInterval
			2.网络请求：ajax请求，动态<img>加载
			3.事件绑定





			//栗子：
				//ajax请求代码示例
				console.log('start')
				$.get('./data1.json',function(data1){
					console.log(data1);
				})
				console.log('end');

				//<img>加载示例
				console.log('start');
				var img=document.createElement('img');
				img.onload=function(){
					console.log('loaded');
				}
				img.src='/xxx.png';
				console.log('end');

				//事件绑定示例
				console.log('start');
				document.getElementById('btn1').addEventListener('click)',function(){
					alert('clicked')
				}
				console.log('end');

	4.单线程
		//栗子
			console.log(100);
			setTimeout(function(){
				console.log(200);
			})
			console.log(300);

			执行第一行，打印100
			执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行
			(单线程的特点，不能同时干两件事)
			执行最后一行，打印300
			待所有程序执行完，处于空闲状态时，会立马看有没有要暂存起来的要执行
			发现暂存起来的setTimeout中的函数无需等待时间，就立即执行


		碰到异步你就先把他拿出去，程序往后执行，等所有代码都执行完，再返回来执行异步的代码

		单线程就是只能从上往下执行，只有一条路，不能同时走
面试题答案
	1）同步和异步的区别是什么？分别举一个同步和异步的例子
		答。同步会阻塞代码执行，而异步不会
		alert是同步，setTimeout是异步
	2）一个关于setTimeout的笔试题
		console.log(1);
		setTimeout(function(){
			console.log(2);
		},0);
		console.log(3);
		setTimeout(function(){
			console.log(4)
		},1000);
		console.log(5);


	3）前端使用异步的场景有哪些？
		1.定时任务：setTimeout，setInterval
		2.网络请求：ajax请求，动态<img>加载
		3.事件绑定
--------------------------------------------------------
日期和Math
	面试题：
		1）获取2017-06-10格式的日期
		2）获取随机数，要求是长度一致的字符串格式
		3）写一个能遍历对象和数组的通用forEach函数
	知识点：
		1）日期
		2）Math
		3）数组API
		4）对象API

		1)日期：
			Date.now() //获取当前时间毫秒数
			var dt=new Date()
			dt.getTime()//获取毫秒数
			dt.getFullYear()//年
			dt.getMonth()//月 （0-11）
			dt.getDate()//日（0-31）
			dt.getHours()//小时（0-23）
			dt.getMinutes()//分钟（0-59）
			dt.getSeconds()//秒（0-59）
		2）Math
		3）数组API
			


----------------------------------------------------
DOM
	面试题:
		1）DOM是哪种基本的数据结构？
		2）DOM操作的常用API有哪些？
		3）DOM节点的attr和property有何区别？
	知识点：
		1）DOM的本质是什么？
		2）DOM节点操作
		3）DOM结构操作
		



----------------------------------------------------
JSON
	1.JSON JavaScript对象表示法
	2.json是存储和交换文本信息的语法，类似XML。它采用键值对的方式来组织，
		易于人们阅读和编写，同时也易于机器解析和生成
	3.JSON是独立于语言的，也就是说不管什么语言，都可以解析Json，只需要按照json
		的规则来就行
	4.json的格式
		{"name":"guojianfei"}







