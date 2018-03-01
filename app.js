(function(){ // closure wrapper
  var app = angular.module('store', [ ]); // last argument is dependencies, must be passed empty array if no dependencies

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2,
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.",
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        }
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Origin of the pentagonal gem is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'pentagonal-01-full.jpg',
          thumb: 'pentagonal-01-thumb.jpg'
        },
        {
          full: 'pentagonal-02-full.jpg',
          thumb: 'pentagonal-02-thumb.jpg'
        }
      ]
    }
  ];

})();