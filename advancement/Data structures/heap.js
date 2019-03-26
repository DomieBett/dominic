class Heap {
    constructor() {
        this.items = [];
    }

    swap(index1, index2) {
        var temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return (index * 2) + 1;
    }

    rightChildIndex(index) {
        return (index * 2) + 2;
    }

    parent(index) {
        return this.items[this.parentIndex(index)];
    }

    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    root() {
        return this.items[0];
    }
}

class MaxHeap extends Heap {
    constructor() {
        super();
    }

    add(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    bubbleUp() {
        var index = this.items.length - 1;

        while(this.parent(index) && this.parent(index) < this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
}

class MinHeap extends Heap {
    constructor() {
        super();
    }

    add(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    bubbleUp() {
        var index = this.items.length - 1;

        while(this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
}
