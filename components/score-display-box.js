define`
	<score-display-box width="100%">
		<style>
			svg {
				display: block;
				border: solid 1px var(--text-2);
			}
			polygon {
				fill: none;
			}

			svg[modifier="spare"] polygon[spare],
			svg[modifier="strike"] polygon[spare] {
				fill: var(--text-2);
			}

			svg[modifier="strike"] polygon[strike] {
				fill: var(--text-2);
			}

			text {
				font: bold 60px sans-serif;
				fill: var(--text-2);
			}
		</style>
		<svg viewbox="0 0 100 100" width=${'width'} modifier=${'modifier'}>
			<polygon spare strike points="0,0 30,0 0,30" />
			<polygon strike points="100,100 70,100 100,70" />
			<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${'score'}</text>
		</svg>
	</score-display-box>
`