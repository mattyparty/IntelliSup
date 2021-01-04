const getData = () => {
  $.get('/api/members').then((response) => {
    // console.log(response.results);
    makeTable(response.results);
    //console.log(data);
  });
};
// update tracking number ajax call
const updateData = (data, id) => {
  console.log(data);
  $.ajax({
    method: 'PUT',
    url: '/api/members/' + id,
    data: {
      tracking_number: function() {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            return data[i].tracking_number;
          }
        }
      },
      est_ship_date: function() {
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            return data[i].est_ship_date;
          }
        }
      }
    }
  }).then(() => {
    window.location.href = '/members';
  });
};

// add orders ajax call
const addData = (data) => {
  let supplierInput = $('#supplier').val();
  let dueDateInput = $('#dueDate').val();
  let itemInput = $('#item').val();
  let poNumInput = $('#poNum').val();
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: {
      supplier: supplierInput,
      dueDate: dueDateInput,
      item: itemInput,
      poNum: poNumInput,
      poReceived: false,
      supplierId: supplierInput,
      supplierMapId: supplierInput
    }
  }).then(() => {
    window.location.href = '/members';
  });
};
const saveButton = function(cell, formatterParams) {
  let btn = ' <button class="button is-info">Update</button>';
  return btn;
};

$('#poForm').on('submit', (event) => {
  event.preventDefault();
  addData();
});

// date editor funciton

var dateEditor = function(cell, onRendered, success, cancel, editorParams) {
  var editor = document.createElement('input');
  editor.setAttribute('type', 'date');
  editor.style.padding = '3px';
  editor.style.width = '100%';
  editor.style.boxSizing = 'border-box';
  editor.value = moment(cell.getValue(), 'MM/DD/YYYY').format('YYYY-MM-DD');
  onRendered(function() {
    editor.focus();
    editor.style.css = '100%';
  });
  function successFunc() {
    success(moment(editor.value, 'YYYY-MM-DD').format('MM/DD/YYYY'));
  }
  editor.addEventListener('change', successFunc);
  editor.addEventListener('blur', successFunc);
  return editor;
};

const makeTable = (data) => {
  new Tabulator('#po-table', {
    // Define Table Columns
    // pagination: 'local',
    data: data,
    layout: 'fitColumns',
    pagination: 'local',
    paginationSize: 5,
    columns: [
      // Define Table Columns
      {
        title: 'Po Number',
        field: 'po_number',
        hozAlign: 'center'
      },
      {
        title: 'supplier name',
        field: 'supplier.supplier_name',
        hozAlign: 'center'
      },
      { title: 'Item', field: 'item' },

      {
        title: 'Po Due Date',
        field: 'po_due_date',
        hozAlign: 'center'
      },
      {
        title: 'Estimated Ship Date',
        field: 'est_ship_date',
        hozAlign: 'center',
        editor: dateEditor
      },
      {
        title: 'Tracking Number',
        field: 'tracking_number',
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
          var row = cell.getRow();
          var id = row.getIndex();
          updateData(data, id);
          console.log(id);
        }
      }
    ]
  });
};

getData();
