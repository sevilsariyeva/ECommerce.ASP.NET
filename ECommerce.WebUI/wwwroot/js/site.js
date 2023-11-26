// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");
    document.querySelector('#form1').addEventListener('input', function () {
        var query = document.getElementById('form1').value;
        if (query.trim() != '') {
            fetch('/Product/Search?word=' + query)
                .then(function (response) {
                    if (!response.ok) {
                        return;
                    }
                    return response.text();
                })
                .then(function (data) {
                    document.querySelector('.col-md-10').innerHTML = data;
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        }
    });
})