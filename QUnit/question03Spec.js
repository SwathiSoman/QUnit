/* global describe beforeEach Controller it expect MumsPalace */
QUnit.test('Question Three', function(assert) {
	'use strict'
	assert.ok('MumsPalace.getCakeShop function', function() {
	   let theMumsPalace
	   QUnit.module("MumsPalace",{
			beforeEach:function() {
				theMumsPalace = Controller.setup()
		        console.log()

			test('should return a string', function() {
				assert.equal(typeof theMumsPalace.getCakeShops())('string')
			})

			test('should NOT be hard coded', function() {
				theMumsPalace = new MumsPalace()
				assert.equal(theMumsPalace.getCakeShops())('')
			})
		  
			//The Bagel Shop, Chocolate. <01>\nHot Crossed Buns, Vanilla. <02>\nSugar Booger, Red Velvet. <03>\nPatty Cakes, Butterscotch. <04>\n//
		
			QUnit.test('Should return correctly formatted data', function() {
			  QUnit.test('Should start with the first names but be sorted in ID order', function() { 
				test('First The Bagel Shop then Hot Crossed Buns then Sugar Booger then Patty Cakes  ', function() {
					let output = theMumsPalace.getCakeShops()
					assert(theMumsPalace.getCakeShops()).match(/^The\sBagel\sShop.*\nHot\sCrossed\sBuns.*\nSugar\sBooger.*\nPatty Cakes.*\n/)
				})
			 })
					
			 QUnit.test('Puntuation after each first name', function() {
			  test('should be a comma followed by a single space', function() {
				  let output = theMumsPalace.getCakeShops()
				  assert(theMumsPalace.getCakeShops()).match(/\, /)
				  })
			 })
								
			 QUnit.test('Flavour should also be in ID order', function() {
				test('First character of LastName should be in [CVRB] ie [Chocolate,Vanilla,Red Velvet,Butterscotch]', function() {
					let anCakeShop
					anCakeShop = theMumsPalace.getCakeShops()
					anCakeShop = theMumsPalace.allMyCakeShops[0, 1, 2, 3]
					assert(anCakeShop.flavour).match(/^[CVRB](.{3,11})/)
				})
			 })
			
			 describe('Puntuation after the last names ', function() {
			  it('should be a dot and then a space', function() {
				  assert(theMumsPalace.getCakeShops()).match(/\. /)
				})	
			 })
							
			 describe('The IDs', function() {
			   it('should have numbers enclosed in angle brackets ie <> ', function() {
				   assert(theMumsPalace.getCakeShops()).match(/(<01>|<02>|<03|<04>)/)
				})
			 })
		
			 describe('end of each cakeShop\'s details', function() {
			  it('should end with the newline character', function() {
				assert(theMumsPalace.getCakeShops()).match(/\>\n/)
				})
			  })
			})
		  }
		})   	
	})
})