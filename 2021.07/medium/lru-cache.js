// 连接：https://leetcode-cn.com/problems/lru-cache/

// 第一种 超出资源要求

// double linked list
function moveNodeToHead(dummyHead, currentNode) {
  const preview = currentNode.preview;
  const next = currentNode.next;
  preview.next = next;
  next.preview = preview;

  const head = dummyHead.next;
  head.preview = currentNode;
  currentNode.next = head;
  currentNode.preview = dummyHead;
  dummyHead.next = currentNode;
}

// double linked list
function deleteTailNode(dummyTail) {
  const tail = dummyTail.preview;
  const secondToLastNode = tail.preview;
  dummyTail.preview = secondToLastNode;
  secondToLastNode.next = dummyTail;

  return tail;
}

function addNewNodeToHead(dummyHead, value) {
  const newNode = new LinkNode(value, null, null);
  const head = dummyHead.next;
  newNode.preview = dummyHead;
  newNode.next = head;
  dummyHead.next = newNode;
  head.preview = newNode;

  return newNode;
}

function LinkNode(value, preview, next) {
  this.val = value;
  this.preview = preview;
  this.next = next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.hashMap = {};

  this.dummyHead = new LinkNode('head', null, null);
  this.dummyTail = new LinkNode('tail', null, null);
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.preview = this.dummyHead;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.hashMap[key]) {
    const result = this.hashMap[key].val;
    moveNodeToHead(this.dummyHead, this.hashMap[key]);

    return result;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.hashMap[key]) {
    this.hashMap[key].val = value;
    moveNodeToHead(this.dummyHead, this.hashMap[key]);
  } else {
    if (Object.keys(this.hashMap).length < this.capacity) {
      // 未超出最大容积
      const newNode = addNewNodeToHead(this.dummyHead, value);
      this.hashMap[key] = newNode;
    } else {
      // 已达到最大容积
      const originTailNode = deleteTailNode(this.dummyTail);
      Object.keys(this.hashMap).some((keyItem) => {
        if (this.hashMap[keyItem] === originTailNode) {
          delete this.hashMap[keyItem];
          return true;
        }

        return false;
      })

      const newNode = addNewNodeToHead(this.dummyHead, value);
      this.hashMap[key] = newNode;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 第二种 符合要求

class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.hash = {};
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.preview = this.dummyHead;
  }

  get(key) {
    const targetNode = this.hash[key];
    if (targetNode) {
      this.moveToHead(targetNode);
      return targetNode.value;
    }

    return -1;
  }

  put(key, value) {
    const targetNode = this.hash[key];

    if (targetNode) {
      targetNode.value = value;
      this.moveToHead(targetNode);
    } else {
      if (this.count === this.capacity) {
        this.removeLRUItem();
      }
      const newNode = new ListNode(key, value);
      this.hash[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    }
  }

  moveToHead(targetNode) {
    this.removeFormList(targetNode);
    this.addToHead(targetNode);
  }

  removeFormList(targetNode) {
    const previewNode = targetNode.preview;
    const nextNode = targetNode.next;
    previewNode.next = nextNode;
    nextNode.preview = previewNode;
  }

  addToHead(targetNode) {
    const head = this.dummyHead.next;
    targetNode.preview = this.dummyHead;
    targetNode.next = head;
    this.dummyHead.next = targetNode;
    head.preview = targetNode;
  }

  removeLRUItem() {
    const tailNode = this.popTail();
    delete this.hash[tailNode.key];
    this.count--;
  }

  popTail() {
    const tailNode = this.dummyTail.preview;
    this.removeFormList(tailNode);
    return tailNode;
  }
}

// 第三种，利用Map特性
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (val === undefined) return -1;

    this.map.delete(key); // 因为被用过一次，原有位置删除
    this.map.set(key, val); // 放入最下面表示最新使用
    return val;
  }

  put(key, val) {
    if (this.map.has(key)) this.map.delete(key); // 如果有，删除

    this.map.set(key, val); // 放到最下面表示最新使用

    if (this.map.size > this.capacity) {
      // 这里有个知识点
      // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
      // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
      this.map.delete(this.map.entries().next().value[0])
    }
  }
}