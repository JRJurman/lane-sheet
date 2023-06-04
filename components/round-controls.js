define`
	<round-controls>
		<style>
			h2 {
				margin-top: 0;
			}
		</style>
		<h2>${'name'}'s Turn</h2>
		<form>
			<pin-selector></pin-selector>
		</form>
		<button type="button" onclick="addNewPlayer(this)">Add Player</button>
		<span>
				<button type="button" onclick="removePlayer(this)">Remove Current Player</button>
			</span>
	</round-controls>
`;

function addNewPlayer(button) {
	const roundSelectorDiv = button.getRootNode().querySelector('div');
	const newPlayer = html`<round-selector></round-selector>`;
	roundSelectorDiv.appendChild(newPlayer);
	console.log('Adding new player....');
}

function removePlayer(button) {
	const roundSelector = button.getRootNode().host;
	roundSelector.remove();
}
