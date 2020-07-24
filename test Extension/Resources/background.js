window.triggerMsg = () => {
    browser.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            browser.tabs.sendMessage(tab.id, 'message')
        })
    })

}
