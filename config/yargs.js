const argv = require('yargs').options({
    location : {
        alias : 'd',
        description : 'Location',
        demand : true
    }
})
.help()
.argv

module.exports = {
    argv
}