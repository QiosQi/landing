/* eslint-disable no-unused-vars */
function onSubmit(token) {
    var _form = $('form[name=contact]');
    var data = _form.serialize();
    var btn = _form.find('button[type=submit]');
    btn.text('Sending...');
    $.ajax({
        url: _form.attr('action'),
        type: _form.attr('method'),
        dataType: 'json',
        data: data,
        success: function (response) {
            btn.text('SUBMIT');
            if (response.success) {

                _form.trigger('reset');
                alert(response.message);

                return false;
            } else {
                if (response.message) {
                    alert(response.message);
                } else {
                    alert('Something wrong. Please try again.');
                }
            }
            return false;
        },
        error: function (err) {
            btn.text('SUBMIT');
            console.log(err);
            return false;
        }
    });
};