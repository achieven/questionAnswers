const assert = require('assert')

var webdriver = require('selenium-webdriver'), By = webdriver.By
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox'}).build()


browser.get('http://localhost:3000')
function