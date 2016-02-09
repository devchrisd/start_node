// We should keep in mind that by default, require caches the object that
// is returned. So, if we need two different instances, we should export
// a function.
module.exports = function() {
    var name = "Item";

    return {
        itemSet: function( number ) {
            name = 'This is the item content' + number + '<br />';
        },
        itemGet: function() {
            return name;
        }
    }
}