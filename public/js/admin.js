// Gets data about the user and execute function to build Admin table
const getAdminData = () => {
  $.get('/api/admin').then((response) => {
    makeAdminTable(response.results);
  });
};

// Function to build Admin table using Tabulator
const makeAdminTable = (data) => {
  new Tabulator('#admin-table', {
    // Define table attributes
    data: data,
    layout: 'fitColumns',
    pagination: 'local',
    paginationSize: 5,
    columns: [
      // Define table columns
      {
        title: 'User Email',
        field: 'login_email',
        hozAlign: 'left'
      },
      {
        title: 'Supplier ID',
        field: 'supplierId',
        hozAlign: 'center',
        editor: 'select',
        editorParams:
          //Available options in drop-down
          [
            {
              label: 'Stark Industries',
              value: '1'
            },
            {
              label: 'Anvil Corp',
              value: '2'
            },
            {
              label: 'Wayne Enterprises',
              value: '3'
            },
            {
              label: 'Lex Corp',
              value: '4'
            },
            {
              label: 'Oscorp',
              value: '5'
            },
            {
              label: 'Pym Corp',
              value: '5'
            }
          ]
      },
      {
        hozAlign: 'center',
        formatter: saveButton,
        cellClick: function (e, cell) {
          // Executes function to update Supplier Map Login table on click
          e.preventDefault();
          var row = cell.getRow();
          var id = row.getIndex();
          updateSupplierID(data, id);
        }
      }
    ]
  });
};

// Function to update fields on the Supplier Map Login table
const updateSupplierID = (data, id) => {
  $.ajax({
    method: 'PUT',
    url: '/api/admin/' + id,
    data: {
      supplierId: function () {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            return data[i].supplierId;
          }
        }
      },
      supplier_number: function () {
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

getAdminData();
