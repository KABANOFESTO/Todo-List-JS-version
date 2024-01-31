const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = todo => {

    const html = ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li> 
   `;

    list.innerHTML += html;

}

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todos = addForm.add.value.trim();

    if (todos.length) {
        generateTemplate(todos);
        addForm.reset();
    } else {
        alert('please add some letters');
    }

});

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filtertodos = requires => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(requires))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(requires))
        .forEach((todo) => todo.classList.remove('filtered'));
}
search.addEventListener('keyup', () => {
    const requires = search.value.trim().toLowerCase();
    filtertodos(requires);
});