/* global describe beforeEach Controller it expect Cake */
QUnit.test('Question Four and Question Five', function() {
  QUnit.test('Cake', function() {
    var cake
    beforeEach( function() {
      cake = new Cake()
    })

    test('should have a .myCakeShop reference', function() {
      assert.isTrue(cake.hasOwnProperty('myCakeShop'))
    })

    test('should have a .id property', function() {
      assert.isTrue(cake.hasOwnProperty('id'))
    })

    test('should have a .cakeName property',function() {
      assert.isTrue(cake.hasOwnProperty('cakeName'))
    })

    test('should have a .origin property', function() {
      assert.isTrue(cake.hasOwnProperty('origin'))
    })

    test('should have a .cost property', function() {
      assert.isTrue(cake.hasOwnProperty('cost'))
    })
  })

  QUnit.test('write a CakeShop.addCake function to add the Cakes', function() {
    var theMumsPalace
    beforeEach( function() {
      theMumsPalace = Controller.setup()
    })

    test('CakeShop 01 should have two Cakes', function() {
      var theCakeShop = theMumsPalace.findCakeShop('01')
      assert.equal(2,theCakeShop.allMyCakes.length)
    })

    test('CakeShop 02 should have one Cake', function() {
      var theCakeShop = theMumsPalace.findCakeShop('02')
      assert.equal(1,theCakeShop.allMyCakes.length)
    })

    test('CakeShop 03 should have one Cake', function() {
      var theCakeShop = theMumsPalace.findCakeShop('03')
      assert.equal(1,theCakeShop.allMyCakes.length)
    })

    test('CakeShop 04 should have two Cakes', function() {
      var theCakeShop = theMumsPalace.findCakeShop('04')
      assert.equal(2,theCakeShop.allMyCakes.length)
    })

    test('should correctly set Cake details', function () {
            /*
             Shop 		 ID   	CAKENAME           Origin       	   Cost
			01 			 401   Angel cake          United Kingdom      $20
			01  		 402   Babka                  Poland           $15
			03  		 389   Boston cream pie       United States    $25
			02           113   Black Forest cake      Germany          $30
			04           114   Cheesecake             Greece           $20
			04           121   Panettone              Italy		       $15

            */
      var aCake, theCakeShop
      theCakeShop = theMumsPalace.findCakeShop('01')
      aCake = theCakeShop.sortCakes()
            //     01 			 401   Angel cake          United Kingdom      $20
      aCake = theCakeShop.allMyCakes[0]
      assert(aCake.myCakeShop).equal(theCakeShop)
      assert(aCake.id).equal(401)
      assert(aCake.cakeName).equal('Angel cake')
      assert(aCake.origin).equal('United Kingdom')
      assert(aCake.cost).equal(20)

            //     01  		 402   Babka                  Poland           $15
      aCake = theCakeShop.allMyCakes[1]
      assert(aCake.myCakeShop).equal(theCakeShop)
      assert(aCake.id).equale(402)
      assert(aCake.cakeName).equal('Babka')
      assert(aCake.origin).equal('Poland')
      assert(aCake.cost).equal(15)

      theCakeShop = theMumsPalace.findCakeShop('02')
      aCake = theCakeShop.sortCakes()
              //    02           113   Black Forest cake      Germany          $30
      aCake = theCakeShop.allMyCakes[0]
      assert(aCake.myCakeShop).equal(theCakeShop)
      assert(aCake.id).equal(113)
      assert(aCake.cakeName).equal('Black Forest cake')
      assert(aCake.origin).equal('Germany')
      assert(aCake.cost).equal(30)

      theCakeShop = theMumsPalace.findCakeShop('03')
      aCake = theCakeShop.sortCakes()
             // 03  		 389   Boston cream pie       United States    $25
      aCake = theCakeShop.allMyCakes[0]
      assert(aCake.myCakeShop).equal(theCakeShop)
      assert(aCake.id).equal(389)
      assert(aCake.cakeName).equal('Boston cream pie')
      assert(aCake.origin).equal('United States')
      assert(aCake.cost).equal(25)

      theCakeShop = theMumsPalace.findCakeShop('04')
      aCake = theCakeShop.sortCakes()
            // 04           114   Cheesecake             Greece           $20
      aCake = theCakeShop.allMyCakes[0]
      assert(aCake.myCakeShop).equal(theCakeShop)
      assert(aCake.id).equal(114)
      assert(aCake.cakeName).equal('Cheesecake')
      assert(aCake.origin).equal('Greece')
      assert(aCake.cost).equal(20)

            // 04           121   Panettone              Italy		       $15
      aCake = theCakeShop.allMyCakes[1]
      assert(aCake.myCakeShop).equal(theCakeShop)
      assert(aCake.id).equal(121)
      assert(aCake.cakeName).equal('Panettone')
      assert(aCake.origin).equal('Italy')
      assert(aCake.cost).equal(15)
    })
  })
})