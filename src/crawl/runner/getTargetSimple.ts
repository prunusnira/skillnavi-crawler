import axios from "axios"
import * as cheerio from 'cheerio'
import MusicData from "../data/musicData";
import PatternData from "../data/patternData";

const getTargetSimple = (gtype: string, stype: number) => {
    // stype이 0이면 other, 그 외에는 hot
    return axios.get(`https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html?gtype=${gtype}&stype=${stype}`)
    .then(rtn => {
        // get all link to each song -> run get song info
        const $ = cheerio.load(rtn.data)
        const data: MusicData = {
            musictitle: '',
            crawlToken: (window as any).crawlToken,
            data: []
        }
        
        // 각 tablerow에 대해서 곡을 뽑아옴
        const rows = $('.skill_table_tb').children('tr')
        
        rows.each((idx, val) => {
            if($(val).find('.text_link').length > 0) {
                let type = 'g'
                let diff = 'bsc'
                let ptcode = 0
        
                if($(val).find('.part_GUITAR').length > 0) { type = "g"; }
                else if($(val).find('.part_BASS').length > 0) { type = "b"; }
                else if($(val).find('.part_DRUM').length > 0) { type = "d"; }
        
                if($(val).find('.diff_BASIC').length > 0) { diff = "bsc"; }
                else if($(val).find('.diff_ADVANCED').length > 0) { diff = "adv"; }
                else if($(val).find('.diff_EXTREME').length > 0) { diff = "ext"; }
                else if($(val).find('.diff_MASTER').length > 0) { diff = "mas"; }

                switch(type) {
                    case 'g':
                        switch(diff) {
                            case 'bsc': ptcode = 1; break;
                            case 'adv': ptcode = 2; break;
                            case 'exc': ptcode = 3; break;
                            case 'mas': ptcode = 4; break;
                        }
                        break
                    case 'b':
                        switch(diff) {
                            case 'bsc': ptcode = 5; break;
                            case 'adv': ptcode = 6; break;
                            case 'exc': ptcode = 7; break;
                            case 'mas': ptcode = 8; break;
                        }
                        break
                    case 'd':
                        switch(diff) {
                            case 'bsc': ptcode = 9; break;
                            case 'adv': ptcode = 10; break;
                            case 'exc': ptcode = 11; break;
                            case 'mas': ptcode = 12; break;
                        }
                        break
                }

                var title = $(val).find('.text_link').text();

                data.musictitle = title
        
                const rate = $(val).find('.achive_cell').text().trim().split("%")[0].replace('.','');
                const level = parseInt($(val).find('.diff_cell').text().trim().replace('.',''))
        
                const skill: PatternData = {
                    ptcode: ptcode,
                    level: level,
                    playcount: 1,
                    clearcount: 1,
                    clearstat: '',
                    rank: '',
                    rate: rate,
                    score: 0,
                    combo: 0,
                    meter: ''
                }

                data.data.push(skill)
            }
        })

        return data
    })
}

export default getTargetSimple