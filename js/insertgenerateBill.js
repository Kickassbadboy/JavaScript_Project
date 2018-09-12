/*var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src','https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.min.js');
document.head.appendChild(jQueryScript);
var jQueryScript2 = document.createElement('script');
jQueryScript2.setAttribute('src','https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.worker.min.js');
document.head.appendChild(jQueryScript2);*/
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
