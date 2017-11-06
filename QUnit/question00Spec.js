/* global describe beforeEach it expect MumsPalace CakeShop */
QUnit.test.assert = test
QUnit.test('Basic Check For Original Source Code', function(assert) {
 assert.ok('MumsPalace', function() {
    let theMumsPalace
	QUnit.module("MumsPalace",{
		beforeEach :function(assert) {
		   theMumsPalace = new MumsPalace()
			QUnit.test('the allMyCakeShops property', function(assert) {
		   
				assert.ok('should have an .allMyCakeShops property', function() {
					QUnit.test(theMumsPalace.hasOwnProperty('allMyCakeShops'))
				})
				assert.ok('should reference an array',  function() {
					QUnit.test(Array.isArray(theMumsPalace.allMyCakeShops))
				})

				assert.ok('should have an .addCakeShop function', function() {
				  QUnit.test(typeof theMumsPalace.addCakeShop)
				})

				assert.ok('should have a .findCakeShop function', function() {
				 QUnit.test(typeof theMumsPalace.findCakeShop)
				})

				assert.ok('should have a .sortCakeShop function', function() {
				 QUnit.test(typeof theMumsPalace.sortCakeShop)
				})
		
			})
		}
	})
 })

  QUnit.test('CakeShop', function(assert) {
	assert.ok('CakeShop.allMyCakeShops function', function() {
     let theCakeShop
		QUnit.module("CakeShop",{
			beforeEach: function () {
				this.theCakeShop = new CakeShop()
		
		
			assert.ok('should have an .id property', function() {
			  QUnit.test(theCakeShop.hasOwnProperty('id'))
			})

			assert.ok('should have a .firstName property', function() {
			   QUnit.test(theCakeShop.hasOwnProperty('firstName'))
			})

			assert.ok('should have a .lastName property', function() {
			   QUnit.test(theCakeShop.hasOwnProperty('flavour'))
			})

			assert.ok('should have a .birthDate property', function() {
			  QUnit.test(theCakeShop.hasOwnProperty('place'))
			})

			test('the allMyCakes property', function() {
				  assert.ok('should have an .allMyCakes reference', function() {
					QUnit.test(theCakeShop.hasOwnProperty('allMyCakes'))
				  })

				 assert.ok('should reference an array', function() {
					QUnit.test(Array.isArray(theCakeShop.allMyCakes))
				  })
			})

			assert.ok('should have a .sortCakes function', function() {
			  QUnit.test(typeof theCakeShop.sortCakeShop)
			})
	    }
	})
  })
})
})