define`
	<score-display-round-selector player="" round="">
		<style>
			button {
				border: none;
				padding: 0;
				display: block;
				cursor: pointer;
				background: inherit;
				width: 100%;
			}

			button:hover {
				border: 2px solid white;
			}
		</style>
		<button onclick="selectRoundForPlayer(this, event)">
			<score-display-box ></score-display-box>
		</button>
	</score-display-round-selector>
`;

define`
	<round-selector>
		<style>
			div {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: repeat(10, 9vh);
				width: 18vh;
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

			section {
				display: flex;
				justify-content: space-between;
				padding: 0.2em 0;
				margin: 0;
			}

		</style>
		<section>
			<input type="text" size="10" placeholder="New Player" value=${'player'}>
		</section>
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
			<score-display-round-selector player=${'player'} round="11"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="12"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="13"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="14"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="15"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="16"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="17"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="18"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="19"></score-display-round-selector>
			<score-display-round-selector player=${'player'} round="20"></score-display-round-selector>
		</div>
	</round-selector>
`;

function selectRoundForPlayer(scoreDisplay, event) {
	const roundSelector = scoreDisplay.getRootNode().host;
	const player = roundSelector.getAttribute('player');
	const round = roundSelector.getAttribute('round');

	console.log({ player, round });
}
