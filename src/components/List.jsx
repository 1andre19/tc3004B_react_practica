import React from 'react'
import Item from "./Item.jsx"

const List = ({items}) => {
	return (
		<>
		{items.map((i) => <Item item={i}/>)}
		</>
	)
}

export default List
