// Getting the item with id="task" => input element
let inputElement = document.querySelector("#task");
let addButton = document.querySelector("#liveToastBtn");
let elementList = document.querySelector("#list");

function newElement() {
    if (inputElement.value !== "") {
        $(".success").toast("show");
        let newListItem = document.createElement("li");
        newListItem.textContent = inputElement.value;
        newListItem.onclick = markDone;
        let closeButton = document.createElement("span");
        closeButton.textContent = "x";
        closeButton.classList.add("close");
        closeButton.onclick = deleteItem;
        newListItem.append(closeButton);
        elementList.append(newListItem);
        inputElement.value = "";
    } else {
        $(".error").toast("show");
    }
}

function markDone() {
    this.classList.toggle("checked");
}

function deleteItem() {
    this.parentElement.remove();
}