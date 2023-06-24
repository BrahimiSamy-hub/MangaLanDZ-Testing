import React from "react"
import styled from "styled-components"
// import { formatPrice } from "../utils/helpers"
import { Link } from "react-router-dom"
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, images = [], name, price, description, volume } = product
        return (
          <article key={id}>
            <img src={images[0]} alt={name} />
            <div>
              <h4>
                {name} Vol {volume}
              </h4>
              <h5 className='price'>{price} DZD</h5>
              <p>{description.substring(0, 150)}</p>
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    display: block;
    width: 250px;
    height: 380px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;

    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
  @media (max-width: 991px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
