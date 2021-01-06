const getAdminData = () => {
  $.get('/api/admin').then((response) => {
    console.log(response.results);
    makeAdminTable(response.results);
    //console.log(data);
  });
};
const updateSupplierID = (data, id) => {
  $.ajax({
    method: 'PUT',
    url: '/api/admin/' + id,
    data: {
      supplierId: function() {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            return data[i].supplierId;
          }
        }
      },
      supplier_number: function() {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            return data[i].supplierId;
          }
        }
      }
    }
  }).then(() => {
    window.location.href = '/admin';
  });
};

const makeAdminTable = (data) => {
  new Tabulator('#admin-table', {
    // Define Table Columns
    // pagination: 'local',
    data: data,
    layout: 'fitColumns',
    pagination: 'local',
    paginationSize: 5,
    columns: [
      // Define Table Columns
      {
        title: 'User Email',
        field: 'login_email',
        hozAlign: 'left'
      },
      {
        title: 'Supplier ID',
        field: 'supplierId',
        hozAlign: 'center',
        editor: 'textarea',
        editorParams: {
          elementAttributes: {
            maxlength: '100'
          }
        }
      },

      {
        hozAlign: 'center',
        formatter: saveButton,
        cellClick: function(e, cell) {
          // funtion to route api here
          e.preventDefault();
          var row = cell.getRow();
          var id = row.getIndex();
          updateSupplierID(data, id);
          console.log(id);
        }
      }
    ]
  });
};

getAdminData();
