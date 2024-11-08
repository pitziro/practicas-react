import { useDispatch, useSelector } from 'react-redux'

/* aunq esto se usa más para el tema de typescript 
esto tambien provee de una capa de abstraccion para que 
no todos los componentes dependan de redux,sino que aqui 
se centraliza */
export const useAppSelector = useSelector

export const useAppDispatch = useDispatch
