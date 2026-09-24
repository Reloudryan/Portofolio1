
document.addEventListener("DOMContentLoaded", function () {  

  const tombolFilter = document.querySelectorAll(".btn-filter");
  const semuaProyek = document.querySelectorAll(".kartu-proyek");

  tombolFilter.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      tombolFilter.forEach(function (btn) {
        btn.classList.remove("aktif");
      });
      tombol.classList.add("aktif");

      const kategoriDipilih = tombol.getAttribute("data-kategori");

      semuaProyek.forEach(function (kartu) {
        const kategoriKartu = kartu.getAttribute("data-kategori");

        if (kategoriDipilih === "semua" || kategoriDipilih === kategoriKartu) {
          kartu.classList.remove("sembunyi");
        } else {
          kartu.classList.add("sembunyi");
        }
      });
    });
  });

  // ========================================================
  // 2. FLOATING BOTTOM NAV: INDIKATOR AKTIF SAAT DIKLIK
  // ========================================================
  const navPills = document.querySelectorAll(".nav-pill");

  navPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      navPills.forEach(function (item) {
        item.classList.remove("active");
      });
      pill.classList.add("active");
    });
  });

  // ========================================================
  // 3. AUTO SCROLL-SPY: UPDATE STATUS MENU SAAT DI-SCROLL
  // ========================================================
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    sections.forEach(function (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150; // offset toleransi scroll
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navPills.forEach(function (pill) {
          pill.classList.remove("active");
          if (pill.getAttribute("href") === "#" + sectionId) {
            pill.classList.add("active");
          }
        });
      }
    });
  });

});