import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='header-title w-75 mt-4'>
            <h4 className='text-center pt-3' >Q-Zone</h4>
            <div >
                <img src={QZone1} alt="" className='img-fluid  ' />
                <img src={QZone2} alt=""   className='img-fluid  '/>
                <img src={QZone3} alt="" className='img-fluid ' />
            </div>
        </div>
    );
};

export default QZone;