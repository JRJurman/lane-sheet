define`
  <pin-selector>
		<style>
			form {
				display: block;
			}
		</style>
		<form>
			Pins:
			<input id="pin-selection-0" type="checkbox" name="pin-selection-0" value="0">
			<label for="pin-selection-0">0</label>
			<input id="pin-selection-1" type="checkbox" name="pin-selection-1" value="1">
			<label for="pin-selection-1">1</label>
			<input id="pin-selection-2" type="checkbox" name="pin-selection-2" value="2">
			<label for="pin-selection-2">2</label>
			<input id="pin-selection-3" type="checkbox" name="pin-selection-3" value="3">
			<label for="pin-selection-3">3</label>
			<input id="pin-selection-4" type="checkbox" name="pin-selection-4" value="4">
			<label for="pin-selection-4">4</label>
			<input id="pin-selection-5" type="checkbox" name="pin-selection-5" value="5">
			<label for="pin-selection-5">5</label>
			<input id="pin-selection-6" type="checkbox" name="pin-selection-6" value="6">
			<label for="pin-selection-6">6</label>
			<input id="pin-selection-7" type="checkbox" name="pin-selection-7" value="7">
			<label for="pin-selection-7">7</label>
			<input id="pin-selection-8" type="checkbox" name="pin-selection-8" value="8">
			<label for="pin-selection-8">8</label>
			<input id="pin-selection-9" type="checkbox" name="pin-selection-9" value="9">
			<label for="pin-selection-9">9</label>
			<input id="pin-selection-10" type="checkbox" name="pin-selection-10" value="10">
			<label for="pin-selection-10">10</label>
		</form>
		<script>
			initializePinSelector(this);
		</script>
  </pin-selector>
`;

function initializePinSelector(pinSelector) {
	const pinForm = pinSelector.shadowRoot.querySelector('form');
	pinForm.addEventListener(
		'change',
		(e) => {
			pinSelector.setAttribute('value', e.target.value);
			// when a higher number is selected, select the previous
			[...pinForm.querySelectorAll('input')].forEach((input) => {
				input.checked = parseInt(input.value) <= parseInt(e.target.value);
			});
		},
		true
	);
}
