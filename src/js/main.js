
$(window).scroll(function () {
  let __headerPosition = $("header").height() + $("header").position().top;
  if ($(this).scrollTop() > __headerPosition) {
    $("header").addClass("active shadow-lg shadow-gray-200");
  }
  else {
    $("header").removeClass("active shadow-lg shadow-gray-200");
  }
});
  
  


  $("#close_header_menu").click(function () {
    $("aside").fadeOut('fast');
  });
  $("#open_aside_menu").click(function () {
    $("aside").fadeIn('fast');
  });



// Limit summary total number of words
// $(document).ready(function () {

//     let __limitedSummaryWords = 60;
//     let __shortenWords = "";
//     console.log($(".summary"));

//     $(".summary").each(( __element, __value ) => {
//       console.log($(".summary")[__element].text());
//       let __text = __element.text();
//       console.log(__text);
//       if ( __text.length() >= __limitedSummaryWords ) {
  
//         for ( let i = 0; i <= __limitedSummaryWords; i++  ) {
//           __shortenWords += __text[i];
//         } 
  
//       }
//       else {
//         __shortenWords = __text;
//       }
  
  
//       __element.text(__shortenWords);
//     });

// });


document.querySelectorAll(".summary").forEach((__element, __index )=> {
  let __SelectedSummary = document.querySelectorAll(".summary")[__index];
  let __summarizedText = "";

  __SelectedSummary.textContent = __SelectedSummary.textContent.trim();

  if ( __SelectedSummary.textContent.length > 30 ) {
    let i = 0;
    while( i <= 100 ) {
      let __trimmedValue = __SelectedSummary.textContent[i].trim();
      __trimmedValue =__trimmedValue.trimEnd();
      __trimmedValue = __trimmedValue.trimStart();
      
      if ( __trimmedValue !== "" ) {  
        __summarizedText += __trimmedValue;
      }
      
      i++;
    }

      __summarizedText += "...";
  }
  else {
    __summarizedText = __SelectedSummary.textContent;
  }

  __SelectedSummary.textContent = __summarizedText;

});