function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
  }
  
  function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
  }
  
  module.exports = {
    calcularAreaCirculo,
    calcularAreaTriangulo,
    calcularAreaRetangulo
  };
  