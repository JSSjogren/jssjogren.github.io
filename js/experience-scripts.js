$('div').blast({
    delimiter: 'Word'
});

$('.blast').mouseenter(function () {
    $(this).velocity("transition.bounceIn", {
        complete: function () {
            $(this).velocity("stop", true)
        }
    });

});