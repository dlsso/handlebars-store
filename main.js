$(document).on('ready', function() {
  	var templateSource = $('#template').html()
  	var template = Handlebars.compile(templateSource)
  	var wishlistTemplate = Handlebars.compile($('#wishTemplate').html())
  	var wishList = []

	for (var i = 0; i < productsData.productsList.length; i++) {
		var product = productsData.productsList[i]
		$('#product-container').append(template(product))
	};

	$('.addWish').on('click', function() {
		var name = $(this).parent().find('.title').text()
		var game = {}
		for (var i = 0; i < productsData.productsList.length; i++) {
			if(productsData.productsList[i].title === name) {
				game = productsData.productsList[i]
			}
		};
		wishList.push(game)

		$('#wishList').append(wishlistTemplate(game))
	})

	$(document).on('click', '.removeWish', function() {
		var name = $(this).parent().find('.title').text()
		
		wishList = wishList.filter( function(game) {
			if(game.title !== name) {
				return game		// what is returned is what stays in the array
			}
		})

		$('#wishList').parent().remove()	// Only removes one item while filter removes any duplicates
	})
	
});