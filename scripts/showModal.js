export function showModal() {
    let $addTask = document.querySelector('.add-task');
    let $modal = document.querySelector('.modal');
    $addTask.addEventListener('click', function() {
        $modal.classList.add('open');
})
}
