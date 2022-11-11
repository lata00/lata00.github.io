$(document).ready(function() {
    $("#demo").html("Hello, World!");
    $("img").click(function() {
        // Change src attribute of image
        $("#your-image").attr("src", getRandomItem(fileNames));
      });

    const fileNames = ["images/HDR_DSC0993010082020.jpg",
                        "images/P1111123 (4).jpg",
                        "images/P1121717.jpg",
                        "images/P1121797 (2).jpg",
                        "images/P1122143_24.jpg",
                        "images/P1122151 (1).jpg",
                        "images/P1122462.jpg",
                        "images/P1122689_25.jpg",
                        "images/P1122697_27.jpg"]

    function getRandomItem(arr) {

      // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      // get random item
      const item = arr[randomIndex];
  
      return item;
  }
    
});
