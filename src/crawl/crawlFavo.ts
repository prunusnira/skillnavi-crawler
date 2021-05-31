import crawlFromUrlList from "./crawlFromUrlList"
import UrlData from "./data/urlData"
import getFavoUrl from "./runner/getFavoUrl"

const crawlFavo = (
    gtype: string,
    delay: number
) => {
    // url 리스트를 가져온 후 url 목록에 대한 곡 파싱 수행
    collectFavoUrl(gtype)!
    .then(list => {
        crawlFromUrlList(list, delay)
    })
}

const collectFavoUrl = (gtype: string) => {
    // getFavoUrl에서 url목록 수집
    let urlList = new Array<UrlData>()

    if(gtype === 'all') {
        return getFavoUrl('gf')
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return getFavoUrl('dm')
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    else if(gtype === 'gf') {
        return getFavoUrl('gf')
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    else if(gtype === 'dm') {
        return getFavoUrl('dm')
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    return null
}

export default crawlFavo