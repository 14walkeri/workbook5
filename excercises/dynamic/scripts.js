//data
let imageFiles = [
  { id: "1", path: "https://placehold.co/300x300", description: "placeholder 1 " },
  { id: "2", path: "https://placehold.co/300x300", description: "placeholder 2 " },
  { id: "3", path: "https://placehold.co/300x300", description: "placeholder 3 " },
  { id: "4", path: "https://placehold.co/300x300", description: "placeholder  4" },
  { id: "5", path: "https://placehold.co/300x300", description: "placeholder 5" },
  { id: "6", path: "https://placehold.co/300x300", description: "placeholder 6" },
  { id: "7", path: "https://placehold.co/300x300", description: "placeholder 7" },
  { id: "8", path: "https://placehold.co/300x300", description: "placeholder 8" },
  { id: "9", path: "https://placehold.co/300x300", description: "placeholder 9" },
  { id: "10", path: "https://placehold.co/300x300", description: "placeholder 10" },
  { id: "11", path: "https://placehold.co/300x300", description: "placeholder 11" },
  { id: "12", path: "https://placehold.co/300x300", description: "placeholder 12" },
];

//get elements
const imageList = document.querySelector("#imageList");
const addImageButton = document.querySelector("#addImageButton");
const clearImagesButton = document.querySelector("#clearImagesButton");
const imagesDiv = document.querySelector("#imagesDiv");
console.log(imageList, addImageButton, clearImagesButton, imagesDiv);

//functions
function loadImageList() {
  for (const imageFile of imageFiles) {
    let option = document.createElement("option");
    option.value = imageFile.id;
    option.innerText = imageFile.description;
    imageList.appendChild(option);
  }
}

function addImage() {
  const id = imageList.value;
  for (const imageFile of imageFiles) {
    if (imageFile.id == id) {
      let image = document.createElement("img");

      image.src = imageFile.path;

      image.alt = imageFile.description;

      imagesDiv.appendChild(image);
    }
  }
}
function removeImages() {
  imagesDiv.innerHTML = "";
}

//wire-up function
addImageButton.onclick = addImage;
clearImagesButton.onclick = removeImages;

loadImageList();



let row = employeesTableBody.insertRow(-1);
let cell1 = row.insertCell(0);
cell1.innerText = employee.id;
let cell2 = row.insertCell(1);
cell2.innerText = employee.name;
let cell3 = row.insertCell(2);
cell3.innerText = employee.jobTitle;
let cell4 = row.insertCell(3);
cell4.innerText = employee.yearsAtCompany;
let cell5 = row.insertCell(4);
cell5.innerText = employee.email;
let cell6 = row.insertCell(5);
cell6.innerText = employee.wfhAddress;
let cell7 = row.insertCell(6);
cell7.innerText = employee.skillSet;