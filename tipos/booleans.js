(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isSuperman: isSuperman });
    console.log({ isBatman: isBatman });
    isSuperman = (isBatman ? true : false);
    console.log({ isSuperman: isSuperman });
})();
