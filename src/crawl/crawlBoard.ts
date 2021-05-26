import upload from "./upload";

const crawlBoard = (gtype: string) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/playerboard_img.html?gtype=${gtype}&bkind=1`

    img.onload = (event: Event) => {
        const canvas = document.createElement("canvas")
        canvas.width = (event.currentTarget as any).width
        canvas.height = (event.currentTarget as any).height

        const ctx = canvas.getContext("2d")!
        ctx.drawImage(event.currentTarget as any, 0, 0)

        const dataURL = canvas.toDataURL("image/png")

        // 이미지 데이터를 base64 인코딩 하여 전송
        upload(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""), 'board')
        //console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    }
}

export default crawlBoard