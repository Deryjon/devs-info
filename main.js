import { devList } from "./src/js/templates";

const nameInput = document.querySelector("#name");
const jobOption = document.querySelector("#job");
const colorInput = document.querySelector("#color");
const createBtn = document.querySelector(".btn");
const devWrapper = document.querySelector(".devWrapper");

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/iskandar";

// EVENTS
createBtn.addEventListener("click", createDevs);
devWrapper.addEventListener("click", deleteDevs);
window.addEventListener("load", fetchDevs);

// FUNCTIONS
async function createDevs() {
  const nameValue = nameInput.value.trim();
  const jobValue = jobOption.value;
  const colorValue = colorInput.value;
	if (!nameValue) return
	if (!jobValue) return
	if (!colorValue) return

  const res = await fetch(`${api}.json`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      job: jobValue,
      color: colorValue,
    }),
  });
  const data = await res.json();
	

  fetchDevs();
}

createBtn.addEventListener("click", () => {
	nameInput.value = ""
	jobOption.value = ""
	colorInput.value = ""
})

//  get
async function fetchDevs() {
  const res = await fetch(`${api}.json`);
  const data = await res.json();
  devWrapper.innerHTML = "";
  for (let key in data) {
    devWrapper.innerHTML += devList(data[key], key);
  }
	
}
async function deleteDevs(e) {
	const target = e.target;
  const listElement = target.parentElement.parentElement;
  if (!target.classList.contains("delete")) return;
  const res = await fetch(`${api}/${listElement.id}.json`, {
    method: "DELETE",
  });
  fetchDevs();
  
}