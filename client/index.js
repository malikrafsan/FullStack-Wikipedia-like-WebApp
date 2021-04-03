document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']));

});

document.querySelector('#isi-disini').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

const updateBtn = document.querySelector('#update-row-btn');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/' + searchValue)
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']));
}

function deleteRowById(id) {
    fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-name-input').dataset.id = id;
}

updateBtn.onclick = function() {
    const updateNameInput = document.querySelector('#update-name-input');


    console.log(updateNameInput);

    fetch('http://localhost:5000/update', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: updateNameInput.dataset.id,
                name: updateNameInput.value
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        })
}


const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function() {
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value = "";

    fetch('http://localhost:5000/insert', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name: name })
        })
        .then(response => response.json())
        .then(data => insertRowIntoTable(data['data']))
    location.reload();
}

function insertRowIntoTable(data) {
    console.log(data);
    const table = document.querySelector('#isi-disini');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "";

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'dateAdded') {
                data[key] = new Date(data[key]).toLocaleString();
            }
            tableHtml += `<p>${data[key]}</p>`;
        }
    }

    tableHtml += `<button class="delete-row-btn" data-id=${data.id}>Delete</button>`;
    tableHtml += `<button class="edit-row-btn" data-id=${data.id}>Edit</button>`;

    tableHtml += "";

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}

function loadHTMLTable(data) {
    const table = document.querySelector('#isi-disini');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function({ id, name, date_added }) {

        // tableHtml += `<h2>${id}</h2>`;
        tableHtml += `<p><font size="4">${id}. ${name}</p>`;
        tableHtml += `<p><font size="2">Waktu penambahan: ${new Date(date_added).toLocaleString()}</p>`;
        tableHtml += `<button class="delete-row-btn" data-id=${id}>Delete</button>`;
        tableHtml += `<button class="edit-row-btn" data-id=${id}>Edit</button>`;

    });

    table.innerHTML = tableHtml;
}

/*
function open_letter() {
    document.getElementsByClassName("open")[0].style.display = 'none'
    document.getElementsByClassName("close")[0].style.display = 'block'
}

function close_letter() {
    document.getElementsByClassName("open")[0].style.display = 'block'
    document.getElementsByClassName("close")[0].style.display = 'none'
}
*/