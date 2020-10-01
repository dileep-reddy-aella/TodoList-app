$('ul').on("click",'li',function(){
	// if($(this).css('color') === 'rgb(128, 128, 128)'){
	// 	$(this).removeClass("checking");
	// }
	// else{
	// 	$(this).addClass("checking");
	// }
	$(this).toggleClass("checking");
})

//Click on X to delete Todo
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
 })

//Adding todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span>X</span>"+" "+todoText+"</li>")
	}
})

