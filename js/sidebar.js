$('.sidebar-menu i').click(function(){
    $(this).parents('.dropdown').find('.dropdown').not($(this).siblings('ul')).slideUp();
    $(this).siblings('ul').stop(true,true).slideToggle();
    $(this).toggleClass('active');
});
$('#btn-open-navbar, #btn-close-navbar, .overlay').click(function(){
    $('.overlay, .sidebar').toggleClass('active'); 
})