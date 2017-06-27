# Atom open-file-from-buffer package

Parse current line as `filename:row` and open that file

On `open-file-from-buffer:open` event (<kbd>Ctrl-t</kbd> key) it parses the 
line under cursor and opens the file whose `filename:row` is on that line.

The filename should start at the beginning of the string, then should go
a column, and then line number.  It's the format of output from
`grep -n [something]`
