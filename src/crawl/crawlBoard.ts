import CommonData from "../function/commonData";
import upload from "./upload";

const crawlBoard = (
    gtype: string,
    setCurrent: (s: string) => void,
    setBtnDisabled: (b: boolean) => void
) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = `${CommonData.boardUrl}?gtype=${gtype}&bkind=1`

    img.onload = (event: Event) => {
        const canvas = document.createElement("canvas")
        canvas.width = (event.currentTarget as any).width
        canvas.height = (event.currentTarget as any).height

        const ctx = canvas.getContext("2d")!
        ctx.drawImage(event.currentTarget as any, 0, 0)

        const dataURL = canvas.toDataURL("image/png")

        // 이미지 데이터를 base64 인코딩 하여 전송
        upload(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""), 'board', 0, setCurrent, setBtnDisabled)
    }
}

export default crawlBoard