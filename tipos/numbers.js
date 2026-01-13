(function () {
    var avengers = 10;
    var villians = 10;
    if (avengers < villians) {
        console.log('We have problemas');
    }
    else {
        console.log('We are safe');
    }
    avengers = 123;
    console.log({ avengers: avengers });
})();
