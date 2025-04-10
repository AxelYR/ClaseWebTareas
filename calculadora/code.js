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
                resultado.textContent = eval(resultado.textContent);
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