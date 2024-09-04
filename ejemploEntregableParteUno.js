// Challenge `sayGoodbye`
function sayGoodbye(/* código aquí */) {
  function sayGoodbye(nombre) {
    return `Adiós, ${nombre}. Que tengas un buen día.`;
  }
  
}

// Challenge `temperatureInC`
function temperatureInC(/* código aquí */) {
  function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }
  
  function temperatureInC(temperature, unit) {
    if (unit === 'F') {
      return `${fahrenheitToCelsius(temperature)}C`;
    } else if (unit === 'C') {
      return `${temperature}F`;
    } else {
      return 'Unidad desconocida';
    }
  }
  
}
