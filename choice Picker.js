let input = document.getElementById("input")
let choices = document.querySelector(".choices")
let no = 0;
let key = 0;
let innerChoices = ""
let span = []
let check = true

console.log(input)
console.log(choices)

input.addEventListener("keypress", (event) => {

    if (event.key == "Enter" && check) {
        input.setAttribute("readonly", "readonly")
        console.log(span.length)
        check = false

        let i = 0, previous
        let change = setInterval((terminator) => {
            let random = Math.ceil(Math.random() * (span.length - 1))
            console.log("i : " + i)

            if (i <= (span.length * 2)) {
                if (i == 0) {
                    previous = span[random]
                    console.log(span[random])
                    previous.classList.add("backgroundColor")
                }
                if (i != 0) {
                    previous.classList.remove("backgroundColor")
                    span[random].classList.add("backgroundColor")
                    previous = span[random]
                }
                i++
            }
            else
                clearInterval(change)
        }, 0400);

    }
    else if (event.key == ",") {
        no = 0;
        key++;
        innerChoices = ""
    }
    if ((event.key != "," && event.key != "Enter") && check)
        if (no == 0) {
            innerChoices += event.key
            no++
            choices.insertAdjacentHTML("beforeend", `<div class = "innerChoices">${innerChoices}</div>`)
        }
        else {
            span = Array.from(document.querySelectorAll(".innerChoices"))
            span[key].innerText += event.key
        }
})
