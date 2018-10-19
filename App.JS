 $(document).ready(function(){
    //Get text from input box               
     var Username;
     var Password;
     var Email;
     var PhoneNumber;
     var Diary;
              var person = [] ;       
     $("button#diarySave").hide();
     $("p#diaryP").hide();
     $("form#login").hide();
     $("form#register").hide();
     $("button#loginEnter").hide();
     $("textarea#diary").hide();
     
     
          $("button#register").click(function(){  
              
              
               $("form#login").show();
               $ ("form#register").show();
              $("button#loginEnter").hide();
              
               });
              
          $("button#registerEnter").click(function(){
     if ( $("#username").val()== "" ||  $("#email").val() == "" ||  $("#password").val() == "" || $("#phoneNumber").val() == "") {
                  alert("Please fill out the fields.");
              }     
            else {  
                console.log("hi");
                Username = $("#username").val();
               Password = $("#password").val();
              Email = $("#email").val();
              PhoneNumber = $("#phoneNumber").val();
         person.push({
         Username: Username,
         Password: Password,
         Email: Email,
         PhoneNumber: PhoneNumber,
          Diary: Diary
          });
                  console.log(person);
                 }
             
          }) ;   
     
               $("button#login").click(function(){         
                   $("form#login").show();
                   $("button#loginEnter").show();
                   $("form#register").hide();
               });    
     
     $("button#loginEnter").click(function(){
         
      for  ( i = 0 ; i< person.length ; i++) {
         if (Password == person[i].Password && Username == person[i].Username) {
             
              $("button#diarySave").show();
            $("p#diaryP").show();
            $("form#login").hide();
            $("form#register").hide();
            $("button#loginEnter").hide();
            $("textarea#diary").show();
            $("button#register").hide();
            $("button#login").hide();
         }
          
          if   (Password != person[i].Password || Username != person[i].Username ){
               alert("ID not found");
          }
          
      }
     });
     
      $("button#diarySave").click(function(){
            Diary = $("textarea#diary").val();
          
   
          
          

      });
          
//  password stuff         
         //  var x = document.createElement("INPUT");
//x.setAttribute("type", "password");                     
                    
     
     
        //localStorage.setItem("Notes",person1 )                        
        //localStorage.getItem("Notes")                        
                                
 });
                   
                   
                   
                   
                   
                   
                   
                   
                   