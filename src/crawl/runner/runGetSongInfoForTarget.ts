import axios from "axios";
import crawlProfile from "../crawlProfile";
import getSongInfoForTarget from "../getter/getSongInfoForTarget";
import onSongSuccess from "../onSongSuccess";
import upload from "../upload";
import runGetFavo from "./runGetFavo";
import runGetTarget from "./runGetTarget";

const runGetSongInfoForTarget = (
    urllist: Array<string>,
    gtype: string,
    timeInterval: number,
    i: number,
    stype: number
) => {
    if(i < urllist.length) {
        switch(stype) {
        case 0:
        case 1:
            //getTarget(gtype, stype);
            runGetTarget(gtype, stype)
            break;
        case 2:
            //getFavo(gtype);
            runGetFavo(gtype)
            break;
        }

        axios.get(urllist[i])
        .then(rtn => {
            onSongSuccess(gtype, rtn.data)
            
            setTimeout(function() {
                runGetSongInfoForTarget(urllist, gtype, timeInterval, i+1, stype)
            }, timeInterval)
        })
    }
    else if(stype == 1) {
        // Hot곡 완료 시 Other 수행
        console.log("[Skill targets] Other songs data collecting...");
        //$("#current").text("[Skill targets] Other songs data collecting...");
        runGetSongInfoForTarget(otherlist, gtype, timeInterval, 0, 0);
    }
    else {
        // 완전 다 끝나면 마무리
        console.log("Uploading skill data");
        //$("#current").text("Uploading skill data");
        upload(JSON.stringify(jsonRoot), 'skill');
        
        console.log("Update complete");
        //$("#current").text("Update complete");

        jsonRoot = new Object();
        crawlProfile();
    }
}

export default runGetSongInfoForTarget
