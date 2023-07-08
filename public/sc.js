$("document").ready(function() {
    
    $("#btnSend").click(function() {
        var username = $("#username").val();
        var email = $("#email").val();


        $.ajax({
            type: "post",
            url: "http://203.158.195.236/FFlex/backend/test.php",
            // url: "test.php",
            data: {
                testt:"test",
            },
            success: function (response) {
                alert(response)
            }
        });
    });

});