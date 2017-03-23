jQuery(document).ready(function(){
    $("#ic_envoi").click(function(){
      if($('#tags').val() ===""){
        alert("Veuillez indiquer une ville");return false;
      }
      return true;
  });
    $( function() {
        var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
    } );

    $( function() {
        $( "#tabs" ).tabs();
    } );
});
