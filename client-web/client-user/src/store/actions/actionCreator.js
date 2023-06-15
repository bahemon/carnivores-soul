import { redirect } from "react-router-dom"
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_DETAIL_SUCCESS
} from "./actionType"

// const BASE_URL = 'https://api.abdullahbahy.site'
const BASE_URL = 'http://localhost:3000'

export function fetchProductsSuccess(payload) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  }
}

export function fetchProducts() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/pub/products')

      if (!res.ok) {
        throw await res.json()
      }

      const data = dispatch(fetchProductsSuccess(await res.json()))
      // console.log(data, 'fetch')
    } catch (err) {
      console.log(err)
    }
  }
}


export function fetchCategoriesSuccess(payload) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload
  }
}

export function fetchCategories() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/pub/categories')

      if (!res.ok) {
        throw await res.json()
      }

      const data = dispatch(fetchCategoriesSuccess(await res.json()))
    } catch (err) {
      console.log(err)
    }
  }
}

export function fetchDetailSuccess(payload) {
  return {
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload
  }
}

export function fetchDetail(slug) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/pub/products/' + slug)

      if (!res.ok) {
        throw await res.json()
      }

      const data = dispatch(fetchDetailSuccess(await res.json()))

    } catch (err) {
      console.log(err)
    }
  }
}