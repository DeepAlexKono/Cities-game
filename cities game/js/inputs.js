var p_score = 0;
var RandomCity;
var letter_comp_l;
document.onkeypress = function(event)
{
	var input_v = document.getElementById("player").value;
	//alert("RandomCity = " + RandomCity);
	//alert("Получили последнюю букву компа: " + letter_comp_l);
	//alert("Получили букву пользователя: " + letter);
	if (event.keyCode == 13)
	{	
		var b = document.getElementById("list_form");
		b.style.display = 'none';
		var a = document.getElementById("help");
		a.disabled = true;


		document.getElementById("my_id").value = " ";
		var Check_last_l = false;
		if (letter_comp_l == undefined)
		{
			// alert("Не задано");
		}
		else Check_last_l = true;

		var check_pl = false;
		letter = input_v[0].toUpperCase();
		if (letter != letter_comp_l & Check_last_l == true)
		{
			alert("Буквы не совпадают! Вам на букву " + letter_comp_l);
			document.getElementById("player").value = letter_comp_l;
		}
		else {
		var num_of_letter = letter.charCodeAt(0) - 1040;
		//alert("Получили код буквы: " + num_of_letter);
		check_pl = Check_pl(num_of_letter, input_v);
		//alert(check_pl);

		//
		if(input_v != 0 & check_pl == true)
		{	
			
			var letter = input_v[input_v.length - 1].toUpperCase();
			var num_of_letter_2 = letter.charCodeAt(0) - 1040;
			//alert(num_of_letter_2);
			if (num_of_letter_2 == 28)
			{
				letter = input_v[input_v.length - 2].toUpperCase();
				num_of_letter_2 = letter.charCodeAt(0) - 1040;
			}
			//alert(letter);
			//alert(num_of_letter);

			RandomCity = Choose(num_of_letter_2);
			//alert(p_score);
			init(input_v, RandomCity);
			letter_comp_l = RandomCity[RandomCity.length - 1].toUpperCase();
			var num_of_letter_3 = letter_comp_l.charCodeAt(0) - 1040;
			if (num_of_letter_3 == 28)
			{
				letter_comp_l = RandomCity[RandomCity.length - 2].toUpperCase();
			}
		}
		else
			{
				alert("Такой город не существует либо введён с маленькой буквы.");
			}
		}
	}
}