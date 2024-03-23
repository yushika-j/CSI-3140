document.addEventListener(DOMContentLoaded, function(){

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
    function populateTable(data){
        var table = document.getElementById('productTable');

        data.forEach(function(product){
            var row = table.insertRow();
            row.insertCell().innerHTML = product.name;
            row.insertCell().innerHTML = product.id;
            row.insertCell().innerHTML = product.price;
            row.insertCell().innerHTML = '<img src = "${product.thumbnail}" alt="${product.name}" class="thumbnail" />';

            // Create a button for each product to display description
            var buttonCell = row.insertCell();
            var button = document.createElement("button");
            button.textContent = "Show Description";
            button.addEventListener("click", function() {
                displayDescription(product.id);
            });
            buttonCell.appendChild(button);
        });
    }

    function imageHover(){
        var images = document.querySelectorAll('.productImage');

        images.forEach(function(image){
            image.addEventListener('mouseover', function(){
                image.style.opacity = 0.5;
            });

            image.addEventListener('mouseout', function(){
                image.style.opacity = 1;
            });
        });
    }

    function displayDescription(productID){
       // Fetch product description based on productId
       fetchData("descriptions.json", function(descriptionsData) {
            var description = descriptionsData.find(function(item) {
                return item.id === productID;
            });

            // Display the description in the designated area
            var descriptionDiv = document.getElementById("productDescription");
            descriptionDiv.innerHTML = "<h2>Description</h2>";
            descriptionDiv.innerHTML += "<p>" + description.description + "</p>";
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