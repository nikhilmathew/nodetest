document.getElementById("send-msg").onclick = function(){
    var text=document.getElementById('texttosend').value;
    
     console.log('hello');
     document.getElementById('texttosend').value='';
    var msg=document.createElement('p');
   var content=document.createTextNode(text);

    msg.className='messages';
    msg.appendChild(content);
    document.getElementById('chat-box').appendChild(msg);
}
/*
$('#send-msg').addEventListener('click', function(event) {
    console.log('hello');
    var text=document.getElementById('texttosend').value;
    document.activeElement('texttosend').value='hello mahn';
    var msg=document.createElement('p');
    alert(msg);
    msg.className='messages';
    msg.value=text;
    document.getElementById('chat-box').appendChild(msg);
  });*/