import React, { useState } from 'react';
import Navbar from './Navbar';
import Product from './Product';



function App() {

  const [productnum, setProductnum] = useState<number>(0);
 
  return (
    <div>
      <Navbar productnum={productnum}/>
      <div className=" container my-5 w-50">
        <Product setProductnum={setProductnum} productnum={productnum} />
      </div>
    </div>
    
  );
}

export default App;
