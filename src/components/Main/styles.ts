import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 4.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
export const ShorterWrapper = styled.div`
  padding: 3rem;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  width: 30rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const Button = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  width: 13rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  background: #fff;
  color: #06092b;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #fafafa80;
    color: #fff;
  }
`

export const FormLink = styled.div`
  a {
    font-size: 2.5rem;
    color: #fff;
    text-decoration: none;
    border-bottom: 0.1rem solid #fff;
    transition: color, border, 0.2s ease-in-out;

    &:hover {
      color: #fafafa90;
      border-bottom: 0.1rem solid #fafafa90;
    }
  }
`
