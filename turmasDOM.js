function addDescription(title, result, parent) {
    const description = document.createElement("div");
    addElement(description, "b", title);
    addElement(description, "span", result);
    parent.appendChild(description);
}

const turmas = document.getElementById("turmas");

function renderizarTurmas() {
    for (const className of classes) {
        const turma = document.createElement("div");
        addElement(turma, "h3", className.class);
        addDescription("Curso: ", className.course, turma);
        addDescription("Início: ", className.start, turma);
        addDescription("Término: ", className.end, turma);
        addDescription("Alunos: ", className.numberOfStudents, turma);
        addDescription("Período: ", className.period, turma);
        addDescription("Concluído: ", className.concluded ? "Sim" : "Não", turma);
        turmas.appendChild(turma);
    }
}

renderizarTurmas()