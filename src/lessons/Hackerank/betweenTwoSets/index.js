/**
 * Problem
 * --------
 * You are given two arrays, a & b. Your task is to find how
 * many numbers can be multiples of all items in array a and
 * divisors of all items in array b i.e how many numbers can
 * return zero if (number % a[...]) while still returning zero
 * if (b[...] % number)
 * 
 * NB: The array a and array b do not have predefined lengths,
 * the number of items in them are not always the same.
 */

function getTotalX(a, b) {
    let g = gcd(b);
    let l = lcm(a);
    let count = 0;

    for (let i = 1; (l*i) <= g; i++) {
        if (g % (l*i) === 0) {
            count++;
        }
    }

    return count;
}

function calcGcd(a, b) {
    if (!b) {
        return a;
    }

    let r = b > a ? b % a : a % b;
    let l = b > a ? a : b;

    return calcGcd(l, r);
}

function gcd(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        result = calcGcd(result, arr[i]);
    }

    return result;
}

function lcm(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result * arr[i]/calcGcd(result, arr[i]);
    }

    return result;
}

console.log(getTotalX([3, 9, 6], [36, 72]));

/**
 * Solution
 * --------
 * Find the lcm of first array, and gcd of the second array.
 * Then find how many multiples (n) of the lcm can be divided into
 * the gcd i.e (gcd % lcm * ...n === 0)
 */
