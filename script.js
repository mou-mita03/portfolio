document.addEventListener("DOMContentLoaded", function () {
    const itemForm = document.getElementById("itemForm");
    const itemsList = document.getElementById("itemsList");
    const searchBar = document.getElementById("searchBar");

    let items = [];

    // Add Item to List
    itemForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const itemName = document.getElementById("itemName").value;
        const itemDescription = document.getElementById("itemDescription").value;
        const itemStatus = document.getElementById("itemStatus").value;

        const item = {
            name: itemName,
            description: itemDescription,
            status: itemStatus,
        };

        items.push(item);
        displayItems();
        itemForm.reset();
    });

    // Display Items
    function displayItems() {
        itemsList.innerHTML = "";

        items.forEach((item, index) => {
            const itemCard = document.createElement("div");
            itemCard.className = "item-card";

            itemCard.innerHTML = `
                <h5>${item.name}</h5>
                <p>${item.description}</p>
                <p><strong>Status:</strong> ${item.status}</p>
                <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>
            `;

            itemsList.appendChild(itemCard);
        });
    }

    // Delete Item
    window.deleteItem = function (index) {
        items.splice(index, 1);
        displayItems();
    };

    // Search Items
    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
        );

        displayFilteredItems(filteredItems);
    });

    function displayFilteredItems(filteredItems) {
        itemsList.innerHTML = "";

        filteredItems.forEach((item) => {
            const itemCard = document.createElement("div");
            itemCard.className = "item-card";

            itemCard.innerHTML = `
                <h5>${item.name}</h5>
                <p>${item.description}</p>
                <p><strong>Status:</strong> ${item.status}</p>
            `;

            itemsList.appendChild(itemCard);
        });
    }
});
