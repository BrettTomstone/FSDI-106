function sayHello()
{
    console.log("Hello there");
}

function sayGoodbye(name,lastname){
    console.log("Goodbye! "+name+" "+lastname);
    var color = "blue";
}

function init()
{
    console.log("Hello World");
    sayHello();
    let x = "Brett";
    sayGoodbye(x,"TomStone");
}

window.onload = init;


