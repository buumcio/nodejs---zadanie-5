var fs = require('fs');
var colors = require('colors');

fs.readdir('./cats', 'utf-8', function(err, files) {
    console.log('Zawartość folderu: '.green);
    console.log(files);
    fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
    });
})