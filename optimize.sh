#!/bin/sh

set -e

# js=dist/$1.js
# min=dist/$1.min.js
js=dist/elm.js
min=dist/elm.min.js

elm make --optimize --output $js src/$@

$(npm bin)/uglifyjs $js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | $(npm bin)/uglifyjs --mangle --output $min

echo "Compiled size:$(cat $js | wc -c | numfmt --to=iec) bytes  (js)"
echo "Minified size:$(cat $min | wc -c | numfmt --to=iec) bytes  (min)"
echo "Gzipped  size:$(cat $min | gzip -c | wc -c | numfmt --to=iec) bytes"