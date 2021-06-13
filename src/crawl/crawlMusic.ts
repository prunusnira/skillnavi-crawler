import axios from "axios"
import onSongSuccess from "./onSongSuccess"

const crawlMusic = (
    url: string,
    setCurrent: (s: string) => void
) => {
    return axios.get(url)
    .then(rtn => {
        return onSongSuccess(rtn.data, setCurrent)
    })
}

export default crawlMusic