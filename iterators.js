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