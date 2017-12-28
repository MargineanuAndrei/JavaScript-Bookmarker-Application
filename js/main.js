//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save data
function saveBookmark(e) {

    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: sitename,
        url: siteUrl
    }

    //Local Storage 
    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }


    e.preventDefault();
}