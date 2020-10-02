//Using .on instead of .click
//click only works for the elements which are currently
//present on the page, whereas on works for the 
//elements which are not yet generated
$('ul').on("click",'li',function(){
	//Using toggle class instead of normal if and else statements
	$(this).toggleClass("checking");
})

//Click on trash icon to delete Todo
$('ul').on('click','span',function(event){
	//parent() allows us to select the parent of
	//present chosen element 
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//stopPropogation stops the function of parent 
	//elements to act on this
	event.stopPropagation();
 })

//Adding todos
$("input[type='text']").keypress(function(event){
	//13 refers to charValue of Enter in JS
	if(event.which === 13){
		//grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>")
	}
})

//Adding functionality to trash icons
$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle(200);
})

