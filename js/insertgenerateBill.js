<script src="db.js"></script>

<script>
var srno = localStorage.getItem("srno");
var value = {
    itemName: srno,
    price: 2000,
    quantity: 1000
}

//since Id is autoincrement column, so the value will be automatically generated.
connection.insert({
    into: 'Product',
    values: [value]
}).then(function(rowsInserted) {
    if (rowsInserted > 0) {
        alert('successfully added');
    }
}).catch(function(err) {
    console.log(err);
    alert(err.message);
});

</script>
