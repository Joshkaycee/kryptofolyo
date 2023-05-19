$(document).ready(function (){
  $('#home-left').waypoint(
    function() {
      $('.banner .left').addClass('animate__fadeInLeft');
    },
    {offset: '70%'}
  );



    $('#home-right').waypoint(function () {
      $('.banner .right').addClass('animate__fadeInRight');
    },{
      offset: '70%'
    })

    $('.logo').waypoint(function () {
      $('.logo').addClass('animate__fadeInLeft');
    }, {
      offset: '90%'
    });
    $('.list').waypoint(function () {
      $('.list').addClass('animate__fadeInRight');
    },{
      offest: '90%'
    });

    $('.about').waypoint(function (){
      $('.about').addClass('animate__fadeInLeft')
    },{
      offset: '90%'
    });
    $('.price').waypoint(function (){
      $('.price').addClass('animate__fadeInRight')
    },{
      offset: '90%'
    });
    $('.fade').waypoint(function (){
      $('.fade').addClass('animate__fadeIn')
    },{
      offset: '90%'
    });
    $('.event').waypoint(function (){
      $('.event').addClass('animate__fadeInLeft')
    },{
      offset: '90%'
    });


   
});

const menuBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-times')
const menu = document.querySelector('.list')
menuBtn.addEventListener('click', () => {
  menu.classList.add('open')
})

closeBtn.onclick = () => {
  menu.classList.remove('open')
};