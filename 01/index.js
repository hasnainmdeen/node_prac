const fs = require('fs')

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`

const hello = 'hello world!'
console.log(textIn)