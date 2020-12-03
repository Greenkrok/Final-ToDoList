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
//         2) Для «выполненные задачи» - редактировать и удалить; 
//         3) Для «удаленные задачи» - восстановить.

import {showModal} from "./showModal.js";
import {closeModal} from "./closeModal.js";

showModal();
closeModal();
