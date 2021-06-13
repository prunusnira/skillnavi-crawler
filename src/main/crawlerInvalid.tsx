import React, { FormEvent } from "react";
import '../css/bootstrap.min.css'
import '../css/filter.css'
import '../css/overall-w.css'
import '../css/table.css'
import { BodyContent, BodyHeader, Button, Container, ItemCol, ItemRow } from "../styled/styledCommon";
import text from "../text/text";

interface Props {
    lang: string,
    closeUpdater: () => void,
}

const CrawlerInvalid = (props: Props) => {
    return (
        <>
            <Container id='gfdminfo'>
                <BodyHeader>
                    <ItemRow keepDirHor={true}>
                        <ItemCol size={7} className='crawler-pagetop' style={{fontSize: '250%'}}>
                            DATA UPDATE
                        </ItemCol>
                        <ItemCol size={3} className='crawler-pagetop'>
                            <Button onClick={props.closeUpdater}>
                                CLOSE
                            </Button>
                        </ItemCol>
                    </ItemRow>
                </BodyHeader>

                <BodyContent>
                    <BodyHeader>
                        <h3>Not Logined</h3>
                    </BodyHeader>
                    <BodyContent>
                        <ItemRow keepDirHor={true}>
                            {`${(text.crawler.notlogin.line1 as any)[props.lang]}`}
                        </ItemRow>
                        <ItemRow keepDirHor={true}>
                            {`${(text.crawler.notlogin.line2 as any)[props.lang]}`}
                        </ItemRow>
                        <ItemRow keepDirHor={true}>
                            <a href='https://sin.nira.one' target='_blank'>
                                Skill Navigator
                            </a>
                            &nbsp;
                            {`${(text.crawler.notlogin.line3 as any)[props.lang]}`}
                        </ItemRow>
                    </BodyContent>
                </BodyContent>

                <BodyHeader>
                    <a href="https://sin.nira.one" target="_blank">
                        Skill Navigator
                    </a> Twitter <a href="https://twitter.com/_nira_one">@_nira_one</a>
                </BodyHeader>
            </Container>
        </>
    )
}

export default CrawlerInvalid