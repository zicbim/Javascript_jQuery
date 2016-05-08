screenWidth = screen.width;
screenHeight = screen.height;


$(document).ready(function(){
	$('body').append('<div id="main">');
	$('#main').css({
		"width": screenWidth,
		"height": screenHeight,
		"background-color":"red",
		"margin":"10px 0px 0px -8px",	
	});	
	divs();
});

function divs(){
	border = 1;
	inline = Math.floor(screenWidth/(16+border*2));
	inheight = Math.floor(screenHeight/(16+border*2));
	kolall = inline*inheight;
	for (i = 1; i <= kolall; i++){
		if(i<=inline){
			$('#main').append('<div class="box">');
		}else{
			$('#main').append('<div class="box1">');
		}
	}
}

function newdivs(a){
	$('#main').append('</br>');
	for (i = 1; i <= a; i++){
		for(j = 1; j<=a; j++){
			$('#main').append('<div class="box2">');
		}
		$('#main').append('</br>');
	}
}

$(document).on('mouseover','.box1',function(){
    $(this).css('background-color','white');
});

$(document).on('mouseover','.box',function(){
    $(this).css('background-color','white');
});

$(document).on('mouseover','.box2',function(){
    $(this).css('background-color','white');
});

$(document).on('click','#but',function(){
    a = parseInt(prompt("Сторона сетки"));
    $('.box1').remove();
    $('.box').remove();
    $('.box2').remove();
    $('br').remove();
    newdivs(a);
});