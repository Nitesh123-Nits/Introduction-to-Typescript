//basic types
let id:number=90
let comp:String="Run Fun"
let isBool:boolean=true
let x:any=78
let ids:number[]=[1,2,3,4]
//ids.push(5)
let arr:any[]=['io',89,true,90]
//tuple
let person:[number,string,boolean]=[1,'young',true]
//tuple array
let employee:[number,string][]
employee=[
    [1,'amy'],
    [2,'jack'],
    [3,'rocky']
]
//union
let pid:string | number
pid='90'
//enum
enum Direction1 {
    Up='Up',
    Down= 'Down',
    Left= 'Left',
    Right= 'Right'
}
//console.log(Direction1.Right)
//object
type User={
    id:number,
    name:string
}
const user: User={
    id:1,
    name: 'king'
}
  
//type assertion
let cid: any=1
//let customerid=<number>cid
let customerid=cid as number
  

//function
function add(x: number,y: number): number{
    return x+y
}
//console.log(add(5,8))
function log(message: string | number): void{
    console.log(message)
}
//log(90)
//log("hello")

//interface
interface UserInterface{
  readonly  id:number,
    name:string
    age?: number
}
const user1: UserInterface={
    id:1,
    name: 'king'

}

// type Point= number | string
// const p1 :Point=3
 //user1.id=78 //since readonly cannot assign value to it

 interface MathFunc {
    (  x:number, y:number): number
 }
const Add : MathFunc = (x:  number,y: number): number => x+y
const Sub : MathFunc = (x:  number,y: number): number => x-y
interface PersonInterface{
      id:number,
      name:string
      register():string
  }

//classes

class Person implements PersonInterface{
    id:number
    name: string
    constructor(id: number , name: string){
        this.id=id
        this.name= name
    }
    register(){
        return `${this.name} is now registered`
    }
}
const nk= new Person(90,"niki")
const mike= new Person(78,"slack")
//console.log(nk,mike)
//console.log(nk.register())
class Employee extends Person{
    position:string
    constructor(id: number, name: string,position: string){
      super(id,name)
      this.position=position
    }
}
const emp=new Employee(3,"mickel","dev")


//generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)

}
let numArray=getArray<number>([8,90,78])
let strArray=getArray<string>(["kinj","lim","lom"])





  

