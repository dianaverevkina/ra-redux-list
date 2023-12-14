import { useDispatch } from 'react-redux'
import { getServiceRequest } from '../../redux/slices/ServiceSlice';
import { getServicesRequest } from '../../redux/slices/servicesSlice';

export const Error = ({id}) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(id ? getServiceRequest(id) : getServicesRequest());
  }

  return (
    <div className='error'>
      <p className='error__text'>Произошла ошибка!</p>
      <button onClick={handleClick}>Повторить запрос</button>
    </div>
  )
}
