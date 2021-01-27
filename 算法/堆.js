// 1、堆是一种特殊的完全二叉树
// 2、堆特性：所有节点都大于等于或小于等于其子节点
// 3、数组表示堆[1, 3, 6, 5, 9, 8]，数组key作为节点，值作为堆值
// 4、左侧子节点位置(index 为父节点的index) 2 * index + 1 ，右侧子节点位置(index 为父节点的index) 2 * index + 2 
// 5、父节点位置是（index - 1）/ 2
// 6、作用：堆能高效、快速的找到最大值与最小值（时间复杂度o1）

// 7、最小堆的实现（插入节点、删除节点、获取堆顶、获取长度）

// 找到数组中的第K个最大元素 leetcode 215

