// require sql

const getData = () => {
  $.get('/api/members').then((response) => {
    // console.log(response.results);
    makeTable(response.results);
    //console.log(data);
  });
};

const updateData = (data, id) => {
  $.ajax({
    method: 'PUT',
    url: '/api/members/' + id,
    data: data,
  }).then(() => {
    window.location.href = '/members';
  });
};
const saveButton = function(cell, formatterParams) {
  let btn = '<button>Save</button>';
  return btn;
};

const makeTable = (data) => {
  new Tabulator('#po-table', {
    // height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: data, // assign data to table
    layout: 'fitColumns', // fit columns to width of table (optional)
    columns: [
      // Define Table Columns
      {
        title: 'supplier name',
        field: 'Supplier.supplier_name',
        hozAlign: 'center',
      },
      { title: 'Item', field: 'item' },

      {
        title: 'Po Number',
        field: 'po_number',
        hozAlign: 'center',
      },
      {
        title: 'Po Due Date',
        field: 'po_due_date',
        hozAlign: 'center',
      },
      {
        title: 'Estimated Ship Date',
        field: 'est_ship_date',
        hozAlign: 'center',
      },
      {
        title: 'Tracking Number',
        field: 'tracking_number',
        hozAlign: 'center',
        editor: 'textarea',
        editorParams: {
          elementAttributes: {
            maxlength: '100', //set the maximum character length of the textarea element to 10 characters
          },
        },
      },
      {
        title: 'ButtonHere',
        hozAlign: 'center',
        formatter: saveButton,
        cellClick: function(e, cell) {
          // funtion to route api here
          var row = cell.getRow();
          var id = row.getIndex();
          updateData(data, id);
          console.log(id);
        },
      },
    ],
  });
  console.log(Tabulator);
};

getData();
