const req = new XMLHttpRequest();
req.open("GET", "data.json");
req.onreadystatechange = () => {
	if(req.status === 200 && req.readyState === 4) {
		// console.log(req.responseText);
		var jsonPARSE = req.response;
		let header = [];
		let members = jsonPARSE.members;
		var htmlEnd = "<table>";
		htmlEnd += "<thead>";
	    htmlEnd += "<tr>";
		for (let item in jsonPARSE.members[0]) {
			 htmlEnd += "<th>";
	 		 htmlEnd += item;
	 		 htmlEnd += "</th>";
	 		 header.push(item);
		}
		htmlEnd += "</tr>";
		htmlEnd += "</thead>";
		htmlEnd += "<tbody>";
		for (var i = 0; i < members.length; i++) {
			var row = members[i];

			htmlEnd += "<tr>";
			for(let column in header) {
				htmlEnd += "<td>"
				if(header[column] == "powers") {
					htmlEnd += row[header[column]].join(' -- ') ;
				} 
				else {
					htmlEnd += row[header[column]];
				}
				
				htmlEnd += "</td>";
			}
			htmlEnd += "</tr>";
		}


		htmlEnd += "</tbody>";
		htmlEnd += "</table>";
		document.getElementById("update").innerHTML = htmlEnd;

	}
}
req.responseType = "json";
req.send();