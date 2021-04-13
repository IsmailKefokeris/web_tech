/*
document.getElementById("btndemo").addEventListener("click", e=>{

    let container = document.createElement("div");
    document.body.appendChild(container)
    container.classList.add("demo")

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "HEllo";
    paragraph.style.backgroundColor = "red";

    container.appendChild(paragraph)
})
Example of use of javascript to create elements and use of css to edit those elementts*/

document.getElementById("btndemo").addEventListener("click", e=>{
    let eye = new Eye();
})

class Eye{

    constructor(){

        this.eye = document.createElement("div");
        this.eye.classList.add("eye");

        document.body.appendChild(this.eye)

        this.eyeball = document.createElement("div");
        this.eyeball.classList.add("eyeball");

        this.eye.appendChild(this.eyeball)

        this.eye.addEventListener("mouseover", e=>{
            this.lookRight();
        })

        this.eye.addEventListener("mouseout", e=>{
            this.lookLeft();
        })
        
    }

    lookRight(){
        this.eyeball.style.right = "0px";
    }

    lookLeft(){
        this.eyeball.style.right = "auto";
    }
}