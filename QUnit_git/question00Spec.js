/* global describe beforeEach it expect MumsPalace CakeShop */
/*QUnit.test = test*/
QUnit.test('Basic Check For Original Source Code', function(assert) {
 assert.ok('MumsPalace', function() {
    let theMumsPalace
	assert.equal("MumsPalace",{
		beforeEach :function(assert) {
		   theMumsPalace = new MumsPalace()
			QUnit.test('the allMyCakeShops property', function(assert) {
		   
				test('should have an .allMyCakeShops property',function() {
					assert.ok(theMumsPalace.hasOwnProperty('allMyCakeShopsss'))
				})
				
				test('should reference an array',function() { 
					assert.ok(Array.isArray(theMumsPalace.allMyCakeShops))
				})

				test('should have an .addCakeShop function',function() { 
				  assert.ok(typeof theMumsPalace.addCakeShop)
				})

				test('should have a .findCakeShop function',function() { 
				 assert.ok(typeof theMumsPalace.findCakeShop)
				})

				test('should have a .sortCakeShop function',function() { 
				 assert.ok(typeof theMumsPalace.sortCakeShop)
				})
		
			})
		}
	})
 })

  QUnit.test('CakeShop', function(assert) {
	assert.ok('CakeShop.allMyCakeShops function', function() {
     let theCakeShop
		assert.equal("CakeShop",{
			beforeEach: function () {
				this.theCakeShop = new CakeShop()
		
		
			test('should have an .id property', function() {
			  assert.ok(theCakeShop.hasOwnProperty('id'))
			})

			test('should have a .firstName property', function() {
			   assert.ok(theCakeShop.hasOwnProperty('firstName'))
			})

			test('should have a .lastName property', function() {
			 assert.ok(theCakeShop.hasOwnProperty('flavour'))
			})

			test('should have a .birthDate property', function() {
			  assert.ok(theCakeShop.hasOwnProperty('place'))
			})

			test('the allMyCakes property', function() {
				  test('should have an .allMyCakes reference', function() {
					assert.ok(theCakeShop.hasOwnProperty('allMyCakes'))
				  })

				 test('should reference an array', function() {
					assert.ok(Array.isArray(theCakeShop.allMyCakes))
				  })
			})

			test('should have a .sortCakes function', function() {
			  assert.ok(typeof theCakeShop.sortCakeShop)
			})
	    }
	})
  })
})
})