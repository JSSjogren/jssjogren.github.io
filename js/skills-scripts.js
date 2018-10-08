$(document).ready(function () {

    $('div').blast({
        delimiter: 'Word'
    });

    document.getElementById('software').style.visibility = "hidden";
    document.getElementById('interpersonal').style.visibility = "hidden";

    var instance = new TypeIt(document.getElementById('languages'), {
        speed: 2,
        nextStringDelay: 0,
        afterComplete: function (instance) {
            $('.ti-cursor').remove();
            document.getElementById('software').style.visibility = "visible";
            var instance = new TypeIt(document.getElementById('software'), {
                speed: 2,
                nextStringDelay: 0,
                afterComplete: function (instance) {
                    $('.ti-cursor').remove();
                    document.getElementById('interpersonal').style.visibility = "visible";
                    var instance = new TypeIt(document.getElementById('interpersonal'), {
                        speed: 2,
                        nextStringDelay: 0,
                        afterComplete: function (instance) {

                        }
                    });
                }
            });
        }
    });


});

$('.blast').mouseenter(function () {
    $(this).velocity("transition.bounceIn", {
        complete: function () {
            $(this).velocity("stop", true)
        }
    });

});