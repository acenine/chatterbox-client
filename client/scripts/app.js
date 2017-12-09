// YOUR CODE HERE:
// http://parse.sfm6.hackreactor.com/chatterbox/classes/messages

// let user = {
// 	// name = (prompt('What is your name?')
// }
      $(document).ready(() => {
        // app.call(this);
        app.fetch();
        $(".chatUl").prepend('<li class="chat">' + message.username + ': ' + message.text + '</li>');
        // $(".sendMessage").click(function(event) {
          var newMessage = app.allMessages;
          // if(newMessage.length > 0) {
            $(".chatUl").prepend('<li class="chat">' + message.username + ': ' + newMessage + '</li>');
            // this.send();
            // app.send(newMessage);
            // $('#chatInput').val("")
          // }
        // });
        console.log(newMessage, 'test')
      });

let app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
	init: function() {},
  send: function(newMessage) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(newMessage),
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
      data: 'order=-createdAt',
      contentType: 'application/json',
      success: function (data) {
        this.allMessages = data;
        console.log(this.allMessages)
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages: function() {
    $(".chat").html("");
  },
  allMessages: this.fetch()
};
// app.fetch();


// POST request format

var message = {
  username: 'hrsf86',
  text: 'test message',
  roomname: 'floor 6'
};
//app.send(message);

