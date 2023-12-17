const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const searchMoreBtn=document.getElementById("search-more-btn");
let keyword="";
let page=1;
const key="mKtuijjIz7sk787_3uoo0UHDaKfeMpiza2a_9enLB7Y"
async function searchImages()
{
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/photos?page=${page}&query=${keyword}&client_id=${key}`
}