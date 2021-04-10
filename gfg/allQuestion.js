const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

function getAllQuestions(link){
//console.log(link);
    request(link,cb);
}
function cb(error,response,data){
    
        processHtml(data);
}
function processHtml(html){

    let ch = cheerio.load(html);
    //console.log(ch);
    // let quesdiv=ch(".panel.problem-block");
    // for(let i=0;i<quesdiv.length;i++)
    // {
    //     let title = quesdiv.find("span").text();
    //     console.log(title);
    // }
    let titleTag=ch('.col-sm-6.col-md-6.col-lg-6.col-xs-12.item div.panel.problem-block a')
    //console.log(titleTag);
    for(let i=0;i<titleTag.length;i++)
    {
        let title=ch(titleTag[i]).attribs.href;
        console.log(title);
    }
    
}

module.exports =getAllQuestions;