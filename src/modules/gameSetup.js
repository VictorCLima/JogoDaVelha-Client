/* const square = document.getElementsByTagName('input');

const restart = document.getElementById('restart');

const label_player = document.getElementById('player');


var player = '_';
var winner = '_';
var finish;

for(var i=0; i< 9; i++) {
	square[i].addEventListener('click', (event) => {
		if( (event.target.value=='_') && (winner =='_')) {
			event.target.value=player;
			event.target.style.color='#bc5e00';

			changePlayer();

			winner = victory();

		}
	});
}

restart.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		square[i].value='_';
		square[i].style.color='#F7FE2E';
		square[i].style.backgroundColor='#F7FE2E';
	}

	winner = '_';

	drawPlayer();
});

var drawPlayer = () => {
	if(Math.floor(Math.random() * 2)==0) {
		player = "O";
		label_player.innerText="O";
		label_player.style.color='#ffffff';
	}else{
		w = "X";
		label_player.innerText="X";
		label_player.style.color='#000000';
	}
}

drawPlayer();


var changePlayer = () => {
	if(player=='X') {
		player = 'O';
		label_player.innerText='O';
		label_player.style.color='#ffffff';

	}else{
		player='X';
		label_player.innerText='X';
		label_player.style.color='#000000';
	}
}

var victory = () => {
	if((square[0].value==square[1].value) && (square[1].value==square[2].value) && square[0].value!='_' ) {
		square[0].style.backgroundColor='#0F0';
		square[1].style.backgroundColor='#0F0';
		square[2].style.backgroundColor='#0F0';

		return square[0].value;

	}else if((square[3].value==square[4].value) && (square[4].value==square[5].value) && square[3].value!='_' ) {
		square[3].style.backgroundColor='#0F0';
		square[4].style.backgroundColor='#0F0';
		square[5].style.backgroundColor='#0F0';

		return square[3].value;

	}else if((square[6].value==square[7].value) && (square[7].value==square[8].value) && square[6].value!='_' ) {
		square[6].style.backgroundColor='#0F0';
		square[7].style.backgroundColor='#0F0';
		square[8].style.backgroundColor='#0F0';

		return square[6].value;

	}else if((square[0].value==square[3].value) && (square[3].value==square[6].value) && square[0].value!='_' ) {
		square[0].style.backgroundColor='#0F0';
		square[3].style.backgroundColor='#0F0';
		square[6].style.backgroundColor='#0F0';

		return square[0].value;

	}else if((square[1].value==square[4].value) && (square[4].value==square[7].value) && square[1].value!='_' ) {
		square[1].style.backgroundColor='#0F0';
		square[4].style.backgroundColor='#0F0';
		square[7].style.backgroundColor='#0F0';

		return square[1].value;

	}else if((square[2].value==square[5].value) && (square[5].value==square[8].value) && square[2].value!='_' ) {
		square[2].style.backgroundColor='#0F0';
		square[5].style.backgroundColor='#0F0';
		square[8].style.backgroundColor='#0F0';

		return square[2].value;
	}else if((square[0].value==square[4].value) && (square[4].value==square[8].value) && square[0].value!='_' ) {
		square[0].style.backgroundColor='#0F0';
		square[4].style.backgroundColor='#0F0';
		square[8].style.backgroundColor='#0F0';

		return square[0].value;

	}else if((square[2].value==square[4].value) && (square[4].value==square[6].value) && square[2].value!='_' ) {
		square[2].style.backgroundColor='#0F0';
		square[4].style.backgroundColor='#0F0';
		square[6].style.backgroundColor='#0F0';

		return square[2].value;
	}


    return '_';
} */
