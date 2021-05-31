import axios from "axios"
import * as cheerio from 'cheerio'
import UrlData from "../data/urlData"

const getFavoUrl = (gtype: string) => {
    return axios.get(`https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/setting/favorite.html?gtype=${gtype}`)
    .then(rtn => {
        // get all link to each song -> run get song info
        const $ = cheerio.load(rtn.data)
        const linklist = new Array<UrlData>()

        $('.text_link').each((idx, val) => {
            linklist.push({
                targetTo: $(val).attr('href')!,
                ref: `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/setting/favorite.html?gtype=${gtype}`
            })
            console.log("[Collecting URL] "+ idx +" checked")
        })
        
        return linklist
    })
}

export default getFavoUrl