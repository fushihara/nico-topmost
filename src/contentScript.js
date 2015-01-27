console.log("ニコニコ最前面コメント開始-2");
inner=document.body.innerHTML;
inner=inner.replace(/\r|\n|\t/g,"");
if(inner.match(/\$\('#nicoplayerContainerInner'\)\.flash/)){
	disableIsBackComment2();
}
function disableIsBackComment2(){//ginza
	// WatchApp.namespace.model.player.NicoPlayerConnector.playerAreaConnector.addEventListener("onVideoInitialized",function(e){console.log("event e=%o",e);});
	// WatchApp.namespace.model.player.NicoPlayerConnector.playerInitializeModel.flashVars.videoDetail
	/*
	#watchAPIDataContainerは
	channelInfo: Object
	flashvars: Object
	playlistToken: ""
	tagRelatedMarquee: null
	videoDetail: Object
	viewerInfo: Object
	を持ってる
	*/
	var add;
	add=function(){
		//PlayerApp.ns.player.Nicoplayer.getInstance().externalChangeVideo( a)
		var init=function(){
			try{
				var a=WatchApp.namespace.model.player.NicoPlayerConnector.playerInitializeModel.flashVars;
				if(a.isBackComment!==null){
					a.isBackComment=null;
					a.pageHasFocus=true;
					WatchApp.namespace.model.player.NicoPlayerConnector.externalChangeVideo(a);
				}
			}catch(e){
			}
			setTimeout(init,10);
		};
		init();
	}
	var elem=document.createElement('script');
	elem.setAttribute("type","text/javascript");
	elem.innerHTML="setTimeout("+add.toString()+",1);";
	document.body.appendChild(elem);
}


