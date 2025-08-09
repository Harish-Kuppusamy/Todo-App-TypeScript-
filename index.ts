var inputvalue: any;

const inp: any = document.getElementById("todo-input");
inp?.addEventListener("input", function handleInput(e: any): string {
  var input: string = e.target.value;
  console.log(input);
  inputvalue = input;
  return input;
});

const add: any = document.getElementById("todo-form");
add?.addEventListener("submit", function (e: any): string {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerText = inputvalue;
  const ul = document.getElementById("un");
  ul?.appendChild(li);

  return e.target;
});
