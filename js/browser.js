var browser, uAgent = navigator.userAgent;
if(uAgent.indexOf("Chrome") > -1) {
    browser = "Google Chrome";
} else if (uAgent.indexOf("Safari") > -1) {
    browser = "Apple Safari";
} else if (uAgent.indexOf("Opera") > -1) {
    browser = "Opera";
} else if (uAgent.indexOf("Firefox") > -1) {
    browser = "Mozilla Firefox";
} else if (uAgent.indexOf("MSIE") > -1) {
    browser = "Microsoft Internet Explorer";
}

document.write(browser + " ✓");
console.log("Your browser: " + browser);