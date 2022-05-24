const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine','ejs')
app.use('/articles', articleRouter)

app.get('/', (req,res)=>{
    //res.send("Hello World")
    const articles = [{
        fullname: 'Test Article',
        phone: 'number',
        email: "aghafoor.kcsf18@iba-suk.edu.pk",
        city: 'sukkur',
        state: 'sindh',
        address: 'sibau'
        zipcode: '123445'

    }
   
]
    res.render('index',{articles:articles})
})
app.listen(5000,console.log('STARTED'))