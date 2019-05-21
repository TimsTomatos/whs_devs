$(".actions, .message").each(function () {

    var div = $(this);
    var children= div.children();
    children.detach();
    div.empty();
    div.append(children);

});

