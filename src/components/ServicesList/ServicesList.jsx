import { useEffect } from 'react';
import { ServiceItem } from './ServiceItem/ServiceItem'
import { useDispatch, useSelector } from 'react-redux'
import { getServicesRequest } from '../../redux/slices/servicesSlice';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';

export const ServicesList = () => {
  const { items, error, loading } = useSelector(state => state.services);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getServicesRequest())
  }, [])

  let content;

  if (loading) {
    content = <Loader />;
  } else if (error) {
    content = <Error />;
  } else {
    content = items.map(service => <ServiceItem key={service.id} {...service} />)
  }

  return (
    <>
      <h1>Список услуг</h1>
      <ul className='service-list'>
        {content}
      </ul>
    </>
  )
}
