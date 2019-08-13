//스택, stack
//스택은 연결 리스트인데 뒤로 넣고 뒤로만 뺄 수 있습니다. 
//앞으로는 넣지도, 빼지도 못합니다. 
//쉽게 생각하면 자바스크립트 배열인데 shift, unshift 없이 push와 pop만 있다고 생각하시면 됩니다. 
//사실 push와 pop이라는 메소드 이름이 스택에서 나온 겁니다. 

function a(data){
    b(data+1);
}
function b(data){
    c(data+1);
}
function c(data){
    console.log('스택이 내부적으로 사용되었습니다.'+data);
}
a(1);//스택이 내부적으로 사용되었습니다.3

//a 안에서 b가, b 안에서 c가 호출되는데요. 
//스택 메모리 안에는 [a, b, c]이렇게 호출된 순서대로 쌓이고(push), c, b, a 순서(pop)대로 실행됩니다.
//그래서 c가 실행된 후, b가 실행되고 마지막으로 a가 실행됩니다. 
//각 함수는 일정 메모리를 차지하기 때문에 스택 메모리 안에 너무 많이 쌓이면 메모리 에러가 발생합니다.


function d(data){
    if(data == 50){
        console.log('재귀 함수의 스택입니다', data);
    }else{
        d(data+1);
    }
}
d(1);//재귀 함수의 스택입니다 50

//재귀 함수의 경우는 역시 호출되는 순서대로 쌓이는데 [d, d, d, d, ...] 이렇게 50번 쌓이고, 거꾸로 실행됩니다.
//만약 위처럼 50으로 제한을 두지 않았다면 스택 메모리가 다 찰 때까지 계속 쌓이다가 
//결국 stack overflow로 프로그램이 멈추고 맙니다.

var Stack = (function(){
    function Stack(){
        this.top=null; //top은 포인터느낌.. 현재 가르키는 위치
        this.count=0;
    }
    function Node(data){
        this.data = data;
        this.next = null;
    }
    Stack.prototype.push = function(data){
        var node = new Node(data);
        node.next = this.top;
        this.top = node; //새로 추가한 것을 포인트로 지정한다. 위에 계속 쌓인다.
        return ++this.count;
    };
    Stack.prototype.pop = function(){
        if(!this.top){ // stack underflow 방지
            return false;
        }
        var data = this.top.data;
        this.top = this.top.next;
        // 예전 this.top의 메모리 정리
        this.count--;
        return data;
    };
    Stack.prototype.stackTop = function(){
        return this.top.data;
    };
    return Stack;
})();

var stack = new Stack();
stack.push(1); // 1
stack.push(3); // 2
stack.push(5); // 3
console.log(stack.stackTop());//5
stack.pop(); // 5
console.log(stack.stackTop());//3