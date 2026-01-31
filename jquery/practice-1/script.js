$(document).ready(function () {
    $(".work").click(() => {
        console.log("paragraph clicked !!1");
    });

    $(".work").dblclick(() => {
        alert("Paragraph double clicked!");
    });

     $(".work").mouseenter(function(){
       $(this).css("background-color","#fbfb12")
    });
     $(".work").mouseleave(function(){
       $(this).css("background-color","green")
    });
});
