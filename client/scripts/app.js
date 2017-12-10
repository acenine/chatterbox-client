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
        // $(".chatUl").prepend('<li class="chat">' + message.username + ': ' + message.text + '</li>');
        // $(".sendMessage").click(function(event) {
          // var newMessage = app.fetch();

          //getting chat data from server//

          //loop throutgh this.fetch data
          // set each element to connect to li and prepend to the unordered list

          $( ".newMessage" ).submit(function( event ) {
            event.preventDefault();
            app.ourMessage.text = $(this).find('.chatInput').val();
            app.send();
          });

          $(".dropdown-content").on("click", function(event) {
            event.preventDefault();
            console.log("click");
            app.ourMessage.roomname = $(this).val();
            //$(".chat").filter('".' + roomname + '"');
          });
          // when a room is selected
          // app.ourMessage.roomname = whatever room name they select

          // filter our fetch by that room name

            //prepending username + newmessage inside of li to the chat ul
            // $(".chatUl").prepend('<li class="chat">' + message.username + ': ' + newMessage + '</li>');
            // this.send();
            //connect out message to this.send data (newMessage or separate variable

        // console.log(newMessage, 'test')
      });

let app = {
  ourMessage: {
      username: 'fishsticks',
      text: "words",
      roomname: 'floor 6'
    },
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
	init: function() {},
  send: function() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(app.ourMessage),
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
  //'order=-createdAt'
  fetch: function() {
        $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: 'order=-createdAt',//'where={"username":"hrsf86"}',
      contentType: 'application/json',
      success: function (data) {
        let allMessages = data.results;
        // allMessages = allMessages.filter(function(elem) {
        //   //return if message does not contain any script
        //   if (!['sp00ky%20ghost', 'Rick%20Astley', 'whistful-gremlin'].includes(elem.username)) {
        //     return elem;
        //   }
        //   if (!elem.username.includes('%20')) {
        //     return elem;
        //   }
        //   if (!elem.text.includes('<')) {
        //     return elem;
        //   }
        //             // or.... use .replace to remove scipt from message, while still returning the message - script
        // });
        //console.log(filterMessages, 'filtered')
        //use new filtered messages in loop
        for(i = 0; i < allMessages.length; i++) {
          let message = allMessages[i];
          let username = message.username;
          let text = message.text;
          let roomname = message.roomname;
          $(".dropdown-content").prepend('<a href="#" class="room">' + roomname + '</a>');

          $(".chatUl").prepend('<li class="chat ' + roomname +'">' + username + ': ' + text + '</li>');
          // add the room names to the drop down list
        }
      },
      // success: function (data) {
      //   let allMessages = data.results;
      //   for(i = 0; i < allMessages.length; i++) {
      //     let message = allMessages[i];
      //     let username = message.username;
      //     let text = message.text;
      //     $(".chatUl").prepend('<li class="chat">' + username + ': ' + text + '</li>');
      //   }

      // },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  clearMessages: function() {
    $(".chatUl").html("");
  },
  // allMessages: this.fetch()
};
// app.fetch();


// POST request format

// var ourMessage = {
//   username: 'hrsf86',
//   text: $('.chatInput').val(),
//   roomname: 'floor 6'
// };
app.fetch();

