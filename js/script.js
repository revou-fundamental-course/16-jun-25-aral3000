// Mendapatkan referensi ke elemen HTML yang kita butuhkan untuk Luas Segitiga
const formLuas = document.getElementById('form-luas'); // Mengambil form luas berdasarkan ID
const alasLuasInput = document.getElementById('alas-luas'); // Mengambil input alas
const tinggiLuasInput = document.getElementById('tinggi-luas'); // Mengambil input tinggi
const resultLuasDiv = document.getElementById('result-luas'); // Mengambil div untuk menampilkan hasil

// Menambahkan event listener ke form luas
formLuas.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh saat form disubmit

    // Mengambil nilai dari input dan mengubahnya menjadi angka (float)
    const alas = parseFloat(alasLuasInput.value);
    const tinggi = parseFloat(tinggiLuasInput.value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        resultLuasDiv.style.display = 'block'; // Tampilkan div hasil
        resultLuasDiv.style.backgroundColor = '#ffdddd'; // Warna latar belakang untuk error
        resultLuasDiv.style.borderColor = '#ffaaaa'; // Warna border untuk error
        resultLuasDiv.innerHTML = 'Mohon masukkan nilai Alas dan Tinggi yang valid (angka positif).';
        return; // Hentikan fungsi jika input tidak valid
    }

    // Melakukan perhitungan luas
    const luas = 0.5 * alas * tinggi;

    // Menampilkan hasil
    resultLuasDiv.style.display = 'block'; // Tampilkan div hasil
    resultLuasDiv.style.backgroundColor = '#e2f0ff'; // Kembalikan warna latar belakang normal
    resultLuasDiv.style.borderColor = '#b0d8f9'; // Kembalikan warna border normal
    resultLuasDiv.innerHTML = `
        <p>Rumus: L = 1/2 x a x t</p>
        <p>Perhitungan: L = 1/2 x ${alas} x ${tinggi}</p>
        <p>Luas Segitiga: ${luas}</p>
    `;
});

// Mendapatkan referensi ke elemen HTML yang kita butuhkan untuk Keliling Segitiga
const formKeliling = document.getElementById('form-keliling'); // Mengambil form keliling berdasarkan ID
const sisi1KelilingInput = document.getElementById('sisi1-keliling'); // Mengambil input sisi A
const sisi2KelilingInput = document.getElementById('sisi2-keliling'); // Mengambil input sisi B
const sisi3KelilingInput = document.getElementById('sisi3-keliling'); // Mengambil input sisi C
const resultKelilingDiv = document.getElementById('result-keliling'); // Mengambil div untuk menampilkan hasil

// Menambahkan event listener ke form keliling
formKeliling.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh saat form disubmit

    // Mengambil nilai dari input dan mengubahnya menjadi angka (float)
    const sisi1 = parseFloat(sisi1KelilingInput.value);
    const sisi2 = parseFloat(sisi2KelilingInput.value);
    const sisi3 = parseFloat(sisi3KelilingInput.value);

    // Validasi input (Pastikan semua sisi adalah angka positif)
    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        resultKelilingDiv.style.display = 'block'; // Tampilkan div hasil
        resultKelilingDiv.style.backgroundColor = '#ffdddd'; // Warna latar belakang untuk error
        resultKelilingDiv.style.borderColor = '#ffaaaa'; // Warna border untuk error
        resultKelilingDiv.innerHTML = 'Mohon masukkan nilai Sisi A, Sisi B, dan Sisi C yang valid (angka positif).';
        return; // Hentikan fungsi jika input tidak valid
    }

    // Melakukan validasi tambahan untuk keliling segitiga: hukum ketidaksamaan segitiga
    // Jumlah panjang dua sisi harus lebih besar dari panjang sisi ketiga.
    if (sisi1 + sisi2 <= sisi3 || sisi1 + sisi3 <= sisi2 || sisi2 + sisi3 <= sisi1) {
        resultKelilingDiv.style.display = 'block';
        resultKelilingDiv.style.backgroundColor = '#ffdddd';
        resultKelilingDiv.style.borderColor = '#ffaaaa';
        resultKelilingDiv.innerHTML = 'Nilai sisi-sisi yang Anda masukkan tidak membentuk segitiga yang valid (tidak memenuhi hukum ketidaksamaan segitiga).';
        return;
    }


    // Melakukan perhitungan keliling
    const keliling = sisi1 + sisi2 + sisi3;

    // Menampilkan hasil
    resultKelilingDiv.style.display = 'block'; // Tampilkan div hasil
    resultKelilingDiv.style.backgroundColor = '#e2f0ff'; // Kembalikan warna latar belakang normal
    resultKelilingDiv.style.borderColor = '#b0d8f9'; // Kembalikan warna border normal
    resultKelilingDiv.innerHTML = `
        <p>Rumus: K = S1 + S2 + S3</p>
        <p>Perhitungan: K = ${sisi1} + ${sisi2} + ${sisi3}</p>
        <p>Keliling Segitiga: ${keliling}</p>
    `;
});