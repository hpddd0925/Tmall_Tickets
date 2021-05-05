
//定时器
var timer = null;

//检测状态
function checkElementState(path,callback){
	var ele = document.querySelector(path);
	if(ele){
		callback && callback();
	}else{
		console.log('异步加载元素中....' + path );
		setTimeout( function(){checkElementState(path,callback);},200);
	}
}

function checkElementStateHL(path,callback){
	var ele = document.querySelector(path);
	if(ele){
		callback && callback();
	}else{
		console.log('异步加载元素中....' + path );
		setTimeout( function(){checkElementStateHL(path,callback);},200);
	}
}

//点击购买按钮
function clickBuy(){
	
	console.log('买！');
	
	//票的数量  如果还不可以购买，这个地方获取会失败 
	var amount = document.getElementsByClassName('mui-amount-increase')[0];
	amount && amount.click();  //+1
	
	var btnBuy = document.querySelector('');
	
}


//结算
function checkOut(){
	
	
	console.log('结算开始....');
	var btn = document.querySelector("#app > div > div > div:nth-child(2) > div > div.project-details-top.clearfix > div > div.left-details > div > div.submitState > button");
	if(btn){
		console.log(btn);
		btn.click();
		selectseat();
	}else{
		console.log('结算按钮没找到');
	}
	
}

function checkOutAsync(){
	checkElementState(".submitState",checkOut);
}

//提交订单
function selectseat(){
	
	console.log('选座开始....');
	checkElementState("#seatPos > div > div.front",function(){
	var seats = document.getElementsByClassName("icon-icon-seat");
	   // setTimeout(console.log('选座300'),300);
	if (seats.length<10){
		setTimeout( function(){selectseat();},200);
	}
		console.log(seats);
		var piao=0;
		if (seats){		   
		   for (var i=10;i<seats.length;i++){
			   console.log('选座loop开始....');
 			   console.log(piao);
			   if (seats[i].getAttribute("data")==0){
        			console.log(seats[i]);
					var clickEvent = document.createEvent("MouseEvents");	
		            var clickElement =seats[i];
		            clickEvent.initMouseEvent("mouseup",true,true);
		            clickElement.dispatchEvent(clickEvent);
					piao++;					
			    }
				if (piao >= 2)
					break;
		}
		if (piao>0)
			submitorder();
	}	
   })
}
function submitorder(){
	
	console.log('结账....');
	checkElementState("#target > div > div:nth-child(4) > button",function(){
	var btn = document.querySelector("#target > div > div:nth-child(4) > button");
	if(btn){
		console.log(btn);
		btn.click();
        payorderfirst();		
	}else{
		console.log('结账按钮没找到');
	}
   })
}

function payorderfirst(){
	
	console.log('first订单....');
	checkElementState("#app > div > div > div > div.frame-body.mg-t-30 > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > button",function(){
	var btn = document.querySelector("#app > div > div > div > div.frame-body.mg-t-30 > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > button")	
	if(btn){
		console.log(btn);
		btn.click();
		selectfirstperson();
	}else{
		console.log('没找到');
	}	
   })
}

function payorder(){
	
	console.log('提交支付订单....');
	checkElementState("#app > div > div > div > div.frame-body.mg-t-30 > div.text-right.pd-t-20.mg-b-50 > div.disFlex.hor-right.mg-t-20 > div > button",function(){
	var btn = document.querySelector("#app > div > div > div > div.frame-body.mg-t-30 > div.text-right.pd-t-20.mg-b-50 > div.disFlex.hor-right.mg-t-20 > div > button");	
	if(btn){
		console.log(btn);
		btn.click();		
	}else{
		console.log('没找到');
	}	
   })
}

function payordersec(){
	
	console.log('second订单....');
	checkElementState("#app > div > div > div > div.frame-body.mg-t-30 > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > button",function(){
	var btn = document.querySelector("#app > div > div > div > div.frame-body.mg-t-30 > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > button")	
	if(btn){
		console.log(btn);
		btn.click();
		selectsecperson();
	}else{
		console.log('没找到');
	}	
   })
}

function selectsecperson(){
	
	console.log('select the second person....');
	   	checkElementStateHL("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__body > div:nth-child(3) > div > div > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(2) > td.el-table_1_column_1.is-center > div > label > span.el-radio__input > input",function(){
		btn=document.querySelector("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__body > div:nth-child(3) > div > div > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(2) > td.el-table_1_column_1.is-center > div > label > span.el-radio__input > input");
		if(btn){
          console.log(btn);		  
		  btn.click();  
          checkElementStateHL("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__footer > div > div.c-btn",function(){
		  btn=document.querySelector("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__footer > div > div.c-btn");
		  if(btn){
		   console.log(btn);
		   btn.click(); 
           payorder();		   
	      }		
	     })		  
	    }
	  })
}

function selectfirstperson(){
	
	console.log('select the first person....');
	   	checkElementStateHL("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__body > div:nth-child(3) > div > div > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(1) > td.el-table_1_column_1.is-center > div > label > span.el-radio__input.is-checked > input",function(){
		btn=document.querySelector("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__body > div:nth-child(3) > div > div > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(1) > td.el-table_1_column_1.is-center > div > label > span.el-radio__input.is-checked > input");
		if(btn){
          console.log(btn);		  
		  btn.click();   
          checkElementStateHL("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__footer > div > div.c-btn",function(){
		  btn=document.querySelector("#app > div > div > div > div:nth-child(4) > div > div.el-dialog__footer > div > div.c-btn");
		  if(btn){
		   console.log(btn);
		   btn.click(); 
           payordersec();		   
	      }
		 })		  
	    }
	  })
}


//目标时间
	var dDate = new Date();  //10点和20点开抢
	if( dDate.getHours() < 12){
		dDate.setHours(10,51,59.2);
	}else{
		dDate.setHours(19,26,59.2);
	}
	
	//dDate.setSeconds( dDate.getSeconds() + 10 );
	
//进入时间判断循环
function enterTimeCheckLoop(callback){
	var date = new Date();
	
	
	
	
	var diff = Date.parse(dDate) - Date.parse(date) ;
	
	console.log(diff);
	
	if(diff < - 900 ){
		
		console.log('时间过了！');
		
	}else if(diff < 500 ) {

		callback && callback();
		
		console.log('时间到了！！！');
		
	}else{
		setTimeout(function(){ enterTimeCheckLoop(callback);},400);
		
		console.log('--');
	}
	
	
	
}


//主要函数
function main(){
	console.log('############################开始抢票############################');
	
	//debugger;
	
	var href = window.location.href;
	if(href.indexOf('https://www.polyt.cn/show/570989896687452160/2153/28349') > -1 ){
		//qianggou页面
		
		//进入时间判断
		enterTimeCheckLoop( checkOutAsync );
	
	
	}else if(href.indexOf('https://www.polyt.cn/choose/seat?') > -1 ){
		//xuanzuo页面
		console.log('main--');
		submitorder();
	}else if(href.indexOf('https://www.polyt.cn/order') > -1 ){
		//xuanzuo页面
		console.log('main--');
		payorder();
	}
	
	console.log('main  end--');
}


main();