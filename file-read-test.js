const d3 = require('d3')
fs = require('fs');

//console.log("argv", process.argv);

if (process.argv.length == 2) {
  filenames = ['/dev/stdin'];
} else {
  filenames = process.argv.slice(2);
}

filenames.forEach(filename => {
  fs.readFile(filename, 'utf8', (err, contents) => {
    if (err) {
      return console.log(err);
    } else {
      //records = d3.csvParse(contents)
      console.log({contents});
      records = JSON.parse(contents);
      //console.log(records.columns);
      records.forEach(record => {
        //console.log({record})
        console.log(record)
      });
    }
  });
});
