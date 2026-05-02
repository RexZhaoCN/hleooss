AOS.init({
	disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 150, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
//头部导航滑动
$(window).scroll(function () {
	var winHeight = $(this).scrollTop();
	if (winHeight > 0) {
		$('#header').addClass('xg');
		// $(".header_box #logo img").attr('src', 'images/logo2.png')
	} else {
		$('#header').removeClass("xg");
		// $(".header_box #logo img").attr('src', 'images/logo.png')
	}
});
$(window).scroll(function() {
	if ($(this).scrollTop()>100){
		$("#gotop").removeClass("hide");
	}else{
		$("#gotop").addClass("hide");
	};
});
$(window).scroll(function () {
    var elemTop = $('.footer').offset().top;
    var scrollTop = $(window).scrollTop() - 100;
    if (scrollTop + $(window).height() > elemTop) {
        $('.footer').addClass('on')
    }
});

$(window).scroll(function () {
	var scrollPos=$(window).scrollTop(); 
	if(scrollPos >600){
		$(".rightFix").fadeIn();
	  }else{
		$(".rightFix").fadeOut(); 
	  }
	})

	$(".totop").click(function () {
		$('body,html').animate({ scrollTop: 0 }, 500);
		return false;
		});

// 地图导航

// $(".nav-btn").click(function(){
// 	// $(this).find(".rd-navbar-toggle").toggleClass("active");
// 	$("body").toggleClass("show");
// });

$('.dropdown a').on('click', function(event){
	if($(this).parent().find(".navshow").css('display') != "block"){
		$('.navshow').slideUp();
	}
	$(this).toggleClass("on")
	$(this).parent().find(".navshow").slideToggle();
});



$('.nav-btn,#nav_btn_box').on('click', function(event){
	event.preventDefault();
	toggleNav();
});

$('.header-menu-show .close-1').on('click', function(event){
	event.preventDefault();
	toggleNav(false);
});
function toggleNav(bool) {
	$('body').toggleClass('no-touch', bool);
}


$('.header-nav-show-mark').on('click', function(event){
	event.preventDefault();
	toggleNav(false);
});


$("#bnt_sub_nav").click(function(){
	$(this).toggleClass("on");
		$("#sub_nav_content").slideToggle();
	});

$("#sub_nav_content dt.title a").attr("href","javascript:void(0)");
$("#sub_nav_content dt.title_on").next("dd").show();
$("#sub_nav_content dt.title").click(function() {
	if ($(this).hasClass("title_on")) {
		$(this).next("dd").slideToggle();
		$(this).removeClass("title_on");
	} else {
		$("#sub_nav_content dd").slideUp();
		$("#sub_nav_content dt.title").removeClass("title_on").removeClass("on");
		$(this).toggleClass("title_on");
		$(this).next("dd").slideDown();
	}
});


//搜索框

$('.search_btn').on('click',function(){
	$('.search-dialog-box').toggleClass("on");
});

$('.search-dialog-box .pub-close').on('click',function(){
	$('.search-dialog-box').removeClass("on");
});
$(".input").click(function (event) {
	event.stopPropagation();
});
 // 视频弹框
 $(document).on("click", ".list_vtc", function (e) {
	var video_s = $(this).attr("data-video");
	$('#videobox video').attr("src", video_s);
	$(".vwrap").fadeIn();
});

$(".vwrap .close").click(function () {
	$(".vwrap").hide();
	$('#videobox video').attr("src", '');
});

// $('.search-dialog-box .pub-close').on('click', function () {
// 	$('.search-dialog-box').removeClass("on");
// });

//移动端导航
$(".list_box_nav_mobile>li i").click(function () {
	$(this).parents(".list_box_nav_mobile>li").find(".list").slideToggle();
	$(this).parents(".list_box_nav_mobile>li").toggleClass("on1");
	$(this).parents(".list_box_nav_mobile>li").siblings().find(".list").slideUp();
	$(this).parents(".list_box_nav_mobile>li").siblings().removeClass("on1");
});

$("#nav_btn_box").click(function () {
	$("#nav_btn_box .point").toggleClass("on");
	$("#nav_btn_box").toggleClass("on");
	$("#m_nav").toggleClass("act");
	$(".nav_mask").fadeToggle();
});

$(".nav_mask").click(function () {
	$("#nav_btn_box .point").removeClass("on");
	$("#nav_btn_box").removeClass("on");
	$(this).fadeToggle();
	$(".nav_btn_box").removeClass("act");
	$("#m_nav").removeClass("act");
})

$("#m_nav .close").click(function () {
	$("#nav_btn_box .point").removeClass("on");
	$("#nav_btn_box").removeClass("on");
	$(".nav_btn_box").removeClass("act");
	$("#m_nav").removeClass("act");
	$(".nav_mask").fadeOut();
});

//下拉菜单

$(".select h2").click(function(){
	$(this).next('ul').slideToggle()
	$(this).toggleClass('on')
	$(this).parent().siblings().find('ul').slideUp()
	$(this).parent().siblings().find('h2').removeClass('on')
   })
   $("body").click(function(e){
	var target = $(e.target);
	 if(target.closest(".select h2").length != 0) return;
	 $(".select h2").removeClass('on');
	 $(".select ul").slideUp()
 })

// 手机下二级导航
$(".ejlm h2").click(function (e) {
	$(this).next('ul').slideToggle();
	// $(document).one("click", function(){
	// $(".ejlm ul").slideUp();
	// });
	// e.stopPropagation();
})
$(".wrap_ph h3 i").click(function () {
	$(this).toggleClass("on");
	$(this).parent("h3").next('.box').slideToggle();

});

$(function(){
	//首页轮播
	var spanNum=$(".ban-dot .swiper-pagination span").length;
	var Height=$(".ban-dot .swiper-pagination span").height();
	var spanHeight=(Height+2)*spanNum;
	$(".ban-dot").css("margin-top",-(spanHeight/2));
	
	//list新闻列表左侧选择
	var _href=window.location.pathname;
	var h2 = $(".yincang_local>a:last-child").attr("href");
	var h4 = $(".yincang_local>a:nth-child(3)").attr("href");
	var h5 = $(".yincang_local>a:nth-last-child(2)").attr("href");

	$(".menu>ul>li").each(function(){      
		var h = $(this).children("a").attr("href");
		var h3="https://"+ window.location.host + h;
		/*alert(h3);*/
        if(_href==h || h3==h2 || h3==h4 ){
			 
		    $(".menu>ul>li").removeClass("on");
			$(this).addClass("on");
		}		
	});
console.log(h2)
	// 科技与技术  //新闻上方三级导航选择
	$(".sjMenu>ul>li").each(function(){
		var h = $(this).children("a").attr("href");
		var h3="https://"+ window.location.host + h;

		if(_href==h || h3==h2 || h==h5){
			$(".sjMenu>ul>li").removeClass("active");
			$(this).addClass("active");
		}
	})
});



//三级导航
$(".wrap_ph li img").click(function (e) {
	$(this).parent().next('.san-wrap').slideToggle();
});

$("#sub_nav_content dt.title a").attr("href","javascript:void(0)");
$("#sub_nav_content dt.title_on").next("dd").show();
$("#sub_nav_content i").click(function() {
	    $(this).toggleClass("on");
		$(this).parents("h3").next(".box").slideToggle();
	
});


function weasel() {
    var t = $(".foot-top")
      , s = t.find(".slot")
      , e = s.find(".slot-track")
      , i = s.find(".slot-item")
      , a = t.width() / e.length * 5
      , o = null
      , n = 0
      , r = 0;
    function l() {
        var t = (new Date).valueOf();
        e.each(function(t, e) {
            var i = $(this)
              , o = i.find(".slot-item")
              , n = function(t) {
                var e = 0
                  , i = t.offset().left;
                for (; t; )
                    e += i,
                    t = null;
                return e
            }(i) + i.width() / 2
              , i = Math.abs(r - n);
            a < i && (i = a);
            n = 87 * Math.abs(i / a),
            i = o.position().top / s.height() * 100;
            i += (n - i) / 2,
            TweenMax.set(o, {
                y: i + "%",
                top: 0
            })
        }),
        t - n < 1e3 && (o = requestAnimationFrame(l))
    }
    s.on("mousemove.move", function(t) {
        r = t.clientX,
        cancelAnimationFrame(o),
        o = requestAnimationFrame(l),
        n = (new Date).valueOf()
    }),
    s.on("mousemove.out", $.debounce(1500, function() {
        cancelAnimationFrame(o),
        i.removeAttr("style")
    }))
}


$(function() {
		function t() {
				$(".foot-top .slot .slot-track").each(function() {
						var t = $(this)
							, e = t.data("imgsrc");
						t.find(".icon").size() && t.addClass("slot-icon"),
						t.on("mouseenter click", function() {
								t.find(".icon").size() && ("" != e ? ($(".foot-top .qrimg img").attr({
										src: e
								}),
								console.log($(".foot-top .qrimg").outerWidth()),
								setTimeout(function() {
										$(".foot-top .qrimg").addClass("show").css({
												left: t.offset().left - $(".foot-top .qrimg").outerWidth() / 2 + t.width() / 2
										})
								}, 100)) : setTimeout(function() {
										$(".foot-top .qrimg").removeClass("show")
								}, 100))
						})
				}),
				$(".foot-top .slot .slot-icon").mouseleave(function() {
						setTimeout(function() {
								$(".foot-top .qrimg").removeClass("show")
						}, 100)
				})
		}
		-1 == window.navigator.userAgent.indexOf("MSIE") && 1024 < $(window).width() && weasel(),
		$(".foot-top .m-show").slick({
				autoplay: !1,
				arrows: !0,
				dots: !1,
				slidesToShow: 8,
				responsive: [{
						breakpoint: 767,
						settings: {
								slidesToShow: 3
						}
				}]
		}),
		t(),
		getWH(),
		$(window).resize(function() {
				t()
				getWH()
		})
		
		$('.scroll-top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
		$('html,body').animate({scrollTop: '0px'}, 0);
		
		// 列表是否显示图片
		$(".list-item>li").each(function(i,e){
			let img_src = $(this).find(".list-item-img img").attr("src")
			if(img_src) $(this).addClass("list-item-imgs")
		});
		
		function getWH(){
					
					/*大事记*/
					var dsjH = $(".dsj2-con-bg").height();
					var dsjBotomH = ''
					console.log(dsjH)
					var dsjList = []
					// var dsjConList={}
					// $(".dsj2-con-con-item-list p").each(function(i,e){
					//	var lanmuUrl= $(this).attr("lanmuUrl");
					//	var data_url= $(this).attr("data_url");
					//	var contentTile= $(this).attr("contentTile");
					//	var dsjHtml = $(this).html();
					//	if(dsjConList[lanmuUrl] && dsjConList[lanmuUrl].length>0){
					//		dsjConList[lanmuUrl].push({data_url : data_url, contentTile : contentTile , lanmuUrl : lanmuUrl, html : dsjHtml});
							
					//	}else{
					//		dsjConList[lanmuUrl]=[{data_url :data_url, contentTile: contentTile , lanmuUrl : lanmuUrl, html : dsjHtml}];
					//	}
						
					// })
           var dsjConList = {};
					   
					               // 填充 dsjConList
					               $(".dsj2-con-con-item-list p").each(function(i, e) {
					                   var lanmuUrl = $(this).attr("lanmuUrl");
					                   var data_url = $(this).attr("data_url");
					                   var contentTile = $(this).attr("contentTile");
					                   var dsjHtml = $(this).html();
					                   
					                   // 提取起始年份
					                   var startYearMatch = contentTile.match(/(\d{4})(?:-\d{4})?/);
					                   var startYear = startYearMatch ? parseInt(startYearMatch[1]) : null;
					   
					                   if (dsjConList[startYear] && dsjConList[startYear].length > 0) {
					                       dsjConList[startYear].push({ data_url: data_url, contentTile: contentTile, lanmuUrl: lanmuUrl, html: dsjHtml });
					                   } else {
					                       dsjConList[startYear] = [{ data_url: data_url, contentTile: contentTile, lanmuUrl: lanmuUrl, html: dsjHtml }];
					                   }
					               });
					   
					               // 按照起始年份排序
					               var sortedYears = Object.keys(dsjConList).map(Number).sort(function(a, b) {
					                   return a - b;
					               });
					   
					               // 将排序后的项目插入到 .dsj2-con-con 中
					               var container = $(".dsj2-con-con");
					               sortedYears.forEach(function(year) {
					                   dsjConList[year].forEach(function(item) {
										   var isInterval = item.contentTile.includes("-");
										   var smallFontClass = isInterval ? "small-font" : "";
					                       container.append('<p data_url="' + item.data_url + '" contentTile="' + item.contentTile + '" lanmuUrl="' + item.lanmuUrl + '">' + item.html + '</p >');
					                   });
					               });
					   
					              
					var conHtml = "";
					var dsjconItem="";
					for(var v in dsjConList){
						var PListhtml = "<div class='dsj2-con-con-item'>"
						var htmlTop ="<div class='dsj2-con-con-item-top'><p></p><ul>"
						var htmlBottom="<div class='dsj2-con-con-item-bottom'><p></p><ul>"
						var len =dsjConList[v].length;
						dsjConList[v].forEach((e ,j) => {
							var liClass = ''
							if(j%2 == 0){
								liClass = 'dsj2-con-con-item-left'
							}else{
								liClass = 'dsj2-con-con-item-right'
							}
							var html = ''
							if(e.data_url){
								html = "<li class='"+liClass+"'><a href='"+e.data_url+"'><span>"+e.html+"</span></a></li>"
							}else{
								html = "<li class='"+liClass+"'><a><span>"+e.html+"</span></a></li>"
							}
							console.log(j,len)
							if(j< 2 || j< len/2-1){
								htmlTop = htmlTop + html
							}else{
								htmlBottom = htmlBottom + html
							}
						});
						
						htmlTop = htmlTop + "</ul></div>"
						htmlBottom =htmlBottom + "</ul></div>"
						PListhtml=PListhtml+htmlTop+htmlBottom+"</div>"
						conHtml =conHtml + PListhtml;
						if(dsjConList[v].length > 0){
						 	dsjconItem=dsjconItem+"<div class='dsj2-con-item'><div class='dsj2-con-item-year'><div></div><p></p>"+dsjConList[v][0].contentTile+"</div></div>"
							
						}
						
						
					}
					
					$(".dsj2-con-con").empty()
					$(".dsj2-con-con").append(conHtml);
					$(".dsj_year").empty()
					$(".dsj_year").append(dsjconItem);
					var dsjW=$(".dsj2-con .dsj2-con-item").width();
					var dsjW1=$(".dsj2-con-item-year").width();
					var dsjW2 = parseInt(dsjW - dsjW1);
					$(".dsj2-con-lines .dsj2-con-line").css("width",dsjW2);
					$(".dsj2-con-lines .dsj2-con-line:first-child").css("width",dsjW2/2);
					$(".dsj2-con-lines .dsj2-con-line:last-child").css("width",dsjW2/2-8*0.7);
					
					$(".dsj2-con-con-item").each(function(i,e){
						var dsjH1 =$(this).find(".dsj2-con-con-item-top").height();
						var dsjH2 = $(this).find(".dsj2-con-con-item-bottom").height();
						dsjBotomH = Math.max(dsjBotomH,dsjH1,dsjH2)
						
					})
					$(".dsj2-con-con").css("height", (dsjBotomH+8+30)*2+dsjH)
					$(".dsj2-con-con-item-top").css("marginBottom",dsjH+8);
					
					$(".dsj2-con-con-item").each(function(i,e){
						var dsjH3 = $(this).find(".dsj2-con-con-item-top").height()
						$(this).find(".dsj2-con-con-item-top").css("marginTop",dsjBotomH-dsjH3 + 4);
					})
					
					var w=document.body.clientWidth;
					var wideScreen = false;	
					if(w <= 1200){
						// logo
						var logoH1 = $(".m_header_box header #logo").height()
						$(".m_header_box header #logo").css("width",logoH1 * 2.83)
						var logoH2 = $(".swiper-pagination").height()
						$(".ban-dot").css("marginTop",-logoH2 / 2)
						var logoW1 = $(".main-visual-wrapper").width()
						$(".main-visual-wrapper").css("height",logoW1 * 0.488)
						$(".swiper-box1 .imged").css("paddingBottom",logoW1 * 0.488)
						if(w <= 768){
		
							// 大事记
							$(".dsj2-con-bg .dsj2-con-item:eq(0) .dsj2-con-item-year").addClass("active")
							$(".dsj2-con-con .dsj2-con-con-item:eq(0)").show()
							$(".dsj2-con-bg .dsj2-con-item").each(function(i,e){
								$(this).on("click",function(){
									$(".dsj2-con-bg .dsj2-con-item .dsj2-con-item-year").removeClass("active")
									$(this).find(".dsj2-con-item-year").addClass("active")
									$(".dsj2-con-con .dsj2-con-con-item").hide()
									$(".dsj2-con-con .dsj2-con-con-item:eq("+i+")").show("800")
								})
							})
						}
						
						// 翰林任务
						var hlrwW1 = $(".xxu-three .swiper-container2 .swiper-slide a .xx-img").width()
						$(".xxu-three .swiper-container2 .swiper-slide a .xx-img").css("height",hlrwW1 * 1.3)
						if(w <= 992){
							var hlrwW2 = $(".xuan-con2 .con-show01_con").width()
							console.log(hlrwW2)
							$(".xuan-con2 .con-show01").css("height",hlrwW2 * 1.5 )
							$(".xuan-con2 .con-show01:nth-child(2)").css("marginTop",-hlrwW2 / 2)
							$(".xuan-con2 .con-show01:nth-child(3)").css("marginTop",-hlrwW2 / 2)
							$(".xuan-con2 .con-show01:nth-child(4)").css("marginTop",-hlrwW2 / 2)
						}				
					}
				}
		
});


$(document).ready(function() {
  var width=$(".dsj2-con .dsj2-con-item").width();
  var scrollAmount = width; // 每次滚动的像素值
  console.log(scrollAmount);
 var yearWidth = $(".dsj_year").width();
 $(".dsj2-con-con").css("right",yearWidth-scrollAmount*4);
 
 // 定义标志位
 var isAnimatingLeft = false;
 var isAnimatingRight = false;
 
 // 左按钮点击事件处理
 $('.dsj_left').click(function() {
     if (isAnimatingLeft || isAnimatingRight) return; // 如果正在动画中，直接返回
 
     var rightWidth = parseFloat($(".dsj_year").css("right"));
     var conRightWidth = parseFloat($(".dsj2-con-con").css("right"));
 
     if (rightWidth > -(yearWidth - scrollAmount * 4 * 0.7)) {
         isAnimatingLeft = true; // 设置标志位，表示动画开始
 
         $(".dsj_year").animate(
             { right: rightWidth - scrollAmount },
             500,
             function() {
                 // 动画结束后的回调函数
                 isAnimatingLeft = false; // 重置标志位
             }
         );
         $(".dsj2-con-con").animate(
             { right: conRightWidth - scrollAmount },
             500,
             function() {
                 // 动画结束后的回调函数
                 isAnimatingLeft = false; // 重置标志位
             }
         );
     }
 });
 
 // 右按钮点击事件处理
 $('.dsj_right').click(function() {
     if (isAnimatingLeft || isAnimatingRight) return; // 如果正在动画中，直接返回
 
     var rightWidth = parseFloat($(".dsj_year").css("right"));
     var conRightWidth = parseFloat($(".dsj2-con-con").css("right"));
 
     if (rightWidth < 0) {
         isAnimatingRight = true; // 设置标志位，表示动画开始
 
         $(".dsj_year").animate(
             { right: rightWidth + scrollAmount },
             500,
             function() {
                 // 动画结束后的回调函数
                 isAnimatingRight = false; // 重置标志位
             }
         );
         $(".dsj2-con-con").animate(
             { right: conRightWidth + scrollAmount },
             500,
             function() {
                 // 动画结束后的回调函数
                 isAnimatingRight = false; // 重置标志位
             }
         );
     }
 });
});

//分享
function fenxiang(e){
	$(e).find('.bdsharebuttonbox').addClass('show').removeClass('hide');

	var href2 = $(e).parents('li:first').find('a').attr('href');
	var ptext = $(e).parents('li:first').find('a .list-item-con div').text();
	$("#shareUrl").val(href2);
	$("#shareText").val(ptext);
   var date = new Date()/36e5;
   window._bd_share_config={
      "common":{
         "bdSnsKey":{},
         "bdMini":"2",
         //"bdDesc":"456",
         "bdMiniList":false,
         "bdPic":"",
         "bdStyle":"0",
         "bdSize":"32",
         "onBeforeClick" : function(id,config){
            return {
				"bdUrl":$("#shareUrl").val(),
				"bdText":$("#shareText").val(),
				"bdDesc":$("#shareText").val()
			}
         }
      },
      "share":{}
   };
    //with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='https://www.hanlinschool.cn/template/44/images/share.js?v=89860593.js?cdnversion='+~(-date)];
     with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src ='https://www.hanlinschool.cn/template/44/images/share1.js?cdnversion=' + ~(-new Date() / 36e5)];
}
  function shareTo(stype) {
		var ftit = '';
			var flink = '';
			var lk = '';
			//获取文章标题
			ftit = $('.title').text();//此处的class名应该根据自己本身页面的class来取
			//获取网页中内容的第一张图片
			flink = $(".con img").attr("src");
			if (typeof flink == 'undefined') {
				flink = '';
			}
			//当内容中没有图片时，设置分享图片为网站图片
			if (flink == '') {
				lk =  'images/banner_01.jpg';
			}
			//如果是上传的图片则进行绝对路径拼接
			if (flink.indexOf('/uploads/') != -1) {
				lk = 'https://' + window.location.host + flink;
			}
			//百度编辑器自带图片获取
			if (flink.indexOf('ueditor') != -1) {
				lk = flink;
			}
			//新浪微博接口的传参
			if (stype == 'weibo') {
				window.open('https://service.weibo.com/share/share.php?url=' + document.location.href + '?sharesource=weibo&title=' + ftit + '&pic=' + lk + '&appkey=2706825840');
			}
	}                      
                        