/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
   
   $('.popular-place .box-color').click(function(e){
       e.preventDefault();
        console.log($(this).closest('.container'));
       $(this).closest('.container').next('.container-fluid').find('.content').slideToggle();
   });
});
