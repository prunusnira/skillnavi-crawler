import axios from "axios";

const upload = (json: string, type: string) => {
    if (type === 'profile') {
        axios.post(
            'https://sindata.nira.one/$/updateProfile',
            JSON.parse(json),
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === "200") {
                alert("[Profile] Update complete");
                //$("#current").text("[Profile] Update complete");
            }
            if(rtn.data === "500") {
                alert("[Profile] Failed to parse data");
                //$("#current").text("[Profile] Update failed: due to parsing fail");
            }
            if(rtn.data === "501") {
                alert("[Profile] Crawl token expired");
                //$("#current").text("[Profile] Update failed: Token is expired. Please try again from the first step.");
            }
        })
    }
    else if(type === 'skill') {
        axios.post(
            'https://sindata.nira.one/$/updateSkill',
            JSON.parse(json),
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === "200") {
                alert("[Skill] Update complete");
                //$("#current").text("[Skill] Update complete");
            }
            if(rtn.data === "500") {
                alert("[Skill] Failed to parse data");
                //$("#current").text("[Skill] Update failed: due to parsing fail");
            }
            if(rtn.data === "501") {
                alert("[Skill] Crawl token expired");
                //$("#current").text("[Skill] Update failed: Token expired. Please try again from the first step.");
            }
        })
    }
    else if(type === 'board') {
        axios.post(
            `https://sindata.nira.one/$/updateBoard/${(window as any).userid}`,
            JSON.parse(json),
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === "200") {
                alert("[Player board] Update complete");
                //$("#current").text("[Player board] Update complete");
            }
            if(rtn.data === "500") {
                alert("[Player board] Failed to parse data");
                //$("#current").text("[Player board] Update failed: due to parsing fail");
            }
            if(rtn.data === "501") {
                alert("[Player board] Crawl token expired");
                //$("#current").text("[Player board] Update failed: Token expired. Please try again from the first step.");
            }
        })
    }
    else if(type === 'simple') {
        axios.post(
            'https://sindata.nira.one/$/updateTarget',
            JSON.parse(json),
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(rtn => {
            if(rtn.data === "200") {
                alert("[Simple update] Update complete");
                //$("#current").text("[Simple update] Update complete");
            }
            if(rtn.data === "500") {
                alert("[Simple update] Failed to parse data");
                //$("#current").text("[Simple update] Update failed: due to parsing fail");
            }
            if(rtn.data === "501") {
                alert("[Simple update] Crawl token expired");
                //$("#current").text("[Simple update] Update failed: Token expired. Please try again from the first step.");
            }
        })
    }
}

export default upload