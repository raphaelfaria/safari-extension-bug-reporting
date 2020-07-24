console.log('listening on inject')
browser.runtime.onMessage.addListener((msg) => {
    console.log('inject', msg);
})
