// class bike{
//     #password=0
//     constructor(model,name1){
//         this.model=model
//         this.name1=name1
//         this.#password = 0
//         this.deposit= 0
//     }

//     // get password(){
//     //     console.log(this.password);
//     // }

//     print=()=>{
//         console.log(this.model,this.name1);
//     }
   
// }

// bike.prototype.deposit = function(amount){
  
//     this.password = this.password + Number(amount)
// }
// console.log(bike);
// // // // let bike1=new bike('xpulse','arun')
// // // // bike1.print()

// class bikes extends bike{
//     constructor(model,name1,password){
//         super(model,name1,password)
        
//     }

// }
// let bike3=new bikes('bajaj','arun')

// bike3.deposit = "vugvuavyhadv"
// bike3.password="arun"
// // console.log(bike3);


// class bikes1 extends bike{
//     constructor(model,name1,password){
//         super(model,name1,password)
        
//     }

// }
// let bike2=new bikes1('bajaj','arun')

// bike2.deposit = "vugvuavyhadv"
// bike2.password="arun"
// console.log(bike2);
// let pas = bike2.password

// bike2.print()

//curing function
// let b=(x)=>(y)=>(z)=> {
//     console.log(x,y,z);
// }
// let d=b(10)(20)(30)
// let e=d(20)
// let f=e(30)

//classical
// class Person {
//     constructor(model,name1){
       
        
//     }
//   } // or constructor function say, function Person() {}
  
//   // create instance
//   let person = new Person();

//   let person1 = Object.create(Person);


// What is the difference between prototype inheritance and classical inheritance?
// Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.



// let captain = {
//     name:"cap"
// }
// console.log(captain);

//  function data (name){
//     this.name = name
//  }

//  let sam = new data("cap")

//  data.prototype.deposit = function(){
//     console.log(this);
//  }

//  sam.prototype.deposit = function(){
//     console.log(this);
//  }
//  console.log(sam);
// // captain.prototype.age = 22

// captain.__proto__.age = "22"

// captain.prototype.data = function(){
//     console.log(this);
// }

// console.log(captain);
// console.log(captain.age);



// let a = [10,[20]]
// let {...b}=a

// console.log(b);
// a[0][0]=30

// console.log(b);

// let  a = b = 30

// console.log(a);
// console.log(b);


// console.log(this);


// let data= {
//      k : "shubham",
//         c : function(){
//         console.log(this);
//         },
         
// }
// data.z()
// function a(c){
//     return function b(d) {
//         if(d) return a(c+d)
//         return c       
//     }
// }
// console.log(a(10)(20)(39)(10)(56)(10)());
// window.requestFileSystem()

// let sw=new Worker('serviceworker.js')
// console.log(typeof sw);
//infinite loop in js
// for(;;){
//     console.log('in');
// }
// while(true){
// console.log('hi');
// }

//observables example
//  import axios from 'axios'
// import { Observable} from 'rxjs'
 

//  const a=new Observable((obser)=>{
//   //  setInterval(()=>{
//   //   obser.next('message')
//   //  },1000)
//   axios.get('https://api.github.com/users').then(x=>{
//     // console.log(x);
//     obser.next(x)
//   })
//  })

//  a.subscribe(val=>{
//   console.log('hi');
//    console.log(val)
// })

// class a{
//   #pass=0
//   constructor(nam){
//     this.nam=nam,
//     this.#pass=0
    
//   }
//   get function (){
//     console.log(pass);
//   }

// }
// a.prototype.print=function(){
//   console.log(this.nam,this.pass);
// }


// // console.log(c);
// console.log(c);

// class b extends a{
//  constructor(nam,pass){
//   super(nam,pass)
//   console.log(pass);
//  }
// }
// let d=new b('arun','123')
// console.log(d);

  
// function k() {
//    let a=10
//   function z(){
//     console.log(this);
//   }

//   let n =()=>{
//     console.log(this);
//   }
//   n()
//   z()
// }
// k()

// console.log(+'arun');
// let b={}
// let a=Symbol('12')
// b[1]=10
// console.log(typeof a,b[1]);

// for(i=0;i<20;i++){
//   b[i]='ak'
// }
// console.log(null-8);

//?__proto__ used to define the properties of an prototype object
// function a(b,c) {
//     this.b=b,
//     this.c=c
// }
//?example for we can use proto for constructor fun and the normal obj
// let a={}
// a.__proto__.d='hi'
// let b=new a()
// b.__proto__.h='dai'
// console.log(a.d);
