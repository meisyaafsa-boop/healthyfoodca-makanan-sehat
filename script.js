// Smooth scroll untuk navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submit ke WhatsApp
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data form
  const nama = document.getElementById("nama").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const alamat = document.getElementById("alamat").value;
  const paket = document.getElementById("paket").value;
  const hari = document.getElementById("hari").value;
  const catatan =
    document.getElementById("catatan").value || "Tidak ada catatan";

  // Hitung total (contoh)
  const harga = paket.includes("45.000")
    ? 45000
    : paket.includes("55.000")
    ? 55000
    : 50000;
  const total = harga * parseInt(hari);

  // Pesan WhatsApp
  const message = `🌿 *PESANAN CATERING SEHAT* 🌿

📝 *Detail Pelanggan:*
• Nama: ${nama}
• WhatsApp: ${whatsapp}
• Alamat: ${alamat}

🍽️ *Pesanan:*
• Paket: ${paket}
• Durasi: ${hari} Hari
• Total: Rp ${total.toLocaleString("id-ID")}

📝 *Catatan:* ${catatan}

⏰ *Status:* Menunggu konfirmasi & pembayaran
Terima kasih! 😊`;

  // Buka WhatsApp
  const waUrl = `https://wa.me/6283119718778?text=${encodeURIComponent(
    message
  )}`;
  window.open(waUrl, "_blank");

  // Feedback user
  alert(
    "✅ Pesanan berhasil dikirim ke WhatsApp! Silakan konfirmasi pembayaran."
  );
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
    navbar.style.backdropFilter = "blur(10px)";
  }
});

// Active navbar link
window.addEventListener("scroll", function () {
  let current = "";
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

