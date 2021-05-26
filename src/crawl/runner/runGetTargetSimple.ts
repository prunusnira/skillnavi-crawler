const runGetTargetSimple = (gtype: string, stype: string) => {
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

export default runGetTargetSimple