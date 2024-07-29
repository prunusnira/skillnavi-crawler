import crawlFromUrlList from "./crawlFromUrlList"
import UrlData from "./data/urlData"
import getFavoUrl from "./runner/getFavoUrl"

const crawlFavo = (
    page: number,
    gtype: string,
    delay: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    // url 리스트를 가져온 후 url 목록에 대한 곡 파싱 수행
    collectFavoUrl(page, gtype, setCurrent)!
        .then(list => {
            crawlFromUrlList(list, delay, 0, setCurrent, setBtnDisabled)
        })
}

const collectFavoUrl = async (
    page: number,
    gtype: string,
    setCurrent: (s: string) => void
) => {
    // getFavoUrl에서 url목록 수집
    if (gtype === 'all') {
        const gfUrl = await getFavoUrl(page, 'gf', setCurrent);
        const dmUrl = await getFavoUrl(page, 'dm', setCurrent);
        return [
            ...gfUrl,
            ...dmUrl,
        ];
    } else {
        return await getFavoUrl(page, gtype, setCurrent);
    }
}

export default crawlFavo