const animeList = document.getElementById("anime-list");
const search = document.getElementById("search");

async function loadAnime(keyword = "naruto") {
    animeList.innerHTML = "<h2 style='color:white'>Loading...</h2>";

    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}&limit=20`);
        const data = await res.json();

        animeList.innerHTML = "";

        data.data.forEach(anime => {
            animeList.innerHTML += `
                <div class="card">
                    <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}">
                    <h3>${anime.title}</h3>
                    <p>⭐ ${anime.score ?? "-"}</p>
                </div>
            `;
        });

    } catch (e) {
    animeList.innerHTML = `
        <h2 style="color:red">Gagal memuat anime.</h2>
        <p style="color:white">${e.message}</p>
    `;
    console.error(e);
}