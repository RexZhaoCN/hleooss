function getAd(AdpositionWidth, AdpositionHeight,AdcontentType, AdcontentUrl, AdcontentContent, AdcontentBegintime, AdcontentEndtime, AdcontentFile, AdcontentAlt, AdcontentColor){
	var element="";
	if(AdcontentType==0){
		//alert("图片");
		if(AdcontentUrl!=null&&AdcontentUrl!=""){
			element="<a target='_blank' href='"+AdcontentUrl+"' title='"+AdcontentAlt+"'><img src='"+AdcontentFile+"' width='"+AdpositionWidth+"' height='"+AdpositionHeight+"' border='0' /></a>"
		}else{
			element="<img src='"+AdcontentFile+"' width='"+AdpositionWidth+"' height='"+AdpositionHeight+"' border='0' />";
		}
	}else if(AdcontentType==1){
		if(AdcontentUrl!=null&&AdcontentUrl!=""){
			element="<a target='_blank' href='"+AdcontentUrl+"' title='"+AdcontentAlt+"'>"+
					"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'"+
					"codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'"+
					"width='"+AdpositionWidth+"' height='"+AdpositionHeight+"'  align='middle'>"+
					"<param name='allowScriptAccess' value='sameDomain' />"+
					"<param name='movie' value='"+AdcontentFile+"' />"+
					"<param name='quality' value='high' />"+
					"<param name='wmode' value='transparent'>"+
					"<embed  src='"+AdcontentFile+"'"+
					"quality='high' wmode='transparent' width='"+AdpositionWidth+"' height='"+AdpositionHeight+"'"+
					"align='middle' allowscriptaccess='sameDomain'"+
					"type='application/x-shockwave-flash'"+
					"pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
				"</object></a>";
		}else{
			element="<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'"+
			"codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'"+
			"width='"+AdpositionWidth+"' height='"+AdpositionHeight+"'  align='middle'>"+
			"<param name='allowScriptAccess' value='sameDomain' />"+
			"<param name='movie' value='"+AdcontentFile+"' />"+
			"<param name='quality' value='high' />"+
			"<param name='wmode' value='transparent'>"+
			"<embed  src='"+AdcontentFile+"'"+
			"quality='high' wmode='transparent' width='"+AdpositionWidth+"' height='"+AdpositionHeight+"'"+
			"align='middle' allowscriptaccess='sameDomain'"+
			"type='application/x-shockwave-flash'"+
			"pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
			"</object>";
		}
	}else if(AdcontentType==2){
		if(AdcontentUrl!=null&&AdcontentUrl!=""){
			element="<a target='_blank' href='"+AdcontentUrl+"' title='"+AdcontentAlt+"' color='"+AdcontentColor+"'>"+AdcontentContent+"</a>";
		}else{
			element=AdcontentContent;
		}
	}
	return element;
}