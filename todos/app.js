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
    console.log(requires);
}

search.addEventListener('keyup', () => {
    const requires = search.value.trim();
    filtertodos(requires);
})