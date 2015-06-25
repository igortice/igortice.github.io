// Load foundation
(function () {
  $(document).foundation({accordion:{multi_expand: true}});
}());

// Animation body
(function () {
  $(document).ready(function () {
    $(".animsition").animsition({
      inClass:              'fade-in-right-sm',
      outClass:             'fade-out-right-sm',
      inDuration:           1500,
      outDuration:          1000,
      linkElement:          'a:not([target="_blank"]):not([href^=#]):not(".not-animsition")',
      // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
      loading:              true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass:         'animsition-loading',
      unSupportCss:         ['animation-duration',
        '-webkit-animation-duration',
        '-o-animation-duration'
      ],
      //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

      overlay: false,

      overlayClass:         'animsition-overlay-slide',
      overlayParentElement: 'body'
    });
  });
}());
