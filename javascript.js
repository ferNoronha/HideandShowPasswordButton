$(document).ready(function() {
      $("#mostrar").on("click",function(){
          if($('#password').get(0).type == 'password')
          {
            $('#password').get(0).type='text';
            $('#mostrar').get(0).value='esconder';
          }
          else{
            $('#password').get(0).type='password';
            $('#mostrar').get(0).value='mostrar';
          }
      })
     
});
