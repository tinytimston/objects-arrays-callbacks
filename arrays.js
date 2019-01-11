var list = [
    1,
    false,
    '',
    new Date(),
    {},
];

list[1];

list.slice();
list.slice(2);
list.slice(2, 4);
list.slice(2, -1);


list.splice(2, 1, 6, 7, 8, 9, 10);


list.pop();// {}

list.push(1, 2, 3, 4);

list.unshift(6, 7, 8, 9, 20);

list.shift();

list.indexOf(/* {A2} */);

list.filter(function (value, index, array) {
    return value > 5;
}); // returns new array

list.filter(value => value > 5); // returns new array


list.foo = 'bar';

// for (var key in list) {

// }

Array.prototype.filter2 = function(callback) {
    const copy = this.slice();
    const newArr = [];

    for (var i = 0; i < copy.length; i++) {
        if (i in copy) continue;

        var elem = copy[i];

        var result = callback(elem, i, this);

        if (result) {
            newArr.push(elem);
        }
    }

    return newArr;
};


const users = [
    { name: 'Holly' },
    { name: 'Gordon' },
    { name: 'Freddie' },
];


users.map(user => user.name);


users.forEach((user, i, arr) => {
    // do something
}); // void


const nums = [ 1, 2, 3, 4, 5 ];

users.reduce((total, user, i, arr) => {
    return total + user.name.length;
}, 0);


var users = [ 1 ];

users.reduce((agg, elem) => agg + elem.name.length, 0);



'foo'[1];

'foo'.foo = 'bar';


'foo'.foo == undefined;


var obj5 = { item: 'foo' };

obj5.item += 'd';


// obj5.item = obj5.item + 'd';


