function Ticket(movie1, time1, age1) {
  this.movie = movie1;
  this.time = time1;
  this.age = age1;
}

Ticket.prototype.movieInfo = function() {
  return this.movie + ", " + this.time;
}

Ticket.prototype.findCost = function() {
  if(this.age > 65) {
    return "$3";
  }
  else if((this.age <= 65) && (this.time === "Matinee")) {
    return "$6";
  }
  else if((this.age <= 65) && (this.time === "Evening")) {
    return "$12";
  }
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var inputMovie = $("select#new-movie").val();
    var inputTime = $("select#new-time").val();
    var inputAge = parseInt($("input#new-age").val());

    var newTicket = new Ticket(inputMovie, inputTime, inputAge);

    $("p#info").text(newTicket.movieInfo());
    $("p#price").text(newTicket.findCost());

    // $("ul#output").append("<li><span class ='ticket'>" + newTicket.age + "</span></li>");

    $("select#new-movie").val("");
    $("select#new-time").val("");
    parseInt($("input#new-age").val(""));

  });
});
