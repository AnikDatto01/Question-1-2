function myFunction(i = 1) {
    if (i < 11) {
        console.log("Star It Ltd.");
        myFunction(i + 1);
    }
}
console.log(myFunction());