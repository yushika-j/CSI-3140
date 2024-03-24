$(document).ready(function () {
    // Fetch summary data
    $.getJSON("summary.json", function (summaryData) {
        // Populate the catalog table with product information
        populateCatalog(summaryData);
    });

    // Function to populate the catalog table with product information
    function populateCatalog(summaryData) {
        var catalogBody = $('#catalog-body');
        catalogBody.empty();

        summaryData.forEach(function (product) {
            var row = $('<tr>');

            var titleCell = $('<td>').text(product.title);
            row.append(titleCell);

            var priceCell = $('<td>').text('$' + product.price);
            row.append(priceCell);

            var thumbnailCell = $('<td>');
            var thumbnailImg = $('<img>').attr('src', product.thumbnail).addClass('thumbnail');
            thumbnailCell.append(thumbnailImg);
            row.append(thumbnailCell);

            catalogBody.append(row);

            // Show product description when clicked
            thumbnailImg.click(function () {
                showDescription(product.id);
            });

            // Fetch full images data
            $.getJSON("full_images.json", function (fullImagesData) {
                // Hover effect for thumbnail images
                thumbnailImg.hover(function () {
                    var productImage = $('<img>').attr('src', fullImagesData.find(item => item.id === product.id).image).addClass('product-image');
                    thumbnailCell.append(productImage);
                    thumbnailImg.hide();
                }, function () {
                    $('.product-image').remove();
                    thumbnailImg.show();
                });
            });
        });
    }
    // Function to show product description
    function showDescription(productId) {
    
        $.getJSON("descriptions.json", function (descriptionsData) {
            var description = descriptionsData.find(function (item) {
                return item.id === productId;
            });

            $('#product-description').text(description.description);
        });
    };
});
