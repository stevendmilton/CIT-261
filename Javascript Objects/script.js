function AddToTable() {
   function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.displayType = function () {
         alert(this.year + " - " + this.make + " - " + this.model);
      };
   }
   var honda = new Car('Honda', 'Civic', '2018');
   var toyota = new Car('Toyota', 'Camry', '2016');
   var lexus = new Car('Lexus', 'ES', '2020');

   honda.displayType();
   honda.year = "2019"
   honda.displayType();
   toyota.displayType();
   toyota.year = "2012";
   toyota.model = "Supra";
   toyota.displayType();
   lexus.displayType();
   lexus.model = 'LS';
   lexus.displayType();
}
