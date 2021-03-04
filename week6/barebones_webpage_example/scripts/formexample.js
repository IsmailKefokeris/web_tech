
document.getElementById("btnsubmit").addEventListener("click", function(){
    let enteredName = document.getElementById("txtname").value;
    let enteredAge = document.getElementById("txtage").value;

    let output = "Submit Successful, Welcome <strong>" + enteredName + "</strong> You seem to be old enough for the website at " + enteredAge;

    document.getElementById("result").innerHTML = output
})