import axios from "axios"
import onSongSuccess from "./onSongSuccess"

const crawlMusic = (
    url: string
) => {
    return axios.get(url)
    .then(rtn => {
        return onSongSuccess(rtn.data)
    })
}

export default crawlMusic