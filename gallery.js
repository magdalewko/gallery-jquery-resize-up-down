$("ul#gallery li").click(function(){
	var dataTypeClicked = $(this).attr("data-room");
	
	$("img").each(function(index,value){
		var dataType = $(this).attr("data-room-type");
		if(dataTypeClicked != dataType){

			$(this).animate({height:0},400);
		}
		
		if(dataTypeClicked == dataType){
			
			$(this).css("height","400px");
		}
	});
	
});

$("ul#gallery li.allimg").click(function(){
	
	$("img").animate({height:400},400);
	});

		
	//for more efficiency $("ul#gallery").find("li.all");	
	//$('#attached_deals_tab li:not(.active)');

	
