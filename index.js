var inputvalue;
const inp = document.getElementById("todo-input");
inp === null || inp === void 0 ? void 0 : inp.addEventListener("input", function handleInput(e) {
    var input = e.target.value;
    console.log(input);
    inputvalue = input;
    return input;
});
const add = document.getElementById("todo-form");
add === null || add === void 0 ? void 0 : add.addEventListener("submit", function (e) {
    e.preventDefault();
    const li = document.createElement("li");
    li.innerText = inputvalue;
    const ul = document.getElementById("un");
    ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
    return e.target;
});
export {};
//# sourceMappingURL=index.js.map