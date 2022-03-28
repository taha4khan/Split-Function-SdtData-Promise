//SPLIT
let studentname = ["taha khan", "khubaib hanif", "ahsan siddique", "hassan afzal"];
let fathersname = ["khan", "hanif", "siddique", "afzal"];
let check;
studentname.forEach((element) => {
    fathersname.forEach((e, i)=>{
        check = element.split(" ");
        if (check[1] === e){
            console.log( `${element} 's father name found at index' ${i}`)
        }
    })
}),console.log("\n");

//FUNCTION
function addition(a,b){
    return a+b
}
function divide(a,b){
    return a/b
}
function multiply(a,b){
    return a*b
}
function power(a,b){         // let x = Math.pow(4, 3);
    return (Math.pow(a,b))   // console.log(x)
}
var a = addition(10, 15)
    result = divide(a,2)
var b = addition(10, 20)
    result1 = multiply(b,2)
var c = addition(2, 2)
    result2 = power(c,2)

console.log("result is :" + result)
console.log("result1 is :" + result1)
console.log("result2 is :" + result2),console.log("\n");



//STUDENTDATA
var studentData = {
    "name":"Irtiza",
    "ID":"bf-4523",
    "courses":[],
    "addCourses": function (courseName){
        this.courses.push(courseName)
        return"Added Successfully"
    },
    "changeID": (c)=>{
        this,ID = c
    }
}
console.log(studentData);

studentData.addCourses("English")
studentData.addCourses("Math")
studentData.addCourses("Urdu")

console.log("Total enrollled courses : " + studentData.courses);
console.log("student ID : " + studentData.ID);


studentData.changeID(123)
studentData.ID = 2222
console.log(studentData)

studentData.addCourses("Chemistry")
console.log(studentData.courses),console.log("\n")

//PROMISES
async  function one()  {
    await setTimeout(function(){
        console.log("khubaib")
    },2000)  
}

function two(){
    return new Promise ((resolve,reject) => {

        setTimeout(function(){
            console.log("taha"
            )
            resolve("taha")
        },3000)
    })
}

function three(){
    console.log("hassan")
}

function four() {
    setTimeout((resolve,_reject) => {
        console.log("team include")   
    }, 800);
   
}

function five(){
    var prm = new Promise(function (resolve, _reject) {
            setTimeout(function () {
                console.log("ahsan")
                resolve("ahsan")
            }, 1000)
    })

}
one()
two()
three()
four()
five()
