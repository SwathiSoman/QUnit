/* global describe beforeEach Controller it expect MumsPalace */
QUnit.test('Question Seven', function() {
  QUnit.test('MumsPalace.getCakeShopsWithTwoCakes function', function() {
      var theMumsPalace = Controller.setup()
      beforeEach(function() {
              theMumsPalace = Controller.setup()
            }
        )
    QUnit.test('theMumsPalace.getCakeShopsWithTwoCakes function', function() {
       test('should return a string', function() {
		assert.equal(typeof theMumsPalace.getCakeShopsWithTwoCakes())('string')
	   })

       test('should NOT be hard coded', function() {
		theMumsPalace = new MumsPalace()
		assert.equal(theMumsPalace.getCakeShopsWithTwoCakes())('')
	   })
    
	 //The Bagel Shop, Chocolate. <01>\n    Angel cake (United Kingdom) worth $20.\n    Babka (Poland) worth $15.\nPatty Cakes, Butterscotch. <04>\n    Cheesecake (Greece) worth $20.\n    Panettone (Italy) worth $15.\n//
	    QUnit.test('Should return correctly formatted data', function() {
			QUnit.test( 'The First Name', function() {
				test('should be The Bagel Shop', function() {
				let output = theMumsPalace.getCakeShopsWithTwoCakes()
				assert(output).match(/The\sBagel\sShop/)
				})
			})
	
	
			QUnit.test('The punctuation after the first name', function() { 
				test(' should be a comma and then a space', function() {
			    let output = theMumsPalace.getCakeShopsWithTwoCakes()
				assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\,\s]/)
				})
			})
			
			QUnit.test('The Flavour', function() {
			    test('should be Chocolate', function() {
				  let aCakeShop
				   aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
				   aCakeShop = theMumsPalace.allMyCakeShops[0]
				   assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/Chocolate/)
				})
		    })
				
			 QUnit.test('The punctuation after the second name', function() {
			   test('should be a dot followed by a space', function() {
					assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\.\s]/)
				})
			})
				
			QUnit.test('The IDs', function() {
				test('should have numbers enclosed in angle brackets <> ie <01>', function() {
				   assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/(<01>|<02>|<03>|<04>)/)
				})
			})
			
		    QUnit.test('After the flavour\'s name', function() {
				test('should be a newline', function() {
					assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/>\n/)
				})
			})
				
			QUnit.test('Each CakeName\'s details', function() {
				test('should start with a tab  \\t character', function() {
				 assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\t/)
				})
		    })
			
			QUnit.test('The Bagel Shop\'s first cakeName', function() {
				 let theBagelShop = theMumsPalace.findCakeShop('01')
				 let theCake = theBagelShop.allMyCakes[0]
				 let output = theCake.toString()
				test('should be Angel cake', function() {
					assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/(Angel\scake)/)
				})
				
				test('Originates from United Kingdom', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[(]United\sKingdom[)]/)
				})
				
				test('with the value of $20', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\sworth\s[$]20/)
				})
				
				test('should be a dot and then a new line', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\.\n]/)
				})
			})
			
			QUnit.test('The Bagel Shop\'s second cakeName', function() {
				let theBagelShop = theMumsPalace.findCakeShop('01')
				let theCake = theBagelShop.allMyCakes[1]
				console.log(theCake)
				let output = theCake.toString() 
				
				test('should start with a tab', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/.*\n\t/)
				})
				
				test('should be Babka', function() {
					assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/Babka/)
				})
				
				test('Originates from Poland', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/Poland/)
				})
				
				
				test('with the value of $15', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\sworth\s[$]15/)
				})
				
				test('should be a dot and then a new line', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\.\n]/)
				})
			})
			
		QUnit.test('Should return correctly formatted data', function() {
			QUnit.test('The First Name', function() {
				test('should be Patty Cakes ', function() {
				let output = theMumsPalace.getCakeShopsWithTwoCakes()
				assert(output).match(/Patty\sCakes/)
			    })
			})
			
			QUnit.test('The punctuation after the first name', function() {
				test(' should be a comma and then a space', function() {
				assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\,\s)]/)
				})
		     })
			 
			QUnit.test( 'The Flavour', function() {
				 test('should be Butterscotch', function() {
				  let aCakeShop
				  aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
				  aCakeShop = theMumsPalace.allMyCakeShops[04]
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/Butterscotch/)
				 })
		    })
			
			QUnit.test('The punctuation after the second name', function() {
             test('should be a dot followed by a space', function() {
				assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\.\s]/)
	         })
		    })
	
     	    QUnit.test('The IDs', () => {
		      test('should have numbers enclosed in angle brackets <> ie <04>', function() {
			   assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/(<01>|<02>|<03>|<04>)/)
			   })
		    })
		
		    QUnit.test('After the flavour\'s name', function() {
              test('should be a newline', function() {
               assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/>\n/)
              })
            })
			
			QUnit.test('Each CakeName\'s details', function() {
              test('should start with a tab  \\t character', function() {
              assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\t/)
              })
		    })
			
			QUnit.test('Patty Cakes\'s first cakeName', function() {
				let pattyCakes = theMumsPalace.findCakeShop('04')
				let theCake = pattyCakes.allMyCakes[0]
				let output = theCake.toString()
				test('should be Cheesecake', function() {
					assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/(Cheesecake)/)
				})
				test('Originates from Greece', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[(]Greece[)]/)
				})
				
				
				test('with the value of $20', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\sworth\s[$]20/)
				})
				
				test('should be a dot and then a new line', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\.\n]/)
				})
			})
			
			QUnit.test('Patty Cakes\'s second cakeName', function() {
				let pattyCakes = theMumsPalace.findCakeShop('04')
				let theCake = pattyCakes.allMyCakes[1]
				let output = theCake.toString()
				test('should start with a tab', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\t/)
				})
				
				test('should be Panettone', function() {
					assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/Panettone/)
				})
				

				test('Originates from Italy', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/Italy/)
				})
				
				
				test('with the value of $15', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/\sworth\s[$]15/)
				})
				
				test('should be a dot and then a new line', function() {
				  assert(theMumsPalace.getCakeShopsWithTwoCakes()).match(/[\.\n]/)
				})
		    })

		  })
        })
	  })
	})	
  })