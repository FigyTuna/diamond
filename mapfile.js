var hm=20;var ht=100;var he=50;function findMaps(){return hm;}function findTile(){return ht;}function findEvents(){return he;}var v1=new Array(20);for(var i=0;i<v1.length;i++){v1[i]=new Array(6);}for(var i=0;i<v1.length;i++){for(var j=0;j<v1[i].length;j++){v1[i][j]=0;}}v1[0][0]=6;v1[0][1]=6;v1[0][3]=9;v1[1][0]=6;v1[1][1]=6;v1[1][3]=9;v1[1][4]=3;v1[2][0]=6;v1[2][1]=6;v1[2][3]=9;v1[3][0]=12;v1[3][1]=6;v1[3][4]=3;v1[4][0]=6;v1[4][1]=6;v1[4][3]=11;function getValue(m,p){return v1[m][p]}var v2=new Array(20);for(var i=0;i<v2.length;i++){v2[i]=new Array(8);for(var j=0;j<v2[i].length;j++){v2[i][j]=new Array(100);for(var k=0;k<v2[i][j].length;k++){v2[i][j][k]=new Array(100);}}}for(var i=0;i<v2.length;i++){for(var j=0;j<v2[i].length;j++){for(var k=0;k<v2[i][j].length;k++){for(var l=0;l<v2[i][j][k].length;l++){v2[i][j][k][l]=0;}}}}v2[0][1][0][2]=10;v2[0][1][1][2]=10;v2[0][1][2][0]=10;v2[0][1][2][1]=10;v2[0][1][2][2]=10;v2[0][3][0][0]=1;v2[0][3][1][3]=2;v2[0][3][1][4]=2;v2[0][3][3][1]=2;v2[0][3][4][3]=2;v2[0][4][0][1]=1;v2[0][4][1][0]=2;v2[0][4][1][1]=3;v2[0][5][1][0]=1;v2[0][5][1][1]=1;v2[0][6][0][1]=1;v2[0][6][1][1]=1;v2[0][7][0][2]=4;v2[0][7][2][0]=5;v2[1][0][2][2]=1;v2[1][0][3][2]=1;v2[1][0][4][2]=1;v2[1][0][5][2]=1;v2[1][1][0][0]=2;v2[1][1][0][1]=2;v2[1][1][0][2]=2;v2[1][1][0][3]=2;v2[1][1][0][4]=2;v2[1][1][0][5]=2;v2[1][1][1][0]=2;v2[1][1][1][1]=2;v2[1][1][1][2]=2;v2[1][1][1][3]=2;v2[1][1][1][4]=2;v2[1][1][1][5]=2;v2[1][1][2][0]=2;v2[1][1][2][1]=2;v2[1][1][2][2]=10;v2[1][1][2][3]=2;v2[1][1][2][4]=2;v2[1][1][2][5]=2;v2[1][1][3][0]=2;v2[1][1][3][1]=2;v2[1][1][3][2]=10;v2[1][1][3][3]=2;v2[1][1][3][4]=2;v2[1][1][3][5]=2;v2[1][1][4][0]=2;v2[1][1][4][1]=2;v2[1][1][4][2]=10;v2[1][1][4][3]=2;v2[1][1][4][4]=2;v2[1][1][4][5]=2;v2[1][1][5][0]=2;v2[1][1][5][1]=2;v2[1][1][5][2]=10;v2[1][1][5][3]=2;v2[1][1][5][4]=2;v2[1][1][5][5]=2;v2[1][2][2][2]=3;v2[1][2][3][2]=3;v2[1][2][4][2]=3;v2[1][2][5][2]=3;v2[1][5][1][2]=1;v2[1][6][2][1]=1;v2[1][6][2][2]=1;v2[1][6][3][1]=1;v2[1][6][3][2]=1;v2[1][6][4][1]=1;v2[1][6][4][2]=1;v2[1][6][5][1]=1;v2[1][6][5][2]=1;v2[1][7][5][2]=3;v2[2][0][2][0]=1;v2[2][0][2][1]=1;v2[2][0][2][2]=1;v2[2][0][3][0]=1;v2[2][0][3][1]=1;v2[2][0][3][2]=1;v2[2][0][4][0]=1;v2[2][0][4][1]=1;v2[2][0][4][2]=1;v2[2][0][5][0]=1;v2[2][0][5][1]=1;v2[2][0][5][2]=1;v2[2][1][0][2]=10;v2[2][1][1][2]=10;v2[2][1][2][2]=10;v2[2][1][2][3]=10;v2[2][1][2][4]=10;v2[2][1][2][5]=10;v2[2][2][2][2]=3;v2[2][3][2][0]=1;v2[2][3][3][0]=1;v2[2][5][1][0]=1;v2[2][5][3][0]=1;v2[2][6][2][0]=1;v2[2][6][3][0]=1;v2[2][7][0][2]=7;v2[2][7][2][5]=2;v2[3][1][1][1]=10;v2[3][1][1][2]=10;v2[3][1][1][3]=10;v2[3][1][1][4]=10;v2[3][1][1][5]=10;v2[3][1][2][1]=10;v2[3][1][2][2]=10;v2[3][1][2][3]=10;v2[3][1][2][4]=10;v2[3][1][2][5]=10;v2[3][1][3][2]=10;v2[3][1][4][2]=10;v2[3][1][5][2]=10;v2[3][1][6][0]=9;v2[3][1][6][1]=9;v2[3][1][6][2]=9;v2[3][1][6][3]=9;v2[3][1][6][4]=9;v2[3][1][6][5]=9;v2[3][1][7][0]=9;v2[3][1][7][1]=9;v2[3][1][7][2]=9;v2[3][1][7][3]=9;v2[3][1][7][4]=9;v2[3][1][7][5]=9;v2[3][1][8][0]=9;v2[3][1][8][1]=9;v2[3][1][8][2]=9;v2[3][1][8][3]=9;v2[3][1][8][4]=9;v2[3][1][8][5]=9;v2[3][1][9][0]=9;v2[3][1][9][1]=9;v2[3][1][9][2]=9;v2[3][1][9][3]=9;v2[3][1][9][4]=9;v2[3][1][9][5]=9;v2[3][1][10][0]=9;v2[3][1][10][1]=9;v2[3][1][10][2]=9;v2[3][1][10][3]=9;v2[3][1][10][4]=9;v2[3][1][10][5]=9;v2[3][1][11][0]=9;v2[3][1][11][1]=9;v2[3][1][11][2]=9;v2[3][1][11][3]=9;v2[3][1][11][4]=9;v2[3][1][11][5]=9;v2[3][3][6][0]=1;v2[3][3][6][4]=1;v2[3][3][6][5]=1;v2[3][3][7][0]=1;v2[3][3][7][2]=1;v2[3][3][7][4]=1;v2[3][3][8][1]=1;v2[3][3][8][3]=1;v2[3][3][9][0]=1;v2[3][3][9][2]=1;v2[3][3][9][3]=1;v2[3][3][9][4]=1;v2[3][3][11][0]=1;v2[3][3][11][3]=1;v2[3][3][11][5]=1;v2[3][4][0][1]=2;v2[3][4][0][2]=2;v2[3][4][0][3]=2;v2[3][4][0][4]=2;v2[3][4][0][5]=2;v2[3][4][1][0]=1;v2[3][4][1][5]=1;v2[3][4][2][0]=1;v2[3][4][2][5]=1;v2[3][4][3][0]=1;v2[3][4][3][5]=1;v2[3][4][4][0]=1;v2[3][4][4][5]=1;v2[3][4][5][0]=1;v2[3][4][5][5]=1;v2[3][5][0][1]=1;v2[3][5][0][2]=1;v2[3][5][0][3]=1;v2[3][5][0][4]=1;v2[3][5][0][5]=1;v2[3][5][5][1]=1;v2[3][5][5][3]=1;v2[3][5][5][4]=1;v2[3][5][5][5]=1;v2[3][5][6][2]=1;v2[3][6][1][0]=1;v2[3][6][2][0]=1;v2[3][6][3][0]=1;v2[3][6][4][0]=1;v2[3][6][5][0]=1;v2[3][6][6][1]=1;v2[3][6][6][2]=1;v2[3][7][6][2]=6;v2[4][1][0][0]=11;v2[4][1][0][1]=11;v2[4][1][0][2]=11;v2[4][1][0][3]=8;v2[4][1][0][4]=11;v2[4][1][0][5]=11;v2[4][1][1][0]=11;v2[4][1][1][1]=8;v2[4][1][1][2]=8;v2[4][1][1][3]=8;v2[4][1][1][4]=8;v2[4][1][1][5]=8;v2[4][1][2][0]=11;v2[4][1][2][1]=8;v2[4][1][2][2]=8;v2[4][1][2][3]=8;v2[4][1][2][4]=8;v2[4][1][2][5]=8;v2[4][1][3][0]=11;v2[4][1][3][1]=8;v2[4][1][3][2]=8;v2[4][1][3][3]=8;v2[4][1][3][4]=8;v2[4][1][3][5]=8;v2[4][1][4][0]=11;v2[4][1][4][1]=8;v2[4][1][4][2]=8;v2[4][1][4][3]=8;v2[4][1][4][4]=8;v2[4][1][4][5]=8;v2[4][1][5][0]=11;v2[4][1][5][1]=8;v2[4][1][5][2]=8;v2[4][1][5][3]=8;v2[4][1][5][4]=8;v2[4][1][5][5]=8;v2[4][4][0][1]=5;v2[4][4][0][2]=5;v2[4][4][0][4]=5;v2[4][4][0][5]=5;v2[4][4][1][0]=4;v2[4][4][2][0]=4;v2[4][4][3][0]=4;v2[4][4][4][0]=4;v2[4][4][5][0]=4;v2[4][5][0][1]=1;v2[4][5][0][2]=1;v2[4][5][0][4]=1;v2[4][5][0][5]=1;v2[4][6][1][0]=1;v2[4][6][2][0]=1;v2[4][6][3][0]=1;v2[4][6][4][0]=1;v2[4][6][5][0]=1;v2[4][7][0][3]=7;v2[4][7][4][4]=1;function getMap(m, t, x, y){return v2[m][t][x][y]}var v3=new Array(50);for(var i=0;i<v3.length;i++){v3[i]=new Array(50);for(var j=0;j<v3[i].length;j++){v3[i][j]=new Array(20);}}for(var i=0;i<v3.length;i++){for(var j=0;j<v3[i].length;j++){for(var k=0;k<v3[i][j].length;k++){v3[i][j][k]=0;}}}v3[1][0][0]=2;v3[1][0][1]=null;v3[2][0][0]=1;v3[2][0][1]=0;v3[2][0][2]=2;v3[2][0][3]=1;v3[3][0][0]=1;v3[3][0][1]=0;v3[3][0][2]=1;v3[3][0][3]=2;v3[4][0][0]=1;v3[4][0][1]=1;v3[4][0][2]=4;v3[4][0][3]=2;v3[5][0][0]=1;v3[5][0][1]=2;v3[5][0][2]=2;v3[5][0][3]=4;v3[6][0][0]=1;v3[6][0][1]=2;v3[6][0][2]=1;v3[6][0][3]=2;v3[7][0][0]=1;v3[7][0][1]=3;v3[7][0][2]=4;v3[7][0][3]=2;function getEvent(e,s,f){return v3[e][s][f]}