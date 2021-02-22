
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')





let browser;

const configure = async () => {
await puppeteer.use(StealthPlugin())
   browser= await puppeteer.launch({
     headless : true,
    args: ['--no-sandbox', '--disable-setuid-sandbox',],
  
   
     
   })
  
   const page = await browser.newPage()
    
  

   return page

}


const handleRequestForOnlineClass = async () => {

  const page = await configure()
  console.log(`Bot started 🚀`)
 await page.goto('https://zoom.us/signin')
  await page.waitForSelector('#email')
   await page.click('#email')

  await page.type('#email', "sky32752@gmail.com", {delay : 100})
   await page.type('#password', "Skyf!zz143", {delay : 100})
   await page.click('#login-form > div:nth-child(4) > div > div.signin > button')

  // await page.waitForSelector('._1FvRrPS6')
  // await page.click('._1FvRrPS6')
  // await page.waitForSelector('#zoom-ui-frame > div._1doXW0tM > div > div:nth-child(3) > h3:nth-child(2) > a')
  // await page.click('#zoom-ui-frame > div._1doXW0tM > div > div:nth-child(3) > h3:nth-child(2) > a')
  await page.waitForTimeout(5000)
  await page.screenshot({ path: 'testresult.png', fullPage: true })
  // await browser.close()
 

  const url = await page.url()
  console.log(`Page url is ${url} 🤩`)
   console.log(`All done, check the screenshot. ✨`)
  return "success"
 
}

module.exports = handleRequestForOnlineClass


// https://zoom.us/wc/99222006734/join?track_id=&jmf_code=&meeting_result=&tk=&cap=03AGdBq2607huASpxUOug8uy-6FT1Dllc3eOabY6xKNx9gv650h1JRTlaIDpR8l56d9EQWEwnHP8xSLdAFF42LumgpYngMMvnxBJOCS28DKzB_ntT-GTS7rb1U90CSXX5MXzz7zveDaMn8hilcbWw4ZqJcmUSeC8tcNNHJh_w4RwZOCdnemxnKz53K8nMLCvqRN0vQZs5z9WqxCI1uwyIG58PYNPHStvE9ONtFxr4cKQja7OxGPKyzIuZ6UV9QAmTZaAbXjSQ5_Ux4PjWmEfbJC02eSjyejEz9ZfTUSW_Pvkf-w9Yk0k6gg7FamYV7lYdcbDZENyDReh0YZIe06nfqaAUnhjkusuAoa1nQhPIntAgZeJQfWbhk8kbY-ZNGxeea7ZNTfFz6B01CbaFfceBSup9Oe1ZVFE7OIMouD6OySiYPfiwsWLklMiXsMwACoxk29fQUwCh3tFdWfTaiC3GkPURZRXdEbJnOoQ&refTK=&wpk=wcpkfd333858861d50be911271e294614e7a