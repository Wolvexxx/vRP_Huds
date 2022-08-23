$(document).ready(function(){	
	var voiceModes = {
		1: 'sussurando',
		2: 'normal',
		3: 'gritando'
	}
	window.addEventListener("message",function(event){
        // if (event.data.hud){
        // 	$("body").css("display","block");
        // } else {
		// 	$("body").css("display","none");
		// }
		

		switch(event.data.action){
			case 'hudChannel':
				$('#frequencia span').text(event.data.channel)
				break;
			case 'hudMode':
				$(".voice").hide()
				for(const i in voiceModes){
					if(i<event.data.mode){
						$(`#${voiceModes[i]}`).show()
					}
				}
				$(`#${(voiceModes[event.data.mode] ? voiceModes[event.data.mode] : 'normal')}`).show()
				break;
			case "update":
				$('#topoVelo').css('opacity', '0');
			break; 
			case "inCar":
				$('#topoVelo').css('opacity', '1');
				if(event.data.cinto == false){
					$('#cinto').css('visibility', 'visible');

				}else if(event.data.cinto == true){
					$('#cinto').css('visibility', 'hidden');
				}
			break; 
			case "updateSpeed":
				$('#velocidade span').text(event.data.speed)
				$('#gasolina span').text(event.data.fuel)
			break; 
		}
		
		$('.healthDisplay').css('width', event.data.health+'%')
		$('#displayColete span').css('width', event.data.armour+'%')

		$('#rua').text(event.data.rua)





		$('#horas span').text(event.data.date)
		if (event.data.health == 1){
			$(".healthDisplay").css("width","0");
		} else {
			$(".healthDisplay").css("width",event.data.health +"%");
		}
		
		$(".staminaDisplay").css("width",100-event.data.stamina +"%");
	})
});