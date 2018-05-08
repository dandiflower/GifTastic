
window.onload = function () {
// document.ready


var buttonArray = ["Capoeira", "Lindy Hop", "Hip-hop Dance"];

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
    
        var topic = $("#but-input").val();

        buttonArray.push(topic);

        renderButton();
    });


function renderButton(){

    $('#gif-container').empty();

    for(var i =0;i< buttonArray.length; i++){
        var newBtn = $("<button>");
        newBtn.attr("data-topic", buttonArray[i]);
        newBtn.attr("class","gif-button");
        newBtn.text(buttonArray[i]);
        //add data-topic of topic
        $('#gif-container').append(newBtn);
        
    }
}

renderButton();

    $(document).on("click", ".gif-button", function () {
        // console.log(this)
      var topic = $(this).attr('data-topic');
      retrieveGifs(topic);
      
    });

    function retrieveGifs(keyword){
        //ajax call
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET" 
            }).then(function(response){
            
            appendToScreen(response.data);
         });
    }

    function appendToScreen(arr){
       console.log(arr);
       for(var i=0;i< arr.length;i++){
           var myGifDiv = $('<div>');
           myGifDiv.html("Rating: " + arr[i].rating);
           var myImg = $('<img>');
           myImg.attr("src", arr[i].images.fixed_height_still.url);
            myGifDiv.append(myImg);          
            $("#gif-container").append(myGifDiv);
            // var myGif;
            // myGif.attr("src", arr[i].images.fixed_height.url);
       }
    }
    $(document).on("click", "img", function () {
        console.log("cralskd");
    });



};

// var image = $("<img>");
// image.attr("src", "URL FROM AJAX CALL HERE");
// image.attr("data-still", MORE URL HERE);
// image.attr("data-animate", EVEN MORE HERE);
// image.attr("data-state", "still");
// image.attr("class", "gif");
// $("#IMAGEDISPLAYDIV").append(image)

