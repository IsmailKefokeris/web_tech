document.getElementById("btnstaff").addEventListener("click", event =>{

    const xhttp = new XMLHttpRequest(); /* Creation of an XMLHttp request */

    xhttp.addEventListener("load", event=>{ /* We make use of load event listener to manage the response, this will recieve the response and we can manipulate it here aswell */
        const staff = JSON.parse(event.target.responseText);

        let output = "";

        staff.forEach(member => {
            output += "<p>Name: " + member.name + "<br> Position: " + member.position + "</p>";
        });

        document.getElementById("result").innerHTML = output;
    });

    xhttp.open("GET", "data/staff.json"); /*This lets the computer know the type of HTTP request we wish to send and the pathway */
    xhttp.send(); /* This will actually send the request */
});

document.getElementById("btnsubjects").addEventListener("click", event=>{

    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", event=>{

        const subject = JSON.parse(event.target.responseText);

        let output = "";

        subject.forEach(subject=>{
            output += "<p>Name: " + subject.name + "<br> Description: <br>" + subject.description + "</p>";

            document.getElementById("result").innerHTML = output;
        });

    });

    xhttp.open("GET", "data/subject.json");
    xhttp.send();
});