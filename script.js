document.addEventListener('DOMContentLoaded', () => {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const changeBgColorBtn = document.getElementById('change-bg-color');
    
    let fontSize = 16;

    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = fontSize + 'px';
    });

    decreaseFontBtn.addEventListener('click', () => {
        fontSize = Math.max(10, fontSize - 2);
        document.body.style.fontSize = fontSize + 'px';
    });

    changeBgColorBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
    });
});
