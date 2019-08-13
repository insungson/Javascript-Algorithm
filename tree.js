//트리, tree
//https://www.youtube.com/watch?v=5cU1ILGy6dM  (가장 근접)
//https://www.youtube.com/watch?v=oSWTXtMglKE
//https://www.zerocho.com/category/Algorithm/post/580ed6eb77023c0015ee9686
//



var Tree = (function () {
    function Tree() {
        this.count = 0;
        this.root=null;
    }
    function Node(data) {
        this.data = data;
        this.left=null;
        this.right=null;
    }
    function _insert(root, node) {
        if (!root) return node;
        if (node.data < root.data) {
            root.left = _insert(root.left, node);
            return root;
        } else {
            root.right = _insert(root.right, node);
            return root;
        }
        return root;
    }
    Tree.prototype.add = function (data) {
        var node = new Node(data);
        if (this.count == 0) {
            this.root = node;
        } else {
            _insert(this.root, node);
        }
        return ++this.count;
    };
    function _get(data, node) {
        if (node) {
            if (data < node.data) {
                return _get(data, node.left);
            } else if (data > node.data) {
                return _get(data, node.right);
            } else {
                return node;
            }
        } else {
            return null;
        }
    }
    Tree.prototype.get = function (data) {
        if (this.root) {
            return _get(data, this.root);
        } else {
            return null;
        }
    };
    function _remove(root, data) {
        var newRoot, exchange, temp;
        if (!root) return false;
        if (data < root.data) {
            root.left = _remove(root.left, data);
        } else if (data > root.data) {
            root.right = _remove(root.right, data);
        } else {                 //여기까지 내려가면 이미 찾는 데이터와 
            if (!root.left) {
                newRoot = root.right; //root.right 에 null 값이 들어가고 이 값을 삭제할 위치에 넣어주면 없어진다.
                // root 메모리 정리
                return newRoot;  //null값을 리턴하게 된다.
            } else if (!root.right) {
                newRoot = root.left;
                // root 메모리 정리
                return newRoot;
            } else {
                exchange = root.left;
                while (exchange.right) exchange = exchange.right;
                temp = root.data;
                root.data = exchange.data;
                exchange.data = temp;
                root.left = _remove(root.left, exchange.data);  //여기서 null값을 받아 선택한 데이터 삭제한다.
            }
        }
        return root;
    }
    Tree.prototype.remove = function (key) {
        var node = _remove(this.root, key);
        if (node) {
            this.root = node;
            this.count--;
            if (this.count == 0) this.root = null;
        }
        return true;
    };
    return Tree;
})();



var tree = new Tree();
console.log(tree);
tree.add(5); // 1
console.log(tree);
tree.add(3); // 2
console.log(tree);
tree.add(4); // 3
console.log(tree);
tree.add(2); // 4
console.log(tree);
tree.add(7); // 5
console.log(tree);
tree.add(6); // 6
console.log(tree);
console.log(tree.root.left.data); // 3
console.log(tree.root.left.left.data); // 2;
console.log(tree.root.left.right.data); // 4
console.log(tree);
tree.remove(3);
console.log(tree.root.left.data);
console.log(tree);


//위의 3 삭제과정은 대략 아래의 과정으로 이뤄진다.

// remove 1)
//                          5
//                     3         7
//                  2    4    6

// remove 2)
//                          5
//                   \2         7
//                  3    4    6

// remove 3)
//                          5
//                     2         7
//                 \3    4    6

//                          5
//                     2         7
//               null    4    6
//            3