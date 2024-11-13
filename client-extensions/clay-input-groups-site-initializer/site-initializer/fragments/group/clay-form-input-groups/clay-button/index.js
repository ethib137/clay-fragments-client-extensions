import React from 'react';
import ReactDOM from 'react-dom';
import ClayButton from '@clayui/button';

ReactDOM.render(
	React.createElement(
		ClayButton, {
			onClick: function() {
				console.log('clicked');
			}
		},
		configuration.label
	),
	fragmentElement
);