function results()
{
	document.getElementById('player').setAttribute('disabled', 'disabled');
	var ider = document.getElementById("add");

	ider.innerHTML = "Поздравляем, игра окончена!<br>Ваше количество очков: " + p_score + "<br>";
	ider.innerHTML += "Количество очков компьютера: " + c_score + "<br><br>";
	ider.innerHTML += "Ваши города:<br>";
	for (var i = 0; i < size; i+=2)
	{
		ider.innerHTML+= mentioned_ci[i] + " ";
	}
	ider.innerHTML += "<br><br>Города компьютера:<br>";
	for (var i = 1; i < size; i+=2)
	{
		ider.innerHTML+= mentioned_ci[i] + ", ";
	}
}