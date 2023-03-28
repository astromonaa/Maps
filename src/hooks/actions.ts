import { locationsActions } from "../store/locationSlice"
import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'

const actions = {
  ...locationsActions
}


export function useActions () {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}