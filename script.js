const actions = Array.from(document.querySelectorAll("[data-action]"));

let counter = localStorage.getItem('counter') || 0;
document.querySelector(".counter-values").innerText = counter;

actions.forEach((action) => {
  action.addEventListener("click", () => {
    const type = action.dataset.action;

    switch (type) {
      case "increment":
        counter++;
        break;
      case "decrement":
        counter--;
        break;
      case "reset":
        counter = 0;
        break;
      case "save":
        localStorage.setItem("counter", counter);
        break;
      case "clear":
        localStorage.clear();
        counter = 0;
        break;
    }
    document.querySelector(".counter-values").innerText = counter;
  });
});
if (counter > 0){
  document.getElementsById("#counters").style.color = 'purple'
}

