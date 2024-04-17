function decifrar() {
    let textoCifrado = document.getElementById("palabra").value;
    let textoADecifrar = "";
    let textoDecifrado = ""; 
    for(let i = 0; i < textoCifrado.length; i++) {
        if(textoCifrado[i] == "(") { 
            let a = i;
            while(a < textoCifrado.length && textoCifrado[a] != ")") {
                textoADecifrar += textoCifrado[a];
                a++;
            }
            i = a;
            for(let b = textoADecifrar.length - 1; b >= 0; b--) { 
                if(textoADecifrar[b] != "(" && textoADecifrar[b] != ")") {
                    textoDecifrado += textoADecifrar[b];
                }
            } 
            textoADecifrar = "";
        } else {
            textoDecifrado += textoCifrado[i];
        }
    }
    alert(textoDecifrado);
}