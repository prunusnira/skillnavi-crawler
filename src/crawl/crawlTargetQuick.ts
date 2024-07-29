import crawlProfile from "./crawlProfile"
import CrawlData from "./data/crawlData"
import getTargetSimple from "./runner/getTargetSimple"
import upload from "./upload"

const crawlTargetQuick = (
    gtype: string,
    delay: number,
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    const skillData: CrawlData = {
        crawlToken: (window as any).crawlToken,
        musicData: []
    }

    console.log("[Simple update] Collecting data")
    setCurrent('Collecting Data... Initiating')

    if(gtype === 'all') {
        setCurrent('Collecting URL... GF Hot')
        getTargetSimple('gf', 1, vtype)
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            setCurrent('Collecting URL... GF Other')
            return getTargetSimple('gf', 0, vtype)
        })
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            setCurrent('Collecting URL... DM Hot')
            return getTargetSimple('dm', 1, vtype)
        })
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            setCurrent('Collecting URL... DM Other')
            return getTargetSimple('dm', 0, vtype)
        })
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            upload(JSON.stringify(skillData), 'simple', vtype, setCurrent, setBtnDisabled)
            crawlProfile(vtype, setCurrent, setBtnDisabled)
        })
    }
    else if(gtype === 'gf') {
        setCurrent('Collecting URL... GF Hot')
        getTargetSimple('gf', 1, vtype)
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            setCurrent('Collecting URL... GF Other')
            return getTargetSimple('gf', 0, vtype)
        })
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            upload(JSON.stringify(skillData), 'simple', vtype, setCurrent, setBtnDisabled)
            crawlProfile(vtype, setCurrent, setBtnDisabled)
        })
    }
    else if(gtype === 'dm') {
        setCurrent('Collecting URL... DM Hot')
        getTargetSimple('dm', 1, vtype)
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            setCurrent('Collecting URL... DM Other')
            return getTargetSimple('dm', 0, vtype)
        })
        .then(data => {
            data.forEach(d => {
                skillData.musicData.push(d)
            })
        })
        .then(_ => {
            upload(JSON.stringify(skillData), 'simple', vtype, setCurrent, setBtnDisabled)
        })
    }
}

export default crawlTargetQuick