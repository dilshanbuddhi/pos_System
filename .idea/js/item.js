
let itemary = [];

const loadItemTable = () => {
    $("#itemTableBody").empty();

    itemary.map((item,) => {
        let data = `<tr>
            <td>${item.iid}</td>
            <td>${item.iname}</td>
            <td>${item.iqty}</td>
            <td>${item.iprice}</td>
        </tr>`

        $("#itemTableBody").append(data);
        });
}

$("#itemsave").on('click', function (event){
    event.preventDefault();

    let id = $("#iid").val();
    let name = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    let itemobj = { id , name , qty , price};
    itemary.length + 1;
    itemary.push(itemobj);

    loadItemTable();
})

$("#itemsearch").on('click', function (){
    event.preventDefault();

    let id = $("#iid").val();
    let name = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    let itemobj = { id , name , qty , price};
})
$("#itemdelete").on('click', function (){
    event.preventDefault();

    let id = $("#iid").val();
    let name = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    let itemobj = { id , name , qty , price};
})

$("#itemupdate").on('click', function (){
    event.preventDefault();

    let id = $("#iid").val();
    let name = $("#iname").val();
    let qty = $("#iqty").val();
    let price = $("#iprice").val();

    let itemobj = { id , name , qty , price};
})