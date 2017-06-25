$(document).ready(function () {
    var minutes;
    var seconds;
    var startMinutes;
    var startSeconds;
    var barSeconds;
    var started = false;
    var active = true;
    var width = 0.00;

    $("#start").click(function () {
        active = true;
        if (started == false) {
            started = true;
            $("#start").html("Pause my clock!");
            $("#continue").html("");
            startMinutes = $("#clock").val();
            startSeconds = startMinutes * 60;
            barSeconds = startSeconds;
            width = 0.00;
            document.getElementById("myProgress").style.display = "block";
            document.getElementById("myBar").style.backgroundColor = "red";
            document.getElementById("myBar").style.width = 0;
            $("#timeType").html("<h3>Work time!</h3>");
            $("h3").css("color", "red");

            interval = setInterval(function () {
                // Time calculations for days, hours, minutes and seconds
                minutes = Math.floor(startMinutes % (60));
                seconds = Math.floor(startSeconds % (60));

                //Make seconds look good
                if (parseInt(seconds) < 10) {
                    seconds = "0" + seconds;
                }

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + ":" + seconds;

                //Progress bar
                if (startSeconds != barSeconds) {
                    width += 100 / barSeconds;
                    document.getElementById("myBar").style.width = width + '%';
                }

                if (seconds == 0) {
                    startMinutes = startMinutes - 1;
                }
                startSeconds = startSeconds - 1;
                if (startSeconds < 0) {

                    if (active) {
                        startMinutes = $("#break").val();
                        startSeconds = startMinutes * 60;
                        active = false;
                        width = 0.00;
                        document.getElementById("myBar").style.backgroundColor = "#4CAF50";
                        $("#timeType").html("<h3>Break time!</h3>"); $("h3").css("color", "#4CAF50");
                        barSeconds = startSeconds;
                    }
                    else {
                        startMinutes = $("#clock").val();
                        startSeconds = startMinutes * 60;
                        active = true;
                        width = 0.00;
                        document.getElementById("myBar").style.backgroundColor = "red";
                        $("#timeType").html("<h3>Work time!</h3>");
                        $("h3").css("color", "red");
                        barSeconds = startSeconds;
                    }
                }

            }, 1000);
        }
        else {
            started = false;
            clearInterval(interval);
            $("#start").html("Restart my clock!");
            $("#continue").html("<button id = 'cont' class = 'btn btn-primary'>Continue my clock!</button>");
        }
    });
    $("#continue").click(function () {
        if (started == false) {
            started = true;
            $("#start").html("Pause my clock!");
            $("#continue").html("");

            interval = setInterval(function () {
                // Time calculations for days, hours, minutes and seconds
                minutes = Math.floor(startMinutes % (60));
                seconds = Math.floor(startSeconds % (60));

                //Make seconds look good
                if (parseInt(seconds) < 10) {
                    seconds = "0" + seconds;
                }

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + ":" + seconds;
                //Progress bar
                width += 100 / barSeconds;
                document.getElementById("myBar").style.width = width + '%';

                if (seconds == 0) {
                    startMinutes = startMinutes - 1;
                }
                startSeconds = startSeconds - 1;
                if (startSeconds < 0) {

                    if (active) {
                        startMinutes = $("#break").val();
                        startSeconds = startMinutes * 60;
                        active = false;
                        width = 0.00;
                        document.getElementById("myBar").style.backgroundColor = "#4CAF50";
                        $("#timeType").html("<h3>Break time!</h3>");
                        $("h3").css("color", "#4CAF50");
                        barSeconds = startSeconds;
                    }
                    else {
                        startMinutes = $("#clock").val();
                        startSeconds = startMinutes * 60;
                        active = true;
                        width = 0.00;
                        document.getElementById("myBar").style.backgroundColor = "red";
                        $("#timeType").html("<h3>Work time!</h3>");
                        $("timeType").css("color", "red");
                        barSeconds = startSeconds;
                    }
                }
            }, 1000);
        }
        else {
            started = false;
            clearInterval(interval);
            $("#start").html("Restart my clock!");
            $("#continue").html("<button id = 'cont'>Continue my clock!</button>");
        }
    });
});