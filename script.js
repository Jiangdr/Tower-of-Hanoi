/**
 * Created by px on 2017/6/14.
 */

Object.assign(Object.prototype, {
    move(target) {
        target.arr.unshift(this.arr.shift());
        console.log(`%c **${this.name} ==>> ${target.name}`, "color: red;");
    }
})

let A = {
    arr: [1, 2, 3, 4, 5, 6, 7],
    name: 'A',
},
    B = {
    arr: [],
    name: 'B',
},
    C = {
    arr: [],
    name: 'C',
}

begin(A, B, C, A.arr.length);

function begin(from, temp, to, n) {
    if (n > 1) {
        n--;

        begin(from, to, temp, n);

        move(from, to);

        begin(temp, from, to, n);

    } else {

        move(from, to);

    }
}

function move(from, to) {
    to.arr.unshift(from.arr.shift());
    console.log(`%c **${from.name} ==>> ${to.name}`, "color: red;");
    console.log(`A: ${JSON.stringify(A.arr)}`);
    console.log(`B: ${JSON.stringify(B.arr)}`);
    console.log(`C: ${JSON.stringify(C.arr)}`);
}

console.log(A, B, C);