function SendMessage() {
  let input = document.querySelector('.message-input');
  let messagesDialog = document.querySelector('.messages-dialog');

  if(input.value !==""){
    messagesDialog.insertAdjacentHTML("beforeEnd",
      ` 
        <div class="message-block">
          <div class="message-user-img">
            <img src="/img/user-photo.png" alt=""/>
          </div>
          <div class="messages-dialog-column">
            <div class="message-user-name">
              <p>Хафизова Эльвира</p>
              <small> ${new Date().toLocaleTimeString()}</small>
            </div>
            <div class="message-user-dialog">
              ${input.value}
            </div>
          </div>
        </div>
      `
    );
    input.value = '';
  }
}


function keySend(e){
  if (e.keyCode === 13) {
    let input = document.querySelector('.message-input');
    let messagesDialog = document.querySelector('.messages-dialog');
    if(input.value !==""){
      messagesDialog.insertAdjacentHTML("beforeEnd",
        ` 
          <div class="message-block">
            <div class="message-user-img">
              <img src="/img/user-photo.png" alt=""/>
            </div>
            <div class="messages-dialog-column">
              <div class="message-user-name">
                <p>Хафизова Эльвира</p>
                <small> ${new Date().toLocaleTimeString()}</small>
              </div>
              <div class="message-user-dialog">
                ${input.value}
              </div>
            </div>
          </div>
        `
      );
      input.value = '';
    }
  }
}




export {SendMessage, keySend};