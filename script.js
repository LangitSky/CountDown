// Tanggal dan waktu Malam Tahun Baru
const tanggalTujuan = new Date('2025-01-01T00:00:00');

// Fungsi menghitung waktu
function hitungWaktu() {
 const waktuSekarang = new Date();
 const selisihWaktu = tanggalTujuan.getTime() - waktuSekarang.getTime();
 const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
 const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
 const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

 document.getElementById('hari').innerText = hari;
 document.getElementById('jam').innerText = jam;
 document.getElementById('menit').innerText = menit;
 document.getElementById('detik').innerText = detik;
}

// Jalankan fungsi setiap detik
setInterval(hitungWaktu, 1000);

// Jalankan fungsi sekali
hitungWaktu();