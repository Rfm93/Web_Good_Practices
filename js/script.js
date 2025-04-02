

// External Javascript

function btnExternalClick(){
    alert("Hello World! I am external button");
}

document.getElementById("btn-external").addEventListener("click", btnExternalClick)



// MouseOverChangeBackgroundColor

function btnMouseOver(){
    // background-color

    if (this.classList.contains("whitesmoke")) {
        // in order to exemplify the manipulation of style with class in js, I used add, remove and replace.
        this.classList.replace("whitesmoke", "blue");
        this.classList.add("white-color");
    }


}

function btnMouseOut(){
    // background-color
    if (this.classList.contains("blue")) {
        this.classList.replace("blue", "whitesmoke");
        this.classList.remove("white-color");
    }
}

const btns = document.querySelectorAll(".btn-grid");

btns.forEach(btn => {
    btn.addEventListener("mouseover", btnMouseOver);
    btn.addEventListener("mouseout", btnMouseOut);
});


