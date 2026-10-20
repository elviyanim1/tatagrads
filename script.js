
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");

// Cek apakah elemen musik ada di halaman
if (music && musicButton && musicStatus) {

    // Klik tombol untuk play atau pause
    musicButton.addEventListener("click", async function () {

        if (music.paused) {

            try {
                await music.play();

                musicButton.textContent = "Ⅱ";
                musicButton.setAttribute("aria-label", "Jeda musik");
                musicButton.setAttribute("aria-pressed", "true");
                musicStatus.textContent = "now playing ♡";

            } catch (error) {

                musicStatus.textContent =
                    "musik belum bisa diputar. Cek file lagunya ya!";

                console.error("Musik gagal diputar:", error);
            }

        } else {

            music.pause();

            musicButton.textContent = "▶";
            musicButton.setAttribute("aria-label", "Putar musik");
            musicButton.setAttribute("aria-pressed", "false");
            musicStatus.textContent = "paused for a moment ♡";
        }

    });

    // Kalau lagu selesai atau dihentikan oleh browser
    music.addEventListener("pause", function () {
        musicButton.textContent = "▶";
        musicButton.setAttribute("aria-label", "Putar musik");
        musicButton.setAttribute("aria-pressed", "false");

        if (musicStatus.textContent === "now playing ♡") {
            musicStatus.textContent = "paused for a moment ♡";
        }
    });

    music.addEventListener("play", function () {
        musicButton.textContent = "Ⅱ";
        musicButton.setAttribute("aria-label", "Jeda musik");
        musicButton.setAttribute("aria-pressed", "true");
        musicStatus.textContent = "now playing ♡";
    });

}
