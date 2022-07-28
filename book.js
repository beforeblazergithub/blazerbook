(function () {
    let overlayHTML = ` <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="overlay">
    <div class="menu" id="menu">
        <div class="icon-menu">
            <span class="material-icons md-1" id="close">cancel</span>
            <span class="material-icons md-2" id="openApps">apps</span>
        </div>
        <h1>BLAZER<span>BOOK</span></h1>
        <p>Blazer <span>Bookmarklet</span> & Collection Of <span>Hacks</span>.</p>
    </div>
    <div class="apps" id="apps">
    </div>
    </div>
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

    .overlay {
        margin:0;
        z-index: 100;
    }
    
    .menu {
        margin:0;
        position: fixed;
        bottom: 2%;
        left: 1%;
        width: 98%;
        height: 24.5%;
        background-color: #293241;
        border-radius: 1.2vw;
        display: block;
    }
    
    .apps {
        margin:0;
        position: fixed;
        top: 2%;
        left: 1%;
        width: 98%;
        height: 70%;
        background-color: #293241;
        border-radius: 1.2vw;
        display: none;
    }
    
    h1 {
        margin:0;
        font-size: 5vw;
        font-family: 'Montserrat', sans-serif;
        margin-left: 1vw;
        color: #ee6c4d;
        font-weight: 900;
    }
    
    h1 span {
        color: #e0fbfc;
    }
    
    p {
        margin:0;
        font-family: 'Montserrat', sans-serif;
        color: #ee6c4d;
        font-size: 1.1vw;
        margin-left: 1.2%;
        font-weight: 900;
        text-transform:uppercase;
    }
    
    p span {
        color: #e0fbfc;
    }
    
    .material-icons {
        position: absolute;
        color: #ee6c4d;
        font-size: 4vw;
        right: .5%;
        top: 4%;
        border-radius: 10px;
        cursor: pointer;
        user-select: none;
    }
    
    .material-icons.md-2{
        right: 6%;
    }
    </style>
  `
   
  let overlay             = document.createElement("div");
      overlay.innerHTML   = overlayHTML;
      document.body.appendChild(overlay);
  })();

  document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 192) {
     if (document.getElementById('menu').style.display == 'none') {
      openMenu()
     } else {
      close()
     }
    } else if (e.which == 192) {
     if (document.getElementById('menu').style.display == 'none') {
      openMenu()
     } else {
      close()
     }
    }
  };

  var closeButton = document.getElementById('close');
  var appButton = document.getElementById('openApps');
 
  closeButton.onclick = function(){close()};
  appButton.onclick = function(){openApps()};
 
  function close() {
      document.getElementById('menu').style.display = 'none';
      document.getElementById('apps').style.display = 'none';
  }
 
  function openApps() {
      if (document.getElementById('apps').style.display == 'block') {
        document.getElementById('apps').style.display = 'none';
      } else {
        document.getElementById('apps').style.display = 'block';
      }
  }
 
  function closeApps() {
      document.getElementById('apps').style.display = 'none';
  }
 
  function openMenu() {
      document.getElementById('menu').style.display = 'block';
  }
