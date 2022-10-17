import React, { useEffect, useState } from 'react'
const black = require('./images/black.png');
const white = require('./images/white.png');
const yellow = require('./images/yellow.png');

interface IProductProps {
  setProductnum: React.Dispatch<React.SetStateAction<number>>;
  productnum: number
}

function Product({setProductnum, productnum}: IProductProps) {

  const options = [
    {value: 'sm', text: 'Small'},
    {value: 'md', text: 'Medium'},
    {value: 'lg', text: 'Large'},
  ];

  const [selected, setSelected] = useState<string>(options[0].value);
  const [price, setPrice] = useState<number>(100);

  useEffect(() => {
    if(selected === 'sm') setPrice(100);
    else if(selected === 'md') setPrice(200)
    else setPrice(300);
  },[selected])

  const handleChange = (e:any) => {
    setSelected(e.target.value);
  }


  const render = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    )
  })


  return (
    <div className="card shadow-lg">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={black} className="d-block w-100" alt="black"/>
          </div>
          <div className="carousel-item">
            <img src={white} className="d-block w-100" alt="white"/>
          </div>
          <div className="carousel-item">
            <img src={yellow} className="d-block w-100" alt="yellow"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    <div className="card-body">
      <h5 className="card-title text-center">Customizable Modern T-shirt</h5>
      <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id.</p>
      <div className='row'>
        <div className='text-center col-3 pt-2 fw-bold'>
          <p>Size</p>
        </div>
        <div className='col-6'>
          <select className="form-select mb-3 max-width" aria-label=".form-select-lg example" value={selected} onChange={handleChange}>
            {render}
          </select>
        </div>
        <div className='col-3 pt-2 fw-bold'>
          <p>{price} $</p>
        </div>
      </div>
      <div className='text-center'>
        <button  className='btn btn-primary' onClick={() => setProductnum(productnum+1)}>Add to chart</button>
      </div>
    </div>
  </div>
  )
}

export default Product