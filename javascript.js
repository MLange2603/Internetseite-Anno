
setTimeout(function Home() {

    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', 'home.html');
        xhr.send();
}, 0);

function menu() {
    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";
            } else {
                menu.style.visibility = "hidden";
            }
    }       
};

function closediv() {
    var gallery = document.getElementById("gallery_big_1800");
    if(gallery) {
        if(gallery.style.visibility == "visible") {
            gallery.style.visibility = "hidden";
            }
        }
    var gallery1 = document.getElementById("gallery_big_2205");
    if(gallery1) {
        if(gallery1.style.visibility == "visible") {
            gallery1.style.visibility = "hidden";
            }
        }
    var gallery2 = document.getElementById("gallery_big_2070");
    if(gallery2) {
        if(gallery2.style.visibility == "visible") {
            gallery2.style.visibility = "hidden";
            }
        }
    var gallery3 = document.getElementById("gallery_big_1404");
    if(gallery3) {
        if(gallery3.style.visibility == "visible") {
            gallery3.style.visibility = "hidden";
            }
        }
    var gallery4 = document.getElementById("gallery_big_1701");
    if(gallery4) {
        if(gallery4.style.visibility == "visible") {
            gallery4.style.visibility = "hidden";
            }
        }
    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }   
};

function showgallery_and_scroll_to_element(number, hash) {
    var gallery = document.getElementById("gallery_big_"+ number);
    if(gallery) {
        if(gallery.style.visibility == "hidden") {
            gallery.style.visibility = "visible";
            } else {
                gallery.style.visibility = "hidden";
            }
        }
    location.hash = "#" + hash;
};

function load_content(contenturl) {
    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', contenturl + ".html");
        xhr.send();
    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }
};

function load_content_and_scroll_to_hash(contenturl, hash) {
    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', contenturl + ".html");
        xhr.send();
    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }
    location.hash = '#' + hash 
};

$(".scrollLeft").on("click", function(e) {
    $(document).scrollLeft($(this).parent().next().offset().top);
    // $(this).parent().next() // this is the next div container.
    return false; // prevent anchor
});


function scrolling(hash) {
    location.hash = hash
}