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
    fetch("https://script.google.com/macros/s/AKfycbyXEGnuM2GvSw4xwSBMgjPLS3kHthgCPtRlCDH3H35LkSEG7seb0vTzbMurDsylqid5vQ/exec" + encodeURIComponent(name))
        .then(response => console.log("Data terkirim!"))
        .catch(error => console.error("Gagal mengirim data:", error));

    window.location.href = "yes.html"; // Gantilah dengan halaman yang Anda inginkan
}
function doGet(e) {
  var sheet = SpreadsheetApp.openById("14i2900Sias7Nr-N_RfOIuoii9iMJ9M5OhGUzw2OzckQ").getSheetByName("Sheet1");
  
  var name = e.parameter.name; // Ambil parameter "name" dari URL
  if (name) {
    sheet.appendRow([name, new Date()]); // Simpan nama dan waktu ke Google Sheets
    return ContentService.createTextOutput("Data berhasil disimpan!");
  } else {
    return ContentService.createTextOutput("Error: Tidak ada nama yang dikirim.");
  }
}
