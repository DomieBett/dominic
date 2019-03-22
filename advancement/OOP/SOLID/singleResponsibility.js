/**
 * BAD
 * ----
 * Class that doesnt have a single responsiblity
 */
class SocialMedia {
    constructor() { }

    loginUser(userId) {
        //
    }

    sendMessage(message, recepient) {
        // Sends messages to another user
    }

    postStatus(status) {
        // Posts status publicly
    }
}


/**
 * GOOD
 * ----
 * Example of code that follows the Single Responsibility
 * principle
 */
class UserAuth {
    constructor() { }

    loginUser(userId) {
        // Logins in a user with the ID provided
    }
}

class Message {
    constructor() { }

    send(message, recepient) {
        // Sends message to user
    }
}

class Status {
    constructor() { }

    post() {

    }
}
