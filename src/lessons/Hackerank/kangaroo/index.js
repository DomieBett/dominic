/**
 * You are choreographing a circus show with various animals. For one act,
 * you are given two kangaroos on a number line ready to jump in the positive
 * direction (i.e, toward positive infinity).
 * The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
 * The second kangaroo starts at location and moves at a rate of meters per jump.
 * 
 * You have to figure out a way to get both kangaroos at the same location at the
 * same time as part of the show. If it is possible, return YES, otherwise return NO.
*/

function kangaroo(x1, v1, x2, v2) {
    // jumps can only be positive. Also, one cannot make half a jump thus
    // that is floored.
    const y = Math.floor(Math.abs((x1 - x2)/(v2 - v1)));

    // 1/0 is Infinity and 0/0 is NaN.
    if (y === Infinity) {
        return "NO";
    } else if (y === NaN) {
        y = 0;
    }

    if (((v1 * y) + x1) === ((v2 * y) + x2)) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(kangaroo(43, 2, 70, 2));

/**
 * Solution
 * --------
 * 
 * Solve the equation:
 * x1 + (y * v1) === x2 + (y * v2);
 * which evaluates to:
 * y = (x1 - x2)/(v2 - v1)
 */
