import React from 'react';
import { connect } from 'react-redux'; 

const Alerts = ({ alerts })=> {
  return (
      <div className='fixed top:0 left:0 w-full'>
        {alerts.map( alertItem => (
          <div key={alertItem.id} className={`py-2 w-full mb-2 ${alertItem.bg} text-white text-center`}>
            {alertItem.msg} 
          </div>
          )
        )}
    </div>
  ); 
}

export default connect(
  state => ({ alerts: state.alert.alerts })
)(Alerts);
