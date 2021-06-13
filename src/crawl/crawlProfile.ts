import axios from 'axios'
import * as cheerio from 'cheerio'
import CommonData from '../function/commonData';
import Profile from './data/profileData';
import upload from './upload';

const crawlProfile = (
    vtype: number,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    console.log("[Skill Navigator] Profile Update Initializing")
    setCurrent('Profile Update Initializing...')

    axios.get(`${CommonData.profUrl[vtype]}`)
    .then(html => {
        console.log("[Skill Navigator] Profile Data Received")
        setCurrent('Profile Data Received')

        const $ = cheerio.load(html.data)

        const title = $('.profile_shogo_frame').text()
        const name = $('.profile_name_frame').text()
        
        const table = $('#profile_tb')

        const arr = Array<Array<string>>()
        const data = $(table).children('tbody').children('tr')
        data.each((i, row) => {
            const rowarr = new Array<string>()
            $(row).children('td').each((j, col) => {
                rowarr.push($(col).text())
            })
            arr.push(rowarr)
        })

        const profileData: Profile = {
            title: title,
            name: name,
            gskill: arr[0][1],
            dskill: arr[0][2],
            gskillall: arr[1][1],
            dskillall: arr[1][2],
            gclearlv: arr[2][1],
            dclearlv: arr[2][2],
            gclearnum: arr[3][1],
            dclearnum: arr[3][2],
            gfclv: arr[4][1],
            dfclv: arr[4][2],
            gfcnum: arr[5][1],
            dfcnum: arr[5][2],
            gexclv: arr[6][1],
            dexclv: arr[6][2],
            gexcnum: arr[7][1],
            dexcnum: arr[7][2],
            crawlToken: (window as any).crawlToken
        }
        
        console.log("[Skill Navigator] Uploading Profile...")
        setCurrent('Uploading Profile...')
        upload(JSON.stringify(profileData), 'profile', vtype, setCurrent, setBtnDisabled)
    })
}

export default crawlProfile