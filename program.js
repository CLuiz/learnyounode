args = process.argv;
total = 0;

function argSum(args) {
    for (var i = 2; i < args.length; i++ )
    total += Number(args[i]);
    console.log(total);
}
argSum(args);
