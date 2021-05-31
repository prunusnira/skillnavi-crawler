import * as cheerio from 'cheerio'
import MusicData from './data/musicData';
import PatternData from './data/patternData';

const onSongSuccess = (data: string) => {
    const $ = cheerio.load(data)

    const name = $('div.live_title').text()

    const music: MusicData = {
        musictitle: name,
        crawlToken: (window as any).crawlToken,
        data: [],
    }

    const divs = $('div.md_list_contents')

    const gfExist = $('div.md_part_GUITAR').length
    const baExist = $('div.md_part_BASS').length
    const dmExist = $('div.md_part_').length

    const divlist = new Array<string>();

    $('div.white_box').children().each((i, v) => {
        const str = $(v).attr('class')

        if(str == 'md_part_GUITAR' || str == 'md_part_BASS' || str == 'md_part_') {
            divlist.push(str)
        }

        if(str == 'md_list_contents') {
            divlist.push($(v).find('th').attr('class')!)
        }
    })

    if(gfExist > 0 || baExist > 0) {
        var gfon = false
        var baon = false
        var ptcodelist = new Array<number>()
        for(var i = 0; i < divlist.length; i++) {
            if(divlist[i] == 'md_part_GUITAR') {
                gfon = true
                baon = false
            }
            else if(divlist[i] == 'md_part_BASS') {
                gfon = false
                baon = true
            }

            if(gfon) {
                if(divlist[i] == 'diff_BASIC') ptcodelist.push(1)
                else if(divlist[i] == 'diff_ADVANCED') ptcodelist.push(2)
                else if(divlist[i] == 'diff_EXTREME') ptcodelist.push(3)
                else if(divlist[i] == 'diff_MASTER') ptcodelist.push(4)
            }
            else if(baon) {
                if(divlist[i] == 'diff_BASIC') ptcodelist.push(5)
                else if(divlist[i] == 'diff_ADVANCED') ptcodelist.push(6)
                else if(divlist[i] == 'diff_EXTREME') ptcodelist.push(7)
                else if(divlist[i] == 'diff_MASTER') ptcodelist.push(8)
            }
        }

        $(divs).each((i, v) => {
            const ptData: PatternData = {
                ptcode: 0,
                level: 0,
                playcount: 0,
                clearcount: 0,
                clearstat: '',
                rank: '',
                rate: '',
                score: 0,
                combo: 0,
                meter: ''
            }

            const table = $(v).children('table')
            const levels = table.children('thead').children('tr')

            let diffstr = ''
            switch(ptcodelist[i]) {
                case 1: case 5: diffstr = 'diff_BASIC'; break;
                case 2: case 6: diffstr = 'diff_ADVANCED'; break;
                case 3: case 7: diffstr = 'diff_EXTREME'; break;
                case 4: case 8: diffstr = 'diff_MASTER'; break;
            }

            const body = table.children('tbody').children('tr')
            
            // 성과 데이터
            $(body).each((l,vv) => {
                switch(l) {
                case 0:
                    const playcount = $(vv).children('td').get(1).innerHTML.split(' ')[0]
                    ptData.playcount = playcount
                    break
                case 1:
                    const clearcount = $(vv).children('td').get(1).innerHTML.split(' ')[0]
                    ptData.clearcount = clearcount
                    break
                case 2:
                    $(vv).children('td').each((zz,zx) => {
                        if(zz == 1)
                            ptData.clearstat = $(zx).attr('class')!.split(' ')[2]
                    })
                    
                    $(vv).children('td').each((zz,zx) => {
                        if(zz == 2)
                            ptData.rank = $(zx).attr('class')!.split(' ')[2]
                    });
                    break
                case 3:
                    ptData.rate = $(vv).children('td').get(1).innerHTML
                    break
                case 4:
                    ptData.score = parseInt($(vv).children('td').get(1).innerHTML)
                    break
                case 5:
                    ptData.combo = parseInt($(this).children('td').get(1).innerHTML)
                    break
                }
            })
            
            let meter = ''
            const ul = $(this).children('div').children('div').children('ul').children('li')
            $(ul).each((l, vv) => {
                var str = $(vv).attr('class')!.split(' ')[1]
                meter += str[str.length - 1]
            })
            
            ptData.meter = meter
            
            music.data.push(ptData)
        });
    }
    else if(dmExist > 0) {
        const ptcodelist = new Array<number>()
        for(var i = 0; i < divlist.length; i++) {
            if(divlist[i] == 'diff_BASIC') ptcodelist.push(9)
            else if(divlist[i] == 'diff_ADVANCED') ptcodelist.push(10)
            else if(divlist[i] == 'diff_EXTREME') ptcodelist.push(11)
            else if(divlist[i] == 'diff_MASTER') ptcodelist.push(12)
        }
        
        $(divs).each((i, v) => {
            const ptData: PatternData = {
                ptcode: 0,
                level: 0,
                playcount: 0,
                clearcount: 0,
                clearstat: '',
                rank: '',
                rate: '',
                score: 0,
                combo: 0,
                meter: ''
            }

            const table = $(this).children('table')
            const levels = table.children('thead').children('tr')

            let diffstr = ''
            switch(ptcodelist[i]) {
                case 9: diffstr = 'diff_BASIC'; break;
                case 10: diffstr = 'diff_ADVANCED'; break;
                case 11: diffstr = 'diff_EXTREME'; break;
                case 12: diffstr = 'diff_MASTER'; break;
            }
            
            const body = $(this).children('table').children('tbody').children('tr')

            $(body).each((l,vv) => {
                switch(l) {
                case 0:
                    ptData.playcount = $(vv).children('td').get(1).innerHTML.split(' ')[0]
                    break
                case 1:
                    ptData.clearcount = $(vv).children('td').get(1).innerHTML.split(' ')[0]
                    break
                case 2:
                    $(vv).children('td').each((zz,zx) => {
                        if(zz == 1)
                            ptData.clearstat = $(zx).attr('class')!.split(' ')[2];
                    });
                    
                    $(this).children('td').each((zz,zx) => {
                        if(zz == 2)
                            ptData.rank = $(zx).attr('class')!.split(' ')[2];
                    });
                    break
                case 3:
                    ptData.rate = $(vv).children('td').get(1).innerHTML
                    break
                case 4:
                    ptData.score = $(vv).children('td').get(1).innerHTML
                    break
                case 5:
                    ptData.combo = $(vv).children('td').get(1).innerHTML
                    break
                }
            })
            
            let meter = ''
            const ul = $(this).children('div').children('div').children('ul').children('li')
            $(ul).each((l, vv) => {
                var str = $(vv).attr('class')!.split(' ')[1]
                meter += str[str.length - 1]
            })
            
            ptData.meter = meter

            music.data.push(ptData)
        })
    }
    console.log("Collected: "+name)
    return music
}

export default onSongSuccess