
const {program} = require("commander");
const {parse} = require("csv-parse/sync");
const fs = require("fs");
const eol = require("os").EOL;

program.option("-i, --input <filename>", "Set input file (CSV format) which will create the HTML table. The default is data.csv.", "data.csv")
.option("-o, --output <filename>", "Sets output file which will be written. The default is data.html.", "data.html")
.option("-l, --lang <language code>", "Sets the language code for the page. The default is EN.", "EN")
.option("-t, --title <page title>", "Sets the page title for the page. If the title is not set, only an HTML fragment will be created.", "");

program.parse(process.argv);

const inputFilename = program.opts().input;
const outputFilename = program.opts().output;
const title = program.opts().title;
const lang = program.opts().lang;
const rawData = fs.readFileSync(inputFilename, {"encoding": "utf-8"});
const rows = parse(rawData);
const columnHeaders = rows.shift();

// Create the HTML table.
let table = `<table>${eol}`;

// Create column header row.
table += `  <tr>${eol}`;
for (let columnHeader of columnHeaders) {
table += `    <th scope="col">${columnHeader}</th>${eol}`;
} // end for columnHeader.
table += `  </tr>${eol}`;

for (let row of rows) {
table += `  <tr>${eol}`;
table += `    <th scope="row">${row.shift()}</th>${eol}`;
for (let cell of row) {
table += `    <td>${cell}</td>${eol}`;
} // end for cell.
table += `  </tr>${eol}`;
}  // end for row.
table += `</table>${eol}`;

let html = "";
if (title === "") {
  html = table;
} else {
  html = `<!doctype html>
  <html lang="${lang}">
  <head>
  <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
${table}
  </body>
</html>`;
}
fs.writeFileSync(outputFilename, html, {"encoding": "utf-8"});

console.log(`Input filename: ${inputFilename}`);
console.log(`Output filename: ${outputFilename}`);
if (title !== "") {
  console.log(`Title: ${title}`);
  console.log(`Lang: ${lang}`);
} // end if.
console.log("Finished creating the table.");
