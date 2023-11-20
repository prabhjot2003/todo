const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function clickit() {
    if (inputBox.value === '') {
        document.getElementById("error").innerHTML = "Please Fill The Task "
        //   document.getElementById("input-box").innerHTML.style.border="2px solid red";
        //  document.getElementById("input-box").style.border= "1px solid red"; 	

    }
    else {
        document.getElementById("error").innerHTML = ""
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.insertBefore(li, listContainer.firstChild);
        let span = document.createElement("span");
        span.innerHTML = " &#9249 ";
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