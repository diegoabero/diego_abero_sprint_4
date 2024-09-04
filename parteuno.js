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


  /**
 * ### Challenge `makePersonObject`*/
  
  function makePersonObject(id, name, email) {
    return {
      id: id,
      name: name,
      email: email
    };
  }

  /* ### Challenge `getName`*/

  function getName(person) {
  return `Hola, mi nombre es ${person.name}`;
}


/**
 * ### Challenge `getName`
 */
 function getName(person) {
  return `Hola, mi nombre es ${person.name}`;
}


/**
 * ### Challenge `appleIndex`
 */
 function appleIndex(array) {
  return array.indexOf('manzana');
}


/**
 * ### Challenge `isItAnApple`
 */
 function isItAnApple(array) {
  return array.map(item => item === 'manzana');
}



