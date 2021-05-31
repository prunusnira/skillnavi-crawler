import * as cheerio from "cheerio"
import React, { useRef, useState } from "react"
import crawlBoard from "../crawl/crawlBoard"
import crawlFavo from "../crawl/crawlFavo"
import crawlProfile from "../crawl/crawlProfile"
import crawlAllSong from "../crawl/crawlAllSong"
import crawlTarget from "../crawl/crawlTarget"
import crawlTargetQuick from "../crawl/crawlTargetQuick"
import Language from "../function/language"
import CrawlerPresenter from "./crawlerPresenter"
import CrawlerInvalid from "./crawlerInvalid"

const Crawler = () => {
    const [delay, setDelay] = useState(500)
    const [current, setCurrent] = useState('')
    const delayRef = useRef<HTMLInputElement>(null)

    const crawlToken = (window as any).crawlToken
    const userid = (window as any).userid
    const username = (window as any).username
    const token = (window as any).token
    
    const closeUpdater = () => {
        window.location.reload()
    }

    const setDelayInput = (e: React.FormEvent<HTMLInputElement>) => {
        setDelay(parseInt(e.currentTarget.value))
    }

    const crawlRunner = (type: number) => {
        if(type==0) crawlProfile()
        
        // quick target update
        else if(type==10) crawlTargetQuick('all', delay)
        else if(type==11) crawlTargetQuick('gf', delay)
        else if(type==12) crawlTargetQuick('dm', delay)
        
        // all song update
        else if(type==20) crawlAllSong('all', delay, false)
        else if(type==21) crawlAllSong('gf', delay, false)
        else if(type==22) crawlAllSong('dm', delay, false)
        
        // target song update
        else if(type==30) crawlTarget('all', delay)
        else if(type==31) crawlTarget('gf', delay)
        else if(type==32) crawlTarget('dm', delay)
        
        // favo update
        else if(type==40) crawlFavo('all', delay)
        else if(type==41) crawlFavo('gf', delay)
        else if(type==42) crawlFavo('dm', delay)
        
        // board update
        else if(type==51) crawlBoard('gf')
        else if(type==52) crawlBoard('dm')

        // wrong param
        else console.log("[Skill Navigator] Wrong parameter passed")
        
        // disable all button
        //disableButton();
    }

    const crawlSelRunner = (type: number) => {
        var category = new Array<number>();

        const checkbox = document.querySelectorAll<HTMLInputElement>('input[name="ver[]"]:checked')
        checkbox.forEach(v => {
            v.checked ? category.push(parseInt(v.value)) : console.log('')
        })
        
        if(type==1) crawlAllSong('gf', delay, true, category);
        else if(type==2) crawlAllSong('dm', delay, true, category);
    }

    if(token !== '' && token !== undefined) {
        return (
            <CrawlerPresenter
                lang={Language.setLang()}
                isUserLogined={true}
                username={username}
    
                currentMusic={''}
                delayRef={delayRef}
                
                closeUpdater={closeUpdater}
                setDelayInput={setDelayInput}
                crawlRunner={crawlRunner}
                crawlSelRunner={crawlSelRunner} />
        )
    }
    else {
        return (
            <CrawlerInvalid
                lang={Language.setLang()}
                isUserLogined={false}
                username={username}
    
                currentMusic={''}
                delayRef={delayRef}
                
                closeUpdater={closeUpdater}
                setDelayInput={setDelayInput}
                crawlRunner={crawlRunner}
                crawlSelRunner={crawlSelRunner} />
        )
    }
}

export default Crawler