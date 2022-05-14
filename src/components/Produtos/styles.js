import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Card = styled.div`
  background-color: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgProdutoContainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: #000;
  display: flex;
  justify-content: center;
`;
export const ImgProduto = styled.img`
  height: 200px;
`;
export const ButtonAdd = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  font-weight: bolder;
  padding: 5px 0;
  &:hover {
    cursor: grab;
  }
`;
