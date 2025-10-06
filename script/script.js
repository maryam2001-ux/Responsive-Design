$(document).ready(function () {


  $('.btn-header').click(function() {
    $('.header').toggleClass('header-clr');

  });

  $('.btn-main').click(function() {
    $('.main').hide(1000);

  });


  $('.btn-sidebar').click(function() {

  const $fullText = $(this).siblings('p').find('.full-txt');
  const $btn = $(this);

  if ($fullText.hasClass('d-none')) {
    $fullText.removeClass('d-none');
    $btn.text('show Less');
  } else {
    $fullText.addClass('d-none');
    $btn.text('show More');

    }

  });
});