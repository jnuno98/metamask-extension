/*
Passing messages from background script to popup
*/

let port = chrome.runtime.connect({ name: 'trezor-connect' });
port.onMessage.addListener(message => {
    alert("port")
    window.postMessage(message, window.location.origin);
});
port.onDisconnect.addListener(d => {
    port = null;
});

/*
Passing messages from popup to background script
*/

window.addEventListener('message', event => {
    if (port && event.source === window && event.data) {
        alert("event")
        port.postMessage({ data: event.data });
    }
});


window.addEventListener('message', event => {
    
    alert("event")
});
