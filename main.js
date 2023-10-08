// CLASSE

function Animal(especie, consegueVoar, consegueFalar) {
  this.especie = especie;
  this.consegueVoar = consegueVoar;
  this.consegueFalar = consegueFalar;
}

// CLASSES HERDEIRAS

function Ave(tipo, consegueFalar) {
  this.tipo = tipo;
  this.especie = "Ave";
  this.consegueVoar = true;
  this.consegueFalar = consegueFalar;

  this.movimentar = function () {
    return "A ave está voando";
  };

  Animal.call(this, "Ave", true, consegueFalar);
}

function Humano(tipo, consegueFalar) {
  this.tipo = tipo;
  this.especie = "Humano";
  this.consegueVoar = false;
  this.consegueFalar = consegueFalar;

  this.movimentar = function () {
    return "O humano está andando";
  };

  Animal.call(this, "Humano", false, consegueFalar);
}

// INSTÂNCIAS

const humano = new Humano("Humano", true);
const maritaca = new Ave("Maritaca", false);
const papagaio = new Ave("Papagaio", true);

console.log(humano);
console.log(maritaca);
console.log(papagaio);
