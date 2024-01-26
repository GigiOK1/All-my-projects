let candyBars = [
  {
    imgSrc: "snickers.png",
    title: "Snickers",
    Price: "$50",
  },

  {
    imgSrc: "bounty.jpg",
    title: "Bounty",
    Price: "$49.99",
  },
  {
    imgSrc: "twix.png",
    title: "snickers",
    Price: "$490.99",
  },
];

//
let container = document.querySelector(".container");
for (let candyBar of candyBars) {
  let div = document.createElement("div");

  div.innerHTML = `
    
    <img src ='${candyBar.imgSrc}'>
    <h1>${candyBar.title}</h1>
    <p>${candyBar.Price}</p>
    `;
  div.classList.add("card");
  container.appendChild(div);
}
