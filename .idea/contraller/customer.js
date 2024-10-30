import CustomerModel from '../models/CustomerModel.js';
import {customerary} from "../db/db.js";
let csindex;

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

function clearcustomer(){
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

    if (cid !== "" && cname !== "" ){
        if (vallidnumber(cid)){
            customerary.length+1;

            let cus = new CustomerModel(
                cid,
                cname,
                caddress,
                csalary
            );

            console.log(cus);
            customerary.push(cus);

            loadCustomerTable();
            clearcustomer();
        }else{
            alert("invalid number")
        }
    } else{
        alert("Fill All Data")
    }

});

const vallidnumber = (number) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(number);
}

$("#customerupdate").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();
    let cname = $("#name").val();
    let caddress = $("#address").val();
    let csalary = $("#salary").val();

    if (cid !== "" && cname !== "" ){
        if (vallidnumber(cid)){
            customerary[csindex].cid = cid
            customerary[csindex].cname = cname;
            customerary[csindex].caddress = caddress;
            customerary[csindex].csalary = csalary;

            loadCustomerTable();
            clearcustomer();
        }else{
            alert("invalid number")
        }
    } else{
        alert("Fill All Data")
    }

});

$("#customersearch").on("click", function (event) {
    event.preventDefault();
    let cid = $("#id").val();

  /*  let newid = $(this).find(".id").text();
    console.log(newid);*/

    for (let i = 0; i < customerary.length; i++) {
        if (customerary[i].cid === cid){
            csindex = i;
            console.log(customerary[i]);
            $("#name").val(customerary[i].cname);
            $("#address").val(customerary[i].caddress);
            $("#salary").val(customerary[i].csalary);
        }
    }
});

$("#customerdelete").on("click", function (event) {
    event.preventDefault();

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            customerary.splice(customerary[csindex] , 1);
            loadCustomerTable();
            clearcustomer();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
});

$('#customerTableBody').on("click" ,'tr', function (event) {
    event.preventDefault();
    console.log("click")
    let index = $(this).index();
    csindex = $(this).index();

    console.log(csindex)
    /*let newid=$(this).find(".id").index();
    console.log(newid);*/


    $("#id").val(customerary[index].cid);
    $("#name").val(customerary[index].cname);
    $("#address").val(customerary[index].caddress);
    $("#salary").val(customerary[index].csalary);
});
