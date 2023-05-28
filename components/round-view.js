define`
	<round-view>
		<round-header name=${'player'}></round-header>
		<form>
			<ball-selector></ball-selector>
			<pin-selector></pin-selector>
		</form>
		<button onclick="triggerNextPlayer()">Next Player</button>
		<script>
			addBallAndPinListener(this)
		</script>
	</round-view>
`;

function addBallAndPinListener(roundView) {}

function updateRoundHeaderScore(roundView) {
	// get the current ball selection
	// get the pin selection
	// Update the score display box in the round header
}

function triggerNextPlayer() {
	console.log('onto the next player');
}
