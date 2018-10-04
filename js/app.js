var itemCount = 0;

$('#add,#add2,#add3,#add4,#add5,#add6,#add7,#add8,#add9,#add10').click(function () {
    itemCount++;
    $('#itemCount').html(itemCount).css('display', 'block');
});

$('.clear').click(function () {
    itemCount = 0;
    $('#itemCount').html('').css('display', 'none');
    $('#cartItems').html('');
});

$(function () {
    $("#add").on('click', function () {
        var val = $('#produkt1');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("T-SHIRTS<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt1");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add2").on('click', function () {
        var val = $('#produkt2');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("JEANS<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt2");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add3").on('click', function () {
        var val = $('#produkt3');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("JACKOR<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt3");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add4").on('click', function () {
        var val = $('#produkt4');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("SAMSUNG NOTE 8<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt4");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add5").on('click', function () {
        var val = $('#produkt5');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("SAMSUNG NOTE 9<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt5");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add6").on('click', function () {
        var val = $('#produkt6');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("SAMSUNG S8<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt6");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add7").on('click', function () {
        var val = $('#produkt7');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("LG TV 1<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt7");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add8").on('click', function () {
        var val = $('#produkt8');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("LG TV 2<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt8");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add9").on('click', function () {
        var val = $('#produkt9');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("LG TV 3<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt9");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});

$(function () {
    $("#add10").on('click', function () {
        var val = $('#produkt10');
        if (val !== "") {
            var elem = $("<li></li>");
            $(elem).append("LG TV 4<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("#produkt10");
            $('.rem').on('click', function () {
                $(this).parent().remove();
            });
        };
    });
});