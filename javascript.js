var button = document.querySelector('.btn');

button.addEventListener('click',function() {
    let main = document.querySelector('.button');
    let el = document.createElement('span');

    main.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 800);
})