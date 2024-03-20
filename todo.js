




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







