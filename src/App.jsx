import CustomTextField from './components/ui/customInput/CustomInput'
import '../src/assets/styles/global.css'

const App = () => {
	return (
		<>
			<p>Для отправки введите- 1</p>
			<CustomTextField
				typeField='standard'
				id='text'
				type='text'
				subTitle='Standard'
				helperText='help text'
			/>
			*no text and lable
			<CustomTextField typeField='standard' id='text' type='text' />
			<CustomTextField
				type='text'
				typeField='outlined'
				size='sm'
				id='text'
				subTitle='outlined-sm'
				helperText='help text'
			/>
			<CustomTextField
				type='text'
				typeField='outlined'
				size='base'
				id='text'
				subTitle='outlined-base'
				helperText='help'
			/>
			*no text and lable
			<CustomTextField type='text' typeField='outlined' size='base' id='text' />
			<CustomTextField
				type='text'
				typeField='outlined'
				size='lg'
				id='text'
				subTitle='outlined-lg'
				helperText='help'
			/>
		</>
	)
}

export default App
