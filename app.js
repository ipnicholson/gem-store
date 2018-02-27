(function(){ // closure wrapper
  var app = angular.module('store', [ ]); // last argument is dependencies, must be passed empty array if no dependencies

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.",
      canPurchase: false,
      soldOut: true,
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Origin of the pentagonal gem is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      canPurchase: false,
      soldOut: false,
    }
  ];

})();