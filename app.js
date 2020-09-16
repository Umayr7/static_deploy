const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

app.use(express.static(__dirname+'/public'))

app.get('/', (res, req)=>{ 
    req.render('home')
})

//Setting server
var server = app.listen(8000, ()=>{
    console.log('Server started on port 8000...');
})