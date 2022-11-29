
function myEach(collection, callback) {
    const array = Object.values(collection);
    array.forEach(element => callback(element));
    return collection;
}

function myMap(collection, callback) {
    const array = Object.values(collection);
    return array.map(element => callback(element));
}

function myReduce(collection, callback, acc=0) {
    const array = Object.values(collection);
    if (acc!==0) {
        return array.reduce((acc, val) => callback(acc, val), acc);
    } else {
        return array.reduce ((acc, val) => callback(acc, val));
    }
    
    
}

function myFind(collection, predicate) {
    const array = Object.values(collection);
    return array.find(element => predicate(element));
}

function myFilter(collection, predicate) {
    const array = Object.values(collection);
    return array.filter(element => predicate(element));
}

function mySize(collection) {
    const array = Object.values(collection);
    return array.length;
}

function myFirst(array, n=0) {
    if ( n!== 0 ) {
        return array.slice(0, n);
    } else {
        return array[0];
    }
}

function myLast(array, n=0) {

    if ( n !== 0 ) {
        return array.slice(array.length -n, array.length);
    } else {
        return array[array.length-1];
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}