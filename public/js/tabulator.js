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
const saveButton = function(cell, formatterParams) {
  let btn = '<button>Save</button>';
  return btn;
};

// date editor funciton

var dateEditor = function(cell, onRendered, success, cancel, editorParams) {
  //cell - the cell component for the editable cell
  //onRendered - function to call when the editor has been rendered
  //success - function to call to pass the successfuly updated value to Tabulator
  //cancel - function to call to abort the edit and return to a normal cell
  //editorParams - params object passed into the editorParams column definition property

  //create and style editor
  var editor = document.createElement('input');

  editor.setAttribute('type', 'date');

  //create and style input
  editor.style.padding = '3px';
  editor.style.width = '100%';
  editor.style.boxSizing = 'border-box';

  //Set value of editor to the current value of the cell
  editor.value = moment(cell.getValue(), 'MM/DD/YYYY').format('YYYY-MM-DD');

  //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
  onRendered(function() {
    editor.focus();
    editor.style.css = '100%';
  });

  //when the value has been set, trigger the cell to update
  function successFunc() {
    success(moment(editor.value, 'YYYY-MM-DD').format('MM/DD/YYYY'));
  }

  editor.addEventListener('change', successFunc);
  editor.addEventListener('blur', successFunc);

  //return the editor element
  return editor;
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
        field: 'supplier.supplier_name',
        hozAlign: 'center'
      },
      { title: 'Item', field: 'item' },

      {
        title: 'Po Number',
        field: 'po_number',
        hozAlign: 'center'
      },
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
            maxlength: '100' //set the maximum character length of the textarea element to 10 characters
          }
        }
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
        }
      }
    ]
  });
};

getData();
