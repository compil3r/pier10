import styled from 'styled-components';

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'fullWidth',
})`
  background-color: #F48620;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:hover {
    background-color: #dd7517;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
