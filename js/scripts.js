// business logic
function Ourfunction (todo, date){
  this.userItem = todo;
  this.userDate = date;
}

Ourfunction.prototype.whatToDo = function() {
  return this.userItem;
}
Ourfunction.prototype.whenToDo = function() {
  return " By: " + this.userDate;
}

// ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#todo").val();
    var userDate  = $("input#date").val();

    var newItem = new Ourfunction(userInput, userDate);

    $("#output").append("<span class='clickable'><li>" + newItem.whatToDo() + " <span class='by'> " + newItem.whenToDo() + "</li></span>");
    $("#output").show();

    $(".clickable").last().click(function(){
      $(this).css({
        "text-decoration" : "line-through"
      });

    });
  });
});
