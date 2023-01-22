function opcoesCursos() {
    const listaCursos = document.getElementById("cursos");
    for (const course of courses) {
        const newCourse = document.createElement("option");
        newCourse.value = course.course;
        listaCursos.appendChild(newCourse);
    }

}

opcoesCursos()

function opcoesTurmas() {
    const listaTurmas = document.getElementById("lista-turmas");
    for (const classRoom of classes) {
        const newClassRoom = document.createElement("option");
        newClassRoom.value = classRoom.class;
        listaTurmas.appendChild(newClassRoom);
    }

}

opcoesTurmas();

function newStudentRegister() {
    const registerNewStudent = {
        student: document.getElementById("nome").value,
        course: document.getElementById("curso").value,
        className: document.getElementById("turma").value,
        nInterest: document.getElementById("parcelas").value
    }

    registerStudent(registerNewStudent.student, registerNewStudent.course, registerNewStudent.className, +registerNewStudent.nInterest);
}

function registerConfirm(student, course, classRoom, nInterest) {
    if (student && course && classRoom && nInterest) {
        const newStudent = document.getElementById("confirmacao");
        newStudent.innerHTML = `
    <div>
        <h2>Aluno Matriculado</h2>
        <img src="./img/Vector.png" alt="confirmacao">
    </div>
    <p><b>Nome:</b> ${student}</p>
    <p><b>Curso:</b> ${course}</p>
    <p><b>Turma:</b> ${classRoom}</p>
    <p><b>Parcelas:</b> ${nInterest}`;
    } else {
        // const newStudent = document.getElementById("confirmacao");
        // newStudent.innerHTML = `<h2 style="color: red">Insira todos os campos</h2>`
        swal("Erro", "Insira todos os campos para efetuar a matrícula", "error");
    }
}