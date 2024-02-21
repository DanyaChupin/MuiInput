import styles from './Loader.module.css'

const loaderSize = {
	sm: '16',
	base: '24',
	lg: '24',
}

const Loader = size => {
	return (
		<img
			className={styles['spin']}
			style={{
				width: `${loaderSize[size.size]}px`,
				height: `${loaderSize[size.size]}px`,
			}}
			src='../icons/41.svg'
			alt='loading'
		/>
	)
}

export default Loader
