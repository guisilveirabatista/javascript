$(document).ready(function () {
    let clicou = Cookies.get('clicou');
    if (clicou) {
        $('#invisible').css('display', 'none');
    }
    $('#invisible').click(function (e) {
        let clicou = Cookies.get('clicou');
        if (!clicou) {
            Cookies.set('clicou', true, { expires: 1 });
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
        $(this).css('display', 'none');
    });
});