var fs= require('fs');
fs.writeFile('text.txt','hello world',(err)=>{
    if(err) throw error ;
    console.log("le fichier a ete cree avec succes !");
});
fs.readFile("text.txt",(err,data)=>{
    if (err) throw error;
    var content =data.toString();
    console.log(content);

})