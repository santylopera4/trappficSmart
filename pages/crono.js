Vue.component('cro-no', {
    props:[''],
    template:
    `<div>
    <div id="flash_sales" style="background:rgb(0, 0, 0);">
		<div class="container">
			<div class="col-xs-12">
				<div class="col-md-5 col-xs-10">
						<h2 class="texto">TIEMPO LIMITE</h2>
						<h2 class="texto">PARA SU TICKET</h2>
						<p class="time-rest" style="color:rgb(255, 255, 255)">LO ESTAMOS ESPERANDO</p>
				</div>
				<div class="ticket col-md-3 col-xs-12" >
				</div>
				<div class="col-md-4 col-xs-12 reloj">
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