import axios from "axios"
import * as cheerio from 'cheerio'

const runGetFavo = (gtype: string) => {
    return axios.get(`https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/setting/favorite.html?gtype=${gtype}`)
    .then(rtn => {
        // get all link to each song -> run get song info
        const $ = cheerio.load(rtn.data)
        const linklist = new Array<string>()

        $('.text_link').each((idx, val) => {
            linklist.push($(val).attr('href')!)
            console.log("[Collecting URL] "+ idx +" checked")
            //$("#current").text("[Collecting URL] "+ idx +" checked")
        })
        
        return linklist
    })
}

export default runGetFavo