function indexfilterscript() {
      
	  $.getJSON("js/shipdata.json", function(json) {
	
	
	var DatasetValue = [];
	  var DatasetValue = document.getElementById("dataset-select").value;
	  
	  if (DatasetValue == "0")
	{
	var shipdata = json.Legacy;
	}
	else
	
	var shipdata = json.Ships;
	

let size1data = shipdata.filter(function (e) {
		return e.size == 'Tiny';	
});

let size2data = shipdata.filter(function (e) {
		return e.size ==  'Small';
});

const sizedata = size1data.concat(size2data);

sizedata.sort(function(a, b) {
  var modelA = a.model.toUpperCase(); // ignore upper and lowercase
  var modelB = b.model.toUpperCase(); // ignore upper and lowercase
  if (modelA < modelB) {
    return -1;
  }
  if (modelA > modelB) {
    return 1;
  }

  // names must be equal
  return 0;
});

//Build table and add output
        
		var col = [ "Model", "ID" ];

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		table.className = "list-table-style";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.
     
		
// ADD JSON DATA TO THE TABLE AS ROWS.
		
		var spec = [ "model", "ID" ]
        for (var i = 0; i < sizedata.length; i++) {
			
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
				var url = "compare.html";
                tabCell.innerHTML = '<a href="'+url+"#dataset="+DatasetValue+"&ship="+sizedata[i][spec[1]]+'" target="_blank">'+sizedata[i][spec[j]]+'</a>';
            }
        }
		

        // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showDataTinySmall");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
   
   
// Hide ID column
            
			col = 2;
            col = parseInt(col, 10);
            col = col - 1;
			var tbl = document.getElementsByClassName("list-table-style");
            if (tbl != null) {
                if (col < 0 || col >= tbl[0].rows.length - 1) {
                    
                    return;
                }
                for (var i = 0; i < tbl[0].rows.length; i++) {
                    for (var j = 0; j < tbl[0].rows[i].cells.length; j++) {
                        tbl[0].rows[i].cells[j].style.display = "";
                        if (j == col)
                            tbl[0].rows[i].cells[j].style.display = "none";
                    }
                }
            }


var n = [ "Medium", "Large",  "Huge", "Colossal" ];
var m = [ "showDataMedium", "showDataLarge",  "showDataHuge",  "showDataColossal" ]

n.forEach((Stat1, index) => {
  const Stat2 = m[index];

let sizedata = shipdata.filter(function (e) {
		return e.size == Stat1;	
});


sizedata.sort(function(a, b) {
  var modelA = a.model.toUpperCase(); // ignore upper and lowercase
  var modelB = b.model.toUpperCase(); // ignore upper and lowercase
  if (modelA < modelB) {
    return -1;
  }
  if (modelA > modelB) {
    return 1;
  }

  // names must be equal
  return 0;
});


//Build table and add output
		var col = [ "Model", "ID" ];

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		table.classList.add(Stat1+"list", "list-table-style");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

// ADD JSON DATA TO THE TABLE AS ROWS.
		var spec = [ "model", "ID" ]
        for (var i = 0; i < sizedata.length; i++) {
			
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
				var url = "compare.html";
                tabCell.innerHTML = '<a href="'+url+"#dataset="+DatasetValue+"&ship="+sizedata[i][spec[1]]+'" target="_blank">'+sizedata[i][spec[j]]+'</a>';
            }
        }
		
        // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById(Stat2);
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
 
// Hide ID column  
			col = 2;
            col = parseInt(col, 10);
            col = col - 1;
			var tbl = document.getElementsByClassName(Stat1+"list");
            if (tbl != null) {
                if (col < 0 || col >= tbl[0].rows.length - 1) {
                    
                    return;
                }
                for (var i = 0; i < tbl[0].rows.length; i++) {
                    for (var j = 0; j < tbl[0].rows[i].cells.length; j++) {
                        tbl[0].rows[i].cells[j].style.display = "";
                        if (j == col)
                            tbl[0].rows[i].cells[j].style.display = "none";
                    }
                }
            }

});
});
};