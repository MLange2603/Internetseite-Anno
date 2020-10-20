
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

function gallery_big_1800() {
    var gallery = document.getElementById("gallery_big_1800");
    if(gallery) {
        if(gallery.style.visibility == "hidden") {
            gallery.style.visibility = "visible";
            } else {
                gallery.style.visibility = "hidden";
            }
        }       
    };

function gallery_big_2205() {
    var gallery = document.getElementById("gallery_big_2205");
    if(gallery) {
        if(gallery.style.visibility == "hidden") {
            gallery.style.visibility = "visible";
            } else {
                gallery.style.visibility = "hidden";
            }
        }       
    };

function gallery_big_2070() {
    var gallery = document.getElementById("gallery_big_2070");
    if(gallery) {
        if(gallery.style.visibility == "hidden") {
            gallery.style.visibility = "visible";
            } else {
                gallery.style.visibility = "hidden";
            }
        }       
    };

function gallery_big_1404() {
    var gallery = document.getElementById("gallery_big_1404");
    if(gallery) {
        if(gallery.style.visibility == "hidden") {
            gallery.style.visibility = "visible";
            } else {
                gallery.style.visibility = "hidden";
            }
        }       
    };

function gallery_big_1701() {
    var gallery = document.getElementById("gallery_big_1701");
    if(gallery) {
        if(gallery.style.visibility == "hidden") {
            gallery.style.visibility = "visible";
            } else {
                gallery.style.visibility = "hidden";
            }
        }       
    };

function Home() {

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
};

function weitereinfos() {

    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', 'weitereinfos.html');
        xhr.send();

    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }   
};

function buildings() {

    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', 'buildings.html');
        xhr.send();

    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }   
};

function gallery() {

    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', 'gallery.html');
        xhr.send();

    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }   
};

function boats() {

    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', 'boats.html');
        xhr.send();
    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }   
};