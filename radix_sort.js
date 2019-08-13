//기수 정렬(radix sort)
//https://www.youtube.com/watch?v=YXFI4osELGU&t=228s  원리는 여기서 보자


//[125,383,274,96,0,9,81,72]
//기존의 배열을 이해하기 쉽게 000으로 세자릿수를 맞춘다.
////[125,383,274,096,000,009,081,072]

//1)단계
//위의 배열을 일의 자리만 비교해서 같은 숫자에 넣는다.
// 0: 000,
// 1: 081,
// 2: 072,
// 3: 383,
// 4: 274,
// 5: 125,
// 6: 096,
// 7: 
// 8: 
// 9: 009
//이제 위의 배열을 순서대로 하나의 배열에 합쳐보자
//[000,081,072,383,274,125,096,009]
//2)단계 
//이제 십의 자리를 비교해서 다시 같은 숫자에 넣어보자
// 0: 000, 009
// 1: 
// 2: 125
// 3: 383
// 4: 
// 5: 
// 6: 
// 7: 072, 274
// 8: 081
// 9: 096
//이제 위의 배열을 순서대로 하나의 배열에 합쳐보자
//[000,009,125,383,072,274,081,096]
//3)단계
//이제 백의 자리를 비교해서 다시 같은 숫자에 넣어보자
// 0: 000, 009, 072, 081, 096
// 1: 125
// 2: 274
// 3: 383
// 4: 
// 5: 
// 6: 
// 7: 
// 8: 
// 9: 
//이제 위의 배열을 순서대로 하나의 배열에 합쳐보자
//[000,009,072,081,096,125,274,383]


var counter = [[]];
var radixLSD = function(array,d){
    var mod = 10;
    for(let i =0; i<d; i++, mod *= 10){
        for(let j=0; j<array.length; j++){
            var bucket = parseInt(array[j]%mod);
            if(counter[bucket] == null){
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]);
            console.log('bucket',bucket,counter[bucket]);
        }
        console.log('slice:', counter.slice(0));
        var pos =0;
        for(let k=0; k<counter.length; k++){
            if(counter[k] != null){
                var value = null;
                while((value = counter[k].shift()) !=null ){
                    array[pos++]=value;
                }
            }
        }
        console.log(array);
    }
    return array;
}

radixLSD([125,383,274,96,0,9,81,72], 3); // [0,9,72,81,96,125,274,383]




// var counter = [[]];
// var radixLSD = function(array, d) { //d는 자릿수를 나타낸다
//   var mod = 10;
//   for (var i = 0; i < d; i++, mod *= 10) { // mod는 현재 정렬 중인 자리수를 나타내는 것으로 10부터 해서 100, 1000, ...으로 커집니다.
//     for (var j = 0; j < array.length; j++) {
//       var bucket = parseInt(array[j] % mod); // 같은 그룹으로 묶일 나머지를 나타내는 부분입니다.
//       if (counter[bucket] == null ) {
//         counter[bucket] = [];
//       }
//       counter[bucket].push(array[j]); // 나머지 별로 묶어줍니다.
//       console.log('bucket', bucket, counter[bucket]);
//     }
//     console.log('slice:',counter.slice(0));
//     var pos = 0;
//     for (var j = 0; j < counter.length; j++) { // counter에 저장한 묶음들(나머지 순서로 정렬됨)을 실제 배열에 반영해줍니다.
//       var value = null ;
//       if (counter[j] != null ) {
//         while ((value = counter[j].shift()) != null ) {
//           array[pos++] = value;
//         }
//       }
//     }
//     console.log(array);
//   }
//   return array;
// }
// radixLSD([125,383,274,96,0,9,81,72], 3); // [0,9,72,81,96,125,274,383]