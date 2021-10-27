const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const data = await res.json;

  // clear results
  results.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);
  });
}
