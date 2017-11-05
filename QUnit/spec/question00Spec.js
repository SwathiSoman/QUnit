/* global describe beforeEach it expect MumsPalace CakeShop */
QUnit.test('Basic Check For Original Source Code', function() {
 test('MumsPalace', function() {
    let theMumsPalace
    beforeEach(function() {
      theMumsPalace = new MumsPalace()
    })

   test('the allMyCakeShops property', function() {
      test('should have an .allMyCakeShops property', function() {
        assert.isTrue(theMumsPalace.hasOwnProperty('allMyCakeShops'))
      })
      test('should reference an array',  function() {
        assert.isTrue(Array.isArray(theMumsPalace.allMyCakeShops))
      })
    })

    test('should have an .addCakeShop function', function() {
      assert.equal(typeof theMumsPalace.addCakeShop)
    })

    test'should have a .findCakeShop function', function() {
      assert.equal(typeof theMumsPalace.findCakeShop)
    })

    test('should have a .sortCakeShop function', function() {
      assert.equal(typeof theMumsPalace.sortCakeShop)
    })
  })

  QUnit.test('CakeShop', function() {
    var theCakeShop
    beforeEach(function () {
      theCakeShop = new CakeShop()
    })

    test('should have an .id property', function() {
      assert.isTrue(theCakeShop.hasOwnProperty('id'))
    })

    test('should have a .firstName property', function() {
      assert.isTrue(theCakeShop.hasOwnProperty('firstName'))
    })

    test('should have a .lastName property', function() {
      assert.isTrue(theCakeShop.hasOwnProperty('flavour'))
    })

    test('should have a .birthDate property', function() {
      assert.isTrue(theCakeShop.hasOwnProperty('place'))
    })

    test('the allMyCakes property', function() {
      test('should have an .allMyCakes reference', function() {
        assert.isTrue(theCakeShop.hasOwnProperty('allMyCakes'))
      })

     test('should reference an array', function() {
        assert.isTrue(Array.isArray(theCakeShop.allMyCakes))
      })
    })

    test('should have a .sortCakes function', function() {
      assert.equal(typeof theCakeShop.sortCak
    })
  })
})