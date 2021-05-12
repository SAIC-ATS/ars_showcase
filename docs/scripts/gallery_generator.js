loadContent();

function loadContent() {
    const title_text = $("title").text();
    const year = title_text.substring(title_text.length-4, title_text.length)

    const req = new XMLHttpRequest();
    req.open("GET", '../scripts/image_info.json', true);
    req.send();
    req.onload = parseImageInfo;

    function parseImageInfo() {
        const data = JSON.parse(req.responseText);
        for(const d of data) {
            if(d.year == year){
                let newGridItem = `
                <div class="grid-item">
                  <a href="../images/${d.year}/fullsize/${d.filename}" data-lightbox="${d.year}" data-title="${d.caption}" data-alt="${d.alt_text}">
                    <img src="../images/${d.year}/thumbs/${d.filename}" alt="${d.alt_text}" class="grid-img">
                  </a>
                </div>`
                $('#grid-container').append(newGridItem);
            }
        }
    }
}