//Steps:

//go to colab on chrome browser
// right click and go to inspect
// go to console
// run this to your browser console 
//and to end this procedure, use the last line of it which is clearInterval(colab)


function ConnectButton(){
    console.log("Connect pushed"); 
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click() 
}

var colab = setInterval(ConnectButton,60000);

// uncomment the below line and use it for clearing

//clearInterval(colab)
