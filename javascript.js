function moveButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * window.innerWidth * 0.8; // Posisi acak dalam lebar layar
    let y = Math.random() * window.innerHeight * 0.8; // Posisi acak dalam tinggi layar

    button.style.position = "absolute"; // Pastikan tombol bisa dipindah
    button.style.left = `${x}px`; // Atur posisi X secara acak
    button.style.top = `${y}px`; // Atur posisi Y secara acak
}

function nextPage() {
    let name = prompt("Masukkan nama Anda:");
    fetch("https://script.google.com/macros/s/AKfycbzh-aRLCxx-X-l7NsCkDfKq_63DtY3vHbG1id0-mXdFH-G0H0KT3y1f0AZ-zErxFwx2ig/exec" + encodeURIComponent(name))
        .then(response => console.log("Data terkirim!"))
        .catch(error => console.error("Gagal mengirim data:", error));
    
    window.location.href = "yes.html"; // Gantilah dengan halaman yang Anda inginkan
}
