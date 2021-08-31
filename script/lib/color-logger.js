function Logger() {
    if (!this.init) {
        Logger.prototype.init = true;

        const colors = {
            green: '#80ff00',
            red: '#ff4000',
            orange: '#ffbf00',
            yellow: '#ffff00',
            blue: '#00bfff',
        };
        for (let key in colors) {
            Logger.prototype[key] = function (...args) {
                console.log(colors[key], ...args);
            };
        }
    }
}

module.exports = Logger;