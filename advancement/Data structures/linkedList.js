class LinkedList {
    constructor(data = null) {
        this.head = data ? new Node(data) : data;
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
        }

        const previousNode = this.getAt(index - 1);

        if (previousNode) {
            let newNode = new Node(data, previousNode.next);
            previousNode.next = newNode;
        } else {
            this.append(data);
        }
    }

    prepend(data) {
        this.head = new Node(data, this.head);
    }

    append(data) {
        const newNode = new Node(data);
        newNode.next = null;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        node.next = newNode;
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


let list = new LinkedList();
list.append(20);
console.log(list);
