$(document).ready(function testtest(){
	var table = [];
var table = $('#example').DataTable({
  columns: [{
      data: 'first_name'
    },
    {
      data: 'last_name'
    },
    {
      data: 'position'
    },
    {
      data: 'office'
    },
    {
      data: 'salary'
    },
    {
      data: 'start_date'
    },
  ],
  columnDefs: [{
    targets: 3,
    render: $.fn.dataTable.render.number(',', '.', 0, ''),
  }],
});

})