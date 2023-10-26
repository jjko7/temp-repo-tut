
//GLOBALS -NO WINDOW
//__dirname - path to current directory
/*
console.log(__dirname)
setInterval(() =>{
    console.log('hello world')
}, 1000);*/

//modules
/*const megha = 'megha'
const reshmi = 'reshmi'
module.exports = {megha , reshmi}*/
/*
const data = require('./node1')
console.log(data)*/

//require('./node1')

//MODULES OS ------
/*const os = require('os')
//info about current user
const user = os.userInfo();
console.log(user);

//methods return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`)//another ways to write os build in method

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)

//PATH MODULE

const path = require('path')
console.log(path.sep)

const filePath = path.join('/learning', 'live-vanilla-build', 'content' ,' test.txt')
console.log(filePath)
const base = path.basename(filePath) 
console.log(base)

const absolute = path.resolve(__dirname, 'learning' , 'live-vanilla-build', 'content', 'test.txt')
console.log(absolute)*/

//FS MODULE
//const {readFileSync, writeFileSync} = require('fs');
//const fs = require('fs')
//fs.readFileSyncconst { readFileSync } = require('fs')

/*
const first = readFileSync('./live-vanilla-build/content', 'utf8')
const second = readFileSync('./live-vanilla-build/content2', 'utf8')
console.log(first , second)

writeFileSync('./learning/live-vanilla-build/result-sync.content', `ere is the result : ${first}, ${second}`)*/


//fs module async
/*
const {readFile , writeFile} = require('fs')
const megha ='i am trying my best'

readFile( megha , (err , result)=>{
    if ( err){
        console.log('why thhis is not working' ,err)
    }else {
        console.log('File has been written successfully.');
      }
    console.log(result)
})*/ 
//HTTP MODULES
/*const http = require('http');
const server = http.createServer((req, res) => {
    // Use the correct path to app.js
    const app = require('./learning/live-vanilla-build/app.js');

    res.write('welcome to our home page');
    res.end();
});
*//*
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to my home page')
    }
    if(req.url === '/about'){
        res.end('this is our short history')
    }

    res.end(`<h1>oops!</h1>
    <p>page khuje pacchi na</p>
    <a href = "/"> back home </a>
    `)
    
});

server.listen(5000)*/
// we have to instrall external modules before using them one of them is lodash
//gitignore is just a file that specifies which are going to be ignored by the source control
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)





