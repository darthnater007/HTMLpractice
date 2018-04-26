$(document).ready(function(){
var url = "http://localhost:8080/Users/List";

$.getJSON(url, function(data){
				var html = "";
				$.each(data, function(i, item){
					html+= "<tr>"; 
                    html+= "<td>" + item.UserName  + "</td>";
                    html+= "</tr>";
				});
				$("#user_table").html(html);
			});          
        });