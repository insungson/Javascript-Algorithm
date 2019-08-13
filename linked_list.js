//연결 리스트, linked list
//https://www.youtube.com/watch?v=njTh_OwMljA  기본적인 방법이 나와있다.
//
//기본 개념은 [] -> [] -> [] -> []   이런식으로 처음 부분이 다음 부분을 가르키는 것이다.
//이렇게 이으려면 기본적으로 처음값(head),다음값(next),현재의 데이터값(data) 가 있어야 한다.
//(여기서의 예제는 length를 넣어길이개념까지 넣었다.)
//예를 들면 
//1) 추가하는 방법은 
// (헤드,다음,데이터)[] -> [] -> [] --> [](추가예정)
// head: 현재노드, next: 추가할 노드[]를 가르킴, data: 노드에 넣을 숫자
//while, if문으로 next가 없을때까지 반복해서 현재 위치를 찾아서 추가하면 된다.
//2) 노드찾는 방법은
// 카운트 인자를 하나만들어서 숫자를 증가시키고 그에 맞게 노드를 선택하면 된다.
//3) 노드삭제 방법은
// [] -> [] -> |[]|(삭제할노드) -> []
//          -------------------->
//삭제할 노드를 뛰어넘어서 next를 다음을 넘기면 된다.


var LinkedList = (function() {
    function LinkedList() {
      this.length = 0;   //노드의 길이 설정
      this.head = null;  //시작위치설정
    }
    function Node(data) {
      this.data = data;  //데이터를 널는다.
      this.next = null;  //다음을 가르키는 포인터 기능(실제론 생성한 노드를 next 프로퍼티에 넣는다.)
    }
    LinkedList.prototype.add = function(value) {
      var node = new Node(value);
      var current = this.head;
      if (!current) { // 현재 아무 노드도 없으면
        this.head = node; // head에 새 노드를 추가합니다.
        this.length++;
        return node;
      } else { // 이미 노드가 있으면
        while(current.next) { // 마지막 노드를 찾고.
          current = current.next;
        }
        current.next = node; // 마지막 위치에 노드를 추가합니다.
        this.length++;
        return node;
      }
    };
    LinkedList.prototype.search = function(position) {
      var current = this.head;
      var count = 0;
      while (count < position) { // position 위치만큼 이동합니다.
        current = current.next;
        count++;
      }
      return current.data;
    };
    LinkedList.prototype.remove = function(position) {
      var current = this.head;
      var before;
      var remove;
      var count = 0;
      if (position == 0) { // 맨 처음 노드를 삭제하면
        remove= this.head;
        this.head = this.head.next; // head를 두 번째 노드로 교체
        this.length--;
        return remove;
      } else { // 그 외의 다른 노드를 삭제하면
        while (count < position) {
          before = current;
          count++;
          current = current.next;
        }
        remove = current;
        before.next = remove.next;
        // remove 메모리 정리
        this.length--;
        return remove;
      }
    };
    return LinkedList;
  })();

  var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.length; // 3
list.search(0); // 1
list.search(2); // 3
list.remove(3);
list.length; // 2
console.log(list);



// 전체 :::::
// LinkedList {
//   length: 6,
//   head: Node { data: 1, next: Node { data: 2, next: Node{ data:3, next: Node{data:4, next: Node{data:5, next: Node{data:6, next: null } } } } } } 
// }

// position 3을 입력할 때
// count 3 일때 상황

// Before ::::
//   head: Node{ data:3, next: Node{data:4, next: Node{data:5, next: Node{data:6, next: null } } } } 

// Current ::::
//   head: Node{ data:4, next: Node{data:5, next: Node{data:6, next: null } } }  

// remove ::::
//   head: Node{ data:4, next: Node{data:5, next: Node{data:6, next: null } } }  

// 위의 상태에서 
// before.next = remove.next;   이 코드를 넣어서 이으면 data:4 가 빠지게 된다.




// 0 1 2   3 
// 1 2 \3 4

// 0 1   2
// 1 b2 c3

// r=c3
// b.n=c3.n