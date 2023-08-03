// callback  =>passing a function inside an another function
const { table } = require("console");
const fs = require("fs");

//const quote = "No beauty shines han that of a good heart";
//fs .writeFile("awesome.html", quote, (err) =>{
  //  console.log("Completed writing awesome.html")
//});
 //fs .writeFile("text.ppt", quote, (err) =>{
   // console.log("Completed writing text.ppt")
 //});
 //fs .writeFile("notes.txt", quote, (err) =>{
   // console.log("Completed writing notes.txt")
 //});
 //fs .writeFile("notes.csv", quote, (err) =>{
   // console.log("Completed writing notes.csv")
//});
// const quote2 = "Live more, worry less;"
//for (let i = 1; i <= 10; i++) {
//fs.writeFile(`./backup/text-${1}.html`, quote2, (err)=> {
   // console.log(`Completed writing text-${i}.html`);
    //});
//}
 //console.log(process.argv);
 // destructure
 //const [, , n1,n2] = (process.argv)
 //console.log(n1,n2);

 //const [, , noOfFiles] = process.argv;
 //console.log(noOfFiles)

 //for (let i = 1; i <= noOfFiles; i++) {
   // fs.writeFile(`./backup/notes-txt`, quote2, (err) => {
    //    console.log(`Completed writing notes-${i}.txt`);
     //   });
    //}
    // fs.readFile("./cool.txt", "utf-8", (err,data) => {
    //if(err){
    //console .log("Error",err);
      //  }
    //console.log("The content of the file is => ", data);
    // });
    
    //const niceQuote = "\nMake everyday a little less ordinarily";
    //fs.appendFile(`./nice.txt`,niceQuote ,(err) => {
      //    console.log(`Completed writing nice.txt`);
      //});
       
    //const niceQuote = "\nMake everyday a little less ordinarily";

      //fs.unlink(`./ToRemove.txt` ,(err) => {
        //    console.log(`Delete Successfully`);
        //});

        //fs.readdir("./backup", (err, files) =>{
          //console.log("All file name are".files)
        //})

     // fs.readdir("./backup", (err, data) =>{
    //data.forEach((fileName) => {
     //   fs.unlink(`./backup/${fileName}` ,(err) => {
      //  if(err){
        //  console.log(err);
       // }
      //console.log(`Delete Successfully ${fileName}`);      
    //});
  //});
 //});


 //fs.readFile("./json/user.json", (err, jsonData) => {
  //if(err) {
  //console.log(err);
  //}else{
 // const user = JSON.parse(jsonData);
 // console.log(user);
 // console.table(user);
 // console.log(user[0].role);
  //}
 //
  //});

 //fs.readFile("./json/user.json", (err, jsonData) => {
  //if(err) {
  //console.log(err);
  //}else{
  //const user = JSON.parse(jsonData);
  //console.log(user);
  //console.table(user);
  //for(let index = 0; index < user.length; index++){
    //console.log (user[index].name,user[index].role);
  //}
  //}
 // });

 var city = ["Delhi", "Mumbai", "Helsinki", "Dubai"];
 console.log(city[1]);
 console.log(city.indexOf("Mumbai"))
   