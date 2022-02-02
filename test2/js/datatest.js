$.getJSON("https://kaspar-potbs.github.io/ship-comparison/shipdata.json", function(json) {
	  //console.log( json.Ships );
	  
	var selectdata =  json.Ships;


//Build table and add output
        
		var col = [ "Lvl", "Model", "ID", "Type", "Size", "Dura", "Insurance", "Speed", "B/Pt", "Cargo", "Crew", "Guns*", "Broadside", "Class"   ];


        // CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");//
		var table = document.getElementById("test1");
		table.className = "filter-table-style";
		table.className = "nowrap hover";
		table.setAttribute("id", "myId8table1");
		var tbody = document.getElementById("tbody1");

        
        

        // ADD JSON DATA TO THE TABLE AS ROWS.
		/* var showamount = document.getElementById("showamountrecs").value; */
		var showamount = 999;
		var spec = [ "level", "model", "ID", "type", "size", "base_durability", "insurance_value", "os_max_speed", "os_best_sailing_point", "cargo_capacity", "crew", "broadside_total_guns", "broadside_weight", "classes" ]
        for (var i = 0; i < selectdata.length; i++) {
			if (i == showamount) {
			break;
			}
            tr = tbody.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
				var url = "compare.html#ship=";
				
				kj = (selectdata[i][spec[j]]);
				
				/*console.log(kj.toLocaleString())*/
				if (spec == 'insurance_value') {
					console.log(selectdata[i][spec[j]]);
				}
				
                tabCell.innerHTML = '<a href="'+url+selectdata[i][spec[2]]+'" target="_blank">'+selectdata[i][spec[j]]+'</a>';
            }
        }
		

        // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("test1");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		
	


// Hide ID column
            
			col = 3;
            col = parseInt(col, 10);
            col = col - 1;
			var tbl = document.getElementsByClassName("filter-table-style");
			
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