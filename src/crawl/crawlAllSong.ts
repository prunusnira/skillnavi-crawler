import getMusicUrl from "./runner/getMusicUrl"
import UrlData from "./data/urlData"

const crawlAllSong = (
    gtype: string,
    delay: number,
    isSelective: boolean,
    category: Array<number> = [],
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    const allCategories = 37; // 고정값
    const sid = 2; // 고정값
    const page = 1; // 고정값
    const urlArray = Array<UrlData>(); // 업로드 노래 수에 따라 변동

    if(!isSelective) {
        const catArr = new Array<number>();
        for(var i = 0; i < allCategories; i++) {
            catArr.push(i)
        }
        setCurrent('Collecting URLs for each category...')
        console.log("[All songs] Collecting URL data")
        getMusicUrl(gtype, allCategories, delay, catArr, 0, urlArray, sid, page,
                vtype, setCurrent, setBtnDisabled)
        // gtype, 카테고리 개수, delay, 카테고리 배열, 현재 카테고리, url, sid, page
    }
    else {
        setCurrent('Collecting URLs for selected category...')
        console.log("[Partial update] Collecting URL data")
        getMusicUrl(gtype, category.length, delay, category, 0, urlArray, sid, page,
                vtype, setCurrent, setBtnDisabled)
        // gtype, 카테고리 개수, delay, 카테고리 배열, 현재 카테고리, url, sid, page
    }
}

export default crawlAllSong