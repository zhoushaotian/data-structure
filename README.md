# 数据结构与算法
## todo:  
### 链表
### 二叉树  
1. 第i层最多的节点数  
2^(i-1)
2. 深度为k的树至多节点数  
(2^k)-1
3.终端节点数n和度为2的节点数k关系  
n=k+1
4. 什么是满二叉树和完全二叉树  
深度为k且节点数为(2^k)-1的树是满二叉树。深度为k，节点数为n的二叉树，当且仅当每一个节点都与深度为k的满二叉树中的节点序号对应的时候称为完全二叉树，
### 队列
### 堆
1. 什么是堆 
类似满二叉树结构的数组，这个满二叉树满足以下条件: 
- 任意父节点的值总是大于等于(小于等于)子节点  
- 任意子树也构成一个堆  
其中父节点值大于等于子节点的称为最大堆，反之称为最小堆。  
2. 节点编号与数组索引的关系  
由于是满二叉树，则节点编号与数组索引(以0为首序)有以下关系:  
设父节点的数组索引为index,则:  
左子树的索引为: index*2+1  
右子树的索引为: 2*(index+1)  
3. 堆排序  
三个重要的步骤: 
- 构造最大堆  
初始化数组，将数组构造为一个最大堆，这里从最后一个非叶子节点开始构造，即采用自底向上的方式开始构造。最后一个非叶子节点的索引为 
Math.floor(arr.length/2)-1.   
```js

// index 指向当前构造节点的索引
    function heap(arr, index, size) {
        let max,left,right;
        while(true) {
            max = index;
            left = 2*max + 1;
            right = 2*(max + 1);
            if(left < size && arr[index] < arr[left]) {
                max = left;
            }
            if(right < size && arr[max] < arr[right]) {
                max = right;
            }
            if(max !== index){
                swap(arr, max, index);
                index = max;
            }else{
                break;
            }
        }
    }
    function buildHeap(arr) {
        let parent = Math.floor(arr.length / 2) - 1;
        for(let i = parent; i>=0; i--) {
            heap(arr, i, arr.length);
        }
    }
```
- 堆顶元素和尾部元素交换  
构造完最大堆之后，只需要不断从数组顶部取出最大数与数组底部的数交换，然后调整新的数组。这里注意每次交换之后尾部的数不再参与堆的调整。  
- 最大堆调整 
```js
    for(let i = arr.length-1; i>0; i--) {
        swap(arr, 0, i);
        heap(arr, 0, i);
    }
```
4. 堆排序的时间复杂度  
任何情况下的时间复杂度都为 o(nlogn)
### 栈
