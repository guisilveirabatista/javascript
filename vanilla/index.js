function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState != 'loading')
                fn();
        });
    }
}

function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete") {
        fn();
    }
}

// window.ready(function () {
//     alert('it works');
// });
// domReady(() => alert("DOM is ready, come and get it!"));
// // test
// alert('ready');

document.getElementById('test').innerHTML = 'Hello World!';
document.querySelector('#test2').innerText = 'Hello World 2!';


$.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    },
    error: function (xhr, status, error) {
        krajeeDialog.alert(xhr.responseText);
    }
});
