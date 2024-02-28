<template class="home">
    <div class="mains">
      <div class="contents col-12 d-flex">
          
        <div class="boxx1 container col-4 bordered"> 
          <div class="front">
              <div class="fronti">
              <i class="fa-solid fa-pen"></i><p>Personal</p></div></div>
        
              
          
       
      </div>
      <div class="boxx2 container col-8 bordered">
          
              <div class="end">
                  <div class="lnn1">
                      <div class="lname"><span>Welcome</span><h3>VENKATACHALAM,Share a bit about yourself</h3></div><div class="lname2"><i class="fa-solid fa-question"></i><i class="fa-solid fa-ellipsis-vertical"></i></div>
                  </div>
                  <div class="ln2">
                      <div class="lnn2"><h3>Enter your bank account details</h3>
                    <p>We need these details only to verify that this bank account belongs to you</p></div>
                      
                  </div>
                  <div class="ln2">
                      <div class="lnn2"><h6>Enter your account number</h6>
                    </div>
                    <div class="ln222">
                         <input type="text" class="in1" value="...........">
                      </div>
                      
                      
                  </div>
                  <div class="ln2">
                      <div class="lnn2"><h6>Re-enter the account number</h6></div>
                      
                      <div class="ln222">
                         <input type="text" class="in2" value="2344">
                      </div>
                      <div class="ln222">
                        <p style="color: red;margin-bottom: none;">Account numbers do not match.</p>
                      </div>
                  </div>
                  <div class="ln2">
                      <div class="lnn2"><h6>Enter IFSC code</h6></div>
                      
                      <div class="ln222">
                         <input type="text" class="in3">
                      </div>
                     
                  </div>
                  <NuxtLink to="/page8"><button><h6>Continue</h6></button></NuxtLink>
              </div>
          </div>
      
      </div>
  </div>
      
      
    
  </template>
  
 
  
  <style>
  .contents {
      background-color: #e9e9e2;
      width: 100%;
      height: 86vh;
  }
  .boxx1.container.col-4.bordered {
      width: 24%;
      display: flex;
      align-items: center;
  }
  .front {
      width: 100%;
      height: 80vh;
      background: white;
  }
  .boxx2.container.col-8.bordered {
      width: 74%;
      display: flex;
      align-items: center;
  }
  .end {
      background: white;
      width: 99%;
      height: 80vh;
  }
  .mains {
      background-color:  white;
      margin-top: 4em;
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
      font-size: 10px;
  }
  
  .conlr.d-flex.col-12 {
      border-top: 1px solid gainsboro;
      padding-top: 1em;
      padding-bottom: 1em;
      margin: 0 1em;
      width: 97%;
  }
  
  .one p {
      width: 70%;
      margin-bottom: 20px;
  }
  .in1 {
    border-top: none;
    border-left: none;
    border-right: none;
    width: 90%;
    border-bottom: 2px solid rgb(137, 107, 150);
    margin-bottom: -1em;
}
.in2, .in3 {
    border-top: none;
    border-left: none;
    border-right: none;
    width: 90%;
    border-bottom: 2px solid rgb(137, 107, 150);
    margin-bottom: -1em;
}
  
  .two h4 {
      margin-bottom: 16px;
  }
  i.fa-solid.fa-pen {
      color: white;
      background: none;
      font-size: 11px;
      background-color: #125ba3;
      width: 8%;
      height: 100%;
      margin-left: 20px;
  }
  .fronti {
      display: flex;
      background-color: #dee7fb;
      margin: 20px 24px;
      gap: 15px;
      padding-top: 10px;
      border-radius: 6px;
  }
  .fronti p{
      color: #125ba3;
  }
  .lnn1 {
      display: flex;
      margin-top: 10px;
      border-bottom: 3px solid #e8e8ff;
      width: 95%;
      margin-left: 1em;
      padding-bottom: 1em;
  }
  .lname {
      display: flex;
      width: 95%;
  }
  .lname span {
      font-size: 22px;
      margin-right: 1em;
  }
  i.fa-solid.fa-ellipsis-vertical {
      color: #7f7a7a;
      background: none;
  }
  .lnn22 a, .ln222 a {
      border: 1px solid gainsboro;
      border-radius: 20px;
      margin: 10px;
      font-weight: 500;
      padding: 5px;
      font-size: 14px;
  }
  .ln222 {
      margin-top: 10px;
  }
  .lnn22 {
      margin-top: 2em;
  }
  .ln2 {
      margin-left: 1em;
      margin-top: 17px;
      width: 100%;
      border-bottom: none;
  }
  button {
    width: 86%;
    border: none;
    border-radius: 40px;
    margin-bottom: 2em;
    margin-left: 4em;
    margin-top: 2em;
}
button h6 {
    opacity: .4;
    font-weight: 700;
    padding: 11px;
}
  </style>
  