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
    a = parseFloat(a);
    b = parseFloat(b);
    if( c === "+"){
        return (add(a,b));
    }
    else if ( c === "-"){
        return (sub(a,b));
    }
    else if ( c === "*"){
        return (mul(a,b));
    }
    else if ( c === "/"){
        return (div(a,b));
    }
}

function display(){
    let screen = document.getElementsByClassName("screen")[0];
    let history = "";
    let operator = "";
    let operatortwo = "";
    screen.innerHTML = "";
    
    // window.addEventListener("keypress", function(e){
    //     console.log(e.key);

    //     if (Number.isInteger(parseInt(e.key)) == true){
    //         if(screen.innerHTML.length == 18){
    //             return
    //         }
    //         screen.innerHTML += e.key.toString();
    //     }
    // }); 

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
                screen.innerHTML = "";
                history = "";
                operator = "";
                operatortwo = "";
             }
            else if(fired_button == "backspace"){
                screen.innerHTML = screen.innerHTML.slice(0,-1);
            }
            else if(fired_button == "."){
                if(screen.innerHTML.includes(".")){
                    return;
                }
                screen.innerHTML += ".";
            }
            else if(fired_button == "="){
                if(history != ""){
                    screen.innerHTML = operate(history, screen.innerHTML, operator);
                    operator = "";
                }
            }
            else{
                if(operator == ""){
                    operator = fired_button;
                    history = screen.innerHTML;
                    screen.innerHTML = "";
                    console.log("hey" + operator)
                }
                else{
                    console.log(history, screen.innerHTML);
                    screen.innerHTML = operate(history, screen.innerHTML, operator);
                    operator = "";
                    console.log("hi" + operator)
                }
            }
        }
    });

}

display();