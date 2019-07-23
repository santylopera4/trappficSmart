Vue.component('cro-no', {
    props:[''],
    template:
    `<div>
    <div id="flash_sales" class="cronometro">
		<div class="container">
			<div class="row">
				<div class="info col col-12 col-md-7 ">
						<h2 class="textocrono">TIEMPO LIMITE</h2>
						<h2 class="textocrono">PARA SU TICKET</h2>
						<p class="time-rest">LO ESTAMOS ESPERANDO</p>
				</div>
				<div class="ticket" >
				</div>
				<div class="reloj col col-12 col-md-5">
					<p id="quedan" class="time-rest">FALTAN:</p>
					<div class="inline-block">
						<h2 class="counter1" id="dias">00</h2>
						<span class="pre block de">días</span>
					</div>
					<div class="inline-block">
						<h2 class="counter" id="horas">00</h2>
						<span class="pre block de">horas</span>
					</div>
					<div class="inline-block de">
						<h2 class="counter" id="min">00</h2>
						<span class="pre block">min</span>
					</div>
					<div class="inline-block de">
						<h2 class="counter" id="seg">00</h2>
						<span class="pre block">seg</span>
					</div>
				</div>
			</div>
		</div>
	</div>	
	</div>`
	
})