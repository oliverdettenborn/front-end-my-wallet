path=$(grep --exclude-dir=node_modules/ --include=\*.{js,ts} -rnl $1 -e 'render(')

npx dependency-check $path --missing