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
      if (filename.endsWith(".csv")) {
        records = d3.csvParse(contents)
      } else if (filename.endsWith(".json")) {
        records = JSON.parse(contents)
      } else {
        console.error(process.argv[0] + ": could not handle file extension on " + filename);
        process.exit(1);
      }
      //records.forEach(record => {
        //console.log({record})
        //console.log(record)
      //});
      console.log(JSON.stringify(records, null, 2));
    }
  });
});
