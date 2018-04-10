/*
function checkInput( event, inputSelector, maxDigitsCount, errorSelector )
{
	var digitsCount = $( inputSelector ).val().length;
	var key = event.key;
	
	
	
	if ( digitsCount >= maxDigitsCount && key != 'Backspace' )
	{
		event.preventDefault();
		return false;
	}
	
	
	
	if ( key == '0' || key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9' || key == 'Backspace' )
	{
		$( errorSelector ).hide();
	}
	else
	{
		$( errorSelector ).show();
		event.preventDefault();
		return false;
	}
}


function checkPolis()
{
	var series = $( '#polis-series' ).val();
	var number = $( '#polis-number' ).val();
	
	
	$( '#polis-success, #polis-error' ).hide();
	
	
	$.post(
		'/ajax/check_polis.php',
		{
			SERIES: series,
			NUMBER: number
		},
		function ( data )
		{
			if ( data == 'success' )
			{
				$( '#polis-success' ).show();
			}
			else if ( data == 'error' )
			{
				$( '#polis-error' ).show();
			}
		}
	);
}



$( document ).ready(
	function ()
	{
		
		$( '#polis-series' ).keydown(
			function ( event )
			{
				checkInput( event, '#polis-series', 2, '#polis-series-error' );
			}
		);
		
		
		$( '#polis-number' ).keydown(
			function ( event )
			{
				checkInput( event, '#polis-number', 6, '#polis-number-error' );
			}
		);
		
		
		$( '#polis-submit' ).click(
			function ()
			{
				checkPolis();
			}
		);
		
	}
);
*/