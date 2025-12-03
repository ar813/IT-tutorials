setTimeout(() => {
    function fetchGreeting(name: any) {
        return `Hello ${name}`
    }
    console.log(fetchGreeting("Arsalan"))
}, 2000)



function greetin(name1) {
    return (
        setTimeout(() => {
            console.log(name1);

        }, 2000)
    )
}

greetin("rafay")