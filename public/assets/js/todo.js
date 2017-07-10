$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: "/todo",
      method: "POST",
      data: {todo: $('input[type="text"]').val()},
      success: function(data){
        location.reload();
      }
    });
    return false;
  });

  $('li').on('click', function(){
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      url: "/todo/"+item,
      type: "DELETE",
      success: function(data){
        location.reload();
      }
    });
  });

});
