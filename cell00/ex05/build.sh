if [ $# -ge 1 ]
then
    for arg
    do
        mkdir ex$arg;
    done
else
    echo "No arguments supplied"
fi