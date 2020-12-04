path=$(grep --exclude-dir=node_modules/ --include=\*.{js} -rnl $1 -e 'render(')

if ! test -z "$path"
then
    echo $path "found"
    exit 0
else
    echo $path "not found"
    exit 1
fi