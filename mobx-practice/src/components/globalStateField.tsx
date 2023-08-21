import React, { FC } from 'react'
import styles from '@/styles/css/globalStateField.module.css'

// interfaces
interface IGlobalStateField {
	data: {
		label: string,
		value: string;
		onChange: () => void;
	};
}

const globalStateField: FC<IGlobalStateField> = ({ data }) => {
	return (
		<form className={styles.form}>
			<label htmlFor={data.label}>{data.label}</label>
			<input type="text" id={data.label} value={data.value} onChange={data.onChange} />
		</form>
	)
}

export default globalStateField