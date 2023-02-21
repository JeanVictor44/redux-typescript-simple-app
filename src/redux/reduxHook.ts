import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from './store'

type DispatchFunc = () => AppDispatch

// Tipar o hook de seleção de estado 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: DispatchFunc = useDispatch