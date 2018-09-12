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
