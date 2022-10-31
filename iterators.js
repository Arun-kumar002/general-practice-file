//synchronous iteration
// let array=[10,20,30]
// let iterator=array[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* b(params) {
//     yield 1
//     yield 2
//     return 3
// }
// let a=b()
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// function a(add,sub,a,b) {
//     add(a,b)
//     sub(a,b)
// }
// a(add,sub,10,20)
// function add(a,b) {
//     console.log(a+b)
// }
// function sub(a,b) {
//     console.log(a-b)
// }

// let res;
// function happy(b) {
//     res=0
//     while(b!=0){
//         rem=b%10
//         res=rem**2+res
//         b=Math.floor(b/10)
//     }
//     return res
// }
// let b=49
// let a=b
// while(b!=1){
//     b=happy(b)
// }
// if(b==1){
//  console.log('happy');
// }
// else{
//     console.log('no happy');
// }

// let a=[10,20,30]
// let iterator=a[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// let div=document.querySelector('#child')
// div.addEventListener('mouseenter',e=>{
//     console.log(e.target);
//     let sty=e.target
//     sty.style.justifyContent='end'
//     sty.style.color='red'
// })
// let btn=document.getElementsByTagName('button')
// console.log(btn);
// btn[0].addEventListener('click',e=>{
//   window.navigator.clipboard.writeText('hi')
// })
// window.navigator.geolocation.getCurrentPosition(({coords})=>{
//     console.log(coords);
// }
// )
// console.log('start')
// setImmediate(()=>{
//     console.log('set immediate');
// })
// process.nextTick(()=>{
//     console.log('im nextick');
// })
// setTimeout(()=>{
//     console.log('settimeout');
// },0)
// console.log('end');
// exports.arun=()=>{
//     console.log('im');
// }
// let buffer=new Buffer('arunkumar')
// console.log(Buffer.from('arun').toString());
//!optional chaining
// let a={
//     b:10,
//     c:[10,20,30]
// }
// a.c?.map(x=>{
//     console.log(x);
// })
