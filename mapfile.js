function getValue(m, v){
	var values = new Array(50);
	for(var i = 0; i < values.length; i++){
		values[i] = new Array(6);
	}
	for(var i = 0; i < values.length; i++){
		for(var j = 0; j < values[i].length; j++){
			values[i][j] = 0;
		}
	}
	values[0][0] = 13;
	values[0][1] = 15;
	values[0][2] = 3;
	values[0][3] = 2;
	values[0][4] = 2;
	values[0][5] = 0;

	values[1][0] = 2;
	values[1][1] = 6;
	values[1][3] = 6;

	return values[m][v];
}
function getMap(m, t, x, y){
	var values = new Array(2);
	for(var i = 0; i < values.length; i++){
		values[i] = new Array(8);
		for(var j = 0; j < values[i].length; j++){
			values[i][j] = new Array(50);
			for(var k = 0; k < values[i][j].length; k++){
				values[i][j][k] = new Array(50);
			}
		}
	}
	for(var i = 0; i < values.length; i++){
		for(var j = 0; j < values[i].length; j++){
			for(var k = 0; k < values[i][j].length; k++){
				for(var l = 0; l < values[i][j][k].length; l++){
					values[i][j][k][l] = 0;
				}
			}
		}
	}
	values[0][0][4][5] = 1;
	values[0][0][4][7] = 1;
	values[0][2][4][7] = 1;

	values[0][1][3][8] = 3;

	values[0][0][4][6] = 2;
	values[0][1][4][6] = 1;
	values[0][2][4][6] = 1;
	values[0][1][5][6] = 1;

	values[0][3][6][5] = 1;

	values[0][4][7][8] = 1;
	values[0][4][8][7] = 2;
	values[0][4][8][8] = 3;

	values[0][6][7][8] = 1;
	values[0][5][8][7] = 1;
	values[0][5][8][8] = 1;
	values[0][6][8][8] = 1;

	values[0][1][6][0] = 4;

	values[0][7][6][0] = 1;

	values[1][0][1][1] = 1;
	values[1][4][1][5] = 3;

	values[1][7][0][5] = 1;

	return values[m][t][x][y];
}

//Active and Auto-deactivate will go in a separate function.

function getEvent(e, s, f){
	var values = new Array(50);
	for(var i = 0; i < values.length; i++){
		values[i] = new Array(50);
		for(var j = 0; j < values[i].length; j++){
			values[i][j] = new Array(10);
		}
	}
	for(var i = 0; i < values.length; i++){
		for(var j = 0; j < values[i].length; j++){
			for(var k = 0; k < values[i][j].length; k++){
				values[i][j][k] = 0;
			}
		}
	}
	values[1][0][0] = 1;
	values[1][0][1] = 1;
	values[1][0][2] = 1;
	values[1][0][3] = 1;

	return values[e][s][f];
}
