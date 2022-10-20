import {Link} from 'react-router-dom';import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <div>
        <Link 
          to={'/examFee'} 
          state={{ pathVariable: "examFee" }} 
          class="btn btn-primary">
            Exam Fee
        </Link>
        {" "}
        <Link to={'/applicationFee'}
          state={{ pathVariable: "applicationFee" }} 
          class="btn btn-primary">
            Application Fee
        </Link>
    </div>
  )
}

export default Home