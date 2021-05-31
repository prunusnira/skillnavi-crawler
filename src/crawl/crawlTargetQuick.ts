import crawlProfile from "./crawlProfile"
import MusicData from "./data/musicData"
import getTargetSimple from "./runner/getTargetSimple"
import upload from "./upload"

const crawlTargetQuick = (gtype: string, delay: number) => {
    const skillData = new Array<MusicData>()

    console.log("[Simple update] Collecting data")

    if(gtype === 'all') {
        getTargetSimple('gf', 1)
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            return getTargetSimple('gf', 0)
        })
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            return getTargetSimple('dm', 1)
        })
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            return getTargetSimple('dm', 0)
        })
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            upload(JSON.stringify(skillData), 'simple')
            crawlProfile()
        })
    }
    else if(gtype === 'gf') {
        getTargetSimple('gf', 1)
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            return getTargetSimple('gf', 0)
        })
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            upload(JSON.stringify(skillData), 'simple')
            crawlProfile()
        })
    }
    else if(gtype === 'dm') {
        getTargetSimple('dm', 1)
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            return getTargetSimple('dm', 0)
        })
        .then(data => {
            skillData.push(data)
        })
        .then(_ => {
            upload(JSON.stringify(skillData), 'simple')
            crawlProfile()
        })
    }
}

export default crawlTargetQuick