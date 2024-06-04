document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterTable);
});

function sortTable(columnIndex, order) {
    const tableBody = document.getElementById('table-body');
    const rowsArray = Array.from(tableBody.rows);

    rowsArray.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText.toLowerCase();
        const bText = b.cells[columnIndex].innerText.toLowerCase();

        if (columnIndex === 2) { // Date of birth column
            const aDate = aText.split('/').reverse().join('-');
            const bDate = bText.split('/').reverse().join('-');
            return order === 'asc' ? aDate.localeCompare(bDate) : bDate.localeCompare(aDate);
        }

        return order === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    rowsArray.forEach(row => tableBody.appendChild(row));
}

function filterTable() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const tableBody = document.getElementById('table-body');
    const rows = tableBody.getElementsByTagName('tr');

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName('td');
        const name = cells[0].innerText.toLowerCase();
        const surname = cells[1].innerText.toLowerCase();
        const telephone = cells[3].innerText.toLowerCase();
        
        if (name.includes(searchTerm) || surname.includes(searchTerm) || telephone.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
