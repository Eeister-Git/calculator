function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    if(b == 0){
        alert("dont divide by 0");
        return;
    }

    return a/b;
}

function operate(a, b, c){
    if( c === "+"){
        console.log(add(a,b));
    }
    else if ( c === "-"){
        console.log(sub(a,b));
    }
    else if ( c === "*"){
        console.log(mul(a,b));
    }
    else if ( c === "/"){
        console.log(sub(a,b));
    }
}

function display(){
    let screen = document.getElementsByClassName("screen")[0];
    let history = [];
    screen.innerHTML = "";

    $("button").click(function() {
        var fired_button = $(this).val();
        
        if (Number.isInteger(parseInt(fired_button)) == true){
            if(screen.innerHTML.length == 18){
                return
            }
            screen.innerHTML += fired_button.toString();
        }
        else{
            if (fired_button == "clear"){
                screen.innerHTML = ""
            }
            else if(fired_button == "backspace"){
                screen.innerHTML = screen.innerHTML.slice(0,-1);
            }
            else if(fired_button == "."){
                if(screen.innerHTML.includes(".")){
                    return
                }
                screen.innerHTML += "."
            }
            else{
                history.push(screen.innerHTML);
            }
        }
    });

}

display();