export function addTask() {
    let $btnOk = document.querySelector('.btn.ok');
    let mass = [];

    if(localStorage.getItem('list-itm')) {
        let ls = localStorage.getItem('list-itm');

        mass = JSON.parse(ls);
        getList(mass);
    }

    function getList(list) {
        let $list = document.querySelector('.list');

        $list.innerHTML = list.reduce((html, item) => {
            return (html += `<li class="list__task">
                                <input type="checkbox">
                                <p class="list__item">${item}</p>
                                <img src="./img/edit.png">
                                <img src="./img/delete.png">
                            </li>`);
        }, $list.innerHTML = '');
    }

    $btnOk.addEventListener('click', function() {
        let $input = document.querySelector('.task-name');
        mass.push($input.value);
        localStorage.setItem('list-itm', JSON.stringify(mass));
        $input.value = '';
        getList(mass);
    });
};
