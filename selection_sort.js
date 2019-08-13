//선택 정렬(selection sort)
//선택 정렬은 배열을 처음부터 훑어서 가작 작은 수를 제일 앞에 가져다 놓습니다. 
//그 다음, 다시 배열을 훑어서 두 번째로 작은 수를 두 번째 칸에 가져다 놓습니다.
//계속 반복해서 끝까지 정렬합니다. 
//성능이 안 좋을 수밖에 없는 게, 배열을 한 번 훑었을때 숫자 하나밖에 정렬을 못 합니다

//예시를 보자
// [5,1,4,7,2,6,8,3] 배열을 처음부터 훑어 가장 작은 1을 앞으로 보냅니다.
// [1,\5,4,7,2,6,8,3] 다시 훑어 2를 앞으로 보냅니다.
// [1,2,\4,7,5,6,8,3] 3을 앞으로
// [1,2,3,\7,5,6,8,4]
// [1,2,3,4,5,\6,8,7]
// [1,2,3,4,5,6,\8,7]
// [1,2,3,4,5,6,7,8] 정렬 끝


var partition = function(array, left, right, pivotIndex) { // 정렬하는 부분(위치에 대한 정렬 메서드를 만듬)
    var temp;
    var pivot = array[pivotIndex];
    while (left <= right) { // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
      while (array[left] < pivot)
        left++;
      while (array[right] > pivot)
        right--;
      if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
        console.log('위치변환 중간단계1 left:',array[left],'(',left,')','pivot : ',array[pivotIndex],'(',pivotIndex,')',' right: ',array[right],'(',right,')',array);
        temp = array[left];
        array[left] = array[right];
        array[right] = temp; // 서로 바꿔줍니다.
        left++;
        right--;
      }
    }
    console.log('위치변환 중간단계2 left:',array[left],'(',left,')','pivot : ',array[pivotIndex],'(',pivotIndex,')',' right: ',array[right],'(',right,')',array);
    temp = array[left];
    array[left] = array[pivotIndex];
    array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
    console.log('        위치변환후 left:',array[left],'(',left,')','pivot : ',array[pivotIndex],'(',pivotIndex,')',' right: ',array[right],'(',right,')',array);
    return left;
  };
  
  var quickSort = function(array, left, right) { // 재귀하는 부분
    console.log('전체 : ',array,'피봇 : ',right?array[right]:array[array.length - 1]);
    if (!left) left = 0;
    if (!right) right = array.length - 1;
    var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
    console.log('        위치변환전 left:',array[left],'(',left,')','pivot : ',array[pivotIndex],'(',pivotIndex,')',' right: ',array[right - 1],'(',right - 1,')',array);
    pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
    console.log(' 새로운세팅 left: ',array[left],'(',left,')','pivot : ',array[pivotIndex],'(',pivotIndex,')',' right: ',array[right],'(',right,')');
    console.log(array);
    if (left < pivotIndex - 1){ //left<right 로 이해하면 쉽다.
      console.log('왼쪽진행>>>>>>>');
      quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
      console.log('왼쪽 실행끝 ');
    }
    if (pivotIndex + 1 < right){ //left<right 로 이해하면 쉽다.
      console.log('<<<<<<<<<<<오른쪽진행')
      quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
      console.log('오른쪽 실행끝 ');
    }
    console.log('전체실행!!');
    return array;
  };  
  
  console.log('결과 : ',quickSort([4,1,7,6,3,8,2,5]));
 // [1,2,3,4,5,6,7,8]



/////////////////////////////////////////////////////
//아래는 내가 나름 분석하고 중간중간에 넣은 로그 코드이다. 이걸 보면 알고리즘이 이해가 될 것이다.
//  전체 :  [ 4, 1, 7, 6, 3, 8, 2, 5 ] 피봇 :  5
//  위치변환전 left: 4 ( 0 ) pivot :  5 ( 7 )  right:  2 ( 6 ) [ 4, 1, 7, 6, 3, 8, 2, 5 ]
// 위치변환 중간단계1 left: 7 ( 2 ) pivot :  5 ( 7 )  right:  2 ( 6 ) [ 4, 1, 7, 6, 3, 8, 2, 5 ]
// 위치변환 중간단계1 left: 6 ( 3 ) pivot :  5 ( 7 )  right:  3 ( 4 ) [ 4, 1, 2, 6, 3, 8, 7, 5 ]
// 위치변환 중간단계2 left: 6 ( 4 ) pivot :  5 ( 7 )  right:  3 ( 3 ) [ 4, 1, 2, 3, 6, 8, 7, 5 ]
//  위치변환후 left: 5 ( 4 ) pivot :  6 ( 7 )  right:  3 ( 3 ) [ 4, 1, 2, 3, 5, 8, 7, 6 ]
// 새로운세팅 left:  4 ( 0 ) pivot :  5 ( 4 )  right:  6 ( 7 )
// [ 4, 1, 2, 3, 5, 8, 7, 6 ]
// 왼쪽진행>>>>>>>
// 전체 :  [ 4, 1, 2, 3, 5, 8, 7, 6 ] 피봇 :  3
//  위치변환전 left: 4 ( 0 ) pivot :  3 ( 3 )  right:  2 ( 2 ) [ 4, 1, 2, 3, 5, 8, 7, 6 ]
// 위치변환 중간단계1 left: 4 ( 0 ) pivot :  3 ( 3 )  right:  2 ( 2 ) [ 4, 1, 2, 3, 5, 8, 7, 6 ]
// 위치변환 중간단계2 left: 4 ( 2 ) pivot :  3 ( 3 )  right:  1 ( 1 ) [ 2, 1, 4, 3, 5, 8, 7, 6 ]
//  위치변환후 left: 3 ( 2 ) pivot :  4 ( 3 )  right:  1 ( 1 ) [ 2, 1, 3, 4, 5, 8, 7, 6 ]
// 새로운세팅 left:  2 ( 0 ) pivot :  3 ( 2 )  right:  4 ( 3 )
// [ 2, 1, 3, 4, 5, 8, 7, 6 ]
// 왼쪽진행>>>>>>>
// 전체 :  [ 2, 1, 3, 4, 5, 8, 7, 6 ] 피봇 :  1
//  위치변환전 left: 2 ( 0 ) pivot :  1 ( 1 )  right:  2 ( 0 ) [ 2, 1, 3, 4, 5, 8, 7, 6 ]
// 위치변환 중간단계2 left: 2 ( 0 ) pivot :  1 ( 1 )  right:  undefined ( -1 ) [ 2, 1, 3, 4, 5, 8, 7, 6 ]
//  위치변환후 left: 1 ( 0 ) pivot :  2 ( 1 )  right:  undefined ( -1 ) [ 1, 2, 3, 4, 5, 8, 7, 6 ]
// 새로운세팅 left:  1 ( 0 ) pivot :  1 ( 0 )  right:  2 ( 1 )
// [ 1, 2, 3, 4, 5, 8, 7, 6 ]
// 전체실행!!
// 왼쪽 실행끝
// 전체실행!!
// 왼쪽 실행끝
// <<<<<<<<<<<오른쪽진행
// 전체 :  [ 1, 2, 3, 4, 5, 8, 7, 6 ] 피봇 :  6
//  위치변환전 left: 8 ( 5 ) pivot :  6 ( 7 )  right:  7 ( 6 ) [ 1, 2, 3, 4, 5, 8, 7, 6 ]
// 위치변환 중간단계2 left: 8 ( 5 ) pivot :  6 ( 7 )  right:  5 ( 4 ) [ 1, 2, 3, 4, 5, 8, 7, 6 ]
//  위치변환후 left: 6 ( 5 ) pivot :  8 ( 7 )  right:  5 ( 4 ) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// 새로운세팅 left:  6 ( 5 ) pivot :  6 ( 5 )  right:  8 ( 7 )
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// <<<<<<<<<<<오른쪽진행
// 전체 :  [ 1, 2, 3, 4, 5, 6, 7, 8 ] 피봇 :  8
//  위치변환전 left: 7 ( 6 ) pivot :  8 ( 7 )  right:  7 ( 6 ) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// 위치변환 중간단계2 left: 8 ( 7 ) pivot :  8 ( 7 )  right:  7 ( 6 ) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//  위치변환후 left: 8 ( 7 ) pivot :  8 ( 7 )  right:  7 ( 6 ) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// 새로운세팅 left:  7 ( 6 ) pivot :  8 ( 7 )  right:  8 ( 7 )
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// 전체실행!!
// 오른쪽 실행끝
// 전체실행!!
// 오른쪽 실행끝
// 전체실행!!
// 결과 :  [ 1, 2, 3, 4, 5, 6, 7, 8 ]