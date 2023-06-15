import {
  PRODUCTS_FETCH_SUCCESS,
  CATEGORIES_FETCH_SUCCESS
} from "./actionType"

// const BASE_URL = 'https://api.abdullahbahy.site'
const BASE_URL = 'http://localhost:3000'

export async function userLogin(loginData) {
  try {
    const res = await fetch(BASE_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    if (!res.ok) {
      throw await res.json()
    }

    const data = await res.json()

    localStorage.setItem('access_token', data.access_token)

  } catch (err) {
    throw err
  }
}

export async function userRegister(registerData) {
  try {
    const res = await fetch(BASE_URL + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.access_token
      },
      body: JSON.stringify(registerData)
    })

    if (!res.ok) {
      throw await res.json()
    }
    return await res.json()
  } catch (err) {
    throw err
  }
}


export function productsFetchSuccess(payload) {
  return {
    type: PRODUCTS_FETCH_SUCCESS,
    payload
  }
}

export function fetchProducts() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })

      if (!res.ok) {
        throw await res.json()
      }

      const data = dispatch(productsFetchSuccess(await res.json()))
    } catch (err) {
      console.log(err, "fetchProducts action")
    }
  }
}


export function deleteProduct(id) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/products/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.access_token
        }
      })

      if (!res.ok) {
        throw await res.json()
      }

      return await res.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export function categoriesFetchSuccess(payload) {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload
  }
}

export function fetchCategories() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.getItem('access_token')
        }
      })

      if (!res.ok) {
        throw await res.json()
      }

      dispatch(categoriesFetchSuccess(await res.json()))
    } catch (err) {
      console.log(err, "fetchCategories action")
    }
  }
}

export function addProducts(data) {
  return async (dispatch, getState) => {
    try {
      const { product, images } = data
      const res = await fetch(BASE_URL + '/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.access_token
        },
        body: JSON.stringify({
          ...product,
          images
        })
      })

      if (!res.ok) {
        throw await res.json()
      }
      return await res.json()
    } catch (err) {
      throw err
    }
  }
}

export function editProduct(data) {
  console.log(data)
  return async (dispatch, getState) => {
    try {
      const { product, images } = data
      const res = await fetch(BASE_URL + '/products/' + data.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.access_token
        },
        body: JSON.stringify({
          ...product,
          images
        })
      })

      if (!res.ok) {
        throw await res.json()
      }
      return await res.json()
    } catch (err) {
      throw err
    }
  }
}


export function addCategory(categoryData) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.access_token
        },
        body: JSON.stringify(categoryData)
      })

      if (!res.ok) {
        throw await res.json()
      }
      return await res.json()
    } catch (err) {
      throw err
    }
  }
}

export function editCategory(categoryData) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/categories/' + categoryData.id, {
        method: 'PUT',
        headers: {
          'Action-Type': 'application/json',
          'access_token': localStorage.access_token
        },
        body: JSON.stringify({
          name: categoryData.name
        })
      })

      if (!res.ok) {
        throw await res.json()
      }

      return await res.json()
    } catch (err) {
      // console.log(err)
      throw err
    }
  }
}

export function deleteCategory(id) {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(BASE_URL + '/categories/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'access_token': localStorage.access_token
        }
      })

      if (!res.ok) {
        throw await res.json()
      }
      return await res.json()
    } catch (err) {
      throw err
    }
  }
}
