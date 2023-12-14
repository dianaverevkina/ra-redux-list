import { useEffect } from 'react'
import { getServiceRequest } from '../../redux/slices/ServiceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';

export const ServiceView = () => {
  const { item, error, loading } = useSelector(state => state.service);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceRequest(id))
  }, [])

  let content;

  if (loading) {
    content = <Loader />;
  } else if (error) {
    content = <Error id={id} />;
  } else if (item){
    content = (
      <>
        <h1 className="service__name">{item.name}</h1>
        <p className="service__price">Цена: {item.price}</p>
        <p className='service__content'>Описание: {item.content}</p>
     </>
    );
  }
  return (
    <div className='service'>
      <NavLink to={`/`} className="service__btn">
        <span>Назад</span>
      </NavLink>
      {content}
    </div>
  )
}
