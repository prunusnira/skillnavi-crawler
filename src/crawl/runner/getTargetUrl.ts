import axios from "axios"
import * as cheerio from 'cheerio'
import CommonData from "../../function/commonData"
import UrlData from "../data/urlData"

const getTargetUrl = (
    gtype: string,
    stype: number,
    vtype: number
) => {
    return axios.get(`${CommonData.skillUrl[vtype]}?gtype=${gtype}&stype=${stype}`)
    .then(rtn => {
        // get all link to each song -> run get song info
        const $ = cheerio.load(rtn.data)
        const linklist = new Array<UrlData>()

        $('.text_link').each((idx, val) => {
            linklist.push({
                targetTo: $(val).attr('href')!,
                ref: `${CommonData.skillUrl[vtype]}?gtype=${gtype}&stype=${stype}`
            })
            console.log("[Collecting URL] "+ idx +" checked")
        })
        
        return linklist
    })
}

export default getTargetUrl