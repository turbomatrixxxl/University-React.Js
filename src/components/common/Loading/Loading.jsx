import React from 'react';

import { Vortex } from 'react-loader-spinner';

import style from './Loading.module.css';

export default function Loading() {
  return (
    <div className={style.loadingPage}>
      <div className={style.spinnerContainer}>
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    </div>
  );
}
