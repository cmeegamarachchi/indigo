import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> { }


const Container: React.FC<Props> = (props) => {
	const { children, className, ...rest } = props
	return (
		<div {...rest} className={className}>{children}</div>
	)
}

export default Container