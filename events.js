const EventEmitter = require('events')
const event = new EventEmitter()
// event.on('sayMyname', ()=>{
//         console.log("I am learning")
// })
// event.on('sayMynameone', ()=>{
//     console.log("I am learning NodeJs1 ")
// })
// event.on('sayMynameTwo', ()=>{
//     console.log("I am learning")
// })
event.on('checkAPage', (statusCode, message)=>{
console.log(`status code is ${statusCode}`)
})
event.emit('checkAPage',200, "ok")
event.emit('sayMyName')

//Example1 : Registering for the event to be fired only one time using once
