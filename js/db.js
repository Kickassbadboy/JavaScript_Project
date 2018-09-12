<<<<<<< HEAD
=======
<script src="https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.worker.min.js"></script>

<script>

>>>>>>> 98ff4a243200594c990255c6ed92b408cda3c446
var dbName ='Invoice';
function getDbSchema() {
  var Products = {
    name: 'Product',
    columns: [
      {
          name: 'pid',
          primaryKey: true,
          autoIncrement: false,
      },
      {
          name: 'ItemName',
          notNull: true,
          dataType: JsStore.DATA_TYPE.String
      },
      {
          name: 'Price',
          notNull: true,
          dataType: JsStore.DATA_TYPE.Number
      },
      {
          name: 'Quantity',
          notNull: true,
          dataType: JsStore.DATA_TYPE.Number
      }
    ]
  };
  var db = {
      name: dbName,
      tables: [tblProduct]
  }
  return db;
}

var connection = new JsStore.Instance(new Worker('jsstore.worker.js'));
function initJsStore() {
    connection.isDbExist(DbName).then(function(isExist) {
        if (isExist) {
            connection.openDb(DbName);
        } else {
            var database = getDbSchema();
            connection.createDb(database);
        }
    }).catch(function(err) {
        console.error(err);
    })
}
<<<<<<< HEAD
=======


</script>
>>>>>>> 98ff4a243200594c990255c6ed92b408cda3c446
