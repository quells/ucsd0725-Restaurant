var _id = 0;

var Customer = function(name, partySize) {
	this.id = _id;
	_id++;

	this.name = name;
	this.partySize = partySize;
	this.madeReservation = new Date();
}

module.exports = Customer;
