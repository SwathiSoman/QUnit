/* globals describe beforeEach Controller it expect  */
QUnit.test = test
/*var assert = QUnit.assert*/
QUnit.test('Question Two', function(assert) {
  assert.ok('adding the four CakeShops', function() {
    let theMumsPalace
	QUnit.module("MumsPalace",{
		beforeEach: function() {
			theMumsPalace = Controller.setup()
		

				test('should have added 4 CakeShop', function() {
					assert.equal(4,theMumsPalace.allMyCakeShops.length)
				 })

				test('should have correctly set details for each CakeShop', function() {
				  let aCakeShop
				  aCakeShop = theMumsPalace.sortCakeShop()
				  aCakeShop = theMumsPalace.allMyCakeShops[0]
				  assert.ok(aCakeShop)
				  assert.equal(aCakeShop.id)('01')
				  assert.equal(aCakeShop.firstName)('The Bagel Shop')
				  assert.equal(aCakeShop.flavour)('Chocolate')
				  assert.equal(aCakeShop.place)('Moorhouse')

				  aCakeShop = theMumsPalace.allMyCakeShops[1]
				  assert.ok(aCakeShop)
				  assert.equal(aCakeShop.id)('02')
				  assert.equal(aCakeShop.firstName)('Hot Crossed Buns')
				  assert.equal(aCakeShop.flavour)('Vanilla')
				  assert.equal(aCakeShop.place)('Linwood')

				  aCakeShop = theMumsPalace.allMyCakeShops[2]
				  assert.ok(aCakeShop)
				  assert.equal(aCakeShop.id)('03')
				  assert.equal(aCakeShop.firstName)('Sugar Booger')
				  assert.equal(aCakeShop.flavour)('Red Velvet')
				  assert.equal(aCakeShop.place)('Shirley')

				  aCakeShop = theMumsPalace.allMyCakeShops[3]
				  assert.ok(aCakeShop)
				  assert.equal(aCakeShop.id)('04')
				  assert.equal(aCakeShop.firstName)('Patty Cakes')
				  assert.equal(aCakeShop.flavour)('Butterscotch')
				  assert.equal(aCakeShop.place)('Hornby')
			    })
		    }
		})
	})	
})
