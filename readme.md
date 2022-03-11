# Tablr

## Description

Tablr is a command line (CLI) tool that will convert a CSV (comma seperated value) formatted file and create an HTML table.

If you just enter the following at the command line.

$ tablr

Tablr will look for a file named data.csv file, create an HTML table, and write the HTML fragment to a file named data.html. The data.html file will only include the table itself. The first row will be marked up as column headers and the first column will be marked up as row headers.

There are additional options that can be used.

* -i, --input <filename>: Sets <filename> as the input file to use for creating the table. This file needs to be a CSV (comma seperated value) file.
* -o, --output <filename>: Sets the output file where the table markup will be written.
* -t, --title <page title>: This sets the page title that will be used for the HTML output file. If your page title includes spaces, use quotes (ex: "Table Example"). If this option is designated, then the HTML output will be a valid HTML document that also contains the table markup.
* -l, -lang <language>: This will designate the language code for the page (only useful when using the -t option.) By default, the language code is set to EN (English.)

## Installing

Once you download the repo, do the following steps to make the "tablr" command available at your command prompt.

1. Type "npm install" at the command line (while in the directory containing the tablr code.)
2. Type "npm install -g" to make the tablr command globally available from the command line.


