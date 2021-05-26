const getSongInfoForTarget = (url: string) => {
    return $.ajax({
        url: url,
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

export default getSongInfoForTarget