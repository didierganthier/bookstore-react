import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import girl from '../assets/girl.png';
import { checkStatus } from '../redux/reducers/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rootReducer.categories);
  return (
    <div className="mt-[200px] flex flex-col items-center justify-center">
      <p className="font-bold text-4xl text-gray-600">{status}</p>
      <img src={girl} className="my-10 rounded-full outer inner p-4" alt="construction" />
      <button className="bg-[#54B4FF] px-2 py-1 text-white rounded" type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
