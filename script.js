/* const course = ["HTML e CSS", "JavaScript", "APIs REST"];
const classes = ["HC1", "JS1", "JS2", "REST1", "REST2"];
const students = ["Marcos Socrates Pontes", "Ruan Helenice da Silva Pinto", "Ítalo Souza Peireira", "Samuel Mendes"]; */

// Cursos oferecidos pela escola

let courses = [
    {
        course: "HTML e CSS",
        description: "Curso focado em aprender HTML e CSS",
        duration: "1 meses",
        price: 500
    },
    {
        course: "JavaScript",
        description: "Curso para aprender algorítimos em JavaScript",
        duration: "2 meses",
        price: 900
    },
    {
        course: "APIs REST",
        description: "Curso para aprender interface de programação API REST",
        duration: "6 meses",
        price: 2000
    }
]

// Turmas do curso

let classes = [
    {
        class: "Hipática",
        course: courses[1].course,
        start: "30/11/2022",
        end: "30/01/2023",
        numberOfStudents: 150,
        period: "Noturno",
        concluded: false
    },
    {
        class: "Sibyla",
        course: courses[1].course,
        start: "30/10/2022",
        end: "30/12/2022",
        numberOfStudents: 200,
        period: "Integral",
        concluded: false
    },
    {
        class: "Curie",
        course: courses[0].course,
        start: "15/09/2022",
        end: "15/10/2022",
        numberOfStudents: 180,
        period: "Noturno",
        concluded: true
    },
    {
        class: "Zhenyi",
        course: courses[0].course,
        start: "01/11/2022",
        end: "01/01/2023",
        numberOfStudents: 80,
        period: "Integral",
        concluded: false
    },
    {
        class: "Clarke",
        course: courses[0].course,
        start: "04/07/2022",
        end: "04/09/2022",
        numberOfStudents: 200,
        period: "Noturno",
        concluded: true
    },
    {
        class: "Blackwell",
        course: courses[2].course,
        start: "20/03/2022",
        end: "20/06/2022",
        numberOfStudents: 100,
        period: "Integral",
        concluded: true
    },
    {
        class: "Elion",
        course: courses[2].course,
        start: "12/01/2022",
        end: "12/06/2022",
        numberOfStudents: 200,
        period: "Norturno",
        concluded: true
    },
    {
        class: "Burnell",
        course: courses[2].course,
        start: "18/10/2022",
        end: "18/04/2023",
        numberOfStudents: 90,
        period: "Integral",
        concluded: false
    }
]

// Estudantes Matriculados

let students = [
    {
        student: "Chris Evans",
        class: classes[0].class,
        course: courses[1].course,
        price: courses[1].price,
        nInterest: 9,
        discount: false,
        interest: 1
    },
    {
        student: "Halle Berry",
        class: classes[7].class,
        course: courses[2].course,
        price: courses[2].price,
        nInterest: 4,
        discount: false,
        interest: 1
    },
    {
        student: "Lashana Lynch",
        class: classes[3].class,
        course: courses[0].course,
        price: courses[0].price,
        nInterest: 4,
        discount: false,
        interest: 1
    }
]

// const courseInterest = (nInterest) => {
//     if (nInterest <= 2) {
//         let totalPrice = courses[queryCourse].price * 0.8
//         console.log(`O curso ${courses[queryCourse].course} ficou no total de R$ ${totalPrice.toFixed(2)}. Em ${nInterest}x de ${(totalPrice/nInterest).toFixed(2)}. Foi concedido um desconto de 20%`)
//     } else {
//         console.log(`O curso ${courses[queryCourse].course} ficou no total de R$ ${courses[queryCourse].price.toFixed(2)}. Em ${nInterest}x de ${(courses[queryCourse].price/nInterest).toFixed(2)}.`)
//     }
// };

// const queryCourse = Number(prompt("Digite o número de acordo com o curso desejado:\n 1- HTML\n2-Javascript\n3-APIs REST"))-1;
// const queryInterest = Number(prompt("Quantas vezes você deseja parcelar o curso?"));
// courseInterest(queryInterest);

// Função para buscar dados do curso

const buscarCurso = (nomeCurso) => {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].course === nomeCurso) {
            return courses[i];
        }
    }
    return `Curso não encontrado`
}

// console.log(buscarCurso(prompt("Digite o nome do curso")));

// Função para buscar turma

const buscarTurma = (nomeTurma) => {
    for (let i = 0; i < classes.length; i++) {
        if (classes[i].class === nomeTurma) {
            return classes[i];
        }
    }
    return `Turma não encontrada`
}

// buscarTurma(prompt("Digite o nome da turma"))

// Função para buscar aluno

const searchStudent = (studentName) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].student === studentName) {
            return students[i]
        } 
    }
    return `Aluno não encontrado`
}

// console.log(searchStudent(prompt(`Digite o nome do aluno`)));

// Função para matricular estudantes

const registerStudent = (studentName, course, className, nInterest) => {
    let discount = nInterest > 0 && nInterest <= 2;
    let coursePrice = buscarCurso(course).price
    let interestValue;

    discount ? interestValue = coursePrice*0.8/nInterest : interestValue = coursePrice/nInterest
    
    let newStudent = {
        student: studentName,
        class: className,
        course: course,
        price: coursePrice,
        nInrerest: nInterest,
        discount: discount,
        interest: interestValue
    }

    students.push(newStudent)
    console.log(`Novo aluno matriculado:\n`)
    console.log(students[students.length -1])
}

registerStudent("Samuel", "JavaScript", "Ozemela", 2)

// Função para parcelar o curso


