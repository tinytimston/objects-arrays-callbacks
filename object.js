'use strict';

// primitive types

'blah' == 'blah';











// reference types

var obj = { key: 'value' };

obj == { key: 'value' };




// Computer Science!!! -- memory addresses

var obj = { key: 'value' };

var obj2 = { key: 'value' };

obj == obj2;

obj2.foo = 'bar';

obj2 = obj;

obj.key == obj.key; // true

var arr = [1, 2, 3, 4, obj, 5];

var indexOfObj = arr.indexOf(obj); // 4
indexOfObj = arr.indexOf({ key: 'value' }); // -1

var item = arr.find(item => {
    return item.id == 3;
});

var item = arr.findIndex(item => {
    return item.id == 3;
});

for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];

    if (elem == obj) {
        console.log('Found it!');
        break;
    }
}

// {A2} == {A6}

/*
obj === {A2}

obj2 === {A6}




           A
   ---------------
 1 |             |
   ---------------
 2 |  010101010  |
   ---------------
 3 |  101010101  |
   ---------------
 4 |  001101100  |
   ---------------
 5 |             |
   ---------------
 6 |  010101010  |
   ---------------
 7 |  101010101  |
   ---------------
 8 |  001101100  |
   ---------------
 9 |  110111011  |
   ---------------
*/




var obj = {
    key: 'value',
    key: 42,
    key: false,
    key: {
        innerObjKey: 'inner value',
    },
    method: () => {
        // do something
    },
    key: [],
    key: new Date(),
    key: new Symbol(),
    3: '',
    '@name-_/*()#👌': '',
};


obj.key; //
obj[3]; //

// obj['@name-_/*()#👌']

// var myKey = '@name-_/*()#👌';

obj['@name-_/*()#👌'];


for (var keyFromObj in obj) {
    console.log(keyFromObj, obj[keyFromObj]);
}



var obj2 = {
    key: '',
    falsy: NaN,
};

obj2.foo; // undefined

if (obj2.hasOwnProperty('foo')) {
    // won't run
}

if ('foo' in obj2) {
    // won't run
}






// have fun!!!

var sampleObject = {
    color: "red",
    weight: {
        key: 10,
        unit: "oz",
    },
    shape: "spherical"
};

