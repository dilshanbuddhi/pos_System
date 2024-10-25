let customerary = [];

const loadCustomerTable = () => {
    $("#customerTableBody").empty();

    customerary.map((item) => {
        let data = `<tr>
            <td>${item.cid}</td>
            <td>${item.cname}</td>
            <td>${item.caddress}</td>
            <td>${item.csalary}</td>
        </tr>`;
        $("#customerTableBody").append(data);
    });
};

function clear(){
    $("#id").val('');
    $("#name").val('');
    $("#address").val('');
    $("#salary").val('');
}

$("#customersave").on("click", function (event) {
    event.preventDefault();

    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();

    let csobj = { cid, cname, caddress, csalary };
    customerary.push(csobj);

    loadCustomerTable();
    clear();

});

$("#customerupdate").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();

    for (let i = 0; i < customerary.length; i++) {
        if (customerary[i].cid === cid){
            customerary[i].cname = cname;
            customerary[i].caddress = caddress;
            customerary[i].csalary = csalary;

            loadCustomerTable();
            clear();
        }
    }

});

$("#customersearch").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    for (let i = 0; i < customerary.length; i++) {
        if (customerary[i].cid === cid){
            console.log(customerary[i]);
            $("#name").val(customerary[i].cname);
            $("#address").val(customerary[i].caddress);
            $("#salary").val(customerary[i].csalary);
        }
    }
});

$("#customerdelete").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    for (let i = 0; i < customerary.length; i++) {
        if (customerary[i].cid === cid){
            customerary.pop(customerary[i]);
            loadCustomerTable();
            clear();
        }
    }
});
