function filterscript() {
      
	 
	  $.getJSON("https://kaspar-potbs.github.io/ship-comparison/shipdata.json", function(json) {
	  //console.log( json.Ships );
	  
	var array =  json.Ships;
	//console.log ( array );

	var shipdata = json.Ships;
	//console.log(shipdata);

//Levels
var levelRangeFrom = document.getElementById("levelRangeFrom").value;
var levelRangeTo = document.getElementById("levelRangeTo").value;
//levelRangeFrom--;
levelRangeTo++;
var leveldatacollection = [];
var leveldatasingle = [];

for (var i = levelRangeFrom; i < levelRangeTo; i++) {
			let leveldatasingle = shipdata.filter(function (e) {
			return e.level == (i) ;
		
			
});
	leveldatacollection.push(...leveldatasingle);
	//console.log(i);
};
//console.log(leveldatacollection);



//Classes
var class1 = document.getElementById("classBC");
var class2 = document.getElementById("classCT");
var class3 = document.getElementById("classFT");
var class4 = document.getElementById("classNO");
var class5 = document.getElementById("classPR");


let class1data = leveldatacollection.filter(function (e) {
	if (class1.checked) {
		return e.classes.includes("BC") ;
		} else {
		}
});

let class2data = leveldatacollection.filter(function (e) {
	if (class2.checked) {
		return e.classes.includes("CT") ;
		} else {
		}
});

let class3data = leveldatacollection.filter(function (e) {
	if (class3.checked) {
		return e.classes.includes("FT") ;
		} else {
		}
});

let class4data = leveldatacollection.filter(function (e) {
	if (class4.checked) {
		return e.classes.includes("NO") ;
		} else {
		}
});

let class5data = leveldatacollection.filter(function (e) {
	if (class5.checked) {
		return e.classes.includes("PV") ;
		} else {
		}
});

const classContainsDuplicatedata = class1data.concat(class2data,class3data,class4data,class5data);

//Remove duplicates
const SetWithoutDuplicates = new Set(classContainsDuplicatedata);
//Convert back to array
const classdata= (Array.from(SetWithoutDuplicates));

	
//Sizes
	var size1 = document.getElementById("sizeTiny");
	var size2 = document.getElementById("sizeSmall");
	var size3 = document.getElementById("sizeMedium");
	var size4 = document.getElementById("sizeLarge");
	var size5 = document.getElementById("sizeHuge");
	var size6 = document.getElementById("sizeColossal");

	let size1data = classdata.filter(function (e) {
	if (size1.checked) {
		return e.size == 'Tiny';
	} else {
	}	
});
	
	let size2data = classdata.filter(function (e) {
	if (size2.checked) {
		return e.size == 'Small';
	} else {
	}	
});

let size3data = classdata.filter(function (e) {
	if (size3.checked) {
		return e.size == 'Medium';
	} else {
	}	
});

let size4data = classdata.filter(function (e) {
	if (size4.checked) {
		return e.size == 'Large';
	} else {
	}	
});

let size5data = classdata.filter(function (e) {
	if (size5.checked) {
		return e.size == 'Huge';
	} else {
	}	
});

let size6data = classdata.filter(function (e) {
	if (size6.checked) {
		return e.size == 'Colossal';
	} else {
	}	
});

const sizedata = size1data.concat(size2data,size3data,size4data,size5data,size6data);


// Types
	var type1 = document.getElementById("typeMerchant");
	var type2 = document.getElementById("typeScout");
	var type3 = document.getElementById("typeWarship");
	var type4 = document.getElementById("typeSOL");
	

	let type1data = sizedata.filter(function (e) {
	if (type1.checked) {
		return e.type == 'Merchant';
	} else {
	}	
});

	
	let type2data = sizedata.filter(function (e) {
	if (type2.checked) {
		return e.type == 'Scout';
	} else {
	}	
});

let type3data = sizedata.filter(function (e) {
	if (type3.checked) {
		return e.type == 'Warship';
	} else {
	}	
});

let type4data = sizedata.filter(function (e) {
	if (type4.checked) {
		return e.type == 'Ship of the Line';
	} else {
	}	
});

const typedata = type1data.concat(type2data,type3data,type4data);



//Variants
	var variant1 = document.getElementById("variantStripped");
	var variant2 = document.getElementById("variantCivilian");
	var variant3 = document.getElementById("variantCourier");
	var variant4 = document.getElementById("variantSleek");
	var variant5 = document.getElementById("variantFallback");
	var variant6 = document.getElementById("variantStandard");
	var variant7 = document.getElementById("variantHeavy");
	var variant8 = document.getElementById("variantMastercraft");
	var variant9 = document.getElementById("variantRefit");
	
	
let variant1data = typedata.filter(function (e) {
	if (variant1.checked) {
		return e.variant == 'Stripped';
	} else {
	}	
});

let variant2data = typedata.filter(function (e) {
	if (variant2.checked) {
		return e.variant == 'Civilian';
	} else {
	}	
});

let variant3data = typedata.filter(function (e) {
	if (variant3.checked) {
		return e.variant == 'Courier';
	} else {
	}	
});

let variant4data = typedata.filter(function (e) {
	if (variant4.checked) {
		return e.variant == 'Sleek';
	} else {
	}	
});

let variant5data = typedata.filter(function (e) {
	if (variant5.checked) {
		return e.variant == 'Fallback';
	} else {
	}	
});

let variant6data = typedata.filter(function (e) {
	if (variant7.checked) {
		return e.variant == 'Standard';
	} else {
	}	
});

let variant7data = typedata.filter(function (e) {
	if (variant7.checked) {
		return e.variant == 'Heavy';
	} else {
	}	
});

let variant8data = typedata.filter(function (e) {
	if (variant8.checked) {
		return e.variant == 'Mastercraft';
	} else {
	}	
});

let variant9data = typedata.filter(function (e) {
	if (variant9.checked) {
		return e.variant == 'Refit';
	} else {
	}	
});

const selectdata = variant1data.concat(variant2data,variant3data,variant4data,variant5data,variant6data,variant7data,variant8data,variant9data);



//var selectdata = sizedata;


// sort by name



var sortbyorder1 = document.getElementById("sortbyorder1").value;


if (sortbyorder1 == "a") {
selectdata.sort(function(a, b) {
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
}
else if (sortbyorder1 == "d") {
	selectdata.sort(function(a, b) {
  var modelA = a.model.toUpperCase(); // ignore upper and lowercase
  var modelB = b.model.toUpperCase(); // ignore upper and lowercase
  if (modelA > modelB) {
    return -1;
  }
  if (modelA < modelB) {
    return 1;
  }

  // names must be equal
  return 0;
});
}


//Build table and add output
        
		var col = [ "Lvl", "Model", "ID", "Type", "Size", "Dura", "Insurance", "Speed", "B/Pt", "Cargo", "Crew", "Guns*", "Broadside", "Class"   ];


        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		table.className = "filter-table-style";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
		var showamount = document.getElementById("showamountrecs").value;
		var spec = [ "level", "model", "ID", "type", "size", "base_durability", "insurance_value", "os_max_speed", "os_best_sailing_point", "cargo_capacity", "crew", "broadside_total_guns", "broadside_weight", "classes" ]
        for (var i = 0; i < selectdata.length; i++) {
			if (i == showamount) {
			break;
			}
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
				var url = "compare.html#ship=";
                tabCell.innerHTML = '<a href="'+url+selectdata[i][spec[2]]+'" target="_blank">'+selectdata[i][spec[j]]+'</a>';
            }
        }
		

        // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
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

   };