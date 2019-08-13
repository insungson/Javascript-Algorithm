
var star = function(num){
    var k ='';
    for(let i=0; i<num; i++){
        for(let j=0;j<=i;j++){
            k += '*';
        };
        k += '\n';
    };
    return k;
}
console.log(star(4));

///*
//***
/*****
*******
//별문제는 위와 같이 그림을 그려놓고 알고리즘 짜기*/

var star1 = function(num){
    let jk = '';
    for(let i=0; i<num; i++){
        for(let k=num-1;k>i;k--){
            jk += ' ';
        }
        for(let j=0;j<=2*i;j++){ //시작이 0일때는 012 이므로 3회반복되고, 시작이 1일때는 12 이므로 2회반복된다.
            jk += '*';
        }
        jk += '\n';
    }
    return jk;
}
console.log(star1(4));