import runGetFavo from "./runner/runGetFavo";
import runGetIndex from "./runner/runGetIndex";
import runGetSongInfoForTarget from "./runner/runGetSongInfoForTarget";
import runGetTarget from "./runner/runGetTarget";

const crawlSongs = (
    gtype: string,
    ctype: number,
    timeInterval: number,
    lines: Array<number> | null,
) => {
    var cat = 37; // 고정값
    var sid = 2; // 고정값
    var page = 1; // 고정값
    var index = Array(); // 업로드 노래 수에 따라 변동

    switch(ctype) {
    case 0:
        var idxnum = new Array();
        for(var i = 0; i < cat; i++) {
            idxnum.push(i);
        }
        console.log("[All songs] Collecting URL data");
        //$("#current").text("[All songs] Collecting URL data");
        runGetIndex(gtype, cat, timeInterval, idxnum, 0, index, sid, page);
        // gtype, cat, timeinterval, line, i, index, sid, page
        break;
    case 1:
        console.log("[Skill targets] Collecting URL data");
        //$("#current").text("[Skill targets] Collecting URL data");
        let urlList = new Array<string>()
        runGetTarget(gtype, 1)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(res => {
            return runGetTarget(gtype, 0)
        })
        .then(list => {
            urlList = [...urlList, ...list]

            console.log("[Skill targets] Hot songs data collecting...")
            //$("#current").text("[Skill targets] Hot songs data collecting...");
            runGetSongInfoForTarget(urlList, gtype, timeInterval, 0, 1)
        })
        break
    case 2:
        console.log("[Favorite list] Collecting URL data");
        //$("#current").text("[Favorite list] Collecting URL data");
        runGetFavo(gtype)
        .then(list => {
            console.log("[Favorite list] Skill data collecting...")
            //$("#current").text("[Favorite list] Skill data collecting...");
            runGetSongInfoForTarget(list, gtype, timeInterval, 0, 2)
        })
        break
    case 3:
        console.log("[Partial update] Collecting URL data");
        //$("#current").text("[Partial update] Collecting URL data");
        runGetIndex(gtype, lines.length, timeInterval, lines, 0, index, sid, page);
        // gtype, cat, timeinterval, line, i, index, sid, page
        break;
    }
}

export default crawlSongs