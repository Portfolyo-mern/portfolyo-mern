import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    
    
    <Container>
      <h1>Portfolyo</h1>

      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>

      <Inputcontainer>
        <label class="custom-field one">
          <input type="text" placeholder=" " />
          <span class="placeholder">Enter Text</span>
        </label>
        
      </Inputcontainer>
      

      <Inputcontainer>
      <label class="custom-field one">
          <input type="text" placeholder=" " />
          <span class="placeholder">Enter Text</span>
        </label>  </Inputcontainer>
      
      <BtnContainer>
        <button className="readmore">Create</button>
        
      </BtnContainer>
    </Container>
    
    
    
    
  );
};




const Inputcontainer = styled.div`
  margin-top: 2rem;
  .custom-field {
    position: relative;
    font-size: 25px;
    border-top: 20px solid transparent;
    
    --field-padding: 10px;
  }

  .custom-field input {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f2f2f2;
    padding: var(--field-padding);
    border-radius: 3px;
    width: 250px;
    outline: none;
    font-size: 14px;
  }

  .custom-field .placeholder {
    position: absolute;
    left: var(--field-padding);
    width: calc(100% - (var(--field-padding) * 2));
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    top: 22px;
    line-height: 100%;
    transform: translateY(-50%);
    color: #aaa;
    transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  }

  .custom-field.one input.dirty + .placeholder,
  .custom-field.one input:not(:placeholder-shown) + .placeholder,
  .custom-field.one input:focus + .placeholder {
    top: 0;
    font-size: 10px;
    color: #222;
    background: #fff;
    width: auto;
  }
`;

const BtnContainer = styled.div`
  margin-top: 1rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #81d1ff;
    color: #ffffff;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #3c0473;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #651fac;
    }
    &:nth-of-type(3) {
      color: #8849c7;
    }
    &:nth-of-type(4) {
      color: #af60ff;
    }
    @media (max-width: 670px) {
      /* width: 100%; */
      padding: 0.3;
    }
  }
`;


export default HeroText;
