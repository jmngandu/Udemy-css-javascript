const SkyBlue = false;
if (SkyBlue){
console.log("The sky is blue");
}
else{
    console.log("The sky is not blue");
}
const character = "f";
const repeat = 5;
let answer = ` `;
for(let i = 0; i< repeat; i++){
    answer = answer + character; 
}
console.log(answer);

function greet(FirstName, LastName, Greetings){
    return `${Greetings}, ${FirstName} ${LastName} How are you doing sir`
}
console.log(greet("James", "Ngandu", "Hello!"));