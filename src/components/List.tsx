import styled from 'styled-components';
import iconList from '../assets/images/icon-list.svg';

interface ListProps {
  list: string[];
}

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const StyledListItem = styled.li`
  position: relative;
  padding-left: 1.5em;
  margin-bottom: 0.7em;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: .6em;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url("${iconList}");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default function List({ list }: ListProps) {
  const listItems: JSX.Element[] = list.map((item) => (
    <StyledListItem key={item}>{item}</StyledListItem>
  ));

  return <StyledList>{listItems}</StyledList>;
}
