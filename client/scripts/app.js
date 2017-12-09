// YOUR CODE HERE:
// http://parse.sfm6.hackreactor.com/chatterbox/classes/messages

// let user = {
// 	// name = (prompt('What is your name?')
// }
      $(document).ready(() => {
        $(".clearMessages").click(function(){
          $(".chatUl").html("");
        });

        // app.call(this);
        // console.log(this.fetch().val());
        $(".chatUl").prepend('<li class="chat">' + message.username + ': ' + message.text + '</li>');
        // $(".sendMessage").click(function(event) {
          var newMessage = app.fetch();

          //getting chat data from server//

          //loop throutgh this.fetch data
          // set each element to connect to li and prepend to the unordered list




            //prepending username + newmessage inside of li to the chat ul
            $(".chatUl").prepend('<li class="chat">' + message.username + ': ' + newMessage + '</li>');
            // this.send();
            //connect out message to this.send data (newMessage or separate variable
            
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
        // console.log('message recieved')
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
    $(".chatUl").html("");
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

