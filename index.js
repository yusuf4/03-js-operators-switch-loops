let user = {};

let userName = prompt("What is your name");
let userAge = prompt("How old are you?");
let userSex = confirm("Are you men?")

user.name=userName;
user.age=Number(userAge);
userSex ? user.sex = "Men" : user.sex = "Girl"
console.log(user);

// Работа с операторами.
alert("To get driver license we will check your age, please click OK and answer to question")
let driverAge= Number( prompt("How old are you?"));

if (driverAge>16 && driverAge<70){
    alert("You can get driver license")
}else if(driverAge>70){
    alert("We recommend you to use public transport, for your safety")
}else if(driverAge<16){
    alert("You are too young to get license, be patient!")
}else{
    alert("Please write your age in digits")
}

// Работа с условиями.
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a){
    case 0:
       alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
}


// Работа с циклами(loops).

for (let i = 1; i<=100; i++){
    //console.log(i);
    if (i%2===0){
        console.log(i);
    }
}


let i =0;
while ( i<3){
    alert( `number ${i}!` );
    i++
}