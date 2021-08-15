import styled from '@emotion/styled'

export const Contact = styled.ul`
width: 350px;
padding: 0;
`

export const ContactItem = styled.li`
 display: flex;
 font-style: normal;
 font-weight: normal;
 width: 100%;
 margin: 0 auto;
 padding: 10px 5px;
 font-size: 16px;
 align-items:center;
 justify-content: left;
 & span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: var(--color-dark);
    &:first-of-type {
      color: var(--color-accent);
      margin-right: 10px;
    }
    & svg {
      margin-right: 10px;
      color: var(--color-accent);
    }
  }
  & svg {
    color: var(--color-title);
  }

`

export const BtnDelete = styled.button`
 display: block;
  margin-left: auto;
    padding: 10px;
background-color: #c8e7f9;
min-width: 40px;
height: 40px;
border: solid 2px #c8e7f9;
box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
border-radius: 10%;
padding: 3px;
&:hover{
    color: #79e000;
    border:  solid 2px #79e000;
    box-shadow: 1px 2px 2px 0 rgba(121, 224, 0, 0.5);
}
`
