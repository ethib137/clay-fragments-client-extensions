import React from 'react';
import ReactDOM from 'react-dom';
import ClayPickerInputGroup from 'clay-picker-input-group';

console.log(ReactDOM, React, ClayPickerInputGroup);
console.log('input', input);
console.log('configuration', configuration);

ReactDOM.render(
	React.createElement(
		ClayPickerInputGroup, {
			errorMessage: input.errorMessage,
			helpText: input.helpText,
			label: input.label,
			name: input.name,
			namespace: fragmentEntryLinkNamespace,
			options: input.attributes.options,
			placeholder: configuration.placeholder,
			readOnly: input.readOnly || (layoutMode === 'edit'),
			required: input.required,
			showHelpText: input.showHelpText,
			showLabel: input.showLabel,
			spritemap: Liferay.Icons.spritemap,
			value: input.value,
		}
	),
	fragmentElement
);