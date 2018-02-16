

function help()
{

	var a = document.getElementById("list_form");
	var b = document.getElementById("big_list");
	b.value = inside;
	if(a.style.display == 'none')
	{
		a.style.display = 'block';
	}
  else if ( a.style.display == 'block' )
 	{
    a.style.display = 'none';
	}

	var inside = [];
	for (var i = 0; i <=100; i++)
	{
		var rand = Math.floor(Math.random()*(29 - 0)) + 0;
		inside[i] = Choose(rand);
	}
	b.innerHTML = inside;
}