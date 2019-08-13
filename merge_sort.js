//합병 정렬은 분할 정복 알고리즘에 속합니다.
//분할 정복이란 어떤 문제를 그대로 해결할 수 없을 때, 작은 문제로 분할해서 푸는 방법을 말합니다. 
//합병 정렬은 배열을 두 개로 나누고, 나눈 것을 다시 두 개로 계속 나눠 정렬합니다.
//
//예시를 보자 (아래의 과정으로 배열이 완성된다)
// [6,5,3,1,8,7,2,4]

// [6,5,3,1]      [8,7,2,4]

// [6,5]   [3,1]   [8,7]   [2,4]

// [6]   [5]   [3]   [1]   [8]   [7]   [2]   [4]

// [5,6]  [1,3]  [7,8]  [2,4]
// ///////////////////////////////////여기서부터가 핵심
// [5,6]  [,3]  [7,8]  [,4]  //array[0] vs array[0] 비교후 빈 객체에 넣음
// [1]  [2]

// [5,6]  [,]  [7,8]  [,] //array[0] vs array[1] 비교후 빈 객체에 넣음
// [1,3]  [2,4]

// [,6]  [,]  [,8]  [,] //array[1] VS array[1] (빈객체에 넣은 배열, 3,4 를 의미) 비교후 빈 객체에 넣음
// [1,3,5]  [2,4,7]

// [,]  [,]  [,]  [,] 
// [1,3,5,6]  [2,4,7,8]
// ////////////////////////////////////////
// [,3,5,6]  [2,4,7,8] //array[0] VS array[0] 비교후 빈 객체에 넣음
// [1]

// [,3,5,6]  [,4,7,8] //array[1] VS array[0] 비교후 빈 객체에 넣음
// [1,2]

// [,,5,6]  [,4,7,8] //array[1] VS array[1] 비교후 빈 객체에 넣음
// [1,2,3]

// [,,5,6]  [,,7,8] //array[2] VS array[1] 비교후 빈 객체에 넣음
// [1,2,3,4]

// [,,,6]  [,,7,8] //array[2] VS array[1] 비교후 빈 객체에 넣음
// [1,2,3,4,5]

// [,,,]  [,,7,8] //array[3] VS array[2] 비교후 빈 객체에 넣음
// [1,2,3,4,5,6(비교)]

// [,,,]  [,,,8] //array[3] VS array[2] 비교후 빈 객체에 넣음
// [1,2,3,4,5,6(비교),7]

// [,,,]  [,,,] //array[3] VS array[3] 비교후 빈 객체에 넣음
// [1,2,3,4,5,6(비교),7,8]


var mergeSort = function(array){
    if(array.length<2){return array};
    var pivot = Math.floor(array.length/2);
    var left = array.slice(0,pivot);
    var right = array.slice(pivot,array.length);
    return merge(mergeSort(left),mergeSort(right));
}
var merge = function(left, right){
    var result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){result.push(left.shift())};
    while(right.length){result.push(right.shift())};
    return result;
}
console.log(mergeSort([5,2,4,7,6,1,3,8]));