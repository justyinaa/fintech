import React from 'react'
import Services from '../../Components/Services/Services';
import SendMoney from './SendMoney/SendMoney';
import GetApp from '../../Components/GetApp/GetApp';

const Service:React.FC = () => {
  return (
    <div>
      <Services />
      <SendMoney />
      <GetApp />
    </div>
  )
}

export default Service;
