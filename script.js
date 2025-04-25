const products = [
  {
    name: "Spyroid v7.7",
    price: "$49",
    image: "https://media-hosting.imagekit.io/c1193cf35c424ac8/1000008877.jpg?Expires=1840156748&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bHCOx1DMr-cMUL5MRru50aAQzWlF59ThlZeRl-NrPIeRfXia5NyieqMIwmBGavZSavV-e5crbvkQbuZwP7lWA-0oirmnIcC3GYO5CwEQQDctd-siuomSS6HpbVDYd488SQIKEZwHwZ1lOY7m02QdvDv6dz7tQrBdSMBszQmAzeYG7p4im4Mdt4Q-zpQE6a2z9frjnfYWJVtJmc-7hdJKj-5ewL~k8SMmPzCAETTtJnPngoebWYc-xfJlOMVNfE34IJsCBBKHak5MVlEBo2veGb5l8P71GUpbgTp9nUWVcTBr93a~r2GJ~N3AZXX1DvKG~zxdWmJbRL-qs6SbiXsbMQ__"
  },
  {
    name: "BTMOB RAT",
    price: "$45",
    image: "https://media-hosting.imagekit.io/65825fb759114b78/1000008879.jpg?Expires=1840156972&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jkF3Hd2347f2um1c-IeyZ2wRBUGl2dt4Ug~35j-XMgE0jWPI08XnLIL6ehwFUKKZhbME-UODikvh5yYSiT~Vk2uJVVEJmFfZdrGBVXEvCl9QNOWLF-JkwkPkScN3WYh3d~yWguQxTeeIu1928ClkfUozjMXY61Hx-K2psHtUWrRnegbb0PIfwN9TRUKfeFTRn3ERIxes5bVrmd0dq6hW1wwEBNquj0aw8gyfGtLWNyNsWYQi5hF7Jf9vjdtfXbl1W8KPJfOfwf9M12ngOWL9pAUDeW3IQD7tk-8nAnmGvxU9GsKAfI2NeEzMUaKDOPuAWP4wYMxTwDmW9dirUIDYRA__"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Price: ${p.price}</p>
    <button onclick="buyNow('${p.name}')">Buy on Telegram</button>
  `;
  container.appendChild(div);
});

function buyNow(productName) {
  window.open("https://t.me/CIPHERNOVAX909", "_blank");
}