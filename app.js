const {
    calcularAreaCirculo,
    calcularAreaTriangulo,
    calcularAreaRetangulo
  } = require('./areaCalculations');
  
  let state = 'start';
  let choice;
  let dimensions = [];
  let result;
  
  process.stdin.setEncoding('utf-8');
  
  function prompt(message) {
    process.stdout.write(message);
  }
  
  function handleInput(input) {
    input = input.trim();
  
    switch (state) {
      case 'start':
        prompt('O que você gostaria de calcular a área de?\n1. Círculo\n2. Triângulo\n3. Retângulo\nEscolha uma opção (1, 2, 3): ');
        state = 'choice';
        break;
      case 'choice':
        choice = parseInt(input);
        if (choice === 1) {
          prompt('Digite o raio do círculo: ');
          state = 'circulo';
        } else if (choice === 2) {
          prompt('Digite a base do triângulo: ');
          state = 'triangulo_base';
        } else if (choice === 3) {
          prompt('Digite a largura do retângulo: ');
          state = 'retangulo_largura';
        } else {
          prompt('Opção inválida. Escolha uma opção (1, 2, 3): ');
        }
        break;
      case 'circulo':
        dimensions.push(parseFloat(input));
        result = calcularAreaCirculo(dimensions[0]);
        prompt(`A área do círculo é: ${result.toFixed(2)}\nDeseja calcular a área de outro objeto? (s/n): `);
        state = 'repeat';
        break;
      case 'triangulo_base':
        dimensions.push(parseFloat(input));
        prompt('Digite a altura do triângulo: ');
        state = 'triangulo_altura';
        break;
      case 'triangulo_altura':
        dimensions.push(parseFloat(input));
        result = calcularAreaTriangulo(dimensions[0], dimensions[1]);
        prompt(`A área do triângulo é: ${result.toFixed(2)}\nDeseja calcular a área de outro objeto? (s/n): `);
        state = 'repeat';
        break;
      case 'retangulo_largura':
        dimensions.push(parseFloat(input));
        prompt('Digite a altura do retângulo: ');
        state = 'retangulo_altura';
        break;
      case 'retangulo_altura':
        dimensions.push(parseFloat(input));
        result = calcularAreaRetangulo(dimensions[0], dimensions[1]);
        prompt(`A área do retângulo é: ${result.toFixed(2)}\nDeseja calcular a área de outro objeto? (s/n): `);
        state = 'repeat';
        break;
      case 'repeat':
        if (input.toLowerCase() === 's') {
          state = 'start';
          dimensions = [];
          handleInput('');
        } else if (input.toLowerCase() === 'n') {
          prompt('Obrigado por usar o calculador de áreas. Até logo!\n');
          process.exit();
        } else {
          prompt('Opção inválida. Deseja calcular a área de outro objeto? (s/n): ');
        }
        break;
    }
  }
  
  process.stdin.on('data', handleInput);
  
  handleInput('');
  