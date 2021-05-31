import axios from "axios"
import * as cheerio from 'cheerio'
import UrlData from "../data/urlData"

const getTargetUrl = (gtype: string, stype: number) => {
    return axios.get(`https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html?gtype=${gtype}&stype=${stype}`)
    .then(rtn => {
        // get all link to each song -> run get song info
        const $ = cheerio.load(rtn.data)
        const linklist = new Array<UrlData>()

        $('.text_link').each((idx, val) => {
            linklist.push({
                targetTo: $(val).attr('href')!,
                ref: `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html?gtype=${gtype}&stype=${stype}`
            })
            console.log("[Collecting URL] "+ idx +" checked")
        })
        
        return linklist
    })
}

export default getTargetUrl