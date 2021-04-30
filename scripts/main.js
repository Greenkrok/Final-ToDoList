// TODO list:

// Основные требования:
//     - Страница должна работать без перезагрузки;
//     - Элементы должны добавляться/удаляться динамически;
//     - При обновлении страницы данные должны сохраняться в local storage.

// Функционал:
//     - Основная страница должна разделяться на три «вкладки»:
//         1) Текущие задачи;
//         2) Выполненные задачи;
//         3) Удалённые задачи.
//     - При   переключении по «вкладкам» содержимое страницы должно меняться в зависимости от выбранной.
//     - У пользователя должна быть возможность добавить задание, нажав на кнопку «добавить задание».
//     - После нажатия пользователю будет доступна форма с тремя полями:
//         1) Обязательное поле «название задания»;
//         2) Не обязательное для заполнения поле «описание задания»;
//         3) Приоритет, состоящий как минимум из трех возможных (триальное, бессрочное, срочное). 
//     По умолчанию приоритет должен быть выставлен, как бессрочное задание
//     (Не обязательное условие, поле «приоритет» можно делать, когда все остальное уже выполнено).
//     - Создание нового задания можно подтвердить нажав на кнопку «добавить» или отменить, нажав на кнопку «отмена»;
//     - Новое задание можно вводить в попапе (модальное окно), либо в отдельной от основной таблице форме, 
// которая появляется после нажатия на кнопку «добавить задание» на усмотрение разработчика.
//     - Список задач должен формироваться в виде таблицы, каждая строка которой, представляет собой одну задачу. 
//     У каждой задачи должны быть элементы управления, в зависимости от выбранной вкладки:
//         1) Для «текущие задачи» - редактировать, выполнено и удалить;
//         2) Для «выполненные задачи» - восстановить и удалить; 
//         3) Для «удаленные задачи» - восстановить.

let todoLists = [];
let currentTasks = [];
let completedTasks = [];
let remoteTasks = [];
const $modal = document.querySelector('.modal');
const $btnAddTask = document.querySelector('.add-task');
const $cross = document.querySelector('.cross');
const $btnClose = document.querySelector('.btn.close');
const $btnOk = document.querySelector('.btn.ok');

// showModal
function showModal() {
    $modal.classList.add('open');
};

$btnAddTask.addEventListener('click', showModal);

// closeModal
const $inputs = document.querySelectorAll('input');

function closeModal() {
    $modal.classList.remove('open');
    function resetInputs() {        
        $inputs.forEach(function(input) {
            input.value = '';
          });
    };
    resetInputs();
};

$cross.addEventListener('click', closeModal);
$btnClose.addEventListener('click', closeModal);

// addTask
function addTask() {
    let $inputTaskName = document.querySelector('.task-name');
    let $inputTaskDescription = document.querySelector('.task-description');
    let $selectPriority = document.querySelector('.priority');

    if(!$inputTaskName.value) {
        return        
    };

    currentTasks.push($inputTaskName.value);
    localStorage.setItem('list-itm', JSON.stringify(currentTasks));
    $inputTaskName.value = '';
    $inputTaskDescription.value = '';
    $selectPriority.value = '1';
    getList(currentTasks);

    if(localStorage.getItem('list-itm')) {
        let ls = localStorage.getItem('list-itm');

        currentTasks = JSON.parse(ls);
        getList(currentTasks);
    };

    function getList(list) {
        let $list = document.querySelector('.list');

        $list.innerHTML = list.reduce((html, item) => {
            return (html +=
                `
                    <li class="list__task">
                        <input type="checkbox">
                        <p class="list__item">${item}</p>
                        <img src="./img/edit.png" class="edit">
                        <img src="./img/delete.png" class="delete">
                    </li>
                `)
        }, $list.innerHTML = '')
    };
};

$btnOk.addEventListener('click', addTask)
// $btnEdit.addEventListener('click', showModal)
