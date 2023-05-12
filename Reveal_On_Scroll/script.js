// memberikan event pada window. Event yang di cek adalah scroll 
// dan saat scroll bernilai true maka yang dijalanakan adalah code reveal
window.addEventListener("scroll", reveal);

function reveal() {
    // Ambil semua elemen dengan kelas reveal
    var reveals = document.querySelectorAll(".reveal")
    console.log(reveals)

    reveals.forEach(reveal => {
        // untuk mencari tinggi viewport
        var windowHeight = window.innerHeight;
        //  untuk menyimpan perubahan bagian top tiap card kelas reveal
        var revealTop = reveal.getBoundingClientRect().top;
        // untuk menentukan reveal point (di titik mana card akan muncul saat di scroll)
        var revealPoint = 0;

        // Saat posisi top dari sebuah card lebih kecil dari tinggi viewport browser dikurangi revealpoint 
        // maka berikan kelas active (memberi animasi pada selector kelas active di css)
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active')
        } else {
            reveal.classList.remove('active')
        }
    })
}

AOS.init();