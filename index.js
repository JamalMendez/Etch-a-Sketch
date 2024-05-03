const content = document.querySelector(".content");

const squareDraw = (width, height) => {
    for (let i = 0; i < width*height; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");

        div.style.width = `calc(100%/${width})`;
        div.style.height = `calc(100%/${height})`;
        
        div.addEventListener("mouseover", e => {
            div.style["background-color"] = "red";
        });

        content.appendChild(div);
    }
};

squareDraw(16,16);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const width = prompt("Insert the width you want.");
    const height = prompt("Insert the height you want.");

    const deleteDivs = document.querySelectorAll(".grid");
    deleteDivs.forEach(grid => {
        grid.remove();
    });

    squareDraw(width, height);
});