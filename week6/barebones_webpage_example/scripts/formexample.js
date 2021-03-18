/**
document.getElementById("btnsubmit").addEventListener("click", function(){
    let enteredName = document.getElementById("txtname").value;
    let enteredAge = document.getElementById("txtage").value;

    let output = "Submit Successful, Welcome <strong>" + enteredName + "</strong> You seem to be old enough for the website at " + enteredAge;

    document.getElementById("result").innerHTML = output
})
*/

document.getElementById("frmexample").addEventListener("submit", function(){
    

})

function validate(){

    let name = document.forms["frmexample"]["name"]
    let age = document.forms["frmexample"]["age"]
    let example = document.forms["frmexample"]["example"].value

    let error = false;
    let output = "";

    if(name.trim() == ""){
        output += "Please Enter Name <br>"
        document.forms["frmexample"]["name"].style.backgroundColor = "red";
        error = true;
    }

    if(age == ""){
        output += "Please Enter Age <br>"
        document.forms["frmexample"]["name"].style.backgroundColor = "red";
        error = true;
    }

    if(example){
        error = true;
        output += "Please Pick one of the options!"
    }

    if(error){
        document.getElementById("result").innerHTML = output
        e.preventDefault();
    }

}