const fs = require('fs');
fs.readFile('2021_campuscup_winner.txt', 'utf8', (err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

