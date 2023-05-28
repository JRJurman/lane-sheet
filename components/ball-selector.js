define`
  <ball-selector>
		<style>
			form {
				display: block;
			}
		</style>
		<form>
			Balls:
			<input id="ball-selection-1" type="radio" name="ball-selection" value="1" checked>
			<label for="id="ball-selection-1">1</label>
			<input type="radio" name="ball-selection" value="2">
			<label for="id="ball-selection-2">2</label>
			<input type="radio" name="ball-selection" value="3">
			<label for="id="ball-selection-3">3</label>
		</form>
		<script>
			initializeBallSelector(this);
		</script>
  </ball-selector>
`;

function initializeBallSelector(ballSelector) {
	const ballForm = ballSelector.shadowRoot.querySelector('form');
	ballForm.addEventListener(
		'change',
		(e) => {
			ballSelector.setAttribute('value', e.target.value);
			console.log('Form input changed to: ', e.target.value);
		},
		true
	);
}

function selectBall(form, event) {
	console.log({ form, event });
}
