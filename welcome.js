if(!localStorage.getItem("firstTime")){
    window.open('welcome.html', '_blank', 'width=500,height=300frame=true,nodeIntegration=no');
    localStorage.setItem("firstTime","true");
}else{
    // Do nothing.
}