import axios from 'axios'
import * as cheerio from 'cheerio'
import crawlFromUrlList from '../crawlFromUrlList';
import UrlData from '../data/urlData'

const getMusicUrl = (
    gtype: string,
    allCategories: number,
    delay: number,
    categoryArray: Array<number>,
    currentIdx: number,
    urlArray: Array<UrlData>,
    sid: number,
    page: number
) => {
    // 각 카테고리에서 곡 URL을 모두 뽑아서 가져옴
    if(currentIdx < allCategories) {
        axios.get(`https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html?gtype=${gtype}&cat=${categoryArray[currentIdx]}`)
        .then(rtn => {
            const $ = cheerio.load(rtn.data)

            // url collect
            $('.text_link').each((idx, val) => {
                urlArray.push({
                    targetTo: $(val).attr('href')!,
                    ref: `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html?gtype=${gtype}&cat=${categoryArray[currentIdx]}`
                })
                console.log(`[Collecting URL] Category ${currentIdx} / ${idx}`)
            })
            
            setTimeout(function() {
                getMusicUrl(gtype, allCategories, delay, categoryArray, currentIdx+1, urlArray, sid, page);
            }, delay);
        });
    }
    else {
        console.log("Skill data collecting...");

        // 수집된 모든 URL 데이터를 이용하여 데이터 수집 시행
        crawlFromUrlList(urlArray, delay)
    }
}

export default getMusicUrl