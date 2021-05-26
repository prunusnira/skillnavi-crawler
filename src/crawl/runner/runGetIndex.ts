import axios from 'axios'
import * as cheerio from 'cheerio'
import runGetSongInfo from './runGetSongInfo';

const runGetIndex = (
    gtype: string,
    cat: number,
    timeInterval: number,
    idx: Array<number>,
    i: number,
    index: Array<number>,
    sid: number,
    page: number
) => {
    if(i < cat) {
        axios.get(`https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html?gtype=${gtype}&cat=${idx[i]}`)
        .then(rtn => {
            const $ = cheerio.load(rtn.data)

            // get table
            var list_table = $('table.music_table_tb').children('tbody').children('tr');
            if(gtype === 'gf') index[i] = list_table.length/2;
            else index[i] = list_table.length;

            console.log("[Collecting URL] Category "+ (i+1) +" / "+ cat +" checked");
            //$("#current").text("[Collecting URL] Category "+ (i+1) +" / "+ cat +" checked");
            
            setTimeout(function() {
                runGetIndex(gtype, cat, timeInterval, idx, i+1, index, sid, page);
            }, timeInterval);
        });
    }
    else {
        console.log("Skill data collecting...");
        //$("#current").text("Skill data collecting...");
        runGetSongInfo(gtype, idx, cat, sid, page, index, timeInterval, 0, 0);
        // 0, 0: 카테고리, 페이지 내 순서 (i, j)
    }
}

export default runGetIndex