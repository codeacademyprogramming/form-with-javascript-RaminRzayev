let input = document.querySelectorAll('#inpt');
let button = document.querySelector('.mybtn');
let error = document.querySelectorAll('.errortxt');


button.onclick = function () {
    if (input.value) {
        error.classList.add('.d-none');
        input.value = '';

    }
    else {
        error.classList.remove('.d-none');
    }
}