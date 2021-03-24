const generateMessage = (text, username = 'Admin') => {
    return {
        text,
        createdAt: new Date().getTime(),
        username
    }
}

const generateLocationMessage = (username, url) => {
    return {
        url,
        username,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}