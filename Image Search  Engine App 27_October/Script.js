const accesskey = "sw40XioQkvRsKzLsRa7Mo3lUikaGHXmrXrzFnR-_ANU";

const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMore = document.getElementById("Show-more");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = SearchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=15`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    SearchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const imagetag = document.createElement("img");
    imagetag.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";

    imagelink.appendChild(imagetag);
    SearchResult.appendChild(imagelink);
  });
  ShowMore.style.display = "block";
}

SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

ShowMore.addEventListener("click", function () {
  page++;
  searchImages();
});
