loadScript("https://sindata.nira.one/js/bootstrap.min.js", "js");

var lang = navigator.language || navigator.systemLanguage;
if(lang=='ko' || lang=='ko-kr' || lang=='ko-KR') {
	lang = 'ko';
}
else if(lang=='ja' || lang=='ja-jp' || lang=='ja-JP') {
	lang = 'jp';
}
else {
	lang = 'en';
}

var isGFDMall = false;
var curnum = 0;
var delay = 500;

if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
	location.href="https://sindata.nira.one/noie";
}

var text = {
	crawler: {
		errort: {
			"jp":"緊急お知らせ",
			"ko":"긴급 공지",
			"en":"URGENT NOTICE"
		},
		errorc: {
			"jp":"現在、データの更新が正常にできません。修正を行っていますのでしばらくお待ち下さい。",
			"ko":"현재 데이터 갱신이 정상적으로 이루어지지 않고 있습니다. 수정중이니 잠시만 기다려주세요",
			"en":"Updater is currently in construction. Please wait until fixed."
		},
		notlogin: {
			"jp":`Skill Navigatorで新しく変わったスクリプトを確認してください！<br/>
					別のログインが必要ありません。<br/><br/>
					<a href='https://sin.nira.one' target='_blank'>Skill Navigator</a>からログインしてください`,
			"ko":`Skill Navigator에서 새롭게 변경된 스크립트를 확인해보세요!<br/>
					별도의 로그인이 필요하지 않습니다.<br/><br/>
					<a href='https://sin.nira.one' target='_blank'>Skill Navigator</a>에 접속한 후 로그인 하세요`,
			"en":`Please check new update script from website!<br/>
					You don't need separated login anymore<br/><br/>
					Try signing into <a href='https://sin.nira.one' target='_blank'>Skill Navigator</a>`
		},
		logined: {
			"jp":"のログイン確認",
			"ko":"의 로그인 확인",
			"en":"is signed in"
		},
		alert: {
			title: {
				"jp":"注意事項",
				"ko":"주의사항",
				"en":"Caution"
			},
			warn1: {
				"jp":"1. 基本的な情報はSkill Navigatorの「使用上の注意」を参考にしてください",
				"ko":"1. 기본적인 정보는 Skill Navigator 내의 '사용상의 주의'를 참고해주세요",
				"en":"1. Please check basic info from 'Precautions' from Skill Navigator website"
			},
			warn2: {
				"jp":"2. OSとは関係なくGoogle Chromeを利用してください",
				"ko":"2. OS에 관계없이 Google Chrome을 사용해주세요",
				"en":"2. We recommend to use Google Chrome independent to OS"
			},
			warn3: {
				"jp":"3. 使用前eAmusementのログインしてください",
				"ko":"3. 사용 전 eAmusement에 로그인해야 합니다",
				"en":"3. Sign into eAmusement before using it"
			},
			warn4: {
				"jp":"4. 使用中eAmusementの他のページを探索するとデータに以上が発生します (他のデバイスでもNG)",
				"ko":"4. 사용 중 eAmusement의 다른 페이지에 접근하지 마세요 (다른 디바이스를 사용해도 안됨)",
				"en":"4. Do not use other pages of eAmusement site while updating your data (Even in other devices)"
			},
			warn5: {
				"jp":"5. 更新中では必ずこのタブが画面に見えるようにしてください<br/>(バックグラウンドでは更新が止まります)",
				"ko":"5. 갱신중에는 반드시 탭이 화면에 보이도록 해주세요<br/>(백그라운드로 할 경우 갱신이 멈춤)",
				"en":"5. While updating, Please KEEP THE TAB foreground<br/>(Making background will stop update)"
			}
		},
		current: {
			"jp":"現在の更新状況",
			"ko":"갱신 진행 상황",
			"en":"Update status"
		},
		pause: {
			"jp":"読み込みタイム",
			"ko":"곡 별 갱신 대기 시간",
			"en":"Time interval for each song"
		},
		datat: {
			"jp":"データ更新",
			"ko":"데이터 업데이트",
			"en":"Data update"
		},
		
		descTgtShortT: {
			"jp":"スキル対象曲の早速更新",
			"ko":"스킬 대상곡 빠른 갱신",
			"en":"Fast update for skill table"
		},
		descTgtShort: {
			"jp":"スキル対象曲の必須データのみ数秒以内に更新する機能です",
			"ko":"스킬 대상곡의 필수 데이터만 수 초 내에 갱신하는 기능입니다",
			"en":"It just take skill table's data within several seconds"
		},
		
		descTgtAllT: {
			"jp":"スキル対象曲のデータ更新",
			"ko":"스킬 대상곡 전체 갱신",
			"en":"It takes all data from skill table's music (it takes about 5 minutes)"
		},
		descTgtAll: {
			"jp":"スキル対象曲のすべてのデータを更新します。最大５分くらいかかります",
			"ko":"스킬 대상곡의 모든 데이터를 갱신합니다. 50개의 패턴을 갱신하므로 최대 5분정도 소요됩니다",
			"en":"It takes all data from skill table's music (it takes about 5 minutes)"
		},
		
		descAllT: {
			"jp":"全曲データ更新",
			"ko":"전곡 데이터 갱신",
			"en":"All data update"
		},
		descAll: {
			"jp":"解禁済みの全曲のデータを更新します。およそ1時間かかります",
			"ko":"해금이 되어있는 모든 곡의 데이터를 갱신합니다. 약 1시간정도 소요됩니다.",
			"en":"All unlocked music is updated. It takes about 1 hours"
		},
		
		descFavoT: {
			"jp":"「お気に入り」更新",
			"ko":"즐겨찾기 갱신",
			"en":"Favorite"
		},
		descFavo: {
			"jp":"「お気に入り」の曲を更新します",
			"ko":"즐겨찾기에 등록된 곡들의 모든 패턴을 갱신합니다",
			"en":"Music in favorite folder are updated"
		},
		
		selection: {
			"jp":"行別更新",
			"ko":"행별 업데이트",
			"en":"Update by columns"
		},
		seldesc: {
			"jp":"行を選んでください",
			"ko":"행을 선택하세요",
			"en":"Select columns"
		},
		board: {
			title: {
				"jp":"プレイヤーボード",
				"ko":"플레이어 보드",
				"en":"Player board"
			},
			short: {
				"jp":"ボード",
				"ko":"보드",
				"en":"Board"
			},
			desc: {
				"jp":"一つのみ適用されます",
				"ko":"둘 중에 하나만 적용됩니다",
				"en":"Only one of them applied"
			}
		},
		gsel: {
			"jp":"GF選択曲",
			"ko":"GF선택곡",
			"en":"GF Selected",
		},
		dsel: {
			"jp":"DM選択行",
			"ko":"DM선택행",
			"en":"DM Selected"
		},
		line: {
			"jp":"行",
			"ko":"행",
			"en":"row"
		},
		numberAndOther: {
			"jp":"数字・記号",
			"ko":"숫자/기호",
			"en":"Number/Sign"
		}
	}
};

function SkillCrawler() {
	var func = new Object();
	var jsonRoot = new Object();
	var hotlist = new Array();
	var otherlist = new Array();
	var favolist = new Array();
	
	// 프로필 데이터 업로드
	function crawlProfile() {
		console.log("[GITADORA Info] Initializing Profile Update");
		$("#current").text("Initializing Profile Update");
		$.ajax({
			url:'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/profile.html',
			async:false,
			xhr: function() {
				// Get new xhr object using default factory
				var xhr = jQuery.ajaxSettings.xhr();
				// Copy the browser's native setRequestHeader method
				var setRequestHeader = xhr.setRequestHeader;
				// Replace with a wrapper
				xhr.setRequestHeader = function(name, value) {
					// Ignore the X-Requested-With header
					if (name == 'X-Requested-With') return;
					// Otherwise call the native setRequestHeader method
					// Note: setRequestHeader requires its 'this' to be the xhr object,
					// which is what 'this' is here when executed.
					setRequestHeader.call(this, name, value);
				}
				// pass it on to jQuery
				return xhr;
			},
			success: function(data) {
				console.log("[GITADORA Info] Profile Data Received");
				$("#current").text("Profile Data Received");
				var json = new Object();
				var elem = document.createElement('html');
				elem.innerHTML = data;

				// 칭호 가져오기
				var title_div = elem.getElementsByClassName('profile_shogo_frame')[0].innerHTML;

				// 닉네임
				var name_div = elem.getElementsByClassName('profile_name_frame')[0].innerHTML;

				// 데이터 테이블
				var profile = elem.querySelector('#profile_tb');

				var arr = parseTable(profile);

				var title = title_div;
				var name = name_div;
				var skill_g = arr[0][1];
				var skill_d = arr[0][2];
				var all_g = arr[1][1];
				var all_d = arr[1][2];
				var clearlv_g = arr[2][1];
				var clearlv_d = arr[2][2];
				var clearnum_g = arr[3][1];
				var clearnum_d = arr[3][2];
				var fclv_g = arr[4][1];
				var fclv_d = arr[4][2];
				var fcnum_g = arr[5][1];
				var fcnum_d = arr[5][2];
				var exclv_g = arr[6][1];
				var exclv_d = arr[6][2];
				var excnum_g = arr[7][1];
				var excnum_d = arr[7][2];
				//var advskill = arr[8][1];

				json.title = title;
				json.name = name;
				json.gskill = skill_g;
				json.dskill = skill_d;
				json.gskillall = all_g;
				json.dskillall = all_d;
				json.gclearlv = clearlv_g;
				json.dclearlv = clearlv_d;
				json.gclearnum = clearnum_g;
				json.dclearnum = clearnum_d;
				json.gfclv = fclv_g;
				json.dfclv = fclv_d;
				json.gfcnum = fcnum_g;
				json.dfcnum = fcnum_d;
				json.gexclv = exclv_g;
				json.dexclv = exclv_d;
				json.gexcnum = excnum_g;
				json.dexcnum = excnum_d;
				//json.advskill = advskill;
				json.crawlToken = crawlToken;

				jsonRoot.profile = json;

				console.log("[GITADORA Info] Uploading Profile...");
				$("#current").text("Uploading Profile...");
				upload(JSON.stringify(jsonRoot), 'profile');
			}
		});
	}
	
	// 플레이어 보드 업로드
	function crawlBoard(gtype) {
		var img = new Image();
		img.setAttribute('crossOrigin', 'anonymous');
		img.onload = function() {
			var canvas = document.createElement("canvas");
	        canvas.width = this.width;
	        canvas.height = this.height;
	
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(this, 0, 0);
	
	        var dataURL = canvas.toDataURL("image/png");
	
	        // 이미지 데이터를 base64 인코딩 하여 전송
	        upload(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""), 'board');
	        //console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
		};
		
		img.src = 'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/playerboard_img.html?gtype='+gtype+'&bkind=1';
	}	
	
	// 곡 데이터 업로드
	/**
	 * gtype: 기종
	 * ctype: crawl 타입 (0: 전곡, 1: 대상, 2: 즐찾, 3: 선택)
	 */
	function crawlSongs(gtype, ctype, timeinterval, lines) {
		var gtype;
		
		var cat = 37; // 고정값
		var sid = 2; // 고정값
		var page = 1; // 고정값
		var index = Array(); // 업로드 노래 수에 따라 변동

		jsonRoot.music = new Object();
		jsonRoot.music.gf = new Array();
		jsonRoot.music.dm = new Array();
		jsonRoot.crawlToken = crawlToken;

		switch(ctype) {
		case 0:
			var idxnum = new Array();
			for(var i = 0; i < cat; i++) {
				idxnum.push(i);
			}
			console.log("[All songs] Collecting URL data");
			$("#current").text("[All songs] Collecting URL data");
			runGetIndex(gtype, cat, timeinterval, idxnum, 0, index, sid, page);
			// gtype, cat, timeinterval, line, i, index, sid, page
			break;
		case 1:
			console.log("[Skill targets] Collecting URL data");
			$("#current").text("[Skill targets] Collecting URL data");
			hotlist = runGetTarget(gtype, 1);
			otherlist = runGetTarget(gtype, 0);
			
			console.log("[Skill targets] Hot songs data collecting...");
			$("#current").text("[Skill targets] Hot songs data collecting...");
			runGetSongInfoForTarget(hotlist, gtype, timeinterval, 0, 1);
			break;
		case 2:
			console.log("[Favorite list] Collecting URL data");
			$("#current").text("[Favorite list] Collecting URL data");
			favolist = runGetFavo(gtype);
			
			console.log("[Favorite list] Skill data collecting...");
			$("#current").text("[Favorite list] Skill data collecting...");
			runGetSongInfoForTarget(favolist, gtype, timeinterval, 0, 2);
			break;
		case 3:
			console.log("[Partial update] Collecting URL data");
			$("#current").text("[Partial update] Collecting URL data");
			runGetIndex(gtype, lines.length, timeinterval, lines, 0, index, sid, page);
			// gtype, cat, timeinterval, line, i, index, sid, page
			break;
		}
	}
	
	// 스킬 대상곡만 간단히 업로드
	function crawlTarget(gtype, delay) {
		console.log("[Simple update] Collecting data");
		$("#current").text("[Simple update] Collecting data");
		
		console.log("[Simple update] Collecting HOT data");
		$("#current").text("[Simple update] Collecting HOT data");
		var hot = runGetTargetSimple(gtype, 1);
		
		console.log("[Simple update] Collecting OTHER data");
		$("#current").text("[Simple update] Collecting OTHER data");
		var other = runGetTargetSimple(gtype, 0);
		
		jsonRoot.music = new Object();
		jsonRoot.music.gf = new Array();
		jsonRoot.music.dm = new Array();
		jsonRoot.crawlToken = crawlToken;
		
		if(gtype == 'gf') {
			for(var i = 0; i < hot.length; i++) {
				jsonRoot.music.gf.push(hot[i]);
			}
			for(var i = 0; i < other.length; i++) {
				jsonRoot.music.gf.push(other[i]);
			}
		}
		else if(gtype == 'dm') {
			for(var i = 0; i < hot.length; i++) {
				jsonRoot.music.dm.push(hot[i]);
			}
			for(var i = 0; i < other.length; i++) {
				jsonRoot.music.dm.push(other[i]);
			}
		}
		
		console.log("[Simple update] Uploading data");
		$("#current").text("[Simple update] Uploading data");
		upload(JSON.stringify(jsonRoot), 'simple');
		
		jsonRoot = new Object();
		crawlProfile();
	}

	function runGetIndex(gtype, cat, timeinterval, idx, i, index, sid, page) {
		if(i < cat) {
			getIndex(gtype, idx[i]).success(function(data) {
				var elem = document.createElement('html');
				elem.innerHTML = data;
	
				// get table
				var list_table = $(elem).find('table.music_table_tb').children('tbody').children('tr');
				if(gtype=='gf') index[i] = list_table.length/2;
				else index[i] = list_table.length;
			});
			console.log("[Collecting URL] Category "+ (i+1) +" / "+ cat +" checked");
			$("#current").text("[Collecting URL] Category "+ (i+1) +" / "+ cat +" checked");
			
			setTimeout(function() {
				runGetIndex(gtype, cat, timeinterval, idx, i+1, index, sid, page);
			}, timeinterval);
		}
		else {
			console.log("Skill data collecting...");
			$("#current").text("Skill data collecting...");
			runGetSongInfo(gtype, idx, cat, sid, page, index, timeinterval, 0, 0);
			// 0, 0: 카테고리, 페이지 내 순서 (i, j)
		}
	}
	
	function runGetTargetSimple(gtype, stype) {
		var json = new Array();
		
		// stype이 0이면 other, 그 외에는 hot
		getTarget(gtype, stype).success(function(data) {
			// get all link to each song -> run get song info
			var elem = document.createElement('html');
			elem.innerHTML = data;

			// 전체 테이블
			var table = $(elem).find('.skill_table_tb');
			
			// 각 tablerow에 대해서 곡을 뽑아옴
			var rows = $(elem).find('tr');
			
			rows.each(function(idx, val) {
			    if($(val).find('.text_link').length > 0) {
			        var title = $(val).find('.text_link').text();
			
			        var type;
			        var diff;
			
			        if($(val).find('.part_GUITAR').length > 0) { type = "g"; }
			        else if($(val).find('.part_BASS').length > 0) { type = "b"; }
			        else if($(val).find('.part_DRUM').length > 0) { type = "d"; }
			
			        if($(val).find('.diff_BASIC').length > 0) { diff = "bsc"; }
			        else if($(val).find('.diff_ADVANCED').length > 0) { diff = "adv"; }
			        else if($(val).find('.diff_EXTREME').length > 0) { diff = "ext"; }
			        else if($(val).find('.diff_MASTER').length > 0) { diff = "mas"; }
			        
					var rate = $(val).find('.achive_cell').text().trim().split("%")[0].replace('.','');
					var level = $(val).find('.diff_cell').text().trim().replace('.','');
			
			        var jsonobj = new Object();
			        jsonobj.name = title;
			        jsonobj.type = type;
			        jsonobj.diff = diff;
			        jsonobj.rate = rate;
			        jsonobj.level = level;
			        json.push(jsonobj);
				}
			});
		});
		
		return json;
	}
	
	function runGetTarget(gtype, stype) {
		var linklist = new Array();
		getTarget(gtype, stype).success(function(data) {
			// get all link to each song -> run get song info
			var elem = document.createElement('html');
			elem.innerHTML = data;

			// Song title
			var link = $(elem).find('.text_link');
			
			link.each(function(idx, val) {
				linklist.push(val.href);
				console.log("[Collecting URL] "+ idx +" checked");
				$("#current").text("[Collecting URL] "+ idx +" checked");
			});
		});
		return linklist;
	}
	
	function runGetFavo(gtype) {
		var linklist = new Array();
		getFavo(gtype).success(function(data) {
			// get all link to each song -> run get song info
			var elem = document.createElement('html');
			elem.innerHTML = data;

			// Song title
			var link = $(elem).find('.text_link');
			
			link.each(function(idx, val) {
				linklist.push(val.href);
			});
		});
		return linklist;
	}

	function runGetSongInfo(gtype, lines, cat, sid, page, index, timeinterval, i, j) {
		// i = 현재 카테고리, j = 카테고리 내 곡 순서
		if(i < cat) {
			if(j < index[i]) {
				// 목록 페이지로 돌아옴 (안하면 오류남)
				getIndex(gtype, i);
				// 곡 페이지로 이동
				getSongInfo(lines[i], gtype, j, sid, page)
						.success(function(data) {onSongSuccess(gtype, data);});
						
				setTimeout(function() {
					runGetSongInfo(gtype, lines, cat, sid, page, index, timeinterval, i, j+1);
				}, timeinterval);
			}
			else {
				setTimeout(function() {
					runGetSongInfo(gtype, lines, cat, sid, page, index, timeinterval, i+1, 0);
				}, timeinterval);
			}
		}
		else {
			console.log("Uploading skill data");
			$("#current").text("Uploading skill data");
			upload(JSON.stringify(jsonRoot), 'skill');
			
			console.log("Update complete");
			$("#current").text("Update complete");

			jsonRoot = new Object();
			crawlProfile();
		}
	}
	
	function runGetSongInfoForTarget(urllist, gtype, timeinterval, i, stype) {
		if(i < urllist.length) {
			switch(stype) {
			case 0:
			case 1:
				getTarget(gtype, stype);
				break;
			case 2:
				getFavo(gtype);
				break;
			}
			getSongInfoForTarget(urllist[i])
					.success(function(data) {onSongSuccess(gtype, data);});
			setTimeout(function() {
				runGetSongInfoForTarget(urllist, gtype, timeinterval, i+1, stype);
			}, timeinterval);
		}
		else if(stype == 1) {
			// Hot곡 완료 시 Other 수행
			console.log("[Skill targets] Other songs data collecting...");
			$("#current").text("[Skill targets] Other songs data collecting...");
			runGetSongInfoForTarget(otherlist, gtype, timeinterval, 0, 0);
		}
		else {
			// 완전 다 끝나면 마무리
			console.log("Uploading skill data");
			$("#current").text("Uploading skill data");
			upload(JSON.stringify(jsonRoot), 'skill');
			
			console.log("Update complete");
			$("#current").text("Update complete");

			jsonRoot = new Object();
			crawlProfile();
		}
	}
	
	function onSongSuccess(gtype, data) {
		var jsonMusic = new Object();
		//jsonMusic.cat = lines[i];
		//jsonMusic.index = j;
		var elem = document.createElement('html');
		elem.innerHTML = data;

		// Song title
		var name = $(elem).find('div.live_title').text();
		jsonMusic.name = name;

		var divs = $(elem).find('div.md_list_contents');

		jsonMusic.data = new Array();
		// infos

		var gfExist = $(elem).find('div.md_part_GUITAR').length;
		var baExist = $(elem).find('div.md_part_BASS').length;
		var dmExist = $(elem).find('div.md_part_').length;

		var divlist = new Array();

		$(elem).find('div.white_box').children().each(function(i) {
			var str = $(this).attr('class');

			if(str == 'md_part_GUITAR' || str == 'md_part_BASS' || str == 'md_part_') {
				divlist.push(str);
			}

			if(str == 'md_list_contents') {
				divlist.push($(this).find('th').attr('class'));
			}
		});

		if(gtype == 'gf') {
			var gfon = false;
			var baon = false;
			var ptcodelist = new Array();
			for(var i = 0; i < divlist.length; i++) {
				if(divlist[i] == 'md_part_GUITAR') {
					gfon = true;
					baon = false;
				}
				else if(divlist[i] == 'md_part_BASS') {
					gfon = false;
					baon = true;
				}

				if(gfon) {
					if(divlist[i] == 'diff_BASIC') ptcodelist.push(1);
					else if(divlist[i] == 'diff_ADVANCED') ptcodelist.push(2);
					else if(divlist[i] == 'diff_EXTREME') ptcodelist.push(3);
					else if(divlist[i] == 'diff_MASTER') ptcodelist.push(4);
				}
				else if(baon) {
					if(divlist[i] == 'diff_BASIC') ptcodelist.push(5);
					else if(divlist[i] == 'diff_ADVANCED') ptcodelist.push(6);
					else if(divlist[i] == 'diff_EXTREME') ptcodelist.push(7);
					else if(divlist[i] == 'diff_MASTER') ptcodelist.push(8);
				}
			}

			$(divs).each(function(i) {
				var jsonGf = new Object();
				var table = $(this).children('table');
				var levels = table.children('thead').children('tr');

				jsonGf.patterncode = ptcodelist[i];
				var diffstr;
				switch(ptcodelist[i]) {
					case 1: case 5: diffstr = 'diff_BASIC'; break;
					case 2: case 6: diffstr = 'diff_ADVANCED'; break;
					case 3: case 7: diffstr = 'diff_EXTREME'; break;
					case 4: case 8: diffstr = 'diff_MASTER'; break;
				}
				jsonGf.level = $(levels).children('th.'+diffstr).children('div.'+diffstr).children('div.diff_area').get(0).innerHTML;

				var body = table.children('tbody').children('tr');
				
				// 성과 데이터
				$(body).each(function(l,vv) {
					switch(l) {
					case 0:
						var playcount = $(this).children('td').get(1).innerHTML.split(' ')[0];
						jsonGf.playcount = playcount;
						break;
					case 1:
						var clearcount = $(this).children('td').get(1).innerHTML.split(' ')[0];
						jsonGf.clearcount = clearcount;
						break;
					case 2:
						var clearstat;
						$(this).children('td').each(function(zz,zx) {
							if(zz == 1)
								clearstat = $(this).attr('class').split(' ')[2];
						});
						jsonGf.clearstat = clearstat;
						
						var rank;
						$(this).children('td').each(function(zz,zx) {
							if(zz == 2)
								rank = $(this).attr('class').split(' ')[2];
						});
						jsonGf.rank = rank;
						break;
					case 3:
						var rate = $(this).children('td').get(1).innerHTML;
						jsonGf.rate = rate;
						break;
					case 4:
						var score = $(this).children('td').get(1).innerHTML;
						jsonGf.score = score;
						break;
					case 5:
						var combo = $(this).children('td').get(1).innerHTML;
						jsonGf.combo = combo;
						break;
					}
				});
				
				var meter = '';
				var ul = $(this).children('div').children('div').children('ul').children('li');
				$(ul).each(function(l, vv) {
					var str = $(this).attr('class').split(' ')[1];
					meter += str[str.length - 1];
				});
				
				jsonGf.meter = meter;
				
				jsonMusic.data.push(jsonGf);
			});
		}
		else if(gtype == 'dm') {
            var ptcodelist = new Array();
			for(var i = 0; i < divlist.length; i++) {
				if(divlist[i] == 'diff_BASIC') ptcodelist.push(9);
                else if(divlist[i] == 'diff_ADVANCED') ptcodelist.push(10);
                else if(divlist[i] == 'diff_EXTREME') ptcodelist.push(11);
                else if(divlist[i] == 'diff_MASTER') ptcodelist.push(12);
            }
            
			$(divs).each(function(i) {
				var jsonDm = new Object();
				var table = $(this).children('table');
				var levels = table.children('thead').children('tr');
                
                jsonDm.patterncode = ptcodelist[i];
				var diffstr;
				switch(ptcodelist[i]) {
					case 9: diffstr = 'diff_BASIC'; break;
					case 10: diffstr = 'diff_ADVANCED'; break;
					case 11: diffstr = 'diff_EXTREME'; break;
					case 12: diffstr = 'diff_MASTER'; break;
				}
                jsonDm.level = $(levels).children('th.'+diffstr).children('div.'+diffstr).children('div.diff_area').get(0).innerHTML;
                
				var body = $(this).children('table').children('tbody').children('tr');

				$(body).each(function(l,vv) {
					switch(l) {
					case 0:
						var playcount = $(this).children('td').get(1).innerHTML.split(' ')[0];
						jsonDm.playcount = playcount;
						break;
					case 1:
						var clearcount = $(this).children('td').get(1).innerHTML.split(' ')[0];
						jsonDm.clearcount = clearcount;
						break;
					case 2:
						var clearstat;
						$(this).children('td').each(function(zz,zx) {
							if(zz == 1)
								clearstat = $(this).attr('class').split(' ')[2];
						});
						jsonDm.clearstat = clearstat;
						
						var rank;
						$(this).children('td').each(function(zz,zx) {
							if(zz == 2)
								rank = $(this).attr('class').split(' ')[2];
						});
						jsonDm.rank = rank;
						break;
					case 3:
						var rate = $(this).children('td').get(1).innerHTML;
						jsonDm.rate = rate;
						break;
					case 4:
						var score = $(this).children('td').get(1).innerHTML;
						jsonDm.score = score;
						break;
					case 5:
						var combo = $(this).children('td').get(1).innerHTML;
						jsonDm.combo = combo;
						break;
					}
				});
				
				var meter = '';
				var ul = $(this).children('div').children('div').children('ul').children('li');
				$(ul).each(function(l, vv) {
					var str = $(this).attr('class').split(' ')[1];
					meter += str[str.length - 1];
				});
				
				jsonDm.meter = meter;
				
				jsonMusic.data.push(jsonDm);
			});
		}
		if(gtype=="dm") {
			jsonRoot.music.dm.push(jsonMusic);
		}
		else if(gtype=="gf") {
			jsonRoot.music.gf.push(jsonMusic);
		}
		console.log("Collected: "+name);
		$("#current").text("Collected: "+name);
	}

	function getIndex(gtype, i) {
		return $.ajax({
			url: 'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html',
			type: 'GET',
			data: {
				gtype: gtype,
				cat: i
			},
			xhr: function() {
				// Get new xhr object using default factory
				var xhr = jQuery.ajaxSettings.xhr();
				// Copy the browser's native setRequestHeader method
				var setRequestHeader = xhr.setRequestHeader;
				// Replace with a wrapper
				xhr.setRequestHeader = function(name, value) {
					// Ignore the X-Requested-With header
					if (name == 'X-Requested-With') return;
					// Otherwise call the native setRequestHeader method
					// Note: setRequestHeader requires its 'this' to be the xhr object,
					// which is what 'this' is here when executed.
					setRequestHeader.call(this, name, value);
				}
				// pass it on to jQuery
				return xhr;
			},
			async:false
		});
	}
	
	function getTarget(gtype, stype) {
		return $.ajax({
			url: 'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html',
			method: 'GET',
			data: {
				gtype:gtype,
				stype:stype
			},
			xhr: function() {
				// Get new xhr object using default factory
				var xhr = jQuery.ajaxSettings.xhr();
				// Copy the browser's native setRequestHeader method
				var setRequestHeader = xhr.setRequestHeader;
				// Replace with a wrapper
				xhr.setRequestHeader = function(name, value) {
					// Ignore the X-Requested-With header
					if (name == 'X-Requested-With') return;
					// Otherwise call the native setRequestHeader method
					// Note: setRequestHeader requires its 'this' to be the xhr object,
					// which is what 'this' is here when executed.
					setRequestHeader.call(this, name, value);
				}
				// pass it on to jQuery
				return xhr;
			},
			async:false
		});
	}
	
	function getFavo(gtype) {
		return $.ajax({
			url: 'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/setting/favorite.html',
			method: 'GET',
			data: {
				gtype:gtype
			},
			xhr: function() {
				// Get new xhr object using default factory
				var xhr = jQuery.ajaxSettings.xhr();
				// Copy the browser's native setRequestHeader method
				var setRequestHeader = xhr.setRequestHeader;
				// Replace with a wrapper
				xhr.setRequestHeader = function(name, value) {
					// Ignore the X-Requested-With header
					if (name == 'X-Requested-With') return;
					// Otherwise call the native setRequestHeader method
					// Note: setRequestHeader requires its 'this' to be the xhr object,
					// which is what 'this' is here when executed.
					setRequestHeader.call(this, name, value);
				}
				// pass it on to jQuery
				return xhr;
			},
			async:false
		});
	}

	function getSongInfo(c, g, i, s, p) {
		return $.ajax({
			url: 'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music_detail.html',
			type: 'GET',
			data: {
				gtype: g,
				cat: c,
				index: i,
				sid: s,
				page: p
			},
			xhr: function() {
				// Get new xhr object using default factory
				var xhr = jQuery.ajaxSettings.xhr();
				// Copy the browser's native setRequestHeader method
				var setRequestHeader = xhr.setRequestHeader;
				// Replace with a wrapper
				xhr.setRequestHeader = function(name, value) {
					// Ignore the X-Requested-With header
					if (name == 'X-Requested-With') return;
					// Otherwise call the native setRequestHeader method
					// Note: setRequestHeader requires its 'this' to be the xhr object,
					// which is what 'this' is here when executed.
					setRequestHeader.call(this, name, value);
				}
				// pass it on to jQuery
				return xhr;
			},
			async:false
		});
	}
	
	function getSongInfoForTarget(url) {
		return $.ajax({
			url: url,
			xhr: function() {
				// Get new xhr object using default factory
				var xhr = jQuery.ajaxSettings.xhr();
				// Copy the browser's native setRequestHeader method
				var setRequestHeader = xhr.setRequestHeader;
				// Replace with a wrapper
				xhr.setRequestHeader = function(name, value) {
					// Ignore the X-Requested-With header
					if (name == 'X-Requested-With') return;
					// Otherwise call the native setRequestHeader method
					// Note: setRequestHeader requires its 'this' to be the xhr object,
					// which is what 'this' is here when executed.
					setRequestHeader.call(this, name, value);
				}
				// pass it on to jQuery
				return xhr;
			},
			async:false
		});
	}

	function parseTable(table) {
		var jqt = $(table);

		var array = Array();
		var t = $(jqt).children('tbody').children('tr');
		//console.log(t);
		$(t).each(function(i, v) {
			array[i] = Array();
			$(this).children('td').each(function (j, w) {
				array[i][j] = $(this).text();
			});
		});
		//console.log(array);
		return array;
	}

	function upload(text, type) {
		if (type=='profile') {
		    $.ajax({
		        url: "https://sindata.nira.one/$/updateProfile",
		        type: "POST",
		        data: text,
		        contentType: "application/json"
		    }).then(function(data, status, jqxhr) {
		    	if(data==="200") {
		    		alert("[Profile] Update complete");
		    		$("#current").text("[Profile] Update complete");
		    	}
	    		if(data==="500") {
		    		alert("[Profile] Failed to parse data");
		    		$("#current").text("[Profile] Update failed: due to parsing fail");
		    	}
	    		if(data==="501") {
		    		alert("[Profile] Crawl token expired");
		    		$("#current").text("[Profile] Update failed: Token is expired. Please try again from the first step.");
		    	}
		    	
		    	isGFDMall = false;
		    	curnum = 0;
		    });
		}
		else if(type=='skill') {
			$.ajax({
		        url: "https://sindata.nira.one/$/updateSkill",
		        type: "POST",
		        data: text,
		        contentType: "application/json"
		    }).then(function(data, status, jqxhr) {
		    	if(data==="200") {
		    		alert("[Skill] Update complete");
		    		$("#current").text("[Skill] Update complete");
		    	}
	    		if(data==="500") {
		    		alert("[Skill] Failed to parse data");
		    		$("#current").text("[Skill] Update failed: due to parsing fail");
		    	}
	    		if(data==="501") {
		    		alert("[Skill] Crawl token expired");
		    		$("#current").text("[Skill] Update failed: Token expired. Please try again from the first step.");
		    	}
		    });
		}
		else if(type=='board') {
			$.ajax({
				url: "https://sindata.nira.one/$/updateBoard/"+userid,
				type: "POST",
		        data: text,
				contentType: "application/json"
			}).then(function(data, status, jqxhr) {
		    	if(data==="200") {
		    		alert("[Player board] Update complete");
		    		$("#current").text("[Player board] Update complete");
		    	}
	    		if(data==="500") {
		    		alert("[Player board] Failed to parse data");
		    		$("#current").text("[Player board] Update failed: due to parsing fail");
		    	}
	    		if(data==="501") {
		    		alert("[Player board] Crawl token expired");
		    		$("#current").text("[Player board] Update failed: Token expired. Please try again from the first step.");
		    	}
		    });
		}
		else if(type=='simple') {
			$.ajax({
				url: "https://sindata.nira.one/$/updateTarget",
				type: "POST",
				data: text,
				contentType: "application/json"
			}).then(function(data, status, jqxhr) {
				if(data==="200") {
		    		alert("[Simple update] Update complete");
		    		$("#current").text("[Simple update] Update complete");
		    	}
	    		if(data==="500") {
		    		alert("[Simple update] Failed to parse data");
		    		$("#current").text("[Simple update] Update failed: due to parsing fail");
		    	}
	    		if(data==="501") {
		    		alert("[Simple update] Crawl token expired");
		    		$("#current").text("[Simple update] Update failed: Token expired. Please try again from the first step.");
		    	}
			});
		}
				
		// Enable button
		//enableButton();
	}

	func.crawlProfile = crawlProfile;
	func.crawlBoard = crawlBoard;
	func.crawlSongs = crawlSongs;
	func.crawlTarget = crawlTarget;
	return func;
}

function crawlRunner(type) {
	var skill = new SkillCrawler();
	
	if(type==0) skill.crawlProfile();
	
	// quick target update
	else if(type==10) skill.crawlTarget('gf', delay);
	else if(type==11) skill.crawlTarget('gf', delay);
	else if(type==12) skill.crawlTarget('dm', delay);
	
	// all song update
	else if(type==20) skill.crawlSongs('gf', 0, delay, null);
	else if(type==21) skill.crawlSongs('gf', 0, delay, null);
	else if(type==22) skill.crawlSongs('dm', 0, delay, null);
	
	// target song update
	else if(type==30) skill.crawlSongs('gf', 1, delay, null);
	else if(type==31) skill.crawlSongs('gf', 1, delay, null);
	else if(type==32) skill.crawlSongs('dm', 1, delay, null);
	
	// favo update
	else if(type==41) skill.crawlSongs('gf', 2, delay, null);
	else if(type==42) skill.crawlSongs('gf', 2, delay, null);
	else if(type==40) skill.crawlSongs('dm', 2, delay, null);
	
	// board update
	else if(type==51) skill.crawlBoard('gf');
	else if(type==52) skill.crawlBoard('dm');
	else console.log("[GITADORA Info] Wrong parameter passed");
	
	// disable all button
	//disableButton();
}

function crawlSelRunner(type) {
	var skill = new SkillCrawler();
	var lines = new Array();
	$("input[name='ver[]']:checked").each(function() {
		lines.push($(this).val());
	});
	
	if(type==1) skill.crawlSongs('gf', 3, delay, lines);
	else if(type==2) skill.crawlSongs('dm', 3, delay, lines);
}

function loadScript(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function setDelay() {
    delay = parseInt($("#delaySlider").val());
    
    if (delay < 10) {
        delay = 10;
    }
    
    $("#delayValue").text(delay);
}

function closeUpdater() {
	location.reload();
}

function disableButton() {
	document.getElementById("btnGTgt").setAttribute("disabled", "disabled");
	document.getElementById("btnDTgt").setAttribute("disabled", "disabled");
	document.getElementById("btnATgt").setAttribute("disabled", "disabled");
	
	document.getElementById("btnGTgt2").setAttribute("disabled", "disabled");
	document.getElementById("btnDTgt2").setAttribute("disabled", "disabled");
	document.getElementById("btnATgt2").setAttribute("disabled", "disabled");
	
	document.getElementById("btnGAll").setAttribute("disabled", "disabled");
	document.getElementById("btnDAll").setAttribute("disabled", "disabled");
	document.getElementById("btnAAll").setAttribute("disabled", "disabled");
	
	document.getElementById("btnGFav").setAttribute("disabled", "disabled");
	document.getElementById("btnDFav").setAttribute("disabled", "disabled");
	document.getElementById("btnAFav").setAttribute("disabled", "disabled");
	
	document.getElementById("btnGBrd").setAttribute("disabled", "disabled");
	document.getElementById("btnDBrd").setAttribute("disabled", "disabled");
	
	document.getElementById("btnGSel").setAttribute("disabled", "disabled");
	document.getElementById("btnDSel").setAttribute("disabled", "disabled");
}

function enableButton() {
	document.getElementById("btnGTgt").removeAttribute("disabled");
	document.getElementById("btnDTgt").removeAttribute("disabled");
	document.getElementById("btnATgt").removeAttribute("disabled");
	
	document.getElementById("btnGTgt2").removeAttribute("disabled");
	document.getElementById("btnDTgt2").removeAttribute("disabled");
	document.getElementById("btnATgt2").removeAttribute("disabled");
	
	document.getElementById("btnGAll").removeAttribute("disabled");
	document.getElementById("btnDAll").removeAttribute("disabled");
	document.getElementById("btnAAll").removeAttribute("disabled");
	
	document.getElementById("btnGFav").removeAttribute("disabled");
	document.getElementById("btnDFav").removeAttribute("disabled");
	document.getElementById("btnAFav").removeAttribute("disabled");
	
	document.getElementById("btnGBrd").removeAttribute("disabled");
	document.getElementById("btnDBrd").removeAttribute("disabled");
	
	document.getElementById("btnGSel").removeAttribute("disabled");
	document.getElementById("btnDSel").removeAttribute("disabled");
}
    
$(function () {
	$("head").append( $("<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />") );
	$("head").append( $("<link rel='stylesheet' type='text/css' />").attr("href", "https://sindata.nira.one/css/bootstrap.min.css") );
	$("head").append( $("<link rel='stylesheet' type='text/css' />").attr("href", "https://sindata.nira.one/css/custom/overall-w.css") );
	$("head").append( $("<link rel='stylesheet' type='text/css' />").attr("href", "https://sindata.nira.one/css/custom/filter.css") );
	$("head").append( $("<link rel='stylesheet' type='text/css' />").attr("href", "https://sindata.nira.one/css/custom/table.css") );
	
	var inject =
	"<div id='gfdminfo' class='crawler'>"
		+ "<div class='crawler-inner'>"
			+ "<div class='row'>"
				+ "<div class='col-12 crawler-pagetop text-center'>"
	    			+ "DATA UPDATE  "
    				+ "<a class='btn btn-warning' href='#no_div' onclick='closeUpdater()'>CLOSE</a>"
				+ "</div>"
				+ "<div class='col-12 text-center'>"
					+ "Version. HIGH-VOLTAGE"
				+ "</div>"
	    	+ "</div>";
	    
	if(token == "") {
		inject +=
			'<div class="card">'
				+ '<div class="card-header">'
					+ '<h3>Not Logined</h3>'
				+ '</div>'
				+ '<div class="card-body">'
					+ '<div class="card-text">'
						+ text.crawler.notlogin[lang]
					+ '</div>'
				+ '</div>'
			+ '</div>'
	}
	else {
		inject +=
			//'<div class="card">'
			//	+ '<div class="card-header">'
			//		+ '<h3>' + text.crawler.errort[lang] + '</h3>'
			//	+ '</div>'
			//	+ '<div class="card-body">'
			//		+ '<div class="card-text">'
			//			+ text.crawler.errorc[lang]
			//		+ '</div>'
			//	+ '</div>'
			//+ '</div>'

			'<div class="card">'
				+ '<div class="card-header">'
					+ '<h4>' + username + text.crawler.logined[lang] + '</h4>'
				+ '</div>'
				+ '<div class="card-body">'
					+ '<div class="card-text">'
						+ '<div class="text-center crawler-linespace">'
							+ '<h5>' + text.crawler.alert.title[lang] + '</h5>'
						+ '</div>'
						+ '<div class="text-left crawler-linespace">'
							+ text.crawler.alert.warn1[lang]
						+ '</div>'
						+ '<div class="text-left crawler-linespace">'
							+ text.crawler.alert.warn2[lang]
						+ '</div>'
						+ '<div class="text-left crawler-linespace">'
							+ text.crawler.alert.warn3[lang]
						+ '</div>'
						+ '<div class="text-left crawler-linespace">'
							+ text.crawler.alert.warn4[lang]
						+ '</div>'
						+ '<div class="text-left crawler-linespace">'
							+ text.crawler.alert.warn5[lang]
						+ '</div>'
					+ '</div>'
				+ '</div>'
			+ '</div>'

			+ '<div class="card">'
				+ '<div class="card-body">'
					+ '<div class="row">'
						+ '<div class="col-sm-6">'
							+ '<div class="text-center crawler-linespace">'
								+ '<h5>' + text.crawler.current[lang] + '</h5>'
							+ '</div>'
							+ '<div class="card-text" id="current"></div>'
						+ '</div>'
						+ '<div class="col-sm-6">'
							+ '<div class="card-text" id="current">'
								+ '<div class="text-center crawler-linespace">'
									+ '<h5>' + text.crawler.pause[lang] + '</h5>'
								+ '</div>'
								+ '<input type="range" id="delaySlider" value="500" min="10" max="2000" oninput="javascript:setDelay();" style="width:90%; font-weight:bold;">'
								+ '<span id="delayValue" style="font-size:22px">500</span> ms'
							+ '</div>'
						+ '</div>'
					+ '</div>'
				+ '</div>'
			+ '</div>'
			
			+ '<div class="card">'
				+ '<div class="card-header">'
					+ '<h5>' + text.crawler.datat[lang] + '</h5>'
				+ '</div>'
				+ '<div class="card-body">'
					+ '<div class="row">'
						+ '<div class="col-12">'
							+ '<h5>' + text.crawler.descTgtShortT[lang] + '</h5>'
						+ '</div>'
						+ '<div class="col-12">'
							+ '<span>' + text.crawler.descTgtShort[lang] + '</span>'
						+ '</div>'
						+ '<div class="col-12 btn-group btn-group-justified">'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(11)" id="btnGTgt2">GF</button>'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(12)" id="btnDTgt2">DM</button>'
							//+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(10)" id="btnATgt2">All</button>'
							+ '<br/>'
						+ '</div>'
					+ '</div>'
					+ '<div class="row">'
						+ '<div class="col-12">'
							+ '<h5>' + text.crawler.descTgtAllT[lang] + '</h5>'
						+ '</div>'
						+ '<div class="col-12">'
							+ '<span>' + text.crawler.descTgtAll[lang] + '</span>'
						+ '</div>'
						+ '<div class="col-12 btn-group btn-group-justified">'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(31)" id="btnGTgt">GF</button>'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(32)" id="btnDTgt">DM</button>'
							//+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(30)" id="btnATgt">All</button>'
							+ '<br/>'
						+ '</div>'
					+ '</div>'
					+ '<div class="row">'
						+ '<div class="col-12">'
							+ '<h5>' + text.crawler.descAllT[lang] + '</h5>'
						+ '</div>'
						+ '<div class="col-12">'
							+ '<span>' + text.crawler.descAll[lang] + '</span>'
						+ '</div>'
						+ '<div class="col-12 btn-group btn-group-justified">'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(21)" id="btnGAll">GF</button>'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(22)" id="btnDAll">DM</button>'
							//+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(20)" id="btnAAll">All</button>'
							+ '<br/>'
						+ '</div>'
					+ '</div>'
					+ '<div class="row">'
						+ '<div class="col-12">'
							+ '<h5>' + text.crawler.descFavoT[lang] + '</h5>'
						+ '</div>'
						+ '<div class="col-12">'
							+ '<span>' + text.crawler.descFavo[lang] + '</span>'
						+ '</div>'
						+ '<div class="col-12 btn-group btn-group-justified">'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(41)" id="btnGFav">GF</button>'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(42)" id="btnDFav">DM</button>'
							//+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(40)" id="btnAFav">All</button>'
						+ '</div>'
					+ '</div>'
				+ '</div>'
			+ '</div>'

			+ '<div class="card">'
				+ '<div class="card-header">'
					+ '<h3>' + text.crawler.board.title[lang] + '</h3>'
				+ '</div>'
				+ '<div class="card-body">'
					+ '<div class="card-title">'
						+ text.crawler.board.desc[lang]
					+ '</div>'
					+ '<div class="card-text" id="current">'
						+ '<div class="col-12 btn-group btn-group-justified">'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(51)" id="btnGBrd">GF '+text.crawler.board.short[lang]+'</button>'
							+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlRunner(52)" id="btnDBrd">DM '+text.crawler.board.short[lang]+'</button>'
						+ '</div>'
					+ '</div>'
				+ '</div>'
			+ '</div>'

			+ '<div class="card">'
				+ '<div class="card-header">'
					+ '<h3>' + text.crawler.selection[lang] + '</h3>'
				+ '</div>'
				+ '<div class="card-body">'
					+ '<div class="filter-ver">'
						+ '<div class="row">'
							+ '<div class="col-12">'
								+ '<div class="filter-front">'+text.crawler.seldesc[lang]+'</div>'
							+ '</div>'
						+ '</div>'
						+ '<div class="row">'
							+ '<div class="col-12">'
								+ '<div class="filter-back">'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="0">'+text.crawler.numberAndOther[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="1">A'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="2">B'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="3">C'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="4">D'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="5">E'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="6">F'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="7">G'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="8">H'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="9">I'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="10">J'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="11">K'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="12">L'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="13">M'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="14">N'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="15">O'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="16">P'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="17">Q'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="18">R'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="19">S'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="20">T'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="21">U'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="22">V'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="23">W'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="24">X'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="25">Y'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="26">Z'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="27">あ'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="28">か'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="29">さ'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="30">た'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="31">な'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="32">は'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="33">ま'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="34">や'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="35">ら'+text.crawler.line[lang]+'</label>'
									+ '</div>'
									+ '<div class="filter-obj">'
										+ '<label><input type="checkbox" name="ver[]" value="36">わ'+text.crawler.line[lang]+'</label>'
									+ '</div>'
								+ '</div>'
							+ '</div>'
						+ '</div>'
						+ '<div class="row">'
							+ '<div class="col-12 btn-group btn-group-justified">'
								+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlSelRunner(1)" id="btnGSel">'+text.crawler.gsel[lang]+'</button>'
								+ '<button class="btn btn-primary" style="width:100%;" onclick="crawlSelRunner(2)" id="btnDSel">'+text.crawler.dsel[lang]+'</button>'
							+ '</div>'
						+ '</div>'
					+ '</div>'
				+ '</div>'
			+ '</div>';
	}
	inject += '<div class="row">'
				+ '<div class="col-12"><a href="https://sin.nira.one" target="_blank">Skill Navigator</a> developed by Nira (<a href="https://twitter.com/_nira_one">@_nira_one</a>)</div>'
				+ '</div>'
		+ '</div></div>';
	$(inject).insertBefore("body");
});
