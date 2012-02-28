function Bank(){
	var colones = 0;
	var dollars = 50000;
	var exchangeRate = 500;

	this.getExchangeRate = function(){
		return exchangeRate;
	}
	
	this.convertToDollars = function(amount){
		var converted = convert(amount);
		
		if((dollars - converted) > 0){
			dollars = dollars - converted;
			colones = colones + amount;
			
			return converted;
		}else{
			return "No money!";
		}
	}
	
	function convert(amount){
		return amount / exchangeRate;
	}
	
	this.printReport = function(){
		document.write("Dollars: " + dollars);
		document.write("Colones: " + colones);
	}
	
	this.reset = function(){
		colones = 0;
		dollars = 50000;
	}
}

var bank = new Bank();

document.write(bank.getExchangeRate());
bank.printReport();
bank.convertToDollars(50);
bank.convertToDollars(500);
bank.printReport();
bank.reset();
bank.printReport();
