let tareas = [];

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputId = document.querySelector("#id");
    const inputText = document.querySelector("#text");

    if (inputId.value) {
        tareas.forEach((tarea) => {
            if (tarea.id == inputId.value) {
                tarea.text = inputText.value;
            }
        });
    } else {
        tareas.push({
            id: Date.now(),
            text: inputText.value,
            complete: false,
        });
    }

    localStorage.setItem("tareas", JSON.stringify(tareas));

    inputText.value = "";
    inputId.value = "";
    renderTareas();
});

const renderTareas = () => {
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    tareas.forEach(
        (tarea) =>
        (tbody.innerHTML += `
        <tr>
            <td class="${tarea.complete ? "complete" : ""}">${tarea.text}</td>
            <td>
            <button data-id="${tarea.id}" class="btn-completar">Completar</button>
            <button onclick="editarTarea(${tarea.id})">Editar</button>
            <button onclick="borrarTarea(${tarea.id})">Borrar</button>
            </td>
        </tr>
    `)
    );
};

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-completar")) {
        completarTarea(e.target.dataset.id);
    }
});

const completarTarea = (id) => {
    tareas.forEach((tarea) => {
        if (tarea.id == id) {
            tarea.complete = !tarea.complete;
        }
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));

    renderTareas();
};

const editarTarea = (id) => {
    const tarea = tareas.find((tarea) => tarea.id == id);
    if (tarea) {
        const inputId = document.querySelector("#id");
        inputId.value = tarea.id;
        const inputText = document.querySelector("#text");
        inputText.value = tarea.text;
    }
};

const borrarTarea = (id) => {
    if (confirm("¿Esta seguro?")) {
        const filtradas = tareas.filter((tarea) => tarea.id != id);
        localStorage.setItem("tareas", JSON.stringify(filtradas));
        renderTareas();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    renderTareas();
});