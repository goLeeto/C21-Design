//Plugin initialising for sliders and and tags

/*************************************************
------- First pop up box sliders and tags--------
*************************************************/

      $('#tokenfield').tokenfield({
        autocomplete: {
            source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
          },
          showAutocompleteOnFocus: true
      })


      // Code for initializing sliders
        var val;
        var maxVal = 200000;
        var maxSip = 400;
        var sipVal;
        $( function() {
          $( "#slider-range-min" ).slider({
            range: "min",
            value: 37,
            min: 0,
            max: maxVal,
            step: 5000,
            slide: function( event, ui ) {
              $( "#amount" ).val( "$" + ui.value );
              val = $( "#slider-range-min" ).slider( "value" ); //value of slider when user slides it
              $('.tooltiptext10').html(val+"€");
              $('.tooltiptext10').css('left',((val/maxVal)*100+15)+'%');
            }
          });

          //code for tooltip show hide and value given
          val = $( "#slider-range-min" ).slider( "value" ); // value of slider when first loaded
          $( "#amount" ).val( "$" + val );
          $('.tooltiptext10').html(val+"€");
          $('.tooltiptext10').css('left',((val/maxVal)*100+15)+'%');
          $('#slider-range-min').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext10').css('visibility', 'visible');
          });

          $('#slider-range-min').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext10').css('visibility', 'hidden');
          });

          //code for second slider in first pop up
          $( "#surface-range-min" ).slider({
            range: "min",
            value: 50,
            min: 1,
            max: maxSip,
            slide: function( event, ui ) {
              $( "#surface" ).val( "$" + ui.value );
              sipVal = $( "#surface-range-min" ).slider( "value" );
              $('.tooltiptext11').html(sipVal+"m<sup>2</sup>");
              $('.tooltiptext11').css('left',((sipVal/maxSip)*100+15)+'%');
            }
          });

          sipVal = $( "#surface-range-min" ).slider( "value" );
          $( "#surface" ).val( "$" + sipVal );
          $('.tooltiptext11').html(sipVal+"m<sup>2</sup>");
          $('.tooltiptext11').css('left',((sipVal/maxSip)*100+15)+'%');
          $('#surface-range-min').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext11').css('visibility', 'visible');
          });

          $('#surface-range-min').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext11').css('visibility', 'hidden');
          });
          
      });

/*************************************************
------- Second pop up box sliders and tags--------
*************************************************/
  $('#tokenfield2').tokenfield({
        autocomplete: {
            source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
          },
          showAutocompleteOnFocus: true
      })


      // Code for initializing sliders
        var val;
        var maxVal = 200000;

        $( function() {
          $( "#slider-range-min20" ).slider({
            range: "min",
            value: 37,
            min: 0,
            max: maxVal,
            step: 5000,
            slide: function( event, ui ) {
              $( "#amount2" ).val( "$" + ui.value );
              val = $( "#slider-range-min20" ).slider( "value" ); //value of slider when user slides it
              $('.tooltiptext20').html(val+"€");
              $('.tooltiptext20').css('left',((val/maxVal)*100+15)+'%');
            }
          });

          //code for tooltip show hide and value given
          val = $( "#slider-range-min20" ).slider( "value" ); // value of slider when first loaded
          $( "#amount2" ).val( "$" + val );
          $('.tooltiptext20').html(val+"€");
          $('.tooltiptext20').css('left',((val/maxVal)*100+15)+'%');
          $('#slider-range-min20').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext20').css('visibility', 'visible');
          });

          $('#slider-range-min20').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext20').css('visibility', 'hidden');
          });

          //code for second slider in first pop up
          $( "#surface-range-min21" ).slider({
            range: "min",
            value: 50,
            min: 1,
            max: maxSip,
            slide: function( event, ui ) {
              $( "#surface2" ).val( "$" + ui.value );
              sipVal = $( "#surface-range-min21" ).slider( "value" );
              $('.tooltiptext21').html(sipVal+"m<sup>2</sup>");
              $('.tooltiptext21').css('left',((sipVal/maxSip)*100+15)+'%');
            }
          });

          sipVal = $( "#surface-range-min21" ).slider( "value" );
          $( "#surface2" ).val( "$" + sipVal );
          $('.tooltiptext21').html(sipVal+"m<sup>2</sup>");
          $('.tooltiptext21').css('left',((sipVal/maxSip)*100+15)+'%');
          $('#surface-range-min21').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext21').css('visibility', 'visible');
          });

          $('#surface-range-min21').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext21').css('visibility', 'hidden');
          });
          
      });






/*************************************************
------- Third pop up box sliders and tags--------
*************************************************/

$('#tokenfield3').tokenfield({
        autocomplete: {
            source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
          },
          showAutocompleteOnFocus: true
      })


      // Code for initializing sliders
        var val;
        var maxVal = 200000;

        $( function() {
          $( "#slider-range-min30" ).slider({
            range: "min",
            value: 37,
            min: 0,
            max: maxVal,
            step: 5000,
            slide: function( event, ui ) {
              $( "#amount3" ).val( "$" + ui.value );
              val = $( "#slider-range-min30" ).slider( "value" ); //value of slider when user slides it
              $('.tooltiptext30').html(val+"€");
              $('.tooltiptext30').css('left',((val/maxVal)*100+15)+'%');
            }
          });

          //code for tooltip show hide and value given
          val = $( "#slider-range-min30" ).slider( "value" ); // value of slider when first loaded
          $( "#amount3" ).val( "$" + val );
          $('.tooltiptext30').html(val+"€");
          $('.tooltiptext30').css('left',((val/maxVal)*100+15)+'%');
          $('#slider-range-min30').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext30').css('visibility', 'visible');
          });

          $('#slider-range-min30').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext30').css('visibility', 'hidden');
          });

          //code for second slider in first pop up
          $( "#surface-range-min31" ).slider({
            range: "min",
            value: 50,
            min: 1,
            max: maxSip,
            slide: function( event, ui ) {
              $( "#surface3" ).val( "$" + ui.value );
              sipVal = $( "#surface-range-min31" ).slider( "value" );
              $('.tooltiptext31').html(sipVal+"m<sup>2</sup>");
              $('.tooltiptext31').css('left',((sipVal/maxSip)*100+15)+'%');
            }
          });

          sipVal = $( "#surface-range-min31" ).slider( "value" );
          $( "#surface3" ).val( "$" + sipVal );
          $('.tooltiptext31').html(sipVal+"m<sup>2</sup>");
          $('.tooltiptext31').css('left',((sipVal/maxSip)*100+15)+'%');
          $('#surface-range-min31').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext31').css('visibility', 'visible');
          });

          $('#surface-range-min31').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext31').css('visibility', 'hidden');
          });
          
      });


/*************************************************
------- 4-th pop up box sliders and tags--------
*************************************************/
$('#tokenfield4').tokenfield({
        autocomplete: {
            source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
          },
          showAutocompleteOnFocus: true
      })


      // Code for initializing sliders
        var val;
        var maxVal = 200000;

        $( function() {
          $( "#slider-range-min40" ).slider({
            range: "min",
            value: 37,
            min: 0,
            max: maxVal,
            step: 5000,
            slide: function( event, ui ) {
              $( "#amount4" ).val( "$" + ui.value );
              val = $( "#slider-range-min40" ).slider( "value" ); //value of slider when user slides it
              $('.tooltiptext40').html(val+"€");
              $('.tooltiptext40').css('left',((val/maxVal)*100+15)+'%');
            }
          });

          //code for tooltip show hide and value given
          val = $( "#slider-range-min40" ).slider( "value" ); // value of slider when first loaded
          $( "#amount4" ).val( "$" + val );
          $('.tooltiptext40').html(val+"€");
          $('.tooltiptext40').css('left',((val/maxVal)*100+15)+'%');
          $('#slider-range-min40').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext40').css('visibility', 'visible');
          });

          $('#slider-range-min40').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext40').css('visibility', 'hidden');
          });

          //code for second slider in first pop up
          $( "#surface-range-min41" ).slider({
            range: "min",
            value: 50,
            min: 1,
            max: maxSip,
            slide: function( event, ui ) {
              $( "#surface4" ).val( "$" + ui.value );
              sipVal = $( "#surface-range-min31" ).slider( "value" );
              $('.tooltiptext41').html(sipVal+"m<sup>2</sup>");
              $('.tooltiptext41').css('left',((sipVal/maxSip)*100+15)+'%');
            }
          });

          sipVal = $( "#surface-range-min41" ).slider( "value" );
          $( "#surface4" ).val( "$" + sipVal );
          $('.tooltiptext41').html(sipVal+"m<sup>2</sup>");
          $('.tooltiptext41').css('left',((sipVal/maxSip)*100+15)+'%');
          $('#surface-range-min41').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext41').css('visibility', 'visible');
          });

          $('#surface-range-min41').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext41').css('visibility', 'hidden');
          });
          
      });



/*************************************************
------- 5-th pop up box sliders and tags--------
*************************************************/

$('#tokenfield5').tokenfield({
        autocomplete: {
            source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
          },
          showAutocompleteOnFocus: true
      })


      // Code for initializing sliders
        var val;
        var maxVal = 200000;

        $( function() {
          $( "#slider-range-min50" ).slider({
            range: "min",
            value: 37,
            min: 0,
            max: maxVal,
            step: 5000,
            slide: function( event, ui ) {
              $( "#amount5" ).val( "$" + ui.value );
              val = $( "#slider-range-min50" ).slider( "value" ); //value of slider when user slides it
              $('.tooltiptext50').html(val+"€");
              $('.tooltiptext50').css('left',((val/maxVal)*100+15)+'%');
            }
          });

          //code for tooltip show hide and value given
          val = $( "#slider-range-min50" ).slider( "value" ); // value of slider when first loaded
          $( "#amount5" ).val( "$" + val );
          $('.tooltiptext50').html(val+"€");
          $('.tooltiptext50').css('left',((val/maxVal)*100+15)+'%');
          $('#slider-range-min50').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext50').css('visibility', 'visible');
          });

          $('#slider-range-min50').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext50').css('visibility', 'hidden');
          });

          //code for second slider in first pop up
          $( "#surface-range-min51" ).slider({
            range: "min",
            value: 50,
            min: 1,
            max: maxSip,
            slide: function( event, ui ) {
              $( "#surface5" ).val( "$" + ui.value );
              sipVal = $( "#surface-range-min51" ).slider( "value" );
              $('.tooltiptext51').html(sipVal+"m<sup>2</sup>");
              $('.tooltiptext51').css('left',((sipVal/maxSip)*100+15)+'%');
            }
          });

          sipVal = $( "#surface-range-min51" ).slider( "value" );
          $( "#surface5" ).val( "$" + sipVal );
          $('.tooltiptext51').html(sipVal+"m<sup>2</sup>");
          $('.tooltiptext51').css('left',((sipVal/maxSip)*100+15)+'%');
          $('#surface-range-min51').on('mouseover','.ui-slider-handle', function(){
            $('.tooltiptext51').css('visibility', 'visible');
          });

          $('#surface-range-min51').on('mouseleave','.ui-slider-handle', function(){
            $('.tooltiptext51').css('visibility', 'hidden');
          });
          
      });
