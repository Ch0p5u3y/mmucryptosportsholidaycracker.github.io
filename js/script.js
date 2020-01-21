function tog(mode){
	if(mode == 1){
		$('#mountain').slideToggle('slow');
	}
	else if(mode == 2){
		$('#looksobored').slideToggle('slow');
	}
	else if(mode == 3){
		$('#ucantcme').slideToggle('slow');
	}
	else if(mode == 4){
		$('#esoteric').slideToggle('slow');
	}
	else if(mode == 5){
		$('#guessing_game').slideToggle('slow');
	}
	else if(mode == 6){
		$('#sanitycheck').slideToggle('slow');
	}
}

$('#a').click(function(){tog(1); return false;});
$('#b').click(function(){tog(2); return false;});
$('#c').click(function(){tog(3); return false;});
$('#d').click(function(){tog(4); return false;});
$('#e').click(function(){tog(5); return false;});
$('#f').click(function(){tog(6); return false;});
