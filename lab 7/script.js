document.addEventListener("DOMContentLoaded", function(){

    function fetchData(url, callback){
        var asyncRequest = new XMLHttpRequest();

        asyncRequest.onreadystatechange = function(){
            if(asyncRequest.readyState == 4 && asyncRequest.status == 200){
                var data = JSON.parse(asyncRequest.responseText);
                callback(data);
            }
        };

        asyncRequest.open('GET', url, true);
        asyncRequest.send();
    }

    //populate table
    function populateTable(data) {
        var table = document.getElementById('table-body');
    
        table.innerHTML = '';
    
        data.forEach(function(product) {
            var row = table.insertRow();
    
            // Insert product title
            var titleCell = row.insertCell();
            titleCell.innerHTML = product.title;
    
            // Insert product ID
            var idCell = row.insertCell();
            idCell.innerHTML = product.id;
    
            // Insert product price
            var priceCell = row.insertCell();
            priceCell.innerHTML = "$" + product.price;
    
            // Insert product thumbnail image
            var imageCell = row.insertCell();
            var thumbnailImg = document.createElement('img');
            thumbnailImg.src = product.thumbnail;
            thumbnailImg.alt = product.title;
            thumbnailImg.classList.add('thumbnail');
            thumbnailImg.setAttribute('data-product-id', product.id); // Set data-product-id attribute
            imageCell.appendChild(thumbnailImg);
    
            // Insert product description
            var descriptionCell = row.insertCell();
    
            // Create a button for each product to display description
            var buttonCell = row.insertCell();
            var button = document.createElement("button");
            button.textContent = "Show Description";
            button.addEventListener("click", function() {
                displayDescription(product.id, descriptionCell);
            });
            buttonCell.appendChild(button);
        });

    
        // Add hover effect to product images after populating the table
        imageHover();
    }
    
        
    function imageHover(){
        var images = document.querySelectorAll('.thumbnail');
        
        images.forEach(function(image){
            image.addEventListener('mouseover', function(){
                var productID = image.getAttribute('data-product-id');
                image.src = "product" + productID + "_thumb.jpg";
                image.style.transform = 'scale(1.2)';
                image.style.transition = 'transform 0.5s';
                var productID = image.getAttribute('data-product-id');
                fetchFullImage(productID);
            });

            image.addEventListener('mouseout', function(){
                image.style.transform = 'scale(1)';
                image.src = "product" + productID + ".jpg";
            });
        });
    }

    function fetchFullImage(productID){
        fetchData("full_images.json", function(imagesData) {
            var fullImage = imagesData.find(function(item) {
                return item.id === productID;
            });
            if(fullImage){
                var imageCell = document.querySelector('img[data-product-id="' + productID + '"]');
                imageCell.src = fullImage.image;
            }
        });
    }

    function displayDescription(productID, descriptionCell){
       // Fetch product description based on productId
       fetchData("description.json", function(descriptionsData) {
            var description = descriptionsData.find(function(item) {
                return item.id === productID;
            });
            descriptionCell.innerHTML = '<p id="productDescription">' + description.description + '</p>';
        });
    }

    // Fetch data from summary.json when the page loads
    fetchData("summary.json", function(summaryData) {
        // Populate the table with product information
        populateTable(summaryData);
        // Add hover effect to product images
        imageHover();
    });

});
