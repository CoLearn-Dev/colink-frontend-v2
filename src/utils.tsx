import { createSlice } from '@reduxjs/toolkit'
import { CoLinkClient } from './proto_js/ColinkServiceClientPb'

/* Stores information about the client + login status */
const initialState = {
  client: localStorage.getItem('address') || '',
  jwt: localStorage.getItem('jwt') || '',
  isAdmin: localStorage.getItem('isAdmin') === 'true' || false,
}

export const clientSlice = createSlice({
  name: 'clientState',
  initialState: initialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload
    },
    setJwt: (state, action) => {
      state.jwt = action.payload
    },
    setAdmin: (state, action) => {
      state.isAdmin = action.payload
    },
  },
})

export function readFromFile(e: React.ChangeEvent<HTMLInputElement>, callback: Function) {
  e.preventDefault()
  const reader = new FileReader()
  reader.onload = async (e) => {
    if (e == null || e.target == null) {
      return
    }
    const text = e.target.result
    if (text != null) {
      callback(text)
    }
  }
  if (e.target.files != null) {
    reader.readAsText(e.target.files[0])
  }
}

export function createDownloadHref(contents: string): string {
  let data: Blob = new Blob([contents], { type: 'text/plain' })
  let dataLink = window.URL.createObjectURL(data)
  return dataLink
}

export function copyText(text: string): void {
  navigator.clipboard.writeText(text)
}

export const { setClient, setJwt, setAdmin } = clientSlice.actions
export default clientSlice.reducer
