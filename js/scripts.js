var messages = [];

function Message(type, user, text) {
  this.type = type;
  this.user = user;
  this.text = text;
}

function addMessage(event) {
  var user, type, className;
  var messageInput = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  switch (event.target.id) {
    case 'send-button':
      user = 'Michael';
      type = 'out';
      className = 'out-message';
      break;
    case 'reply-button':
      user = 'Billy';
      type = 'in';
      className = 'in-message';
      break;
    default:
      user = 'unknown';
      type = 'error';
      className = 'error-message';

  }

  // create new message
  if (messageInput.value != '') {
    // construct a message and add to message
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    // create element
    var messageText = document.createTextNode(message.text);
    var messageSpanEl = document.createElement('span');
    var messageDivEl = document.createElement('div');

    messageSpanEl.appendChild(messageText);
    messageDivEl.appendChild(messageSpanEl);
    messageDivEl.className = className;

    // add to DOM
    messageContainerEl.appendChild(messageDivEl);

    // reset input
    messageInput.value = '';
  }
}

var init = function() {
  // wire event handlers
  document.getElementById('send-button').onclick = addMessage;

  document.getElementById('reply-button').onclick = addMessage;
}

init();
