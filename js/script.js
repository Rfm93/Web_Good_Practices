

// External Javascript

function btnExternalClick(){
    alert("Hello World! I am external button");
}

document.getElementById("btn-external").addEventListener("click", btnExternalClick)



// MouseOverChangeBackgroundColor

function btnMouseOver(){
    // background-color

    // Another alternative would be to use add and remove classList. I found the code below to be more readable.
    if (this.classList.contains("whitesmoke")) {
        this.classList.replace("whitesmoke", "blue");
    }
}

function btnMouseOut(){
    // background-color
    if (this.classList.contains("blue")) {
        this.classList.replace("blue", "whitesmoke");
    }
}

const btns = document.querySelectorAll(".btn-grid");

btns.forEach(btn => {
    btn.addEventListener("mouseover", btnMouseOver);
    btn.addEventListener("mouseout", btnMouseOut);
});


