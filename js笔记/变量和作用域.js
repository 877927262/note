1.基本类型和引用类型的区别：
	基本类型的值不可修改，例如：数值型，字符串型，布尔型……
	引用类型的值可以修改，例如：对象，数组……

	基本类型：
		不可修改
		保存在栈内存中
		按值访问
		比较时，值相等即相等
		复制时，创建一个副本
		按值传递参数
		用typeof检测类型
	引用类型：
		可以修改
		保存在堆内存中
		按引用访问
		比较时，同一引用才相等
		复制的其实是指针
		按值传递参数
		用instanceof检测类型


2.变量相等的比较




3.比较重要的一点
	js只有全局作用域和函数作用域，没有块级作用域
		举个栗子：在java中
		if(){
			int hehe=3;
		}
		hehe的作用域是花括号以内
		但是在js中
		if () {
			var hehe=3;
		}
		hehe这个变量的作用域却是全局，因为它没有块级作用域，只有函数作用域和全局作用域
		你可以这样声明：
		for (var i = 1; i >= 0; i++) {
		
		}
			























