// FIXME: emotion 설정(필요없을 시 삭제)
import { css } from '@emotion/react'
// FIXME: styled 설정(필요없을 시 삭제)
import styled from 'styled-components'

import { useCounter } from '../store/useCounter'

const Home = () => {
  const { count, increase } = useCounter()
  return (
    <div>
      {/* FIXME: tailwind css 설정(필요없을 시 삭제) */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-red">Count: {count}</p>
      {/* FIXME: Sass 설정(필요없을 시 삭제) */}
      <button className="button" onClick={increase}>
        Increase
      </button>
      {/*FIXME: emotion 설정(필요없을 시 삭제) */}
      <button css={buttonStyle}>Click Me</button>
      {/*FIXME: styled 설정(필요없을 시 삭제) */}
      <Button>Click Me</Button>
    </div>
  )
}

export default Home

// FIXME: emotion 설정(필요없을 시 삭제)
const buttonStyle = css`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`

// FIXME: styled 설정(필요없을 시 삭제)
const Button = styled.button`
  background-color: lime;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`
