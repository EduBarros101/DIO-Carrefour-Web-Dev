class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    // Por que ter um setter de saldo aqui? Isso era pra ser feito com Depósito, não?!
    // set saldo(valor) {
    //     this._saldo = valor
    // }

    get saldo() {
        return this._saldo
    }

    depositar(valor) {
        this._saldo += valor
    }

    sacar(valorSaque) {
        if (valorSaque > this._saldo) {
            return 'Operação negada! Valor indisponível.'
        }

        this._saldo -= valorSaque
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'Corrente'
        this._cartaoCredito = cartaoCredito
    }

    set cartaoCredito(value) {
        this._cartaoCredito = value
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Universitaria'
    }

    sacar(valorSaque) {
        if (valorSaque > 500) {
            return 'O valor não deve exceder R$500,00.'
        }

        this._saldo -= valorSaque
    }
}
