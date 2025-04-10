const resultado = document.querySelector(".resultado");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id=== "pi"){
            resultado.textContent= Math.PI;
            return
        }
        if(boton.id === "reiniciar") {
            resultado.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (resultado.textContent.length === 1 || resultado.textContent === "ERROR!") {
                resultado.textContent = "0";
            } else {
                resultado.textContent = resultado.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "resultado") {
            try {
                //se almacena la operacion 
                localStorage.setItem("operacion", resultado.textContent);
                //se realiza la operacion   //eval es peligroso
                resultado.textContent = eval(resultado.textContent);
                //se almacena el resultado
                localStorage.setItem("resultado", resultado.textContent);
                //se crea un elemento p
                const operacion = document.createElement("p");
                //se escribe dentro del elemento p la operacion almacenada, se concatena con un
                //signo de = y el resultado almacenado en la memoria
                operacion.innerHTML = ">" + localStorage.getItem("operacion")+" = "+localStorage.getItem("resultado");
                //el elemento se coloca en el area de historial
                document.getElementById("resultados").appendChild(operacion);
            } catch {
                resultado.textContent = "ERROR!";
            }
            return;
        }

        if(resultado.textContent === "0" || resultado.textContent === "ERROR!") {
            resultado.textContent = botonApretado;
        } else {
            resultado.textContent += botonApretado;
        }
    })
})