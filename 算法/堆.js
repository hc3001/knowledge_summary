// 1、堆是一种特殊的完全二叉树
// 2、堆特性：所有节点都大于等于或小于等于其子节点
// 3、数组表示堆[1, 3, 6, 5, 9, 8]，数组key作为节点，值作为堆值
// 4、左侧子节点位置(index 为父节点的index) 2 * index + 1 ，右侧子节点位置(index 为父节点的index) 2 * index + 2 
// 5、父节点位置是（index - 1）/ 2
// 6、作用：堆能高效、快速的找到最大值与最小值（时间复杂度o1）

// 7、最小堆的实现（插入节点、删除节点、获取堆顶、获取长度）时间复杂度o(n*logk)
class MinHeap {
    constructor() {
        this.heap = []
    }
    swap(parentIndex, index) {
        let temp = this.heap[parentIndex]
        this.heap[parentIndex] = this.heap[index]
        this.heap[index] = temp
    }
    getParentIndex(index) {
        let t = Math.floor((index - 1) / 2)
        return t
    }
    shiftUp(index) {
        if(index == 0) {
            return
        }
        const parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    getLeftIndex(index) {
        const t = 2 * index + 1 
        return t
    }
    getRightIndex(index) {
        const t = 2 * index + 2 
        return t
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if(this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        } 
        if(this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    delete() {
        const l = this.heap.pop()
        this.heap[0] = l
        this.shiftDown(0)
    }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.insert(8)
h.delete()
console.log(h.heap)


// 找到数组中的第K个最大元素 leetcode 215

