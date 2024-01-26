let cards = [
  {
    imgSrc: "1.png",
    name: "Jerry Helfer",
    place: "CEO",
  },
  {
    imgSrc: "2.png",
    name: "Mary Freund",
    place: "Product designer",
  },
  {
    imgSrc: "3.png",
    name: "Kurt Bates",
    place: "Content Manager",
  },
  {
    imgSrc: "4.png",
    name: "Daniel Hamilton",
    place: "UX desinger",
  },
  {
    imgSrc: "5.png",
    name: "Stephanie Nicol",
    place: "Marketing Manager",
  },
  {
    imgSrc: "6.png",
    name: "David Elson",
    place: "System Administrator",
  },
  {
    imgSrc: "7.png",
    name: "Ricky Smith",
    place: "Front End Developer",
  },
  {
    imgSrc: "8.png",
    name: "James Hall",
    place: "Social Media Manager",
  },
];
let container = document.querySelector(".container");
for (let card of cards) {
  let div = document.createElement("div");

  div.innerHTML = `
  
  <img src ='${card.imgSrc}'>
  <h2>${card.name}</h2>
  <p>${card.place}</p>
  `;
  div.classList.add("card");
  container.appendChild(div);
}
