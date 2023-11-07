const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/user.routes");
const app = express();
const { default: mongoose } = require("mongoose");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Nishant:Kh8cI13BDxDiuUHh@cluster0.k0s0qbw.mongodb.net/ravoProject", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
    console.log('Express app running on port '+ (process.env.PORT || 3000))
})

