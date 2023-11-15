const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function clickit() {
    if (inputBox.value === '') {
     
}
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.insertBefore(li, listContainer.firstChild);
        let span = document.createElement("span");
        span.innerHTML = " &#9876 ";
        li.appendChild(span);
   
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (a) {
    if (a.target.tagName === "LI") {
        a.target.classList.toggle("check");

    }
    else if (a.target.tagName === "SPAN") {
        a.target.parentElement.remove();
    }
}, false);