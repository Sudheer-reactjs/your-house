import React from 'react';
import LoginImg  from '@/assets/images/logins.png';
import Image from 'next/image';
const LoginImage = () => {
    return (
        <div>
             <div className="right-image ">
                
          <Image src={LoginImg} alt="animate" className="h-full" />
        </div>
        </div>
    );
}

export default LoginImage;
