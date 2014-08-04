$(document).on('ready', function() {
  	var templateSource = $('#template').html()
  	var template = Handlebars.compile(templateSource)
  
	for (var i = 0; i < productsData.productsList.length; i++) {
		var product = productsData.productsList[i]
		$('#product-container').append(template(product))
	};

});