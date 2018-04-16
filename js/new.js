$(document).ready(function() {
    $('#new-check-polis-number').on('keypress', function(e) {
        var charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 43 || charCode > 57)) {
            return false;
        }
        return true;
    });

    $('#new-check-polis-submit').click(function(e) {
        var curSeries = $('#new-check-polis-series').val();
        var curNumber = $('#new-check-polis-number').val();
        if (/^\d{6}$/.test(curNumber)) {
            $('#new-check-polis-number, .new-check-polis-number-hint').removeClass('error');
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
                    $('#new-check-polis-success').show();
                } else {
                    $('#new-check-polis-error').show();
                }
            });
        } else {
            $('#new-check-polis-number, .new-check-polis-number-hint').addClass('error');
        }
        e.preventDefault();
    });

    $('.new-check-polis-result-close-new').click(function(e) {
        $('#new-check-polis-number').val('');
        $('#new-check-polis-number, .new-check-polis-number-hint').removeClass('error');
        $('.new-check-polis-result').hide();
        e.preventDefault();
    });
});