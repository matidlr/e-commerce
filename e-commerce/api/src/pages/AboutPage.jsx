import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
      <PageHero title="about"/>
      <Wrapper className='page section section-center'>
          <img src={aboutImg} alt="nice desk" />
          <article>
            <div className="title">
                <h2>our story</h2>
            </div>
            <p>

                A FEW OF THE REASONS YOU SHOULD BUY FROM US:
                We use national fulfillment centers to ship your orders. We have partnered with Amazon.com for all order fulfillment and have our products strategically placed in warehouses across the United States to ensure fast and reliable order shipping.
                It’s our goal to offer you a customer-centered shopping experience.
                Personal, knowledgeable and professional support
                All our products has been through a thorough field test in the Nordic countries, before making it available to our customers.
                Secure Ordering available
                100% Satisfaction Money back guarantee
                It's
            </p>
          </article>
      </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
