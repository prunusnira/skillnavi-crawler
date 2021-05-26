const crawlTarget = (gtype: string, delay: number) => {
    console.log("[Simple update] Collecting data");
    //$("#current").text("[Simple update] Collecting data");
    
    console.log("[Simple update] Collecting HOT data");
    //$("#current").text("[Simple update] Collecting HOT data");
    var hot = runGetTargetSimple(gtype, 1);
    
    console.log("[Simple update] Collecting OTHER data");
    //$("#current").text("[Simple update] Collecting OTHER data");
    var other = runGetTargetSimple(gtype, 0);
    
    jsonRoot.music = new Object();
    jsonRoot.music.gf = new Array();
    jsonRoot.music.dm = new Array();
    jsonRoot.crawlToken = crawlToken;
    
    if(gtype == 'gf') {
        for(var i = 0; i < hot.length; i++) {
            jsonRoot.music.gf.push(hot[i]);
        }
        for(var i = 0; i < other.length; i++) {
            jsonRoot.music.gf.push(other[i]);
        }
    }
    else if(gtype == 'dm') {
        for(var i = 0; i < hot.length; i++) {
            jsonRoot.music.dm.push(hot[i]);
        }
        for(var i = 0; i < other.length; i++) {
            jsonRoot.music.dm.push(other[i]);
        }
    }
    
    console.log("[Simple update] Uploading data");
    $("#current").text("[Simple update] Uploading data");
    upload(JSON.stringify(jsonRoot), 'simple');
    
    jsonRoot = new Object();
    crawlProfile();
}

export default crawlTarget