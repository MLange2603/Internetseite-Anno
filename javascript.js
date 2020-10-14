function show() {
    document.getElementById('menu').style.visibility = 'visible';
};

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
};
