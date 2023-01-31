const courses = [];
courses.push(new Course("HTML e CSS", "Curso foca em aprender HTML e CSS", "1 mês", 500));
courses.push(new Course("JavaScript", "Curso para aprender algítimos em JavaScript", "2 meses", 900));
courses.push(new Course("APIs REST", "Curso para aprender interface de programação API REST", "6 meses", 2000));

const classes = [];
classes.push(new Class("Hipática", courses[1].course, "30/11/2022", "30/01/2023", 150, "Noturno", false));
classes.push(new Class("Sibyla", courses[1].course, "30/10/2022", "30/12/2022", 200, "Integral", false));
classes.push(new Class("Curie", courses[0].course, "15/09/2022", "15/10/2022", 180, "Integral", true));
classes.push(new Class("Zhenyi", courses[0].course, "01/11/2022", "01/01/2023", 80, "Integral", false));
classes.push(new Class("Clarke", courses[0].course, "04/07/2022", "04/09/2022", 200, "Noturno", true));
classes.push(new Class("Blackwell", courses[2].course, "20/03/2022", "20/06/2022", 100, "Integral", true));
classes.push(new Class("Elion", courses[2].course, "12/01/2022", "12/06/2022", 200, "Noturno", true));
classes.push(new Class("Burnell", courses[2].course, "18/10/2022", "18/04/2023", 90, "Integral", false));

const students = [];
students.push(new Student("Chris Evans", classes[0].class, courses[1].course, courses[1].price, 9, false, 1));
students.push(new Student("Halle Berry", classes[7].class, courses[2].course, courses[2].price, 4, false, 1));
students.push(new Student("Lashana Lynch", classes[3].class, courses[0].course, courses[0].price, 4, false, 1));

// Função parcelar curso

let shopCart = [];

const courseInterest = (nInterest, shopCart) => {

    let discount = 0;
    let totalPrice = 0;

    if (shopCart.length === 0) {
        return `Nenhum curso foi selecionado`
    }

    for (const item of shopCart) {
        totalPrice += item.price
    }

    switch (shopCart.length) {
        case 3:
            discount = 0.85;
            break;
        case 2:
            discount = 0.90;
            break;
        default:
            discount = 1;
            break;
    }

    totalPrice *= discount;

    if (nInterest <= 2) {
        totalPrice *= 0.8
        return `O curso ficou no total de R$ ${totalPrice.toFixed(2)}. Em ${nInterest}x de ${(totalPrice / nInterest).toFixed(2)}. Foi concedido um desconto de 20%`
    } else {
        return `O curso ficou no total de R$ ${totalPrice}. Em ${nInterest}x de ${(totalPrice / nInterest).toFixed(2)}.`
    }
};

// const queryCourse = Number(prompt("Digite o número de acordo com o curso desejado:\n 1- HTML\n2-Javascript\n3-APIs REST"))-1;
// const queryInterest = Number(prompt("Quantas vezes você deseja parcelar o curso?"));
// courseInterest(3, shopCart);

// Função para buscar dados do curso

const buscarCurso = (nomeCurso) => {

    let curso = courses.find(curso => curso.course.toLowerCase() === nomeCurso.toLowerCase());

    return curso;
}

// console.log(buscarCurso(prompt("Digite o nome do curso")));

// Função para buscar turma

const buscarTurma = () => {

    const nomeTurma = document.getElementById("buscar-turma");

    let turmaPesquisada = classes.filter((classes) => classes.class.toLowerCase().includes(nomeTurma.value.toLowerCase()));

    console.log(turmaPesquisada);

    if (turmaPesquisada.length > 0) {
        if (document.getElementById("error")) {
            document.getElementById("error").remove();
        }
        turmas.innerHTML = "";
        const turma = document.createElement("div");
        addElement(turma, "h3", turmaPesquisada[0].class);
        addDescription("Curso: ", turmaPesquisada[0].course, turma);
        addDescription("Início: ", turmaPesquisada[0].start, turma);
        addDescription("Término: ", turmaPesquisada[0].end, turma);
        addDescription("Alunos: ", turmaPesquisada[0].numberOfStudents, turma);
        addDescription("Período: ", turmaPesquisada[0].period, turma);
        addDescription("Concluído: ", turmaPesquisada[0].concluded === true ? "Sim" : "Não", turma);
        turmas.appendChild(turma);
        nomeTurma.value = "";

    } else {
        turmas.innerHTML = "";
        nomeTurma.value = "";
        const busca = document.getElementById("busca")
        const rendError = document.createElement("p");
        if (document.getElementById("error")) {
            document.getElementById("error").remove();
        }
        rendError.id = "error"
        rendError.innerHTML = "Turma não encontrada";

        busca.insertAdjacentElement('afterend', rendError);

        renderizarTurmas();
    }

}

// console.log(buscarTurma(prompt("Digite o nome da turma")))

// Função para buscar aluno

const searchStudent = (studentName) => {
    // for (let i = 0; i < students.length; i++) {
    //     if (students[i].student === studentName) {
    //         return students[i]
    //     }
    // }
    let student = students.find(students => students.student.toLowerCase().includes(studentName.toLowerCase()));

    return student === undefined ? `Aluno não encontrado` : student
}

// console.log(searchStudent(prompt(`Digite o nome do aluno`)));

// Função para matricular estudantes

const registerStudent = (studentName, course, className, nInterest) => {
    let discount = nInterest > 0 && nInterest <= 2;
    let coursePrice = buscarCurso(course).price
    let interestValue;

    discount ? interestValue = coursePrice * 0.8 / nInterest : interestValue = coursePrice / nInterest

    let newStudent = {
        student: studentName,
        class: className,
        course: course,
        price: coursePrice,
        nInterest: nInterest,
        discount: discount,
        interest: interestValue
    }

    students.push(newStudent)
    // console.log(`Novo aluno matriculado:\n`)
    // console.log(students[students.length - 1])

    registerConfirm(newStudent.student, newStudent.course, newStudent.class, newStudent.nInterest)
}

// registerStudent("Samuel", "JavaScript", "Ozemela", 2)

// Função Carrinho de Compras

const shopCartAdd = (courseName) => {
    courseValue = buscarCurso(courseName)
    shopCart.push(courseValue)
    return shopCart
}

const shopCartRemove = (courseName) => {
    const index = shopCart.findIndex(course => course.course.toLowerCase() === courseName.toLowerCase())
    shopCart.splice(index, 1)
    return shopCart
}

// shopCartAdd("JavaScript")
// shopCartAdd("HTML e CSS")
// console.log(shopCart);

// Função para buscar alunos

const studentRecord = (studentName) => {
    return students.filter((valor) => valor.student === studentName)
}


// console.log(students);
// console.log(studentRecord("Lashana Lynch"));

function addElement(parent, elementType, text) {
    const element = document.createElement(elementType);
    if (text !== "" && text !== undefined && text !== null) {
        element.innerText = text;
    }
    parent.appendChild(element);
}

