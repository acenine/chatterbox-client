// YOUR CODE HERE:
// http://parse.sfm6.hackreactor.com/chatterbox/classes/messages

// let user = {
// 	// name = (prompt('What is your name?')
// }

let app = {
	init: function() {},
  send: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  fetch: function() {
        $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: 'where={"username":"hrsf86"}',
      contentType: 'application/json',
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }
};
app.fetch();


// POST request format

var message = {
  username: 'hrsf86',
  text: 'testing message',
  roomname: 'floor 6'
};
app.send(message);

