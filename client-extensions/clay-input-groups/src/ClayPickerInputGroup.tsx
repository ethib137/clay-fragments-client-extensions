	import React, { useState } from "react";
	import ClayForm from '@clayui/form';
	import {Option, Picker} from '@clayui/core';
	import ClayIcon from '@clayui/icon';

	type Option = {
		label: string,
		value: string
	};

	function ClayPickerInputGroup(props) {
		const {
			errorMessage = '',
			helpText = '',
			label = '',
			name = '',
			namespace = '',
			options = [],
			placeholder = '',
			readOnly = false,
			required = false,
			showHelpText = false,
			showLabel = true,
			spritemap,
			value: initialValue = "",
		} = props;

		const hasError = errorMessage.length > 0;

		const [value, setValue] = useState(initialValue);

		return (
			<ClayForm.Group className={`mb-0 ${hasError ? 'has-error' : ''}`}>
				<label className={(!showLabel || label.length === 0) ? 'sr-only' : ''} htmlFor={`${namespace}Input`}>
					{label}

					{required &&
						<ClayIcon className="reference-mark" symbol="asterisk" spritemap={spritemap} />
					}
				</label>

				<Picker
					aria-describedby={`${namespace}Feedback`}
					disabled={readOnly}
					id={`${namespace}Picker`}
					items={options}
					onSelectionChange={value => setValue(value)}
					placeholder={placeholder}
				>
					{(item: Option) => <Option key={item.value}>{item.label}</Option>}
				</Picker>

				<input name={name} type="hidden" value={value}></input>

				<ClayForm.FeedbackGroup id={`${namespace}Feedback`}>
					{hasError &&
						<ClayForm.FeedbackItem>
							<ClayForm.FeedbackIndicator spritemap={spritemap} symbol="exclamation-full" />

							{errorMessage}
						</ClayForm.FeedbackItem>
					}

					{showHelpText &&
						<ClayForm.Text>{helpText}</ClayForm.Text>
					}
				</ClayForm.FeedbackGroup>
			</ClayForm.Group>
		);
	}

	export default ClayPickerInputGroup;
