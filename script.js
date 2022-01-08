let Modal = {
    open(){
        //Abrir 
        //adiciona a classe " active"
        document
        .querySelector(".modal-overlay")
        .classList
        .add("active")
    },
    close(){
        //Fecha
        //Retira a classe "Active"
        document
        .querySelector(".modal-overlay")
        .classList
        .remove("active")
    }
}
const transactions = [{
       id: 1,
       description:"Luz",
       amount:50000,
       date:"30-12-2021",
    }, 
    {
        id:2,
        description:"Criação de site",
        amount:500000,
        date:"30-12-2021",
    }, 
    {
        id:3,
        description:"Produção de filme",
        amount:1000000,
        date:"30-12-2021",
    }]

const Transaction = {
    incomes(){
        //soma as entradas
    },
    expenses(){
        //soma as saidas
    },
    total(){
        //entrada - saida
    }
}

const DOM ={
    transactionContainer: document.querySelector("#data-table tbody"),
    addTransaction(transaction, index) {
        const tr = document.createElement("tr")
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const amount = Utils.formatCurrency(transaction.amount) 
        const CSSclass = transaction.amount > 0 ? "income":"expense"
        const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg"alt="Remover transação">
            </td>
        </tr> `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-":""
    }
}
transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)
})