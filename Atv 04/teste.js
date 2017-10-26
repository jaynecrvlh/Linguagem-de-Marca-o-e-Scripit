function Conta(saldo, numero){
  this.saldo = saldo;
  this.numero = numero;
}

  Conta.prototype.getSaldo = function(){
    return this.saldo;
  }

  Conta.prototype.getNumero = function(){
    return this.numero;
  }

  Conta.prototype.atualizar = function(){
    throw new error("metodo abstrato: não é possivel retornar");
  }

function ContaCorrente(saldo, numero){
  Conta.call(this, saldo, numero);
}

ContaCorrente.prototype.getSaldo = function () {
    return Conta.prototype.getSaldo.call(this);
}

ContaCorrente.prototype.getNumero = function () {
    return Conta.prototype.getNumero.call(this);
}

ContaCorrente.prototype.atualizar = function (taxaselic) {
    if (taxaselic >= 0) {
        this.saldo = this.saldo + ( taxaselic - 0.20);
        return "O saldo é " + this.saldo + " reais.";
    }
    else {
        throw new Error("Taxa Selic invalida: Não pode ser um valor negativo ou igual a zero");
    }
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaPoupanca(saldo, numero){
  Conta.call(this, saldo, numero);
}

ContaPoupanca.prototype.getSaldo = function () {
    return Conta.prototype.getSaldo.call(this);
}

ContaPoupanca.prototype.getNumero = function () {
    return Conta.prototype.getNumero.call(this);
}

ContaPoupança.prototype.atualizar = function (taxaselic) {
    if (taxaselic >= 0){
        this.saldo = this.saldo + taxaselic;
        return "O saldo é " + this.saldo + " reais.";
    }
    else {
        throw new Error ("Taxa Selic invalida: Não pode ser um valor negativo ou igual a zero");
    }
}

ContaPoupanca.prototype = Object.creare(Conta.prototype);
ContaPoupanca.prototype = ContaPoupanca;

var conta1 = new ContaPoupanca (100, "123-4");

console.log(conta1.atualizar(10));
console.log(conta1.getNome());
console.log(conta1.getNumero());

var conta2 = new ContaCorrente (540, "321-5");

console.log(conta2.atualizar(10));
console.log(conta2.getNome());
console.log(conta2.getNumero());
