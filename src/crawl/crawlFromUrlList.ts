import axios from "axios"
import crawlMusic from "./crawlMusic"
import CrawlData from "./data/crawlData"
import MusicData from "./data/musicData"
import UrlData from "./data/urlData"
import upload from "./upload"

const crawlFromUrlList = (
    urls: Array<UrlData>,
    delay: number,
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    // 순서
    // 1. ref로 이동
    // 2. targetTo로 이동해서 데이터 수집
    const skillData: CrawlData = {
        crawlToken: (window as any).crawlToken,
        musicData: []
    }
    runUrlIndex(skillData, urls, 0, delay, vtype, setCurrent, setBtnDisabled)
}

const runUrlIndex = (
    skillData: CrawlData,
    urls: Array<UrlData>,
    index: number,
    delay: number,
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    if(index < urls.length) {
        const current = urls[index]
        return axios.get(current.ref)
        .then(_ => {
            return crawlMusic(current.targetTo, setCurrent)
            .then(data => {
                skillData.musicData.push(data)
                setTimeout(() =>
                    runUrlIndex(skillData, urls, ++index, delay, vtype, setCurrent, setBtnDisabled)
                , delay)
            })
        })
    }
    else {
        // 완성된 데이터 업로드
        upload(JSON.stringify(skillData), 'skill', vtype, setCurrent, setBtnDisabled)
    }
}

export default crawlFromUrlList