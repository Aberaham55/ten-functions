"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(input) {
    return input === true;
}
function isFalse(input) {
    return input === false;
}
function not(input) {
    return input !== true;
}


function addOne(input) {
    return Number(input) + 1;
}
function isEven(input) {
if (input %2==0) {
    return true;
} else {
        return false;
    }

}
function isIdentical(input1,  input2) {
    if(input1 === input2) {
        return true;
    } else {
        return false;
    }
}
function isEqual(inp1, inp2) {
    if (inp1 == inp2) {
        return true;
    } else {
        return false;
    }
}
function or(in1, in2) {
    return in1 || in2;
}
function and(i1, i2) {
    return i1 && i2;
}