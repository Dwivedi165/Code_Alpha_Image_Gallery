const gallery = document.getElementById("imageGallery")
const modal = document.getElementById("imageModal")
const modalImg = document.getElementById("modalImage")
const captionText = document.getElementById("imageCaption")
const closeBtn = document.getElementsByClassName("close")[0]

const images = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Beautiful landscape",
    caption: "Serene mountain lake at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d",
    alt: "City skyline",
    caption: "Vibrant city skyline at night",
  },
  {
    src: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb",
    alt: "Tropical beach",
    caption: "Pristine tropical beach with crystal clear water",
  },
  {
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    alt: "Wildlife",
    caption: "Majestic lion in the savannah",
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada",
    alt: "Ancient architecture",
    caption: "Intricate details of ancient temple architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    alt: "Food photography",
    caption: "Mouthwatering gourmet dish presentation",
  },
  {
    src: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb",
    alt: "Abstract art",
    caption: "Colorful abstract painting with bold strokes",
  },
  {
    src: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
    alt: "Space exploration",
    caption: "Awe-inspiring view of Earth from space",
  },
  {
    src: "https://images.unsplash.com/photo-1530053969600-caed2596d242",
    alt: "Underwater world",
    caption: "Vibrant coral reef teeming with marine life",
  },
  {
    src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
    alt: "Autumn foliage",
    caption: "Breathtaking autumn colors in a forest",
  },
  {
    src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
    alt: "Northern lights",
    caption: "Spectacular display of northern lights",
  },
  {
    src: "https://images.unsplash.com/photo-1476900543704-4312b78632f8",
    alt: "Street photography",
    caption: "Candid moment captured in a bustling city street",
  },
]

let currentIndex = 0

function createGalleryItems() {
  images.forEach((image, index) => {
    const item = document.createElement("div")
    item.className = "gallery-item"
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`
    item.addEventListener("click", () => openModal(index))
    gallery.appendChild(item)
  })
}

function openModal(index) {
  modal.style.display = "block"
  modalImg.src = images[index].src
  captionText.innerHTML = images[index].caption
  currentIndex = index
}

function changeImage(step) {
  currentIndex += step
  if (currentIndex >= images.length) {
    currentIndex = 0
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1
  }
  modalImg.src = images[currentIndex].src
  captionText.innerHTML = images[currentIndex].caption
}

closeBtn.onclick = () => {
  modal.style.display = "none"
}

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") {
      changeImage(-1)
    } else if (e.key === "ArrowRight") {
      changeImage(1)
    } else if (e.key === "Escape") {
      modal.style.display = "none"
    }
  }
})

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none"
  }
}

createGalleryItems()

// Add animation to gallery items
const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach((item, index) => {
  item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`
})
// Add this CSS rule to your styles.css file
;`@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`

