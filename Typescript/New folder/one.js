setTimeout(function () {
    function fetchGreeting(name) {
        return "Hello ".concat(name);
    }
    fetchGreeting("Arsalan");
}, 2000);
function greetin(name1) {
    return (setTimeout(function () {
        console.log(name1);
    }, 2000));
}
greetin("rafay");
