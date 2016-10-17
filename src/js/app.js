'use strict';
$(function () {

    let form = $('#contactForm'),
        firstName = $('#input-firstName'),
        lastName = $('#input-lastName'),
        mail = $('#input-mail'),
        tel = $('#input-phone'),
        company = $('#input-company'),
        message_ok = $('.form__response--ok'),
        message_bad = $('.form__response--error');


    let addMe = () => {
        let item = {
            firstName: firstName.val(), lastName: lastName.val(), email: mail.val(), phone: tel.val(), company: company.val()
        };
        console.log(item);
        message_ok.removeClass('hidden');
        if (!message_bad.hasClass('hidden')) {
            message_bad.addClass('hidden');
        }
    };

    let validate = (e) => {
        e.preventDefault();
        if (firstName.val().length === 0 || lastName.val().length === 0 || mail.val().length === 0 || tel.val().length === 0 || company.val().length === 0) {
            message_bad.removeClass('hidden').text('Please fill out all required fields before proceed');
            console.log('Please fill out all required fields before proceed');
            return false;
            }
            return addMe();
        };

    form.on("submit", validate);

});
