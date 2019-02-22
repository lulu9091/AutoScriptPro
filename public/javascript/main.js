$( document ).ready(function() {
    var page = 1;
    var pagelimit = 2;
    var totalrecord = 0;
    fetchData();
    // Handling the prev-btn
    $(".prev-btn").on("click", function(){
        if (page > 1){
            page--;
            fetchData()
        }
        console.log("Prev Page: "+ page);
        
    });

    // Handling the next-btn
    $(".next-btn").on("click", function(){
        if (page * pagelimit < totalrecord) {
            page++;
            fetchData()
        }
        console.log("Next Page: " + page);
    })

    function fetchData(){

    $.ajax({
        Type: "GET",
        dataType: "json",
        url: "http://localhost:3000/get",
        data:{
            page: page,
            pagelimit: pagelimit,
        },
        success: function(data){
            totalrecord = data.length;
            console.log("dsfs");
                var dataArr = data;
                console.log(data);
                var html ="";
                for (var i = 0; i< dataArr.length; i++){
                    html += "<div class='sample-user'>"+
                    "<h3>CategoryName :" + dataArr[i].CategoryName + "</h3>"+
                    "<h3>UserName: " + dataArr[i].Username + "</h3>"+
                    "<h3>ProjectTitle: " + dataArr[i].ProjectTitle + "</h3>"+
                    "</div>"
                $("#result").html(html);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("The ")
        }
        });
}



});



