//큐, queue
//https://www.youtube.com/watch?v=wjI1WNcIntg  큐 설명
//큐는 실생활에서 줄이라고 생각하시면 됩니다. 우리가 순서를 기다릴 때 줄을 서죠? 
//새로 온 사람은 줄 맨 뒤에 서고, 제일 앞 사람은 필요한 행동을 한 후 빠집니다

// 자바스크립트의 배열로 따지면 push(enqueue)와 shift(dequeue) 메소드만 있는 거라고 생각하시면 됩니다.
//거기에 추가로 제일 앞의 데이터를 알 수 있는 front가 있습니다.



var Queue = (function () {
    function Queue() {
        this.count = 0;
        this.head = null;       //처음을 가르키는 포인터
        this.rear = null;       //끝을 가르키는 포인터
    }
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    Queue.prototype.enqueue = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.rear.next = node;  //!!!! prototype으로 함수를 만들기 때문에 this.head.next도 추가된다.
        }                       
        this.rear = node;           //여기서 rear에 node를 추가한다. node{data:data,next:null} 이므로 
        return ++this.count;        //this.head.next에는 추가가 되지만, rear는 node의 data만 남는다.
    };
    Queue.prototype.dequeue = function () {
        if (!this.head) { // stack underflow 방지
            return false;
        }
        var data = this.head.data;
        this.head = this.head.next;
        // this.head 메모리 클린
        --this.count;
        return data;
    };
    Queue.prototype.front = function () {
        return this.head && this.head.data;
    };
    return Queue;
})();



var queue = new Queue();
console.log(queue);
queue.enqueue(1); // 1
console.log(queue);
queue.enqueue(3); // 2
console.log(queue);
queue.enqueue(5); // 3
console.log(queue);
queue.enqueue(7); // 4
console.log(queue);
console.log(queue.front());//1
queue.dequeue(); // 1
console.log(queue.front());//3
console.log(queue);



// Queue { head: null, rear: null, count: 0 }
// Queue {
//   head: Node { data: 1, next: null },
//   rear: Node { data: 1, next: null },
//   count: 1 }
// Queue {
//   head: Node { data: 1, next: Node { data: 3, next: null } },
//   rear: Node { data: 3, next: null },
//   count: 2 }
// Queue {
//   head: Node { data: 1, next: Node { data: 3, next: [Object] } },
//   rear: Node { data: 5, next: null },
//   count: 3 }
// //앞에 queue 제거
// Queue {
//   head: Node { data: 3, next: Node { data: 5, next: null } },
//   rear: Node { data: 5, next: null },
//   count: 2 }