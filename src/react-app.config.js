// react-app.config.js
module.exports = {
    workbox(options) {
        // should options be frozen?
        console.log(options)
        return options
    }
};
