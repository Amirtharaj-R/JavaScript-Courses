// //console.log('hello from main.js')
// let age=25
// age=23
// console.log(age)
// const salary=80000
// //salary=7000
// console.log(salary)

// const name='amul'
// const char="kathir"
// const backsticks=`codeevalution`
// console.log(name)

// const person={
//     firstname:'kathirvel',
//     lastname:'S',
//     age:22
// }
// console.log(person.firstname)
// let age1=[1,2,3,4]
// console.log(age1[1])
// const names=['amul','kathir','hari','prakash']
// console.log(names[1])

// let x=10,y=5
// //console.log(x>=y)

// let isright=x>8 && y>8
// console.log(isright)
// const iseven=x%y === 0 ? 'even' : 'odd'
// console.log(iseven)
// console.log(x)
// console.log('4'-'2')
// console.log('4' - '2')
// console.log(Boolean(10))
// console.log((500).toString())


// const var1 ='10'
// const var2 =10
// console.log(var1 == var2)
// console.log(var1 === var2) 


// const n='red'
// if(n>0){
//     console.log('number is positive')
// }
// else if(n<0){
//     console.log('number is negative')
// }
// else{
//     console.log('Not a number')
// }

// const color ='10'

// switch(color){
//     case 'red':
//         console.log('color is red')
//         break
//         case 'blue':
//         console.log('color is blue')
//         break 
//         case 'yellow':
//         console.log('color is yellow')
//         break        
//         default :
//         console.log('not a color')
//         break
// }

// for(let i=1;i<=5;i++)
// {
//     console.log('itrations : '+i)
// }

// let x=5
// while(x>0){
//     console.log("it's grater then 0 < "+x)
//     x--;
// }

// let i=6
// do{
//     console.log('iteration num :'+i)
// }while(x<=5)

// const numarray=[10,'20',30,'fourthone',50]
// for(const num of numarray){
//     console.log('iterations'+num)
// }

// function greet(){
//     console.log('good morning Kathir')
// }
// greet()

// function greet(username){
//     console.log('good morning'+username)
// }
// greet('somu')
// greet('Amul')
// greet('Kathir') 

// //function add(a,b){
//     //return a+b
// //}

// const arrowsum = (a,b) => a + b;
// const addfive = (num) => num + 5
// let x=addfive(5)
// console.log(x)
// const sum = arrowsum(50 ,10)
// console.log(sum)

//const myname='Kathir'
mynum=100   //global Scope
if(true){   //Bloack Scope
    const myname='Amul'
    console.log(myname)
    console.log(mynum)
}

function testfn(){   //Function Scope
    const myname='Kathir'
    console.log(myname)
    console.log(mynum)
}

testfn()