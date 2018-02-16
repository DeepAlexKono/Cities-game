var mentioned_ci = [];
var size = mentioned_ci.length;
var c_score = 0;
ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(res, RandomCity){ 


        	//alert(RandomCity + " передан в map.js");

			if( res == undefined)
			{
      			//alert("Creating a map...");
            myMap = new ymaps.Map ("map", {
                center: [55.76, 37.64],
                zoom: 1.4
            });
            myMap.controls.add('zoomControl'); 				
        	}
        	else
        	{

            var check_named = true;
            if(mentioned_ci[0] == undefined){}
            else {
        	for(var i = 0; i <= size; i++)
        	{
        		if(mentioned_ci[i] != res)
        		{   			
        		}
        		else 
        			{
        				alert("Этот город уже называли! Попробуйте ещё раз.");
                       // alert(mentioned_ci[i] + " = " + res);
        				check_named = false;
        			}
        	}
        }   

           // alert(check_named);


        	// Геокодирование ПОЛЬЗОВАТЕЛЯ
        if(check_named == true)
        {
            mentioned_ci[size] = res;
            size++;
            p_score+=1;
            document.getElementById("score_player").value = "СЧЁТ: "+p_score;
            var myGeocoder = ymaps.geocode(res);

			myGeocoder.then(
    			function (resu) {
       				//myMap.geoObjects.add(resu.geoObjects);


       				var coordinates = resu.geoObjects.get(0).geometry.getCoordinates();
       				//alert("Координаты " + res + " : " + coordinates);


					// Создание метки
       				myPlacemark = new ymaps.Placemark(coordinates, {
                	hintContent: res,
               	 	//balloonContent: 'Столица России'
            });
            		myMap.geoObjects.add(myPlacemark);
    			},
			);
        }

            // Геокодирование КОМПЬЮТЕРА
        if(check_named == true)
        {
            mentioned_ci[size] = RandomCity;
            size++;
            c_score+=1;
            document.getElementById("score_computer").value = "СЧЁТ: "+c_score;
			var comp_Geocoder = ymaps.geocode(RandomCity);

			comp_Geocoder.then(
				function (resource) {

					var  a = resource.geoObjects.get(0);
					if(a != null)
					{
					var coordinates = a.geometry.getCoordinates();

					myPlacemark = new ymaps.Placemark(coordinates, {
						hintContent: RandomCity,
					})
					myMap.geoObjects.add(myPlacemark);
					}
					else 
					{
						alert("Координаты города компьютера не были нами найдены. Однако вы запросто можете провериь существование такого города в Интернете=)");
					}
				},
				);
			document.getElementById("computer").value = RandomCity;
			
				// Получаем последнюю букву города компьютера
				var letter = RandomCity[RandomCity.length - 1].toUpperCase();
				var num_of_letter = letter.charCodeAt(0) - 1040;
				if (num_of_letter == 28)
				{
					letter = RandomCity[RandomCity.length - 2].toUpperCase();
				}
				//alert("Получили букву:" + letter);
				document.getElementById("player").value = letter;
        }

        }
    }



       