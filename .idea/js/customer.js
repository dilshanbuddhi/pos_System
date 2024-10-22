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

$("#customersave").on("click", function (event) {
    event.preventDefault();

    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();

    let csobj = { cid, cname, caddress, csalary };
    customerary.push(csobj);

    loadCustomerTable();

});

$("#customerupdate").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();
});

$("#customersearch").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();
});

$("#customerdelete").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();
});
