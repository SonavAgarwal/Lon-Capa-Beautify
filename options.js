function save_options() {
    // var animation = document.getElementById('animation').checked;
    var confetti = document.getElementById('confetti').checked;
    chrome.storage.sync.set({
        conf: confetti
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
        status.textContent = '';
        }, 1000);
    });
    }

    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restore_options() {
        chrome.storage.sync.get({
            conf: true
        }, function(items) {
            // document.getElementById('animation').checked = items.anim;
            document.getElementById('confetti').checked = items.conf;
        });
    }

    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('save').addEventListener('click', save_options);