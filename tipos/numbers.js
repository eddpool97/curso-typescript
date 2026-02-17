"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    let avengers = 10;
    const villians = 10;
    if (avengers < villians) {
        console.log('We have problemas');
    }
    else {
        console.log('We are safe');
    }
    avengers = 123;
    console.log({ avengers });
})();
