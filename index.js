const content = document.querySelector(".content");

for (let i = 0; i < 16*16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    content.appendChild(div);
}

