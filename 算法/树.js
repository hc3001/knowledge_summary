// //1、树的遍历包含，深度优先遍历和广度优先遍历
// // 广度优先遍历
// var tree = {
//     value: 'a',
//     children: [
//         {
//             value: 'b',
//             children: [
//                 {
//                     value: 'd',
//                     children: []
//                 },
//                 {
//                     value: 'e',
//                     children: []
//                 }
//             ]
//         },
//         {
//             value: 'c',
//             children: [
//                 {
//                     value: 'f',
//                     children: []
//                 },
//                 {
//                     value: 'g',
//                     children: []
//                 }
//             ]
//         }
//     ]
// }

// var bfs = function(tree) {
//     var arr = [tree]
//     while(arr.length > 0) {
//         var n = arr.shift()
//         console.log(n.value)
//         n.children.forEach(item => {
//             arr.push(item)
//         })
//     }
// }
// bfs(tree)

// // 深度优先遍历
// var dfs = function(tree) {
//     console.log(tree.value)
//     tree.children.forEach(dfs)
// }

// dfs(tree)

const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null,
            },
            right: {
                val: 9,
                left: null,
                right: null,
            },
        },
        right: {
            val: 5,
            left: null,
            right: null,
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    }
}

// // 先序遍历递归版本（根左右）
// var recPreOrder = function(tree) {
//     if(!tree) { return }
//     console.log(tree.val)
//     recPreOrder(tree.left)
//     recPreOrder(tree.right)
// }
// recPreOrder(bt)

// // 先序遍历非递归版本（根左右）
// var preOrder = function(tree) {
//     let stack = [tree]
//     while(stack.length) {
//         let n = stack.pop()
//         console.log(n.val)
//         if(n.right) stack.push(n.right)
//         if(n.left) stack.push(n.left)
//     }
// }
// preOrder(bt)

// // 中序遍历递归版本（左根右）
// var recInorder = function(tree) {
//     if(!tree) { return }
//     recInorder(tree.left)
//     console.log(tree.val)
//     recInorder(tree.right)
// }

// recInorder(bt)

// // 中序遍历非递归版本（左根右）
// var inOrder = function(tree) {
//     var p = tree
//     var stack = []
//     while(p || stack.length) {
//         while(p) {
//             stack.push(p)
//             p = p.left
//         }
//         var n = stack.pop()
//         console.log(n.val)
//         p = n.right
//     }
// }
// inOrder(bt)


//后续遍历递归版本（左右根）
var recLastorder = function(tree) {
    if(!tree) { return }
    recLastorder(tree.left)
    recLastorder(tree.right)
    console.log(tree.val)
}
recLastorder(bt)

//后续遍历非递归版本
var lastOrder = function(tree) {
    let stack = [tree] 
    let p = []
    while(stack.length) {
        let n = stack.pop()
        p.push(n)
        if(n.left) stack.push(n.left)
        if(n.right) stack.push(n.right)
    }
    console.log(p)
    while(p.length) {
        let t = p.pop()
        if(t.val) {
            console.log(t.val)
        }
    }
}
lastOrder(bt)


