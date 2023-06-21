/* eslint-disable import/extensions */
import { useQuery } from '@tanstack/react-query'

import MenuService from 'src/services/menu.service'

const useMenu = () => {
	const { data: allProducts } = useQuery(
		['get all products'],
		() => MenuService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return { allProducts }
}

export default useMenu
