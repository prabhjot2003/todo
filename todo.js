const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function clickit() {
    if (inputBox.value === '') {
        // alert("ghpeubgvr!")

    }
    else {
        let li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML = " x ";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);