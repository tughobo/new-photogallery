let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");
let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(Array.from(images).map(img => img.src), index);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));


function openModal(images, index) {
  wrapper.style.display = "flex";
  wrapper.style.width ="100vw"
  wrapper.style.height ="100vh"
  currentIndex = index;
  imgWrapper.src = images[currentIndex];

 
// Remove previous button from the wrapper
  wrapper.querySelectorAll("button").forEach(btn => {
    btn.remove();
  })
let prevBtn = document.createElement("button");
  prevBtn.innerHTML = "Prev";
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgWrapper.src = images[currentIndex];
  });
 
  
wrapper.appendChild(prevBtn);

 let nextBtn = document.createElement("button");
  nextBtn.innerHTML = "Next";
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgWrapper.src = images[currentIndex];
  });
 
  

  wrapper.appendChild(nextBtn);
  wrapper.style.position ="relative";
  prevBtn.style.position ="absolute";
  prevBtn.style.left ="0";
  nextBtn.style.position ="absolute";
  prevBtn.style.top ="53.3%"
  nextBtn.style.right ="0";
  nextBtn.style.top ="50.5%"
  

  
}


