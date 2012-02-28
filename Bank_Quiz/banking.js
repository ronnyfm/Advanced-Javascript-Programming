function Bank(){
	var colones = 0;
	var dollars = 50000;
	var exchangeRate = 500;

	this.getExchangeRate = function(){
		return exchangeRate;
	}
}

var bank = new Bank();

document.write(bank.getExchangeRate());