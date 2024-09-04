(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');  // Changed from querySelectorAll to querySelector
    let equal = document.querySelector('.btn-equal');  // Changed from querySelectorAll to querySelector

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const value = e.target.dataset.num;
            console.log(value);
            screen.value += value;
            console.log(screen.value);
        });
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = ''; 
        } else {
            try {
                console.log(screen.value);
                let answer = eval(screen.value);
                console.log(answer);
                screen.value = answer;
            } catch (error) {
                screen.value = 'Error';
                console.log(error);
            }
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = '';
    });
})();
