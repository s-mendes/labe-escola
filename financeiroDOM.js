const consultaFinanceiro = document.getElementById("consulta-financeiro");
opcoesCursos = document.createElement("div");
opcoesCursos.setAttribute("id", "opcoes-curso");
const cursosFinanceiro = [{ nome: "HTML e CSS", inserido: false }
    , { nome: "JavaScript", inserido: false }
    , { nome: "APIs REST", inserido: false }
];


document.getElementById("botao-add-curso").addEventListener("click", function () {
    document.getElementById("botao-add-curso").setAttribute("id", "")
    const addCurso = document.getElementById("addCurso");
    opcoesCursos.innerHTML = "";
    for (curso of cursosFinanceiro) {
        for (cursoInserido of addCurso.children) {
            if (cursoInserido.outerHTML.includes(curso.nome)) {
                curso.inserido = true;
            }
        }
        if (curso.inserido == false) {

            nomeCurso = document.createElement("p");
            nomeCurso.innerHTML = `<img src="./img/add.png" alt="add" id="add">  ${curso.nome}`
            nomeCurso.setAttribute("onclick", "inserirCurso(this)");
            opcoesCursos.appendChild(nomeCurso);
            consultaFinanceiro.appendChild(opcoesCursos);
        }
    }


})

function reapresentarCursos() {
    {
        const addCurso = document.getElementById("addCurso");
        opcoesCursos.innerHTML = "";
        for (curso of cursosFinanceiro) {
            for (cursoInserido of addCurso.children) {
                if (cursoInserido.outerHTML.includes(curso.nome)) {
                    curso.inserido = true;
                }
            }
            if (curso.inserido == false) {
    
                nomeCurso = document.createElement("p");
                nomeCurso.innerHTML = `<img src="./img/add.png" alt="add" id="add">  ${curso.nome}`
                nomeCurso.setAttribute("onclick", "inserirCurso(this)");
                opcoesCursos.appendChild(nomeCurso);
                consultaFinanceiro.appendChild(opcoesCursos);
            }
        }
    
    
    }
}

function inserirCurso(curso) {

    for (cursoDisponiveis of cursosFinanceiro) {
        if (curso.outerHTML.includes(cursoDisponiveis.nome)) {
            const cursoAdicionado = document.createElement("span");
            cursoAdicionado.setAttribute("onclick", "excluirCurso(this)");
            cursoAdicionado.innerHTML = `${cursoDisponiveis.nome} <img src="./img/excluir.png" alt="excluir">`;
            addCurso.appendChild(cursoAdicionado);
            shopCartAdd(cursoDisponiveis.nome);
        }

    }
    curso.remove();

}

function excluirCurso(curso) {

    for (cursoDisponiveis of cursosFinanceiro) {
        if (curso.outerHTML.includes(cursoDisponiveis.nome)) {
            cursoDisponiveis.inserido = false;
            shopCartRemove(cursoDisponiveis.nome);
        }

    }
    curso.remove();
    reapresentarCursos()
}

function calculoFinanceiro (event) {
    event.preventDefault();
    const resultadoFinanceiro = document.getElementById('resultado-financeiro');
    resultadoFinanceiro.innerHTML = "";
    const parcelas = document.getElementById("parcelas").value * 1;
    addElement(resultadoFinanceiro, "p", courseInterest(parcelas, shopCart))
}

function relatorioAluno(event) {
    event.preventDefault();
    const relatorioAluno = document.getElementById('relatorio-aluno');
    relatorioAluno.innerHTML = "";
    const aluno = searchStudent(document.getElementById("nome").value);
    const relatorio = document.createElement("div");

    if (document.getElementById("nome").value === ``) {
        relatorio.innerHTML = "Insira o nome do aluno no campo acima";
        relatorioAluno.appendChild(relatorio);
        return
    }

    relatorio.innerHTML = `
    <p><b>Nome:</b> ${aluno.student}</p>
    <p><b>Turma:</b> ${aluno.class}</p>
    <p><b>Curso:</b> ${aluno.course}</p>
    <p><b>Valor Total:</b> R$${aluno.price}</p>
    <p><b>Valor Parcela:</b> R$${aluno.price/aluno.nInterest}</p>
    <p><b>Nº de Parcelas:</b> ${aluno.nInterest}</p>
    `;

    relatorioAluno.appendChild(relatorio);
}