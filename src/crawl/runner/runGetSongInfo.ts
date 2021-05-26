const runGetSongInfo = (gtype: string,
                        lines: Array<number>,
                        cat: number,
                        sid: number,
                        page: number,
                        index: Array<number>,
                        timeInterval: number,
                        i: number,
                        j: number
) => {
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

export default runGetSongInfo