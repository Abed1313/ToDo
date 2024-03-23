'use strict'

let quest=["Are you Student? (yes/no)", "Do you live in Jordan? (yes/no)","Are you love your specialty? (yes/no)"];
   let answer=[];

function promptQuestion(){
   
   for (let i=0 ; i<quest.length ; i++){
    
       do{
           var q1= prompt(quest[i]);
           
               if(q1 === ""){
                   alert("your answer should not be empty")
               }else if (q1 !== "yes" && q1 !== "no"){
               alert("your answer should be (yes/no)")
               }
           
       }while (q1 !== "yes" && q1 !== "no");
       
       answer.push(q1)
   }

}


promptQuestion();

function printAnswers(){
   
   for(let x = 0 ; x < answer.length ; x++){
       console.log("The answers are : " + answer)
   }
}
printAnswers()





var name= prompt("please Enter your name")
var promptResult2= prompt("please Enter your Gender Female or Male")
var promptResult3= prompt("please Enter your Age")




if(promptResult3 <=0){
    alert("age is less than or equal to zero")
}
 

 var confirmResult= confirm("skip the welcoming message")
console.log(confirmResult)

 if(confirmResult === false){

    if(promptResult2 == "Male"){
        alert( "Mr." + name)
    }else if(promptResult2 == "female"){
        alert( "Ms." + name)
    }else alert("your Gender mistake")
 }







