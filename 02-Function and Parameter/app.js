// Learn Function and Parameters

//Global scoop variable, can displayed anywhere 
const myName = 'Luki Setiawan';
const myFriend = 'Subejo Santoso';
const myGirlfriend = 'Aurelia Mei';

//Function is local scope, it's for simpler and reusable code
function upperCase(text){       //Text is a funtion parameter
    upperCased = text.toUpperCase(); //toUpperCase is build in function from JS
    console.log(upperCased); //Displaying result from upperCased = build in function
} 

upperCase(myName); //Just call the variables, value is depends on mentioned variable
upperCase(myFriend);
upperCase(myGirlfriend);

//Function with number
function add(num1, num2){
    result = num1 + num2;
    console.log(result);
}

add(2,3);