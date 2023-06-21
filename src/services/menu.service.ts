/* eslint-disable import/extensions */
import { IProductItem } from 'src/shared/menu.types'

import { getMenuUrl } from 'src/config/api.config'

import axiosClassic from 'src/api/axiosClassic'

const MenuService = {
	async getAll() {
		return axiosClassic.get<IProductItem[]>(getMenuUrl('/products'))
	}
}

export default MenuService
