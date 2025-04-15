class LinkedList {
    constructor() {
        this.arr = [];
    }

    append(value) {
        this.arr.push(value);
    }

    preend(value) {
        this.arr.unshift(value);
    }

    size() {
        return this.arr.length;
    }

    head() {
        return this.arr[0];
    }

    tail() {
        return this.arr[this.arr.length - 1];
    }

    at(index) {
        return this.arr[index];
    }

    pop() {
        this.arr.pop();
    }

    contains(value) {
        return this.arr.includes(value);
    }

    find(value) {
        return this.arr.findIndex(val => val === value) === -1
            ? null
            : this.arr.findIndex(val => val === value);
    }

    toString() {
        return this.arr
            .map(str => `( ${str} ) -> `)
            .join("").concat("null");
    }

    insertAt(value, index) {
        return this.arr.splice(index, 0, value);
    }

    removeAt(index) {
        return this.arr.splice(index, 1);
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt("panda", 3);
list.removeAt(2);
console.log(list.toString());