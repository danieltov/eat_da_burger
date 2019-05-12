// ! Wait until the document is fully loaded before starting logic

$(function() {
    // ! Devour function on click
    $('.btn-devour').on('click', function(e) {
        // ! Extract data-id from the button
        // !
        let id = $(this).data('id');
        let devoured = { devoured: true };

        $.ajax('/api/burger/' + id, {
            type: 'PUT',
            data: devoured
        }).then(() => {
            console.log('This burger has been devoured!');
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
