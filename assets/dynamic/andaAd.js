window.AndaAdJs = function(){
	var pthis = this;
	// 浏览器类型版本
	this.browserVersion = function(){
		var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; // 判断是否Opera浏览器
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera ; // 判断是否IE浏览器
		var isFF = userAgent.indexOf("Firefox") > -1 ; // 判断是否Firefox浏览器
		var isSafari = userAgent.indexOf("Safari") > -1 ; // 判断是否Safari浏览器
		if(isIE){
			var IE5 = IE55 = IE6 = IE7 = IE8 = false;
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			IE55 = fIEVersion == 5.5 ;
			IE6 = fIEVersion == 6.0 ;
			IE7 = fIEVersion == 7.0 ;
			IE8 = fIEVersion == 8.0 ;
			if(IE55){ return "IE55"; }
			if(IE6){ return "IE6"; }
			if(IE7){ return "IE7"; }
			if(IE8){ return "IE8"; }
		}// isIE end
		if(isFF){ return "FF"; }
		if(isOpera){ return "Opera"; }
	}
	
	// //获取对象
	this.$ = function(id){
		if(document.getElementById){return eval('document.getElementById("'+id+'")')}else{return eval('document.all.'+id)}
	};
	// 获取cookie
	this.getAdCookie = function(N){
		var c=document.cookie.split("; ");
		for(var i=0;i<c.length;i++){var d=c[i].split("=");if(d[0]==N)return unescape(d[1]);}
		return "";
	};
	// 设置cookie
	this.setAdCookie = function(N,V,Q,D){
		var L=new Date();
		var z=new Date(L.getTime()+Q*60000);
		var tmpdomain = "";
		if(typeof(D)!="undefined"){if(D){tmpdomain="domain=sina.com.cn;";}}
		document.cookie=N+"="+escape(V)+";path=/;"+tmpdomain+"expires="+z.toGMTString()+";";
	};
	// 日期判断函数
	this.compareDate = function(type,d){
	  try{
			var dateArr = d.split("-");
			var checkDate = new Date();
			checkDate.setFullYear(dateArr[0], dateArr[1]-1, dateArr[2]);
			var now = new Date();
			var nowTime = now.getTime();
			var checkTime = checkDate.getTime();
			if(type=="after"){          
			  if(nowTime >= checkTime){return true;}
			  else{return false;}
			}		
			else if(type=="before"){
			  if(nowTime <= checkTime){return true;}
			  else{return false;}
			}
	  }catch(e){return false;}
	};
	// 获取时间对象
	this.strToDateFormat = function(str,ext){
		var arys = new Array();
		arys = str.split('-');
		var newDate = new Date(arys[0],arys[1]-1,arys[2],arys[3],0,0);
		if(ext){newDate = new Date(newDate.getTime()+1000*60*60*24);}
		return newDate;
	 };
	// 时间区间检查
	this.checkTime = function(begin,end){
	  var td = new Date();
	  var flag = (td>=pthis.strToDateFormat(begin,false) && td<pthis.strToDateFormat(end,begin==end?true:false))?true:false;
	  return flag;
	};
	// 外部事件加载
	this.addEvent = function(obj,event,func){
	  var MSIE=navigator.userAgent.indexOf("MSIE");
	  var OPER=navigator.userAgent.indexOf("Opera");
	  if(document.all && MSIE!=-1 && OPER==-1){
		obj.attachEvent("on"+event,func);
	  }else{
		obj.addEventListener(event,func,false);
	  }
	};	
	// PNG透明函数
	this.correctPNG = function(){
		var arVersion = navigator.appVersion.split("MSIE");
		var vs = parseFloat(arVersion[1]);
		if ((vs >= 5.5) && (document.body.filters)){ 
		   for(var j=0; j<document.images.length; j++){ 
			  var img = document.images[j];
			  var imgName = img.src.toUpperCase(); 
			  if (imgName.substring(imgName.length-3, imgName.length) == "PNG"){ 
				 var imgID = (img.id) ? "id='" + img.id + "' " : "";
				 var imgClass = (img.className) ? "class='" + img.className + "' " : "";
				 var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
				 var imgStyle = "display:inline-block;" + img.style.cssText;
				 if (img.align == "left"){imgStyle = "float:left;" + imgStyle}
				 if (img.align == "right"){imgStyle = "float:right;" + imgStyle}
				 if (img.parentElement.href){imgStyle = "cursor:hand;" + imgStyle}
				 var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
				 img.outerHTML = strNewHTML;
				 j = j-1;
			  } 
		   } 
		}     
	};
	this.isSWF = function(str){
		return str.match(/[\d|\D]*(swf)$/ig) != null;
	};
	this.isIMG = function(str){
		return str.match(/[\d|\D]*(jpg|jpeg|jpe|gif|bmp|pbm|pgm|ppm|pnm|pfm|tiff|tif|png)$/ig) != null;
	};
	document.write("<style>.closeButton{cursor:pointer;display:block;overflow:hidden;text-indent:-9999em;background:url(/dynamic/close.gif) no-repeat 0 0;height:22px;width:22px;}</style>");
}
var _AndaAdJs = new AndaAdJs();

// 矩形横幅广告
if(typeof(BannerAd) != "function"){
window.BannerAd = function(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom){
	var _parentBox = _AndaAdJs.$(div_id);
	this.displayAll = false;
	this.date = new Date();
	this.pwidth = pwidth;
	this.pheight = pheight;
	this.pzindex = pzindex;
	if(!( pbg == null ||pbg == "null" ||pbg == "" || pbg == undefined || pbg == 0)){		
		_parentBox.style.background = pbg;
	}
	if(isNaN(parseInt(ctype)) || parseInt(ctype) < 0 || parseInt(ctype) > 2){
		if(ctext!=null&&ctext != ""&&ctext!="null"){
			this.ctype = 2;			
		}else{			
			if(_AndaAdJs.isSWF(file)){
				this.ctype = 1;
			}else if(_AndaAdJs.isIMG(file)){
				this.ctype = 0;
			}else{
				_parentBox.style.display = "none";
			}
		}
	}else{
		this.ctype = ctype;
	}
	if(!(showtime == "" || showtime == null || showtime == undefined || showtime == 0||showtime == "null")){		
		var _timeout = setTimeout(function(){
			_parentBox.style.display = "none";
		},showtime);
		
	}
	this.tourl = tourl;
	this.ctext = ctext;
	this.strToDate = function(str,ext){
		var arys = new Array();
		arys = str.split(' ');
		arys[0] = arys[0].split('-');
		arys[1] = arys[1].split(':');
		var newDate = new Date(arys[0][0],arys[0][1]-1,arys[0][2],arys[1][0],arys[1][1],arys[1][2]);
		if(ext){			
			newDate = new Date(newDate.getTime()+1000*60*60*24);
		}
		return newDate;
	};
	this.begintime = this.strToDate(begintime);
	this.endtime =  this.strToDate(endtime);
	this.file = file;
	this.alt = alt;
	this.color = color;
	// 判断是否为有效期：
	if(this.date > this.endtime || this.date < this.begintime){
		_parentBox.style.display = "none";
	}else{
		this.displayAll = true;
		_parentBox.innerHTML = getAd(this.pwidth,this.pheight,this.ctype,this.tourl,this.ctext,this.begintime,this.endtime,this.file,this.alt,this.color);
	}
}
}
// 漂浮广告
if(typeof(FloatingAd) != "function"){
var delay = 8;
var _pause = true;
window.FloatingAd = function(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom){
	var pthis = this;
	var _parentBox = _AndaAdJs.$(div_id);
	_parentBox.style.display = "";
	_parentBox.style.zIndex = "99999";
	if(_AndaAdJs.browserVersion() == "IE6"){
		_parentBox.style.position = "absolute";	
	}else{		
		_parentBox.style.position = "fixed";
	}
	_parentBox.style.left = 0;
	_parentBox.style.top = 0;
	_parentBox.style.paddingTop = 20+"px";
	var _BannerAd = new BannerAd(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom);
	if(_BannerAd.displayAll){
		var _closeId = div_id+'close';
		var _str = '<div style="position:absolute;right:-2px;top:0;"><span class="closeButton" id="'+_closeId+'"></span></div>';
		_parentBox.innerHTML += _str;
		// 移动代码
		var step = 1;// 步长
		var xPos = 0;
		var yPos = 0;
		var yon = 1;
		var xon = 1;
		var width = parseInt(document.documentElement.clientWidth);
		var height = parseInt(document.documentElement.clientHeight);
		var Hoffset = _parentBox.offsetHeight;
		var Woffset = _parentBox.offsetWidth;
		this.changePos = function(){
			if(_AndaAdJs.browserVersion() == "IE6"){
				_parentBox.style.left = (xPos + document.documentElement.scrollLeft+document.body.scrollLeft) + "px";
				_parentBox.style.top = (yPos + document.documentElement.scrollTop+document.body.scrollTop) + "px";
			}else{
				_parentBox.style.left = (xPos)+"px";
				_parentBox.style.top = (yPos) + "px";	
			}
			if (yPos < 0){
				yon = 1;
				yPos = 0;
			}
			if (yPos >= (height - Hoffset)){
				yon = -1;
				yPos = (height - Hoffset);
			}
			if (xPos < 0){
				xon = 1;
				xPos = 0;
			}
			if (xPos >= (width - Woffset)){
				xon = -1;
				xPos = (width - Woffset);
			}	
			yPos += yon*step;
			xPos += xon*step;		
		}
		this.start = function(){
			window._interval = setInterval(pthis.changePos,delay);
		}
		this.pause = function(){
			if(_pause){
				clearInterval(window._interval);
				pause = false;
			}else{
				window._interval = setInterval(pthis.changePos,delay);
			}
		}
		_AndaAdJs.addEvent(_AndaAdJs.$(_closeId),"click",function(){
			_parentBox.style.display = "none";
		});
		_AndaAdJs.addEvent(_parentBox,"mouseover",function(){
			pthis.pause();
		});
		_AndaAdJs.addEvent(_parentBox,"mouseout",function(){
			pthis.start();
		});	
		this.start();
	}else{}
}
}
// 固定位置广告
if(typeof(FixedAd) != "function"){
var flag;
window.FixedAd = function(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom){
	var pthis = this;
	var _parentBox = _AndaAdJs.$(div_id);
	var _BannerAd = new BannerAd(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom);
	if(_BannerAd.displayAll){
		var _closeId = div_id+'close';
		var _str = '<div style="position:absolute;right:0;top:0;"><span class="closeButton" id="'+_closeId+'">关闭</span></div>';
		_parentBox.innerHTML += _str;
		_parentBox.style.paddingTop = 20+"px";
		if(ptop != null && pleft != null){		
			this.ptop = ptop;
			this.pleft = pleft;
			flag = 0;
		}
		if(ptop != null && pright != null){
			this.ptop = ptop;
			this.pright = pright;
			flag = 1;
		}	
		if(pbottom != null && pright != null){
			this.pbottom = pbottom;
			this.pright = pright;
			flag = 2;
		}
		if(pbottom != null && pleft != null){
			this.pbottom = pbottom;
			this.pleft = pleft;
			flag = 3;
		}
		this.ie6fixed = function(){
			_parentBox.style.position = "absolute";
			_parentBox.style.right = 0;		
			switch(flag){
				case 0 : 
					_parentBox.style.top = ((document.body.scrollTop||document.documentElement.scrollTop) + this.ptop);
					_parentBox.style.left = ((document.body.scrollLeft||document.documentElement.scrollLeft) + this.pleft);	
					break;
				case 1 : 
					_parentBox.style.top = ((document.body.scrollTop||document.documentElement.scrollTop) + this.ptop);
					_parentBox.style.left = ((document.body.scrollLeft||document.documentElement.scrollLeft) + document.documentElement.clientWidth - _parentBox.offsetWidth - this.pright);	
					break;
				case 2 : 
					_parentBox.style.top = ((document.body.scrollTop||document.documentElement.scrollTop) + document.documentElement.clientHeight - _parentBox.offsetHeight - this.pbottom);
					_parentBox.style.left = ((document.body.scrollLeft||document.documentElement.scrollLeft) + document.documentElement.clientWidth - _parentBox.offsetWidth - this.pright);	
					break;
				case 3 : 
					_parentBox.style.top = ((document.body.scrollTop||document.documentElement.scrollTop) + document.documentElement.clientHeight - _parentBox.offsetHeight - this.pbottom);
					_parentBox.style.left = ((document.body.scrollLeft||document.documentElement.scrollLeft) + this.pleft);	
					break;
				default:
					_parentBox.style.top = ((document.body.scrollTop||document.documentElement.scrollTop) + document.documentElement.clientHeight - _parentBox.offsetHeight)+"px";
					_parentBox.style.left = ((document.body.scrollLeft||document.documentElement.scrollLeft) + document.documentElement.clientWidth - _parentBox.offsetWidth);	
				
			}
		}
		if(_AndaAdJs.browserVersion() == "IE6"){
			pthis.ie6fixed();
			_AndaAdJs.addEvent(window,"scroll",function(){
				pthis.ie6fixed();
			});		
		}else{
			_parentBox.style.position = "fixed";
			switch(flag){
				case 0 : 
					_parentBox.style.top = this.ptop+'px';
					_parentBox.style.left = this.pleft+'px';	
					break;
				case 1 : 
					_parentBox.style.top = this.ptop+'px';
					_parentBox.style.right = this.pright+'px';	
					break;
				case 2 : 
					_parentBox.style.bottom = this.pbottom+'px';
					_parentBox.style.right = this.pright+'px';	
					break;
				case 3 : 
					_parentBox.style.bottom = this.pbottom+'px';
					_parentBox.style.left = this.pleft+'px';	
					break;
				default:
					_parentBox.style.bottom =0+'px';
					_parentBox.style.right = 0+'px';			
			}
		}
		_AndaAdJs.addEvent(_AndaAdJs.$(_closeId),"click",function(){
			_parentBox.style.display = "none";
		});
	}else{}
}
}

// 对联广告：
if(typeof(CoupletAd) != "function"){
window._interval2;
var delta = 0.1;
// div_id, pwidth, pheight, pzindex, pbg, ctype(0图片1动画2文字), showtime, tourl,
// ctext, begintime, endtime, file, alt, color, ptop, pright, pleft, pbottom
window.CoupletAd = function(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom){
	var pthis = this;
	var _parentBox = _AndaAdJs.$(div_id);
	var _adArray = [];
	var _BannerAd = new BannerAd(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color);
	if(_BannerAd.displayAll){
		var _closeId = div_id+'close';
		var _leftId = div_id+'leftAd';
		var _rightId = div_id+'rightAd';
		var _innerHTML = _parentBox.innerHTML;
		ptop == '' || ptop == null || ptop == undefined ? this.ptop = 50 : this.ptop = ptop;
		var leftAd = '<div id="'+_leftId+'" style="position:absolute;left:0px;top:'+this.ptop+'px;padding-top:20px;">'+'<div style="position:absolute;right:0;top:0;"><span class="closeButton" id="'+_closeId+'1">关闭</span></div>'+_innerHTML+'</div>';
		var rightAd = '<div id="'+_rightId+'" style="position:absolute;right:0;top:'+this.ptop+'px;padding-top:20px;">'+'<div style="position:absolute;right:0;top:0;"><span class="closeButton" id="'+_closeId+'2">关闭</span></div>'+_innerHTML+'</div>';
		document.write(leftAd);
		document.write(rightAd);
		var leftAdObject = _AndaAdJs.$(_leftId);
		var rightAdObject = _AndaAdJs.$(_rightId);
		_adArray = [leftAdObject,rightAdObject];
		this.play = function(){
			for(var i=0;i<_adArray.length;i++){
				var followObj = _adArray[i];
				if(followObj.offsetTop != parseInt(document.body.scrollTop+document.documentElement.scrollTop+pthis.ptop)){				
					var dy=parseInt(document.body.scrollTop+document.documentElement.scrollTop+pthis.ptop-followObj.offsetTop)*delta;
					dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));
					followObj.style.top=(followObj.offsetTop+dy)+"px";
				}
			}
		}
		_interval2 = setInterval(pthis.play,2);
		_AndaAdJs.addEvent(_AndaAdJs.$(_closeId+"1"),"click",function(){
			leftAdObject.style.display = "none";
			rightAdObject.style.display = "none";
			clearInterval(window._interval2);
		});
		_AndaAdJs.addEvent(_AndaAdJs.$(_closeId+"2"),"click",function(){
			leftAdObject.style.display = "none";
			rightAdObject.style.display = "none";
			clearInterval(window._interval2);
		});
	}else{}
}
}


// 弹出小窗口广告
if(typeof(WindowAd) != "function"){
var flag;
window.WindowAd = function(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom){
	var pthis = this;
	var _parentBox = _AndaAdJs.$(div_id);
	var _BannerAd = new BannerAd(div_id,pwidth,pheight,pzindex,pbg,ctype,showtime,tourl,ctext,begintime,endtime,file,alt,color,ptop,pright,pleft,pbottom);
	if(ptop==null){
		ptop=((document.body.scrollTop||document.documentElement.scrollTop) + document.documentElement.clientHeight - _parentBox.offsetHeight - pbottom);
	}	
	if(pleft==null){
		pleft=((document.body.scrollLeft||document.documentElement.scrollLeft) + document.documentElement.clientWidth - _parentBox.offsetWidth - pright);	
	}
	var openWindow=window.open("", "newwin", "height="+pheight+", width="+pwidth+",top="+ptop+",left="+pleft+",toolbar=no,scrollbars=no,resizable=no,menubar=no,status=no,location=no,titlebar=no,z-look=yes,alwaysRaised=yes");
	openWindow.document.write(_parentBox.innerHTML);
	if(showtime!=null&&showtime!=""){
		openWindow.document.write("<style>*{padding:0;margin:0;}</style><script>setTimeout(\"self.close()\","+showtime+"); </script>");// 毫秒
	}
	openWindow.document.close();
}
}