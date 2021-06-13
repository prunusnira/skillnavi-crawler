import axios from "axios"
import * as cheerio from 'cheerio'
import CommonData from "../../function/commonData"
import UrlData from "../data/urlData"

const getFavoUrl = (
    gtype: string,
    setCurrent: (s: string) => void
) => {
    return axios.get(`${CommonData.favoUrl}?gtype=${gtype}`)
    .then(rtn => {
        // get all link to each song -> run get song info
        const $ = cheerio.load(rtn.data)
        const linklist = new Array<UrlData>()

        setCurrent("Favorite Folder URL Collecting...")
        $('.text_link').each((idx, val) => {
            linklist.push({
                targetTo: $(val).attr('href')!,
                ref: `${CommonData.favoUrl}?gtype=${gtype}`
            })
            console.log("[Collecting URL] "+ idx +" checked")
        })
        
        return linklist
    })
}

export default getFavoUrl