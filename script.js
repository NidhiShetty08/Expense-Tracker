document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total');

    let total = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        console.log(category)

        if (description && !isNaN(amount) && amount > 0) {
            addExpense(description, amount, category);
            updateTotal(amount);
            form.reset();
        }
    });

    function addExpense(description, amount, category) {
        const li = document.createElement('li');
        li.textContent = `${description}: ₹${amount.toFixed(2)} [${category}]`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            expenseList.removeChild(li);
            updateTotal(-amount);
        });    
        li.appendChild(deleteButton)        
        expenseList.appendChild(li);
    }

    function updateTotal(amount) {
        total += amount;
        totalDisplay.textContent = total.toFixed(2);
    }
});
