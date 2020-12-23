// require sql

const getData = () => {
  $.get('/api/members').then((response) => {
    console.log(response);
    makeTable(response.results);
  });
};

const makeTable = (data) => {
  new Tabulator('#po-table', {
    // height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: data, // assign data to table
    layout: 'fitColumns', // fit columns to width of table (optional)
    columns: [
      // Define Table Columns
      { title: 'Item', field: 'item', width: 150 },
      {
        title: 'supplier_number,',
        field: 'supplier_number,',
        hozAlign: 'left'
      },

      {
        title: 'Po Number',
        field: 'po_number',
        hozAlign: 'center'
      }
    ]
  });
};

getData();
