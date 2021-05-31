import crawlFromUrlList from "./crawlFromUrlList"
import UrlData from "./data/urlData"
import getTargetUrl from "./runner/getTargetUrl"

const crawlTarget = (
    gtype: string,
    delay: number
) => {
    // url 리스트를 가져온 후 url 목록에 대한 곡 파싱 수행
    collectTargetUrl(gtype)!
    .then(list => {
        crawlFromUrlList(list, delay)
    })
}

const collectTargetUrl = (gtype: string) => {
    // getTargetUrl에서 url 목록 수집
    let urlList = new Array<UrlData>()

    if(gtype === 'all') {
        return getTargetUrl('gf', 1)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return getTargetUrl('gf', 0)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return getTargetUrl('dm', 1)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return getTargetUrl('dm', 0)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    else if(gtype === 'gf') {
        return getTargetUrl('gf', 1)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return getTargetUrl('gf', 0)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    else if(gtype === 'dm') {
        return getTargetUrl('dm', 1)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return getTargetUrl('dm', 0)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    return null
}

export default crawlTarget