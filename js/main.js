$(document).ready(() => {
    $('.your-class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $("#tabs").tabs();
    $(function () {
        $("#accordion")
            .accordion({
                header: "> div > h3"
            }).accordion({
            collapsible: true
        })
            .accordion({
                active: false
            })
            .sortable({
                axis: "y",
                handle: "h3",
                stop: function (event, ui) {
                    ui.item.children("h3").triggerHandler("focusout");
                    $(this).accordion("refresh");
                }

            });
    });
});

