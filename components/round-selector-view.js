define`
	<round-selector-view>
		<div>
			<round-selector player="Tina" totalscore="20"></round-selector>
		</div>
		<button onclick="addNewPlayer(this)">Add Player</button>
	</round-selector-view>
`

function addNewPlayer(button) {
	const roundSelectorDiv = button.getRootNode().querySelector('div')
	const newPlayer = html`<round-selector></round-selector>`
	roundSelectorDiv.appendChild(newPlayer)
	console.log("Adding new player....")
}