document.addEventListener("DOMContentLoaded", function () {
    const startDate = dayjs("2024-05-27");
    const tbody = document.querySelector("#agenda tbody");
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

   
    const headerRow = document.getElementById("headerRow");
    
    //  first cell empty
    const emptyCell = document.createElement("th");
    headerRow.appendChild(emptyCell);
    
    for (let day = 0; day < 7; day++) {
        const dateCell = document.createElement("th");
        const currentDate = startDate.add(day, 'day');
        dateCell.textContent = `${currentDate.format("dddd")} ${currentDate.format("DD/MM/YYYY")}`;
        headerRow.appendChild(dateCell);
    }

    
    for (let week = 0; week < 5; week++) {
        const row = document.createElement("tr");
        const weekCell = document.createElement("td");
        weekCell.textContent = `Week ${week + 1}`;
        row.appendChild(weekCell);
        
        for (let day = 0; day < 7; day++) {
            const cell = document.createElement("td");
            const currentDate = startDate.add(week * 7 + day, 'day');
            cell.textContent = currentDate.format("DD / MM");
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
});
