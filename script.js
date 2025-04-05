function cifraDeCesar(texto, chave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      let c = texto[i];
      if (c.match(/[a-z]/i)) {
        let code = texto.charCodeAt(i);
        let base = (code >= 65 && code <= 90) ? 65 : 97;
        c = String.fromCharCode(((code - base + chave) % 26) + base);
      }
      resultado += c;
    }
    return resultado;
  }
  
  // Mensagem original
  const mensagemOriginal = "Parabéns pelo seu dia especial!";
  const chave = 5;
  
  // Mostra a mensagem cifrada na tela
  document.getElementById("mensagem").textContent = cifraDeCesar(mensagemOriginal, chave);
  
  // Verifica a resposta
  function verificar() {
    const resposta = document.getElementById("resposta").value.trim();
    if (resposta.toLowerCase() === mensagemOriginal.toLowerCase()) {
      document.getElementById("resultado").classList.remove("oculto");
    } else {
      alert("❌ Ops! Tente novamente.");
    }
  }
  