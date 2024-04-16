const tbody = document.querySelector("tbody");
const descItem = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const category = document.querySelector("#category");
const type = document.querySelector("#type");
const btnNew = document.querySelector("#btnNew");

const incomes = document.querySelector(".incomes");
const expenses = document.querySelector(".expenses");
const total = document.querySelector(".total");

let items;

const getItensBD = () => JSON.parse(localStorage.getItem("db_items")) ?? [];
const setItensBD = () => localStorage.setItem("db_items", JSON.stringify(items));

items = getItensBD();

btnNew.onclick = () => {
  if (descItem.value === "" || amount.value === "" || type.value === "") {
    return alert("Preencha todos os campos!");
  }

  items.push({
    desc: descItem.value,
    amount: Math.abs(amount.value).toFixed(2),
    type: type.value,
    category: category.value,
  });

  setItensBD();

  loadItens(items);

  descItem.value = "";
  amount.value = "";
};

function deleteItem(index) {
  items.splice(index, 1);
  setItensBD();
  loadItens(items);
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  /* ERRO na parte de operador ternário da categoria */
  tr.innerHTML = `
    <td>${item.desc}</td>
    <td>R$ ${item.amount}</td>
    <td class="columnCategory">${
      item.category === "Gastos/Receitas Fixas"
        ? '<i class="bx bxs-lock"></i>'
        : '<i class="bx bxs-shopping-bags"></i>'
    }</td>
    <td class="columnType">${
      item.type === "Entrada"
        ? '<i class="bx bxs-chevron-up-circle"></i>'
        : '<i class="bx bxs-chevron-down-circle"></i>'
    }</td>
    <td class="columnAction">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;

  tbody.appendChild(tr);
}

function loadItens(items) {
  // items = getItensBD(); //NÃO PODE SER POR AQUI pq os itens seriam inseridos sem o ajuste da pesquisa
  tbody.innerHTML = "";
  items.forEach((item, index) => {
    insertItem(item, index);
  });

  getTotals();
}

function getTotals() {
  const amountIncomes = items
    .filter((item) => item.type === "Entrada")
    .map((transaction) => Number(transaction.amount));

  const amountExpenses = items
    .filter((item) => item.type === "Saída")
    .map((transaction) => Number(transaction.amount));

  const totalIncomes = amountIncomes
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  const totalExpenses = Math.abs(
    amountExpenses.reduce((acc, cur) => acc + cur, 0)
  ).toFixed(2);

  const totalItems = (totalIncomes - totalExpenses).toFixed(2);

  incomes.innerHTML = totalIncomes;
  expenses.innerHTML = totalExpenses;
  total.innerHTML = totalItems;
}

function searchDesc(){
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.getElementById('desc');

  console.log(items)

  let filteredItems = items.filter((item) => item.desc.includes(input));

    loadItens(filteredItems);

    // retorna uma lista que precisa ser salva em alguma variável

  // for (i = 0; i < x.length; i++){
  //   if (!x[i].innerHTML.toLowerCase().includes(input)) {
  //     x[i].style.display = "none";
  //   }
  //   else {
  //     x[i].style.display = 'list-item';
  //   }
  // }
}

loadItens(items);
