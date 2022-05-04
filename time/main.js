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
        curr_a.href = pages[curr_elem]['link'];
        curr_a.classList.add('mainA');
        // Combine+Add Elements
        curr_li.appendChild(curr_a);
        nav_list.appendChild(curr_li);
    }
    // make certain links open in a seperate tab
    // currently github only
    
    curr_elem = document.getElementById("page_github").querySelector("a");
    curr_elem.setAttribute('target', '_blank');
    
    // set the current page
    // Relies on Title element to share the current page's id
    // whacky but works ok 
    page_name = document.getElementsByTagName('title')[0].id;
    page_id = 'page_' + page_name;
    console.log(page_id);
    curr_page = document.getElementById(page_id);
    curr_page.querySelector("a").classList.add('CurrentPage');

    // load sub pages (if they exist)
    if (pages[page_name]['total_subpages']>0){
        sub_pages = pages[page_name]['subpage_names'];
        sub_page_links = pages[page_name]['subpage_links'];
        sublist = document.createElement('ul');
        sublist.id = 'sublist'
        for (i = 0; i < sub_pages.length; i++) {
            curr_subpage = sub_pages[i];
            // Create list element
            curr_li = document.createElement('li');
            curr_li.id = `page_${String(page_name)}_${String(sub_page_links)}`;
            // Create link element
            curr_a = document.createElement('a');
            curr_a.innerHTML = `- ${String(curr_subpage)}`;
            curr_a.href = `/time/${String(sub_page_links)}`
            // Combine+Add Elements
            curr_li.appendChild(curr_a);
            sublist.appendChild(curr_li);
        }
        document.getElementById(page_id).appendChild(sublist);
    }
    
};