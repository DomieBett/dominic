class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }

    insert(value) {
        if (!this.value) {
            this.value = value;
        } else if (value < this.value) {
            if (!this.left) this.left = new BinarySearchTree(value);
            else this.left.insert(value);
        } else if (value > this.value) {
            if (!this.right) this.right = new BinarySearchTree(value);
            else this.right.insert(value);
        } else {
            this.count += 1;
        }
    }

    contains(value) {
        if (this.value === value) {
            return this;
        }

        if (value < this.value) {
            if (!this.left) return false;
            else return this.left.contains(value);
        } else {
            if (!this.right) return false;
            else return this.right.contains(value);
        }
    }

    getMinValue() {
        if (this.left) {
            return this.left.getMinValue();
        } else {
            return this.value;
        }
    }

    getMaxValue() {
        if (this.right) {
            return this.right.getMaxValue();
        } else {
            return this.value;
        }
    }
}
