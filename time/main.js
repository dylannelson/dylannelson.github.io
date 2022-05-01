window.onload = function () {
    
    // Load the correct LEFT Navbar
    pageKeys = Object.keys(pages);
    var nav_list = document.getElementById("leftBar");
    for (i = 0; i < pageKeys.length; i++) {
        curr_elem = pageKeys[i];
        // Create list element
        curr_li = document.createElement('li');
        curr_li.id = 'page_'+String(curr_elem);
        // Create link element
        curr_a = document.createElement('a');
        curr_a.innerHTML = pages[curr_elem]['page_name'];
        curr_a.href = pages[curr_elem]['link']
        // Combine+Add Elements
        curr_li.appendChild(curr_a)
        nav_list.appendChild(curr_li);
    }

    // set the current page
    // Relies on Title element to share the current page's id
    // whacky but works ok 
    page_name = document.getElementsByTagName('title')[0].id
    page_id = 'page_' + page_name;
    console.log(page_id);
    curr_page = document.getElementById(page_id);
    curr_page.classList.add('CurrentPage');
    curr_page.innerHTML = pages[page_name]['page_name'];
};