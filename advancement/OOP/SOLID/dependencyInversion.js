class Order {
    constructor(customerId) {
        this.customerId = customerId;
        this.items = [];
    }

    addItem() {
        // Add an item to the order
    }
}

/**
 * WRONG
 */
class OrderManager {
    constructor() {
        this.orderUploader = new OrderUploader();
    }

    uploadOrder(order) {
        this.orderUploader.upload(order);
    }
}

class OrderUploader {
    constructor() { }

    upload() {
        // upload order to server
    }
}

const orderManager = new OrderManager();
orderManager.uploadOrder(new Order(1));

/**
 * RIGHT
 */
class OrderManager {
    constructor(orderUploader) {
        this.orderUploader = orderUploader;
    }

    uploadOrder(order) {
        this.orderUploader.upload(order);
    }
}

class OrderUploader {
    constructor() { }

    upload() {
        // upload order to server
    }
}

const orderUploader = new OrderUploader();
const orderManager = new OrderManager(orderUploader);
orderManager.uploadOrder(new Order(1));
