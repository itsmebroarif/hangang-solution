const dataLaptop = [
  {
    id: 1,
    name: "Laptop Gaming MSI GF63",
    price: 15000000,
    image: "assets/laptop-msi-gf63.jpg",
    description:
      "Laptop MSI GF63 dirancang untuk gaming dan content creation dengan spesifikasi yang handal dan kinerja yang stabil.",
  },
  {
    id: 2,
    name: "Laptop Bisnis Lenovo ThinkPad E14",
    price: 12000000,
    image: "assets/laptop-lenovo-thinkpad-e14.jpg",
    description:
      "Laptop Lenovo ThinkPad E14 dirancang untuk bisnis dan pekerjaan dengan spesifikasi yang stabil dan kinerja yang cepat.",
  },
  {
    id: 3,
    name: "Laptop Ultrabook Asus ZenBook 14",
    price: 18000000,
    image: "assets/laptop-asus-zenbook-14.jpg",
    description:
      "Laptop Asus ZenBook 14 dirancang untuk kebutuhan sehari-hari dengan spesifikasi yang ringan dan kinerja yang cepat.",
  },
  {
    id: 4,
    name: "Laptop Gaming Razer Blade 15",
    price: 25000000,
    image: "assets/laptop-razer-blade-15.jpg",
    description:
      "Laptop Razer Blade 15 dirancang untuk gaming dan content creation dengan spesifikasi yang handal dan kinerja yang stabil.",
  },
];

// Logic To Html Component using Bootstrap Css

const renderLaptop = (data) => {
  const laptopElement = document.createElement("div");
  laptopElement.classList.add("col");
  laptopElement.innerHTML = `
  <div class="card h-100">
    <img
      src="${data.image}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.description}</p>
      <p class="card-text">
        <small class="text-muted">Rp ${data.price.toLocaleString()}</small>
      </p>
    </div>
  </div>
  `;
  return laptopElement;
};

const listLaptop = document.querySelector(".list-laptop");
dataLaptop.forEach((data) => {
  const laptopElement = renderLaptop(data);
  listLaptop.appendChild(laptopElement);
});
