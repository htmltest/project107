$(document).ready(function() {
    $('#new-check-polis-number').mask('999999');

    $('#new-check-polis-submit').click(function(e) {
        var curSeries = $('#new-check-polis-series').val();
        var curNumber = $('#new-check-polis-number').val();
        if (/^\d{6}$/.test(curNumber)) {
            $('#new-check-polis-number').removeClass('error');
            $.ajax({
                type: 'POST',
                url: 'check_polis.html',
                data: {SERIES: curSeries, NUMBER: curNumber},
                dataType: 'html',
                cache: false
            }).done(function(data) {
                $('.new-check-polis-result-title-series').html(curSeries);
                $('.new-check-polis-result-title-number').html(curNumber);
                if (data == 'success') {
                    $('#page_content').css({'position': 'relative'}).append($('#new-check-polis-success').clone(true));
                    $('#page_content > #new-check-polis-success').show();
                } else {
                    $('#page_content').css({'position': 'relative'}).append($('#new-check-polis-error').clone(true));
                    $('#page_content > #new-check-polis-error').show();
                }
            });
        } else {
            $('#new-check-polis-number').addClass('error');
        }
        e.preventDefault();
    });

    $('.new-check-polis-result-close').click(function(e) {
        $('#new-check-polis-number').val('');
        $('#new-check-polis-number').removeClass('error');
        $('#page_content > .new-check-polis-result').remove();
        e.preventDefault();
    });
});