function updateTime() {
    const currentDate = new Date();
    const timeElement = document.getElementById("current-time");
    timeElement.innerHTML = currentDate.toLocaleTimeString();
    timeElement.style.color = "red"
}

setInterval(updateTime, 1000); // Her saniye saati günceller.

// Resme tıklanınca döndürme işlevini tanımlar
document.getElementById("rotate-image").addEventListener("click", function () {
    // "rotated" sınıfını ekleyerek resmi döndürür.
    this.classList.add("rotated");

    setTimeout(() => {
        this.classList.remove("rotated");
    }, 1000); 
});





