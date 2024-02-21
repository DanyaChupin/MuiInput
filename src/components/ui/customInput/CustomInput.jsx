import {
	FormHelperText,
	InputAdornment,
	InputLabel,
	TextField,
	withStyles,
} from '@material-ui/core'
import { sizeInput, colors, constant } from './constant.styled'
import { useState } from 'react'
import Loader from '../loader/Loader'

const initialValue = {
	text: '',
	isLoading: false,
	error: false,
}

const CustomTextField = ({
	id,
	subTitle = '',
	helperText = '',
	size,
	typeField,
	type,
}) => {
	const [inputState, setInputState] = useState(initialValue)

	const setText = e => {
		setInputState(prev => ({ ...prev, text: e.target.value }))
	}

	const onSubmit = e => {
		e.preventDefault()
		const text = e.target.text.value
		if (text === '1') {
			setInputState(prev => ({ ...prev, isLoading: true }))
			setTimeout(() => {
				setInputState(initialValue)
			}, 2000)
		} else {
			setInputState(prev => ({ ...prev, error: true }))
			setTimeout(() => {
				setInputState(prev => ({ ...prev, error: false }))
			}, 1000)
		}
	}

	const StyledTextField = withStyles({
		root: {
			width: '100%',
			margin: constant.margin,

			'& .MuiInput-underline:before': {
				borderBottom: `1px solid ${colors.primary.main}`,
			},
			'& .MuiInput-underline:hover:before': {
				borderBottom: `1px solid ${colors.primary.hover}`,
			},
			'& .MuiInput-underline:after': {
				transition: constant.transition,
				borderBottom: `2px solid ${
					inputState.error ? colors.primary.error : colors.primary.focus
				}`,
			},
			'& .MuiOutlinedInput-input': { padding: `${sizeInput[size]} 12px` },
			'& .MuiOutlinedInput-root': {
				color: inputState.isLoading && colors.hover,
				'& fieldset': {
					transition: constant.transition,
					borderRadius: constant.borderRadius,
					borderColor: colors.primary.main,
				},
				'&:hover fieldset': {
					borderColor: !inputState.error && colors.hover,
				},
				'&.Mui-focused fieldset': {
					borderColor: colors.primary.focus,
				},
			},
		},
	})(TextField)

	return (
		<form onSubmit={onSubmit} style={{ width: '448px', margin: '30px 0px' }}>
			<InputLabel htmlFor='text' style={{ fontSize: '12px' }}>
				{subTitle}
			</InputLabel>
			<StyledTextField
				variant={typeField}
				type={type}
				value={inputState.text}
				onChange={e => setText(e)}
				InputLabelProps={{
					shrink: true,
				}}
				id={id}
				error={inputState.error}
				disabled={inputState.isLoading}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							{inputState.isLoading && <Loader size={size} />}
						</InputAdornment>
					),
				}}
			/>
			<div style={{ width: '100%' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<FormHelperText error={inputState.error}>{helperText}</FormHelperText>
					<FormHelperText error={inputState.error}>
						{inputState.text.length}/200
					</FormHelperText>
				</div>
			</div>
		</form>
	)
}

export default CustomTextField
