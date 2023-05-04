define`
  <ball-selector>
		<style>
			section {
				display: block;
			}
		</style>
		<section>
			Ball: 
			<input id="ball-selection-1" type="radio" name="ball-selection" value="1" checked>
			<label for="id="ball-selection-1">1</label>
			<input type="radio" name="ball-selection" value="2">
			<label for="id="ball-selection-2">2</label>
			<input type="radio" name="ball-selection" value="3">
			<label for="id="ball-selection-3">3</label>
		</section>
  </ball-selector>
`;

function selectBall(form, event) {
	console.log({form, event})
}