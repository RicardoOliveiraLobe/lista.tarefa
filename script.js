const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Você precisa escrever algo!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Cria o botão de excluir (o 'X' ou lixeira)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Código para o símbolo 'x'
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); // Salva sempre que adicionar
}

// Evento para marcar como feito ou excluir
listContainer.addEventListener(
  "click",
  function (e) {
    // Se clicou no texto (LI), marca/desmarca
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
    // Se clicou no X (SPAN), remove a tarefa
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// --- SISTEMA DE SALVAR NO NAVEGADOR (LocalStorage) ---

function saveData() {
  // Pega todo o HTML da lista e salva numa "caixa" chamada 'data'
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  // Recupera o HTML salvo e coloca de volta na lista
  listContainer.innerHTML = localStorage.getItem("data");
}

// Carrega as tarefas assim que abre o site
showTask();
