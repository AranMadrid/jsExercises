  let jugador1 = new Array("2H", "3D", "5S", "9C", "KD"); //"2H","3D","5S","9C","KD"  //"2H","2D","4S","4C","4H"  //"2H","3D","5S","9C","KD"  //"2H","3D","5S","9C","KD"
  let jugador2 = new Array("2C", "3H", "4S", "8C", "AH"); //"2C","3H","4S","8C","AH"  //"2S","3S","8S","QS","AS"  //"2C","3H","4S","8C","KH"  //"2D","3H","5C","9S","KH"

  let ptosJ1 = CalcularPuntos(jugador1);
  let ptosJ2 = CalcularPuntos(jugador2);

  let cartasJ1 = "Jugador 1: ";
  let cartasJ2 = "Jugador 2: ";

  for (let i = 0; i < jugador1.length; i++) {
      cartasJ1 = cartasJ1 + jugador1[i] + " ";
      cartasJ2 = cartasJ2 + jugador2[i] + " ";
  }

  if (ptosJ1["puntuacion"] > ptosJ2["Puntuacion"]) {
      console.log(cartasJ1 + "\n" + cartasJ2 + "\n" + "Jugador 1 gana, " + ptosJ1["mano"]);
  } else if (ptosJ2["Puntuacion"] > ptosJ1["puntuacion"]) {
      console.log(cartasJ1 + "\n" + cartasJ2 + "\n" + "Jugador 2 gana, " + ptosJ2["mano"]);
  } else { //Puntuaciones iguales

      //Verificar carta mas alta
      let desempate = verificaCartaAlta(jugador1, jugador2);

      if (desempate == "J1") {
          console.log(cartasJ1 + "\n" + cartasJ2 + "\n" + "Jugador 1 gana, Carta mas alta");
      } else if (desempate == "J2") {
          console.log(cartasJ1 + "\n" + cartasJ2 + "\n" + "Jugador 2 gana, Carta mas alta");
      } else {
          console.log(cartasJ1 + "\n" + cartasJ2 + "\n" + "Empate");
      }
  }

  function CalcularPuntos(jugador) {

      let obj = new Object();

      //Evaluacion de la escalera de color
      let palosIguales = true;
      for (let i = 0; i < 4; i++) {
          if (jugador[i][1] != jugador[i + 1][1]) {
              palosIguales = false;
          }
      }

      if (palosIguales) {

          let existeEscaleraColor = false;
          if (letra_a_numero(jugador[0][0]) + 1 == letra_a_numero(jugador[1][0]) &&
              letra_a_numero(jugador[1][0]) + 1 == letra_a_numero(jugador[2][0]) &&
              letra_a_numero(jugador[2][0]) + 1 == letra_a_numero(jugador[3][0]) &&
              letra_a_numero(jugador[3][0]) + 1 == jletra_a_numero(jugador[4][0])) {
              existeEscaleraColor = true;
          }

          if (existeEscaleraColor) {
              obj["puntuacion"] = 90;
              obj["mano"] = "Escalera de color";
              return obj;
          }
      }

      //Evaluacion del Poker
      let ExistePoker = false;
      if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[1][0]) == letra_a_numero(jugador[2][0]) &&
          letra_a_numero(jugador[2][0]) == letra_a_numero(jugador[3][0])) {
          ExistePoker = true;
      } else if (letra_a_numero(jugador[1][0]) == letra_a_numero(jugador[2][0]) &&
          letra_a_numero(jugador[2][0]) == letra_a_numero(jugador[3][0]) &&
          letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          ExistePoker = true;
      }

      if (ExistePoker) {
          obj["puntuacion"] = 80;
          obj["mano"] = "Poker";
          return obj;
      }

      //Evaluacion del full
      let ExisteFull = false;
      if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[1][0]) == letra_a_numero(jugador[2][0]) &&
          letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          ExisteFull = true;
      } else if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[2][0]) == letra_a_numero(jugador[3][0]) &&
          letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          ExisteFull = true;
      }

      if (ExisteFull) {
          obj["puntuacion"] = 70;
          obj["mano"] = "Full";
          return obj;
      }

      //Evaluacion de color
      let color = true;
      for (let i = 0; i < 4; i++) {
          if (jugador[i][1] != jugador[i + 1][1]) {
              color = false;
          }
      }

      if (color) {
          obj["puntuacion"] = 60;
          obj["mano"] = "Color";
          return obj;
      }

      //Evaluacion de la escalera
      let existeEscalera = false;
      if (letra_a_numero(jugador[0][0]) + 1 == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[1][0]) + 1 == letra_a_numero(jugador[2][0]) &&
          letra_a_numero(jugador[2][0]) + 1 == letra_a_numero(jugador[3][0]) &&
          letra_a_numero(jugador[3][0]) + 1 == letra_a_numero(jugador[4][0])) {
          existeEscalera = true;
      }

      if (existeEscalera) {
          obj["puntuacion"] = 50;
          obj["mano"] = "Escalera";
          return obj;
      }

      //Evaluacion del trio
      let trio = false;
      if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[1][0]) == letra_a_numero(jugador[2][0])) {
          trio = true;
      } else if (letra_a_numero(jugador[2][0]) == letra_a_numero(jugador[3][0]) &&
          letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          trio = true;
      }

      if (trio) {
          obj["puntuacion"] = 40;
          obj["mano"] = "Trio";
          return obj;
      }

      //Evaluacion doble pareja  
      let doblePareja = false;
      if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[2][0]) == letra_a_numero(jugador[3][0])) {
          doblePareja = true;
      } else if (letra_a_numero(jugador[1][0]) == letra_a_numero(jugador[2][0]) &&
          letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          doblePareja = true;
      } else if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0]) &&
          letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          doblePareja = true;
      }

      if (doblePareja) {
          obj["puntuacion"] = 30;
          obj["mano"] = "Doble pareja";
          return obj;
      }

      //Evaluacion pareja
      let pareja = false;
      if (letra_a_numero(jugador[0][0]) == letra_a_numero(jugador[1][0])) {
          pareja = true;
      } else if (letra_a_numero(jugador[1][0]) == letra_a_numero(jugador[2][0])) {
          pareja = true;
      } else if (letra_a_numero(jugador[2][0]) == letra_a_numero(jugador[3][0])) {
          pareja = true;
      } else if (letra_a_numero(jugador[3][0]) == letra_a_numero(jugador[4][0])) {
          pareja = true;
      }

      if (pareja) {
          obj["puntuacion"] = 20;
          obj["mano"] = "Pareja";
          return obj;
      }

      //Evaluación carta mas alta
      obj["puntuacion"] = letra_a_numero(jugador[4][0]);
      obj["mano"] = "Carta mas alta";
      return obj;
  }

  function letra_a_numero(letra) {

      switch (letra) {
          case "T":
              return 10;
          case "J":
              return 11;
          case "Q":
              return 12;
          case "K":
              return 13;
          case "A":
              return 14;
          default:
              return parseInt(letra);
      }
  }

  function verificaCartaAlta(jug1, jug2) {

      for (let i = jug1.length - 1; i >= 0; i--) {
          if (letra_a_numero(jug1[i][0]) > letra_a_numero(jug2[i][0])) {
              return "J1";
          } else if (letra_a_numero(jug2[i][0]) > letra_a_numero(jug1[i][0])) {
              return "J2";
          }
      }

      return "Empate";
  }