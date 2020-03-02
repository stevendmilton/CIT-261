function AddToTable() {
   function Car(make, model, year, price, options) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.options = options;
   };

   var honda = new Car('Honda', 'Civic', '2018', 20000, ['4wd', 'cd changer', 'power package']);
   var hondaText = JSON.stringify(honda);
   alert("Honda Stringified text: " + hondaText);
   var hondaObject = JSON.parse(hondaText);
   alert("Honda JSON Object: " + hondaObject.year + ' ' + hondaObject.make + ' ' + hondaObject.model + ' $' + hondaObject.price + ' ' + hondaObject.options);
};
