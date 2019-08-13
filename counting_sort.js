//계수 정렬(counting sort)
// 간단한 개념이해 (https://www.youtube.com/watch?v=7zuGmKfUt7s) : 여기서 사용할 코드와는 약간 다르다.

//방법은 매우 간단합니다. 모든 숫자의 개수를 센 후, 누적 합을 구하고, 다시 숫자를 넣어주면 됩니다

//예시
// [3,4,0,1,2,4,2,4], [개수를 저장할 공간], [결과]
// 개수를 저장할 공간을 정렬할 제일 큰 수의 갯수만큼 0으로 만들어줍니다.
// [3,4,0,1,2,4,2,4], [0,0,0,0,0], [결과]
// 처음부터 개수를 세어 저장합니다. 0은 1개, 1은 1개, 2는 2개, 3은 1개, 4는 3개네요.
// [3,4,0,1,2,4,2,4], [1,1,2,1,3], [결과]
// 개수를 저장한 것을 누적합으로 바꿔줍니다. 순서대로 1, 2, 4, 5, 8이 됩니다.
// [3,4,0,1,2,4,2,4], [1,2,4,5,8], [결과]
// 누적합을 바탕으로 숫자를 결과에 넣어줍니다. 0은 1에, 1은 2에, 2는 3~4에 3은 5에, 4는 6~8에 넣어주면 됩니다.
// [3,4,0,1,2,4,2,4], [1,2,4,5,8], [0,1,2,2,3,4,4,4]


var countingSort = function(array, k) {
    var count = [], result = [];
    for (var i = 0; i <= k; i++) { // 모든 숫자의 개수를 일단 0으로 초기화합니다.
      count[i] = 0;
    }
    console.log(count, result, array.length);
    for (var j = 0; j < array.length; j++) { // 숫자의 개수를 세어 저장합니다.
      count[array[j]] += 1;
    }
    console.log(count, result, k);
    for (i = 0; i < k ; i++) { // 누적합을 구합니다.
      count[i + 1] += count[i];
    }
    console.log(count, result);
    for (j = 0; j < array.length; j++) { // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를  집어넣습니다.
      console.log(array[j], count[array[j]] - 1);
      result[count[array[j]] - 1] = array[j];
      count[array[j]] -= 1;
    }
    console.log(count, result);
    return result;
  };
  // 배열에 큰 수가 들어갈 수록 메모리를 많이 잡아먹기 때문에 좋지 않습니다.
  countingSort([3,4,0,1,2,4,2,4], 4); // 4부분은 배열내에서 최대값을 찾는 방식으로 찾는것도 방법이다.
  // [0,1,2,2,3,4,4,4]