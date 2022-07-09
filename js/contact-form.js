$(document).ready(function () {
    $(":text").keyup(function () {
        $(".display").text($(":text").val());
    });
});

function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_vqnoby5", "template_is1ti5m", params).then(function (res) {
        alert("Success " + res.status);
    })
}