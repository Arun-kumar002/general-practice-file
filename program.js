
"use strict"
//?pandigit number
// function pan(b) {
//     let i=b.toString()
//     let a=['0','1','2','3','4','5','6','7','8','9']
//     for(x of i){
//         if(a.includes(x)){
//             a.splice(a.indexOf(x),1)
//         }
//     }
//     return !a.length
// }
// console.log(pan(123456789));
//?fibnocci no based on digits
// let i=9
// let a=0
// let b=1
// let res;
// for(j=0;j<i-2;j++){
//     res=a+b
//     a=b
//     b=res
// }
// console.log(res);
//?fabnocci no
// let ch=21
// let i=9
// let a=0
// let b=1
// let res;
// let d=[]
// for(j=0;j<i-2;j++){
//     res=a+b
//     a=b
//     b=res
//     d.push(res)
// }
// if(d.includes(ch)){
//     console.log('fabnocci');
// }
//?armstrong no
// let a='153'
// let res=0
// for (x of a){
//     res=res+Number(x**a.length)
// }
// if(a==res){
//     console.log('armstrong');
// }
// else{
//     console.log('not armstrong');
// }
//?armstrong num
// let a=153
// let b=a
// let res=0
// while (a!=0){
//     rem=a%10
//     res=res+rem**3
//     a=Math.floor(a/10) 
// }
// if(b==res){
//     console.log('armstrong');
// }
// else{
//     console.log('not armstrong');
// }
//?perfect no
// let a=28
// let res=0
// for (let i=1;i<a;i++){
//     if(a%i==0){
//       console.log(i);
//         res=res+i
//     }
// }
// if(a==res){
//     console.log('perfect no');
// }
// else{
//     console.log('no perfect');
// }
//?strong no
// let a=145
// let b=a
// let res=0
// while (a!=0) {
//     rem=a%10
//     let fact=1
//     for(i=1;i<=rem;i++){  
//         fact=fact*i
//     }
//     res=res+fact
//     a=Math.floor(a/10) 
// }
// if(b==res){
//     console.log('strong no');
// }else{
//     console.log('not strong no');
// }
//?harshed no
// let a=156
// let b=a
// let res=0
// while (a!=0) {
//     rem=a%10
//     res=res+rem
//     a=Math.floor(a/10)
// }
// if(b%res==0){
//     console.log('harshed no');
// }
// else{
//     console.log('not harshed no');
// }
// ?happy no
// let a=49
// let b=a
// let res;
// function happy(a1) {
//     res=0
//   while (a1!=0) {
//     rem=a1%10
//     res=rem**2+res
//     a1=Math.floor(a1/10)
//   }
//   return res
// }
// while (b!=1) {
//     b=happy(b)
// }
// if(b==1){
//     console.log('happy');
// }
// else{
//     console.log('not happy');
// }

//?vowals remove
// let a='aeiouarunkumar'
// let res=''
// for (x of a){
    
//     if(!'aeiou'.includes(x)){
//         res=res+x
//     }
// }
// console.log('vowals removed --->',res);

//?find the match
// let b=/hello/
// let a='hello world'
// let c=b.test(a)
// console.log(c);
//?i flag for case and non case sensitives
// let a='hello world hello'
// let b=/HELLO/i
// let c=a.match(b)
// console.log(c);

// let a=/\w+\.?w+\@[a-z A-Z]+\.[a-z A-Z]{2,3}/

//?co prime no
// function coprime(a,b) {
//     let length=a>b?a:b      //?not index 1 includes 
//     for(i=2;i<length;i++){
//         if(a%i==0 && b%i==0){
//             console.log(i);
//             return 'no coprime there is comman prime factor '
//         }
//     }
//     return 'coprime no'
// }
// console.log(coprime(4,5));

//?special no
//?the sum of digit is palindrome that is special no
// let a=781296
// let res=0
// while (a!=0) {
//     rem=a%10
//     res=rem+res
//     a=Math.floor(a/10)
// }
// let pali=''
// for(x of String(res)){
//     pali=x+pali
// }
// if(res==pali){
//     console.log('special no');
// }
// else{
//     console.log('no special no');
// }

//?oddish no and evenish no
// let a=56
// let res=0
// while (a!=0) {
//     rem=a%10
//     res=rem+res
//     a=Math.floor(a/10)
// }
// if(res%2==0){
//     console.log('evenish');
// }
// else{
//     console.log('oddiash');
// }
//?prime no
// let a=10
// for(i=2;i<a;i++){
//     if(a%i==0){
//         console.log('not a prime no');
//         break;
//     }
// }

//?gapfull no
// ? ex=>1015 -->if the no has atleast 3 digits and first& last digit combine and divisible==0  ex 1015%15==0
// let a=1053
// if(String(a).length > 2 ){
//     let b=String(a)[0]+String(a)[String(a).length-1]
//     console.log(Number(b));
//     if(a%b==0){
//         console.log('gapfull');
//     }
  
// }
// else{
//     console.log('not gapful');
// }

//?anagram


//?doubleton num
// let a=9980 //not 12121212121 doubleton 
// let obj={}
// for(i=0;i<String(a).length;i++){
//     if(!obj.hasOwnProperty(String(a)[i])){
//         obj[String(a)[i]]=true
//     }
// }
// let prop=Object.keys(obj).length
// if(prop==2){
//     console.log('doubleton');
// }
// else{
//     console.log('not doubleton');
// }
//?Checking for multiple values 
// let a=[10,20,30]  //?first array all values should present in array 2
// let b=[10,20,40,50,70]
// for(x of a){
//     if(!b.includes(x)){
//         console.log(`not present value --->${x}<---in 2nd array `);
//         break
//     }
// }

//?Checking for straight lines in JavaScript
// let a=[[4, 5], [5, 6]]
// for(x of a){
//     if(a.length==2 && x.length==2){
//         console.log('correct vlue for coordinates');
//     }
//     else{
//         console.log('not proper value for coordinates');
//         break
//     }
// }
//?Checking for uniqueness in an array in JavaScript
// let a=[10,20,30]
// for(x of a){
//     let b=a.indexOf(x)
//     let c=a.lastIndexOf(x)
//     if(b!=c){
//         console.log('the array has duplicate values');
//         break;
//     }
//     continue
// }
//?sorting logic
// let a=[30,10,5,7,8]
// for(let x=0;x<a.length;x++){
// for(let y=0;y<a.length;y++){
//     if(a[x] < a[y]){
//         let c=a[x]
//         a[x]=a[y]
//        a[y]=c 
//     }
//     continue
// }
// }
// console.log(a);
//?memozation logics

// function memoize() {
//     let memo={}
//  return (input)=>{
//     if(input in memo){
//         console.log(memo[input],'------>from memo');
//     }else{
//         let output=input*4
//         memo[input]=output
//         console.log(output,'------->from logics')
//     }
//  }
// }
// let mul=memoize()
// mul(10)
// mul(10)
// mul(10)
// mul(10)

//?languages program irota
// let objects = [ {  lang: "js" },
//     {    lang: "js",},
//     {lang: "python", },
//     {  lang: "html",  },
//     { lang: "css", }, ];
//?  iorta would ask to display in json format
  // [
  // { language: 'JavaScript', count: 2 },
  // { language: 'GoLang', count: 3 },
  // { language: 'TypeScript', count: 1 },
  // ]
// function irota(objects) {
//     let res={}
//     for(let x of objects){  
//       let c=x.lang
//       if(c in res){
//           res[c]={count:res[c].count+1}}
//       else{
//           res[c]={count:1}
//       } }
//     let json=[]
//     for (let x in res){
//       json.push({"lang":x,count:res[x].count})
//     }
//     console.log(json)}
// irota(objects)

//?function variable outside
// function one(){
//     var a;
//     function two(){
//         a = 10;
//         return a;
//     }
//     return two();
//  }
//  console.log(one());
//?hu tech questions
// let a='my name is arun'
// let b=''
// let c=[]
// // let b=a.split(' ').reverse().join(' ')
// // console.log(b);
// for(let x of a){
//   if(x!=' '){
//    b=b+x
//   }else{
//     c.push(b)
//     b=''
//   }
// }
// c.push(b)
// let res=''
// for(let y=0;y<c.length;y++){
//   res=c[y]+' '+res
// }
// console.log(res);
//?a=my name is arun find specific character
// let a='my name is arun'
// let b=/ar/
// console.log(a.includes(b))
// console.log(b.test(a));
// console.log(a.match(b));
//?flat
// let a=[2,1,[[3,[5]]]]
// let b=a.flat().flat().flat() of flat(infinity)
// console.log(b);
//?output==={dev:[{},{}],test:[{}]}
// let a=[{user:'arun',id:1, dept:'dev'},{ user:'arun', id:2,dept:'dev'},{user:'arun',id:3,dept:'test'}]
// let b={}
// for(let x of a){
//   if(x.dept in b){
//     b[x.dept].push({user:x.user,id:x.id})
//   }
//   else{
//     b[x.dept]=[{user:x.user,id:x.id}]}
// }
// console.log(b);
//?output='jvsrp9'     //ascii a=97 z=122  A=65 Z=90
// let a='jAvAsCrIpT'
// let b=''
// for(let x in a){
//   if(a.charCodeAt(x) > 96 && a.charCodeAt(x) <= 122){
//     b+=a[x]
//   }
// }
// b+=a.length-1
// console.log(b);
//?alphanumeric
// let a='AZBhqdgh1234'
// let b=''
// let c=''
// let d=''
// for(let x in a){
//   if(a.charCodeAt(x) > 64 && a.charCodeAt(x) <91){
//     b+=a[x]
//   }
//   else if(a.charCodeAt(x) > 97 && a.charCodeAt(x) <= 122){
//     c+=a[x]
//   }
//   else{
//     d+=a[x]
//   }
// }
// console.log(b,'------>upper case');
// console.log(c,'------>lowercase');
// console.log(d,'------>numeric');
//?format value 
// let a={a:'10'}
// let d=10.3
// console.log('%s hi',a);
// console.log('%o hello',a);
// console.log('%d hello',d);
//?two sum no
// function sum(arr,target) {
//   let obj={}
//   for(let i=0;i<arr.length;i++){
//     let value=arr[i]
//     let least=target-value
//     if(obj[least]!==undefined){
//       return [obj[least],i]
//     }
//     else{
//       obj[value]=i
//     }
//   }
// }
// console.log(sum([10,20,30,40,50],60));
//?
// let a=5
// a%3==0 && a%5==0 && a%7==0 ? console.log('num is divisible by 3 and 5 and 7'):a%5==0?console.log('num is divisible by 5'):a%7==0 ? console.log('num disible by 7'): a%3==0?console.log('num divisible by 3'):console.log('the no is not divisible by 3 and 5 and 7')

// function sum(arr,tar) {
//   let obj={}
//   for(let i=0;i<arr.length;i++){
//     let val=arr[i]
//     let find=tar-val
//     if(obj[find]!=undefined){
//       return [obj[find],i]
//     }
//     else{
//       obj[arr[i]]=i
//     }
//   }
// }
// console.log(sum([5,6,7,10,20],30));