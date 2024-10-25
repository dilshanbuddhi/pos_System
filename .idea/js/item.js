let itemary = [];

const loadItemTable = () => {
    $("#itemTableBody").empty();

    itemary.map((item) => {
        let data = `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
        </tr>`

        $("#itemTableBody").append(data);
    });
};

function clear() {
    $("#iid").val('');
    $("#iname").val('');
    $("#iqty").val('');
    $("#iprice").val('');
}

// Save Item
$("#itemsave").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();
    let name = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    let itemobj = { id, name, qty, price };
    itemary.push(itemobj);

    console.log(itemobj);

    loadItemTable();
    clear();
});

// Search Item
$("#itemsearch").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();

    for (let i = 0; i < itemary.length; i++) {
        if (itemary[i].id === id) {
            $("#iname").val(itemary[i].name);
            $("#iqty").val(itemary[i].qty);
            $("#iprice").val(itemary[i].price);
            return;
        }
    }
    alert("Item not found.");
});

// Delete Item
$("#itemdelete").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();

    for (let i = 0; i < itemary.length; i++) {
        if (itemary[i].id === id) {
            itemary.splice(i, 1);
            loadItemTable();
            clear();
            return;
        }
    }
    alert("Item not found.");
});

// Update Item
$("#itemupdate").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();
    let name = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    for (let i = 0; i < itemary.length; i++) {
        if (itemary[i].id === id) {
            itemary[i] = { id, name, qty, price };
            loadItemTable();
            clear();
            return;
        }
    }
    alert("Item not found.");
});
