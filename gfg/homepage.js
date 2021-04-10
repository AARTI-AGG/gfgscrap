const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const getAllQuestions = require("./allQuestion");

let path="https://practice.geeksforgeeks.org/topic-tags/?ref=shm"

request(path,cb);

function cb(error,response,html){
if(error==null)
{
     processHtml(html);
}

else if(response.statusCode="404")
{
    console.log("Page not found");
}
else{
    console.log(error);
}
}

function processHtml(html){
    let ch = cheerio.load(html);
    // let allATags= ch('#hslider li a');
    // let topicWiseLink= allATags[3].attribs.href;
    let topicATags=ch('.col-xs-4 a');
    let topicLink= topicATags[9].attribs.href;
    let completeLink="https://practice.geeksforgeeks.org"+topicLink;
    getAllQuestions(completeLink);
    
}