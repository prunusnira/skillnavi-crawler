import axios from "axios"
import crawlMusic from "./crawlMusic"
import MusicData from "./data/musicData"
import UrlData from "./data/urlData"

const crawlFromUrlList = (
    urls: Array<UrlData>,
    delay: number
) => {
    // 순서
    // 1. ref로 이동
    // 2. targetTo로 이동해서 데이터 수집
    const allList = new Array<MusicData>()
    runUrlIndex(allList, urls, 0, delay)
}

const runUrlIndex = (
    list: Array<MusicData>,
    urls: Array<UrlData>,
    index: number,
    delay: number
) => {
    const current = urls[index]
    return axios.get(current.ref)
    .then(_ => {
        return crawlMusic(current.targetTo)
        .then(data => {
            list.push(data)
            if(index < urls.length - 1) {
                setTimeout(() =>
                    runUrlIndex(list, urls, ++index, delay)
                , delay)
            }
        })
    })
}

export default crawlFromUrlList