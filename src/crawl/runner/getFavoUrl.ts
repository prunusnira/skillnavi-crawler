import axios from "axios";
import * as cheerio from 'cheerio';
import CommonData from "../../function/commonData";
import UrlData from "../data/urlData";
import language from "../../function/language";
import text from '../../text/text';

const getFavoUrl = async (
    page: number,
    gtype: string,
    setCurrent: (s: string) => void,
) => {
    let pageUrl;
    switch(page) {
        case 1:
            pageUrl = `${CommonData.favoUrl1}?gtype=${gtype}`;
            break;
        case 2:
            pageUrl = `${CommonData.favoUrl2}?gtype=${gtype}`;
            break;
        case 3:
            pageUrl = `${CommonData.favoUrl3}?gtype=${gtype}`;
            break;
        default:
            pageUrl = '';
            break;
    }

    if(pageUrl !== '') {
        alert((text.crawler.favorite.pageError as any)[language.setLang()]);
        return [];
    }

    const rtn = await axios.get(pageUrl);

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
}

export default getFavoUrl