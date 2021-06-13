import crawlFromUrlList from "./crawlFromUrlList"
import UrlData from "./data/urlData"
import getTargetUrl from "./runner/getTargetUrl"

const crawlTarget = (
    gtype: string,
    delay: number,
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    // url 리스트를 가져온 후 url 목록에 대한 곡 파싱 수행
    setCurrent('Collecting URL... Initiating')
    collectTargetUrl(gtype, vtype, setCurrent)!
    .then(list => {
        setCurrent('Collecting Data... Initiating')
        crawlFromUrlList(list, delay, vtype, setCurrent, setBtnDisabled)
    })
}

const collectTargetUrl = (
    gtype: string,
    vtype: number,
    setCurrent: (s: string) => void
) => {
    // getTargetUrl에서 url 목록 수집
    let urlList = new Array<UrlData>()

    if(gtype === 'all') {
        setCurrent('Collecting URL... GF Hot')
        return getTargetUrl('gf', 1, vtype)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            setCurrent('Collecting URL... GF Other')
            return getTargetUrl('gf', 0, vtype)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            setCurrent('Collecting URL... DM Hot')
            return getTargetUrl('dm', 1, vtype)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            setCurrent('Collecting URL... DM Other')
            return getTargetUrl('dm', 0, vtype)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    else if(gtype === 'gf') {
        setCurrent('Collecting URL... GF Hot')
        return getTargetUrl('gf', 1, vtype)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            setCurrent('Collecting URL... GF Other')
            return getTargetUrl('gf', 0, vtype)
        })
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            return urlList
        })
    }
    else if(gtype === 'dm') {
        setCurrent('Collecting URL... DM Hot')
        return getTargetUrl('dm', 1, vtype)
        .then(list => {
            urlList = [...urlList, ...list]
        })
        .then(_ => {
            setCurrent('Collecting URL... DM Other')
            return getTargetUrl('dm', 0, vtype)
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