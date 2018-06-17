var a = Number(process.argv[2]);
    b = Number(process.argv[3]);
    c = Number(process.argv[4]);
    D = b**2 - 4 * a * c;
    root1 = 0;
    root2 = 0;
if (D < 0) {
    process.stdout.write('NO ROOTS');
}
else if (D == 0) {
    root1 = -b / (2 * a)
    process.stdout.write(root1.toFixed(2));
}
else if (D > 0)  {
    root1 = (-b + Math.sqrt(D)) / (2 * a);
    root2 = (-b - Math.sqrt(D)) / (2 * a);
    if (root1 > root2) {
        process.stdout.write(root1.toFixed(2) + ' ' + root2.toFixed(2));
    }
    else {
        process.stdout.write(root2.toFixed(2) + ' ' + root1.toFixed(2));
    }
}