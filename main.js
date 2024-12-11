// Seleciona o formulário e a lista de tarefas
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('tasks');
const clearTasksBtn = document.getElementById('clear-tasks');

// Adiciona um evento de submit ao formulário
taskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    const taskName = taskInput.value.trim(); // Pega o valor do input e remove espaços extras

    if (taskName !== '') {
        addTask(taskName);
        taskInput.value = ''; // Limpa o campo de texto após adicionar a tarefa
    }
});

// Função para adicionar uma nova tarefa à lista
function addTask(name) {
    const li = document.createElement('li');

    // Cria um span para o texto da tarefa
    const taskSpan = document.createElement('span');
    taskSpan.textContent = name;
    taskSpan.classList.add('task-text');

    // Botão para apagar a tarefa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Apagar';
    deleteBtn.classList.add('delete-btn');

    // Evento para apagar a tarefa individual
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Adiciona evento de clique para marcar/desmarcar como concluída
    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
    });

    // Adiciona o texto e o botão ao item da lista
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Adiciona o item à lista
    taskList.appendChild(li);
}


// Evento para apagar todas as tarefas
clearTasksBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
});
