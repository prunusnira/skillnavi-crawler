import axios from "axios";
import CommonData from "../function/commonData";
import crawlProfile from "./crawlProfile";

const upload = (
    json: string,
    type: string,
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    if (type === 'profile') {
        let url = ''
        switch(vtype) {
            case 1:
                url = `${CommonData.uploadProfile[1]}/tbre`
                break
            case 2:
                url = `${CommonData.uploadProfile[1]}/mx`
                break
            case 3:
                url = `${CommonData.uploadProfile[1]}/ex`
                break
            case 4:
                url = `${CommonData.uploadProfile[1]}/nx`
                break
            default:
                url = CommonData.uploadProfile[0]
                break
        }

        axios.post(
            url,
            json,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === 200) {
                alert("[Profile] Update complete")
                console.log("[Profile] Update complete")
                setCurrent("[Profile] Update complete")
            }
            if(rtn.data === 500) {
                alert("[Profile] Failed to parse data")
                console.log("[Profile] Update failed: due to parsing fail")
                setCurrent("[Profile] Failed to parse data")
            }
            if(rtn.data === 501) {
                alert("[Profile] Crawl token expired")
                console.log("[Profile] Update failed: Token is expired. Please try again from the first step.")
                setCurrent("[Profile] Crawl token expired")
            }
            setBtnDisabled(false)
        })
    }
    else if(type === 'skill') {
        let url = ''
        switch(vtype) {
            case 1:
                url = `${CommonData.uploadSkill[1]}/tbre`
                break
            case 2:
                url = `${CommonData.uploadSkill[1]}/mx`
                break
            case 3:
                url = `${CommonData.uploadSkill[1]}/ex`
                break
            case 4:
                url = `${CommonData.uploadSkill[1]}/nx`
                break
            default:
                url = CommonData.uploadSkill[0]
                break
        }

        axios.post(
            url,
            json,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === 200) {
                alert("[Skill] Update complete")
                console.log("[Skill] Update complete")
                setCurrent("[Skill] Update complete")
                crawlProfile(vtype, setCurrent, setBtnDisabled)
            }
            if(rtn.data === 500) {
                alert("[Skill] Failed to parse data")
                console.log("[Skill] Update failed: due to parsing fail")
                setCurrent("[Skill] Failed to parse data")
            }
            if(rtn.data === 501) {
                alert("[Skill] Crawl token expired")
                console.log("[Skill] Update failed: Token expired. Please try again from the first step.")
                setCurrent("[Skill] Crawl token expired")
            }
            setBtnDisabled(false)
        })
    }
    else if(type === 'board') {
        axios.post(
            `https://sindata.nira.one/$/updateBoard/${(window as any).userid}`,
            json,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === 200) {
                alert("[Player board] Update complete")
                console.log("[Player board] Update complete")
                setCurrent("[Player board] Update complete")
            }
            if(rtn.data === 500) {
                alert("[Player board] Failed to parse data")
                console.log("[Player board] Update failed: due to parsing fail")
                setCurrent("[Player board] Failed to parse data")
            }
            if(rtn.data === 501) {
                alert("[Player board] Crawl token expired")
                console.log("[Player board] Update failed: Token expired. Please try again from the first step.")
                setCurrent("[Player board] Crawl token expired")
            }
            setBtnDisabled(false)
        })
    }
    else if(type === 'simple') {
        axios.post(
            `https://sindata.nira.one/$/updateTarget`,
            json,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === 200) {
                alert("[Simple update] Update complete")
                console.log("[Simple update] Update complete")
                setCurrent("[Simple update] Update complete")
                crawlProfile(vtype, setCurrent, setBtnDisabled)
            }
            if(rtn.data === 500) {
                alert("[Simple update] Failed to parse data")
                console.log("[Simple update] Update failed: due to parsing fail")
                setCurrent("[Simple update] Failed to parse data")
            }
            if(rtn.data === 501) {
                alert("[Simple update] Crawl token expired")
                console.log("[Simple update] Update failed: Token expired. Please try again from the first step.")
                setCurrent("[Simple update] Crawl token expired")
            }
            setBtnDisabled(false)
        })
    }
}

export default upload