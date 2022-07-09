import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import { GiNoodles,GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from "react-router-dom" ;


function Category() {
  return (
    <List>
        <NavLink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        
        <NavLink to={"/cuisine/Hamburger"}>
            <FaHamburger/>
            <h4>Hamburger</h4>
        </NavLink>

    

        <NavLink to={"/cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/Japonese"}>
            <GiChopsticks/>
            <h4>Japonese</h4>
        </NavLink>
        
       

    </List>
    
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin 2rem 0rem;
`;
export default Category