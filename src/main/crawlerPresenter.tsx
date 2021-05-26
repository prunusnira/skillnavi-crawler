import React, { FormEvent } from "react";
import '../css/bootstrap.min.css'
import '../css/filter.css'
import '../css/overall-w.css'
import '../css/table.css'
import { BodyContent, BodyHeader, Button, Container, ItemCol, ItemRow } from "../styled/styledCommon";
import text from "../text/text";

interface Props {
    lang: string,
    isUserLogined: boolean,
    username: string,

    currentMusic: string,
    delayRef: React.RefObject<HTMLInputElement>,

    closeUpdater: () => void,
    setDelayInput: (e: FormEvent<HTMLInputElement>) => void,
    crawlRunner: (n: number) => void,
    crawlSelRunner: (n: number) => void,
}

const CrawlerPresenter = (props: Props) => {
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
                    <ItemRow style={{textAlign: 'center'}}>
                        Version. NEXTAGE
                    </ItemRow>
                </BodyHeader>

                <BodyContent style={{display: props.isUserLogined ? 'none' : 'block'}}>
                    <BodyHeader>
                        <h3>Not Logined</h3>
                    </BodyHeader>
                    <BodyContent>
                        {`${(text.crawler.notlogin as any)[props.lang]}`}
                    </BodyContent>
                </BodyContent>

                <BodyContent style={{display: props.isUserLogined ? 'block' : 'none'}}>
                    {/* 주의사항 */}
                    <ItemRow>
                        <BodyHeader>
                            <h4>{`${props.username}${(text.crawler.logined as any)[props.lang]}`}</h4>
                        </BodyHeader>
                        <BodyContent>
                            <ItemRow className="crawler-linespace">
                                <h5>{`${(text.crawler.alert.title as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow>
                                <ul>
                                    <li>
                                        {`${(text.crawler.alert.warn1 as any)[props.lang]}`}
                                    </li>
                                    <li>
                                        {`${(text.crawler.alert.warn2 as any)[props.lang]}`}
                                    </li>
                                    <li>
                                        {`${(text.crawler.alert.warn3 as any)[props.lang]}`}
                                    </li>
                                    <li>
                                        {`${(text.crawler.alert.warn4 as any)[props.lang]}`}
                                    </li>
                                </ul>
                            </ItemRow>
                        </BodyContent>
                    </ItemRow>

                    {/* 갱신 현황, 타이밍 조절 */}
                    <ItemRow keepDirHor={true}>
                        <ItemCol size={5}>
                            <ItemRow className="crawler-linespace">
                                <h5>{`${(text.crawler.current as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow>
                                {props.currentMusic}
                            </ItemRow>
                        </ItemCol>
                        <ItemCol size={5}>
                            <ItemRow className="crawler-linespace">
                                <h5>{`${(text.crawler.pause as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <input
                                    ref={props.delayRef}
                                    type="range"
                                    id="delaySlider"
                                    value={props.delayRef.current?.value}
                                    min="10"
                                    max="2000"
                                    onChange={props.setDelayInput}
                                    style={{width: '90%', fontWeight: 'bold'}} />
                                <span style={{fontSize: '22px'}}>{props.delayRef.current?.value} ms</span>
                            </ItemRow>
                        </ItemCol>
                    </ItemRow>

                    {/* 데이터 업데이트 버튼 */}
                    <ItemRow>
                        <BodyHeader>
                            <h5>{`${(text.crawler.datat as any)[props.lang]}`}</h5>
                        </BodyHeader>
                        <BodyContent>
                            <ItemRow>
                                <h5>{`${(text.crawler.descTgtShortT as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow>
                                {`${(text.crawler.descTgtShort as any)[props.lang]}`}
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(9)}
                                        id="btnGTgt2">GF</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(10)}
                                        id="btnDTgt2">DM</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(10)}
                                        id="btnATgt2">All</Button>
                                </ItemCol>
                            </ItemRow>
                        </BodyContent>
                        <BodyContent>
                            <ItemRow>
                                <h5>{`${(text.crawler.descTgtAllT as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow>
                                {`${(text.crawler.descTgtAll as any)[props.lang]}`}
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(3)}
                                        id="btnGTgt">GF</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(4)}
                                        id="btnDTgt">DM</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(4)}
                                        id="btnATgt">All</Button>
                                </ItemCol>
                            </ItemRow>
                        </BodyContent>
                        <BodyContent>
                            <ItemRow>
                                <h5>{`${(text.crawler.descAllT as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow>
                                {`${(text.crawler.descAll as any)[props.lang]}`}
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(1)}
                                        id="btnGAll">GF</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(2)}
                                        id="btnDAll">DM</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(2)}
                                        id="btnAAll">All</Button>
                                </ItemCol>
                            </ItemRow>
                        </BodyContent>
                        <BodyContent>
                            <ItemRow>
                                <h5>{`${(text.crawler.descFavoT as any)[props.lang]}`}</h5>
                            </ItemRow>
                            <ItemRow>
                                {`${(text.crawler.descFavo as any)[props.lang]}`}
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(7)}
                                        id="btnGFav">GF</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(8)}
                                        id="btnDFav">DM</Button>
                                </ItemCol>
                                <ItemCol size={3.3}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(8)}
                                        id="btnAFav">All</Button>
                                </ItemCol>
                            </ItemRow>
                        </BodyContent>
                    </ItemRow>

                    {/* 플레이어 보드 */}
                    <ItemRow>
                        <BodyHeader>
                            <h3>{`${(text.crawler.board.title as any)[props.lang]}`}</h3>
                        </BodyHeader>
                        <BodyContent>
                            <ItemRow>
                                {`${(text.crawler.board.desc as any)[props.lang]}`}
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={5}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(5)}
                                        id="btnGBrd">
                                        {`GF ${(text.crawler.board.short as any)[props.lang]}`}
                                    </Button>
                                </ItemCol>
                                <ItemCol size={5}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlRunner(6)}
                                        id="btnDBrd">
                                        {`DM ${(text.crawler.board.short as any)[props.lang]}`}
                                    </Button>
                                </ItemCol>
                            </ItemRow>
                        </BodyContent>
                    </ItemRow>

                    {/* 행 별 업데이트 */}
                    <ItemRow>
                        <BodyHeader>
                            <h3>{`${(text.crawler.selection as any)[props.lang]}`}</h3>
                        </BodyHeader>
                        <BodyContent>
                            <ItemRow className='filter-front'>
                                {`${(text.crawler.seldesc as any)[props.lang]}`}
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="0" />
                                        {`${(text.crawler.numberAndOther as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="1" />
                                        {`A${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="2" />
                                        {`B${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="3" />
                                        {`C${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="4" />
                                        {`D${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="5" />
                                        {`E${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="6" />
                                        {`F${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="7" />
                                        {`G${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="8" />
                                        {`H${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="9" />
                                        {`I${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="10" />
                                        {`J${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="11" />
                                        {`K${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="12" />
                                        {`L${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="13" />
                                        {`M${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="14" />
                                        {`N${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="15" />
                                        {`O${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="16" />
                                        {`P${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="17" />
                                        {`Q${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="18" />
                                        {`R${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="19" />
                                        {`S${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="20" />
                                        {`T${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="21" />
                                        {`U${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="22" />
                                        {`V${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="23" />
                                        {`W${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="24" />
                                        {`X${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="25" />
                                        {`Y${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="26" />
                                        {`Z${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="27" />
                                        {`あ${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="28" />
                                        {`か${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="29" />
                                        {`さ${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="30" />
                                        {`た${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="31" />
                                        {`な${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="32" />
                                        {`は${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="33" />
                                        {`ま${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="34" />
                                        {`や${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="35" />
                                        {`ら${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                                <ItemCol size={2}>
                                    <label><input type="checkbox" name="ver[]" value="36" />
                                        {`わ${(text.crawler.line as any)[props.lang]}`}
                                    </label>
                                </ItemCol>
                            </ItemRow>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={5}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlSelRunner(1)}
                                        id="btnGSel">
                                        {`${(text.crawler.gsel as any)[props.lang]}`}
                                    </Button>
                                </ItemCol>
                                <ItemCol size={5}>
                                    <Button
                                        className="btn btn-primary"
                                        style={{width: '100%'}}
                                        onClick={() => props.crawlSelRunner(2)}
                                        id="btnDSel">
                                        {`${(text.crawler.dsel as any)[props.lang]}`}
                                    </Button>
                                </ItemCol>
                            </ItemRow>
                        </BodyContent>
                    </ItemRow>
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

export default CrawlerPresenter