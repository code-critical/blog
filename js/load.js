async function load() {
    const response = await fetch("archive.json");
    const archive = await response.json();

    const posts = archive.posts;

    for (var key of Object.keys(posts)) {
        var data = posts[key];

        var container = document.querySelector(".publication-archive-wrapper");
        container.insertAdjacentHTML("afterbegin", 
        `   <div class="publication gwd-div-11m9">
                <div class="date">${data.date}</div>
                <div class="title">${data.title}</div>
                <div class="content">${data.content}</div>
            </div>
        `);
    }
}

load()