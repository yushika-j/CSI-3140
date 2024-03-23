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
            row.insertCell().innerHTML = product.id;
        })
    }







    // Fetch data from summary.json when the page loads
    fetchData("summary.json", function(summaryData) {
        // Populate the table with product information
        populateTable(summaryData);
    });

});