<!-- start Simple Custom CSS and JS -->
<!-- More options menu-->
<script type="text/javascript">                    
    // Cache a reference to the hidden content.
    var hiddenContent = $( "h1.entry-title" );

    // Bind to the Read More link to toggle the
    $( "input.raq-send-request" ).click(function( event ){
            // Cancel the default event (this isn't a real link).
            event.preventDefault();

            // Check to see if the content is visible.
            if (hiddenContent.is( ":visible" )){

            // Hide it slowly.
            hiddenContent.slideUp( 300 );

            } else {

            // Show it slowly.
            hiddenContent.slideDown( 200 );

            }
        }
    );
</script>
<!-- More options menu--><!-- end Simple Custom CSS and JS -->
