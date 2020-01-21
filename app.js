const express=require('express')
const donwloader=require('./downloader')
/* const {searchVideo}=require('./search') */
const searchVideoSimple=require('./searchSimple')
const app=express()
const port=5000;



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/ytdl", donwloader);

app.use("/search", searchVideoSimple);

/* app.use("/searchfull", searchVideo); */




app.get('/',(req, res)=>{
	res.send("welcome to my youtube API");
});

app.listen(port,()=>{
  console.log(`server running on port ${port}`)
})