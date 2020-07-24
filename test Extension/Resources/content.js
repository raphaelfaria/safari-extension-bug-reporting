console.log('listening on content script')
browser.runtime.onMessage.addListener((msg) => {
    console.log('content script', msg);
})

const iframe = document.createElement('iframe')

iframe.src = browser.extension.getURL('inject.html')

document.documentElement.appendChild(iframe)
