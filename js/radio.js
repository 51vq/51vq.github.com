/**
 * ...
 * @author zhengshuo
 */

(function() {
	var data = [{id:"n1",text:"热门电台",expanded:true},
                     {id:"n2",text:"按地区"},
                     {id:"n11",pid:"n1",text:"CRI怀旧金曲",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389200%26start%3D1367510401%26end%3D1372662685&amp;volumn=0.5&amp;uid=1052710881&amp;eid=1043389200&amp;pageURL=http://radio.weibo.com/online/crionline2012?source=radioarea_lastlisten'},
			         {id:"n12",pid:"n1",text:"中央人民广播电台中国之声-FM106.1",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043387760%26start%3D1367510401%26end%3D1370334002&volumn=0.5&uid=1052710881&eid=1043387760&pageURL=http://radio.weibo.com/china/fm1061?source=radio_change'},
			         {id:"n13",pid:"n1",text:"中央人民广播电台音乐之声-FM90.0",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043390840%26start%3D1367510401%26end%3D1373874601&volumn=0.5&uid=1052710881&eid=1043390840&pageURL=http://radio.weibo.com/china/fm900?source=radio_change'},
			         {id:"n14",pid:"n1",text:"中央人民广播电台经济之声-FM96.6",name:'dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1042929490%26start%3D1367510401%26end%3D1371297268&volumn=0.5&uid=1052710881&eid=1042929490&pageURL=http://radio.weibo.com/china/fm966?source=radio_change'},
			         {id:"n21",pid:"n2",text:"移动"},
			         {id:"n22",pid:"n2",text:"联通"},
			         {id:"n23",pid:"n2",text:"电信"}];
	window.get = function(id){
		return window.document.getElementById(id);
	}
	function getIEVersion(){
		var v;
		 if (document.documentMode == 10)
			v = 10;
		 else if (document.documentMode == 9)
			v = 9;
		 else if (window.postMessage)
			v = 8;
		 else if (window.XMLHttpRequest)
			v = 7;
		 else if (document.compatMode)
			v = 6;
		 else if (window.createPopup)
			v = 5.5;
		 else if (window.attachEvent)
			v = 5;
		 else if (document.all){
			v = 4;
		 }
		return v;
	}
	window.getFlash = function(id){
		if (navigator.appName.indexOf("Microsoft") != -1) {
			if(getIEVersion() >= 9){
				return window.document.getElementById(id);
			}else{
				return window[id];
			}
            
        } else {
            return document[id];
        }
	}
	
	window.radioReady = function(){
		alert(getFlash('radioAudio'));
		getFlash('radioAudio').play('dataURL=http%3A%2F%2Fcdn.kandian.com%2Fmovies%3Fcmd%3Dplay%26id%3D1043389200%26start%3D1367510401%26end%3D1372662685&amp;volumn=0.5&amp;uid=1052710881&amp;eid=1043389200&amp;pageURL=http://radio.weibo.com/online/crionline2012?source=radioarea_lastlisten');
		var playBtn = get('playBtn');
		var volume = 0.5;//音量
		var isPlay;//是否在播放
		playBtn.onclick = function(){
			if(playBtn.className == 'ico_rdoPlay ico_stop_gray'){
				playBtn.className = 'ico_rdoPlay ico_play_gray';
				getFlash('radioAudio').setVolume(0);
			}else{
				playBtn.className = 'ico_rdoPlay ico_stop_gray';
				getFlash('radioAudio').setVolume(volume);
			}
		}
		var muteBtn = get('muteBtn');
		muteBtn.onclick = function(){
			if(muteBtn.className == 'ico_rdoPlay ico_sound_on'){
				muteBtn.className = 'ico_rdoPlay ico_sound_off';
				getFlash('radioAudio').setVolume(0);
				get('volume').style.width = '0px';
				volumeBtn.style.left = "0px";
			}else{
				muteBtn.className = 'ico_rdoPlay ico_sound_on';
				getFlash('radioAudio').setVolume(volume);
				volumeBtn.style.left = volume*100 + "px";
				get('volume').style.width = volume*100 + 'px';
			}
		}
		var volumeBtn = get('radio_vol');
		var startX;
		function mousemove(e){
			var pos = e.clientX - startX;
			volumeBtn.style.left = pos + "px";
			
			if(pos <= 0){
				document.removeEventListener('mousemove',mousemove);
				volumeBtn.style.left = '0px';
				pos = 0;
			}
			
			if(pos >= 100){
				document.removeEventListener('mousemove',mousemove);
				volumeBtn.style.left = '100px';
				pos = 100;
			}
			volume = pos/100;
			getFlash('radioAudio').setVolume(pos/100);
			get('volume').style.width = volumeBtn.style.left;
		}
		volumeBtn.onmousedown = function(e){
			document.addEventListener('mousemove',mousemove);
			document.addEventListener('mouseup',function(){
				document.removeEventListener('mousemove',mousemove);
			});
			startX = e.clientX - parseInt(volumeBtn.style.left);
		}
		volumeBtn.onmouseup = function(){
			document.removeEventListener('mousemove',mousemove);
		}
		
		$("#mytree2").omTree({
			dataSource : data,
			simpleDataModel: true,
			onSelect: function(node,event) {
				playBtn.className = 'ico_rdoPlay ico_stop_gray';
				getFlash('radioAudio').play(node.name);
			}
		});
	}
})(window);
