<template class="home">
  
    <div class="contents">
      <div class="box container"> 
        <div class="row">
          <div class="head d-flex">
        <div class="head-para"><h3>Lets's get started</h3></div>
        <div class="head-icon"><i class="fa-solid fa-question"></i></div></div>
        <div class="conlr d-flex col-12">
          <div class="left col-6">
            <div class="one">
            <h4>Add your email address</h4>
            <p>We need your email address to send your account related updates.</p>
          </div>
          <div class="two">
            <h6>Enter your email</h6>
            <input type="text">
          </div>
          <div class="three">
            <NuxtLink to="/page4"><button><h6>Verify with OTP</h6></button></NuxtLink>
          </div>
        </div>
          <div class="right col-6">
            <h4>Login with QR code</h4>
          </div>
        </div>
      </div></div></div>
    
  
</template>



<style>
.contents {
    background-color: #e9e9e2;
    width: 100%;
    height: 100vh;
}
.box.container {
    background-color: white;
    position: absolute;
    top: 25%;
    border-radius: 10px;
    left: 20%;
    width: 76%;
}
.head {
    display: flex;
}
.head-para {
    width: 96%;
    text-align: center;
   
}
.head.d-flex {
    width: 100%;
    margin-top: 2em;
}
.fa-solid, .fas {
    background-color: #7f7a7a;
    color: white;
    padding: 7px;
    border-radius: 50%;
    font-size: 15px;
}

.conlr.d-flex.col-12 {
    border-top: 1px solid gainsboro;
    padding-top: 1em;
    padding-bottom: 1em;
    margin: 0 1em;
    width: 97%;
}
.left {
    padding-left: 2em;
}
.right {
    padding-left: 4em;
    border-left: 1px solid gainsboro;
}
.one p {
    width: 90%;
    margin-bottom: 20px;
}
input[type="text"] {
    border-top: none;
    border-left: none;
    border-right: none;
    width: 80%;
    border-bottom: 2px solid darkviolet;
    margin-bottom: 1em;
}
button {
    width: 70%;
    border: none;
    border-radius: 40px;
    margin-bottom: 2em;
}
button h6 {
    opacity: .4;
    font-weight: 700;
    padding: 11px;
}
.two h4 {
    margin-bottom: 16px;
}
i.fa-solid.fa-pen {
    color: white;
    background: none;
    font-size: 12px;
    background-color: #125ba3;
    width: 7%;
    height: 100%;
    margin-left: 20px;
}
</style>
