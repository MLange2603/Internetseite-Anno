function closediv() {

    $(".gallery_big").hide();
    
    var menu = document.getElementById("menu");
    if(menu) {
        if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } 
    }   

    var navigationrest = document.getElementById("navigationrest");    
    var navigation = document.getElementById('navigation');
    navigationrest.style.display = "flex";
    navigation.style.display = "flex";
};

function showgallery_and_scroll_to_element(number, hash) {
    $('#gallery_big_'+number).css("display","flex");
    location.hash = "#" + hash;
};

function showgallery_and_disable_navigation(number) {
    var navigationrest = document.getElementById("navigationrest");    
    var navigation = document.getElementById('navigation');
    navigationrest.style.display = "none";
    navigation.style.display = "none";
    
    $('#gallery_big_'+number).css("display","flex");
}

function load_content(contenturl) {
    load_content(contenturl, '');
}

function menu() {
    var menu = document.getElementById("menu");
    if(menu.style.visibility == "visible") {
        menu.style.visibility = "hidden";
            } else {
                menu.style.visibility = "visible";
            }
}

function load_content(contenturl, id) {
    const xhr = new XMLHttpRequest();
        const container = document.getElementsByClassName('maincontainer');
    
        xhr.onload = function() {
            if (this.status === 200) {
                maincontainer.innerHTML = xhr.responseText;
                if (id !== '') {
                    location.hash = "#" + id;
                }
            } else {
                console.warn('Seite konnte nicht geladen werden');
            }
        };
    
        xhr.open('get', contenturl + ".html");
        xhr.send();

        closediv

    if(contenturl) {
        if(contenturl == 'weitereinfos') {
            document.title = 'Weitere Infos über die Spieleserie';
            favicon.setAttribute("href", "img/index/icons/weitereinfos.ico");
        }
        if(contenturl == 'boats') {
            document.title = 'Schiffe in ANNO';
            favicon.setAttribute("href", "img/index/icons/boats.ico");
        }
        if(contenturl == 'buildings') {
            document.title = 'Besondere Gebäude in ANNO';
            favicon.setAttribute("href", "img/index/icons/buildings.ico");
        }
        if(contenturl == 'gallery') {
            document.title = 'Screenshots aus den Spielen';
            favicon.setAttribute("href", "img/index/icons/gallery.ico");
        }
        if(contenturl == 'home') {
            document.title = 'ANNO - Die Spieleserie mit der Quersumme 9';
            favicon.setAttribute("href", "img/index/icons/home.ico");
        };
    };
};

function scrolling(hash) {
    location.hash = "#" + hash
};

function loadingscreen() {
    var loading = document.getElementById("loadingscreencontainer");
    loading.style.display = "none"

    var HTML = document.getElementById("HTML");
    HTML.style.overflow = "auto"
};

function scrollHeader() {      
    var imgWidth = $(".home_img_parallax.Bildervorschau_Bild").outerWidth();
    var scrollContainer = (".home_Bildervorschau");
    var scrollstatus = $(scrollContainer).scrollLeft();
    $(scrollContainer).animate({ scrollLeft: $(scrollContainer).scrollLeft() + imgWidth }, 2000);
    var imgWidthtimessix = 5 * imgWidth;
    var backtotheroots = -6 * imgWidth
    if (imgWidthtimessix < scrollstatus) {
        $(scrollContainer).animate({ scrollLeft: $(scrollContainer).scrollLeft() + backtotheroots }, 2500) 
    }
};


function scrollLogo() {      
    var imgHeight = $(".Bildervorschau_Logo").outerHeight();
    var scrollContainer = (".Bildervorschau_Logo_container");
    var scrollstatus = $(scrollContainer).scrollTop();
    $(scrollContainer).animate({ scrollTop: $(scrollContainer).scrollTop() + imgHeight }, 2000);
    var imgHeighttimessix = 5 * imgHeight;
    var backtotheroots = -6 * imgHeight
    if (imgHeighttimessix < scrollstatus) {
        $(scrollContainer).animate({ scrollTop: $(scrollContainer).scrollTop() + backtotheroots }, 2500)
    }
};

function scrollgalleryBig( $source, direction ) {
    var $galleryContainer = $source.parent(".gallery_big");
    var imgWidth = $galleryContainer.find(".img_big").first().outerWidth();
    var scrollAmount = $source.hasClass('scrollLeft') ? -imgWidth : imgWidth;
    var $scrollContatiner = $galleryContainer.find(".gallery_big_container");
    $scrollContatiner.animate({ scrollLeft: $scrollContatiner.scrollLeft() + scrollAmount });
};

function scolltohash(hash) {
    location.hash = "#" + hash
}
