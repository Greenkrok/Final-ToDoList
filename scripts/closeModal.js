export function closeModal() {
    let $close = document.querySelector('.close');
    let $modal = document.querySelector('.modal');
    let $inputs = document.querySelectorAll('input');
    let $btnClose = document.querySelector('.btn.close');

    function resetInputs() {        
        $inputs.forEach(function(input) {
            input.value = '';
          });
    };

    $close.addEventListener('click', function() {
        $modal.classList.remove('open');
        resetInputs();
    });

    $btnClose.addEventListener('click', function() {
        $modal.classList.remove('open');
        resetInputs();
    });
};
