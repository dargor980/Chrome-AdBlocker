chrome.webReques.onBeforeRequest.addListener(function (details){
    return { cancel: true}
},{urls: sites },
["blocking"]
)

const sites = [
    "*://*.doubleclick.net/*",
    "*://*.partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com",
    "*://*.syndication.realsrv.com/*",
    "*://*.s3t3d2y8.afcdn.net/*",
    "*://*.trafficfactory.biz/*",
]