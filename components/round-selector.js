define`
	<score-display-round-selector player="" round="">
		<style>
			button {
				border: none;
				padding: 0;
				display: block;
				cursor: pointer;
				background: inherit;
			}
			
			button:hover {
				border: 2px solid white;
			}
		</style>
		<button onclick="selectRoundForPlayer(this, event)">
			<score-display-box ></score-display-box>
		</button>
	</score-display-round-selector>
`

define`
	<round-selector totalscore="0">
		<style>
			div {
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				grid-template-rows: 1fr 1fr;
			}

			input[type="text"] {
				font-family: inherit;
				color: var(--text-5);
				border: none;
				border-bottom: solid 2px;
				border-bottom-color: var(--text-7);
				outline: 0;
				background: none;
				font-size: 1em;
			}

			h2 {
				display: flex;
				justify-content: space-between;
				padding: 0.5em;
				margin: 0; 
			}
			
		</style>
		<h2>
			<input type="text" size="10" placeholder="New Player" value=${'player'}>
			<span>
				<span>${'totalscore'}</span>
				<button onclick="removePlayer(this)">Remove</button>
			</span>
		</h2>
		<div>
			<score-display-round-selector player=${'player'} round="1"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="2"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="3"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="4"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="5"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="6"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="7"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="8"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="9"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="10"></score-display-round-selector>
		</div>
	</round-selector>
`

function selectRoundForPlayer(scoreDisplay, event) {
	const roundSelector = scoreDisplay.getRootNode().host;
	const player = roundSelector.getAttribute('player')
	const round = roundSelector.getAttribute('round')

	console.log({player, round});
}

function removePlayer(button) {
	const roundSelector = button.getRootNode().host;
	roundSelector.remove()
}