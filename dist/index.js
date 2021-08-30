"use strict";
//basic types
let id = 90;
let comp = "Run Fun";
let isBool = true;
let x = 78;
let ids = [1, 2, 3, 4];
//ids.push(5)
let arr = ['io', 89, true, 90];
//tuple
let person = [1, 'young', true];
//tuple array
let employee;
employee = [
    [1, 'amy'],
    [2, 'jack'],
    [3, 'rocky']
];
//union
let pid;
pid = '90';
//enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'king'
};
//type assertion
let cid = 1;
//let customerid=<number>cid
let customerid = cid;
//function
function add(x, y) {
    return x + y;
}
//console.log(add(5,8))
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'king'
};
const Add = (x, y) => x + y;
const Sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const nk = new Person(90, "niki");
const mike = new Person(78, "slack");
//console.log(nk,mike)
//console.log(nk.register())
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "mickel", "dev");
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([8, 90, 78]);
let strArray = getArray(["kinj", "lim", "lom"]);
