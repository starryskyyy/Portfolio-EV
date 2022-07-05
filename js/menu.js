var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active-btn");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
$("#btn-personal-info,#btn-professional-info, #btn-hobby-info").click(function() {

    var magicBall = "img/magic-ball.png";
    var gamepad ="img/gamepad.png";
    var cmd ="img/cmd.png";
    var divToOpen = $(this).attr("id").replace("btn-","");


    $("#professional-info,#personal-info,#hobby-info").hide();
    if (divToOpen === "personal-info"){
        $("#btn-personal-info").attr("src", "img/magic-ball-white.png");
        $("#btn-professional-info").attr("src",  cmd);
        $("#btn-hobby-info").attr("src", gamepad);
    }
    else if(divToOpen === "professional-info"){
        $("#btn-hobby-info").attr("src",gamepad );
        $("#btn-personal-info").attr("src", magicBall);
        $("#btn-professional-info").attr("src", "img/cmd-white.png");
    }
    else{
        $("#btn-personal-info").attr("src", magicBall);
        $("#btn-professional-info").attr("src", cmd );
        $("#btn-hobby-info").attr("src", "img/gamepad-white.png");
    }
    $("#"+divToOpen).show();
});

