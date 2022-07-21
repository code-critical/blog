async function load() {
    const response = await fetch("archive/data.json");
    const archive = await response.json();

    const posts = archive.posts;

    for (var key of Object.keys(posts)) {
        var data = posts[key];

        var container = document.querySelector(".publication-archive-wrapper");
        container.insertAdjacentHTML("afterbegin", 
        `   <div class="publication gwd-div-11m9">
                <div class="date">${data.date}</div>
                <a href="${data.link}" class="title">${data.title}</a>
                <div class="content">${data.content}</div>
            </div>
        `);
    }
}

load()