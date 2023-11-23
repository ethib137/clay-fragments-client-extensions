Promise.all([
	import('react-dom'),
	import('react'),
	import('clay-picker-input-group')
]).then(([ReactDOM, React, ClayPickerInputGroup]) => {
	console.log(ReactDOM, React, ClayPickerInputGroup);
	console.log('input', input);
	console.log('configuration', configuration);

	ReactDOM.render(
		React.createElement(
			ClayPickerInputGroup.default, {
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
				spritemap: `${themeDisplay.getPathThemeImages()}/clay/icons.svg`,
				value: input.value,
			}
		),
		fragmentElement);
});