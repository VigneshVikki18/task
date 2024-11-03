let transactions = [];

document.getElementById("transaction-form").addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();
  
  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  const transaction = {
    id: Date.now(),
    description,
    amount,
    type,
  };

  transactions.push(transaction);
  renderTransactions();
  updateSummary();
  e.target.reset();
}

function renderTransactions() {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = "";

  transactions.forEach(transaction => {
    const li = document.createElement("li");
    li.className = `transaction-item ${transaction.type}`;
    li.innerHTML = `
      ${transaction.description}: Rs.${transaction.amount.toFixed(2)}
      <span>
        <button class="edit" onclick="editTransaction(${transaction.id})">Edit</button>
        <button class="delete" onclick="deleteTransaction(${transaction.id})">Delete</button>
      </span>
    `;
    transactionList.appendChild(li);
  });
}

function editTransaction(id) {
  const transaction = transactions.find(trans => trans.id === id);
  document.getElementById("description").value = transaction.description;
  document.getElementById("amount").value = transaction.amount;
  document.getElementById("type").value = transaction.type;
  
  deleteTransaction(id); // Remove the item being edited
}

function deleteTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  renderTransactions();
  updateSummary();
}

function updateSummary() {
  const income = transactions
    .filter(transaction => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter(transaction => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expense;

  document.getElementById("total-income").textContent = `Rs.${income.toFixed(2)}`;
  document.getElementById("total-expense").textContent = `Rs.${expense.toFixed(2)}`;
  document.getElementById("balance").textContent = `Rs.${balance.toFixed(2)}`;
}
