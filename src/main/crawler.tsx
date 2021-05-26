import * as cheerio from "cheerio"
import React, { useRef, useState } from "react"
import crawlBoard from "../crawl/crawlBoard"
import crawlProfile from "../crawl/crawlProfile"
import crawlSongs from "../crawl/crawlSongs"
import crawlTarget from "../crawl/crawlTarget"
import Language from "../function/language"
import CrawlerPresenter from "./crawlerPresenter"

const Crawler = () => {
    const [delay, setDelay] = useState(500)
    const [current, setCurrent] = useState('')
    const delayRef = useRef<HTMLInputElement>(null)
    
    const closeUpdater = () => {
        window.location.reload()
    }

    const setDelayInput = (e: React.FormEvent<HTMLInputElement>) => {
        setDelay(parseInt(e.currentTarget.value))
    }

    const crawlRunner = (type: number) => {
        if(type==0) crawlProfile();
        
        // quick target update
        else if(type==10) crawlTarget('gf', delay);
        else if(type==11) crawlTarget('gf', delay);
        else if(type==12) crawlTarget('dm', delay);
        
        // all song update
        else if(type==20) crawlSongs('gf', 0, delay, null);
        else if(type==21) crawlSongs('gf', 0, delay, null);
        else if(type==22) crawlSongs('dm', 0, delay, null);
        
        // target song update
        else if(type==30) crawlSongs('gf', 1, delay, null);
        else if(type==31) crawlSongs('gf', 1, delay, null);
        else if(type==32) crawlSongs('dm', 1, delay, null);
        
        // favo update
        else if(type==41) crawlSongs('gf', 2, delay, null);
        else if(type==42) crawlSongs('gf', 2, delay, null);
        else if(type==40) crawlSongs('dm', 2, delay, null);
        
        // board update
        else if(type==51) crawlBoard('gf');
        else if(type==52) crawlBoard('dm');
        else console.log("[Skill Navigator] Wrong parameter passed");
        
        // disable all button
        //disableButton();
    }

    const crawlSelRunner = (type: number) => {
        var lines = new Array<number>();

        const checkbox = document.querySelectorAll<HTMLInputElement>('input[name="ver[]"]:checked')
        checkbox.forEach(v => {
            v.checked ? lines.push(parseInt(v.value)) : null
        })
        
        if(type==1) crawlSongs('gf', 3, delay, lines);
        else if(type==2) crawlSongs('dm', 3, delay, lines);
    }

    return (
        <CrawlerPresenter
            lang={Language.setLang()}
            isUserLogined={true}
            username={'test'}

            currentMusic={''}
            delayRef={delayRef}
            
            closeUpdater={closeUpdater}
            setDelayInput={setDelayInput}
            crawlRunner={crawlRunner}
            crawlSelRunner={crawlSelRunner} />
    )
}

export default Crawler