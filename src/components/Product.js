import React from "react"
import styled from "styled-components"
// import { formatPrice } from "../utils/helpers"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Product = ({ images = [], name, price, id, volume }) => {
  return (
    <Wrapper>
      <div style={{ width: 250 + "px" }} className='container center'>
        <img
          // style={{ height: 380 + "px", width: 250 + "px" }}
          src={images[0]}
          alt={name}
        />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer
        // style={{ width: 250 + "px" }}
        className=' center margin'
      >
        <h5>
          {name} Vol {volume}
        </h5>

        <p>{price} DZD</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  /* @media (min-width: 1170px) {
    img {
      width: 100%;
    }
  } */
  img {
    width: 250px;
    height: 380px;
    /* width: 100%; */
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: block;
    //hna kant flex
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 750;
    text-align: center;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  @media screen and (max-width: 844px) {
    .center {
      margin: auto;
      width: 50%;
    }
    footer h5,
    footer p {
      margin-top: 1rem;
    }
  }
`
export default Product
