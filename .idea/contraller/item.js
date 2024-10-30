import ItemModel from '../models/ItemModel.js';
import {customerary,itemary} from "../db/db.js";

let itemindex;

const loadItemTable = () => {
    $("#itemTableBody").empty();

    itemary.map((item) => {
        let data = `<tr>
            <td>${item.id}</td>
            <td>${item.des}</td>
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
    let des = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    let itemModel = new ItemModel(id, des , qty,price);
    itemary.push(itemModel);

    loadItemTable();
    clear();
});


// Search Item
$("#itemsearch").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();

    for (let i = 0; i < itemary.length; i++) {
        if (itemary[i].id === id) {
            itemindex = i;
            $("#iname").val(itemary[i].des);
            $("#iqty").val(itemary[i].qty);
            $("#iprice").val(itemary[i].price);
        } else{
            alert("Item not found.");
        }
    }

});

// Delete Item
$("#itemdelete").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();


    itemary.splice(itemary[itemindex] , 1);
    loadItemTable();
    clear();
});

// Update Item
$("#itemupdate").on('click', function(event) {
    event.preventDefault();

    let id = $("#iid").val();
    let des = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    itemary[itemindex].id = id
    itemary[itemindex].des = des;
    itemary[itemindex].qty = qty;
    itemary[itemindex].price = price;

    loadCustomerTable();
    clearcustomer();

});

$('#itemTableBody').on("click" ,'tr', function (event) {
    event.preventDefault();
    itemindex = $(this).index();

    $("#iid").val(itemary[itemindex].id);
    $("#iname").val(itemary[itemindex].des);
    $("#iqty").val(itemary[itemindex].qty);
    $("#iprice").val(itemary[itemindex].price);
});
