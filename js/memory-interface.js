var User = require('./../js/memory.js').userModule;

$(document).ready(function() {
  var testUser = new User('test', 1)
  var imageId;
  var imageId2;

  var hiding = function() {
    $('#' + imageId).hide();
    $('#' + imageId2).hide();
    testUser.changeTurn(1);
    imageId = null;
    imageId2 = null;
  }

  $('td').click(function(event){
    event.preventDefault();
    var tableDataId = $(this).attr('id');
    if (imageId == null) {
      imageId = $('#' + tableDataId).find('img').attr('id');
      $('#' + imageId).show();
    } else {
      imageId2 = $('#' + tableDataId).find('img').attr('id');
      $('#' + imageId2).show();
      var something = testUser.isMatch(imageId, imageId2);
      console.log(something);
      if (something == true) {
        testUser.changeTurn(1);
        imageId = null;
        imageId2 = null;
      } else {
        setTimeout(hiding, 2000);
      }
    }
    $('#turn').text('Turn #' + testUser.turn);
    return imageId;
  });
});
