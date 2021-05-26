const getSongInfo = (
    c: number,
    g: string,
    i: number,
    s: string,
    p: number
) => {
    return $.ajax({
        url: 'https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music_detail.html',
        type: 'GET',
        data: {
            gtype: g,
            cat: c,
            index: i,
            sid: s,
            page: p
        },
        xhr: function() {
            // Get new xhr object using default factory
            var xhr = jQuery.ajaxSettings.xhr();
            // Copy the browser's native setRequestHeader method
            var setRequestHeader = xhr.setRequestHeader;
            // Replace with a wrapper
            xhr.setRequestHeader = function(name, value) {
                // Ignore the X-Requested-With header
                if (name == 'X-Requested-With') return;
                // Otherwise call the native setRequestHeader method
                // Note: setRequestHeader requires its 'this' to be the xhr object,
                // which is what 'this' is here when executed.
                setRequestHeader.call(this, name, value);
            }
            // pass it on to jQuery
            return xhr;
        },
        async:false
    });
}

export default getSongInfo