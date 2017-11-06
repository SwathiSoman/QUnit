/* globals describe beforeEach it expect CakeShop  */
QUnit.test('Question Six', function(assert) {
  assert.ok('CakeShop.hasTwoCakes function', function() {
    let aCakeShop, aCake
	QUnit.module("CakeShop",{
		beforeEach:function() {
		  aCakeShop = new CakeShop()
		  aCake = new Cake()
    
			test('should exist', function() {
			  assert.ok(aCakeShop.hasTwoCakes)
			})

			test('should return a boolean', function() {
			  assert.ok(typeof aCakeShop.hasTwoCakes())
			})

			test('should return true if the number of Cakes that CakeShop has is equal two.', function() {
			  aCakeShop = new CakeShop('tao', null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  assert.ok(aCakeShop.hasTwoCakes())
			})

			test('should return false if the number of Cakes that CakeShop has is less than two.', function() {
			  aCakeShop = new CakeShop('tao', null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  assert.notOk(aCakeShop.hasTwoCakes())
			})

			test('should return false if the number of Cakes that CakeShop owns is more than two.', function() {
			  aCakeShop = new CakeShop('tao', null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  assert.notOk(aCakeShop.hasTwoCakes())
			})
		}
	})
  })
})