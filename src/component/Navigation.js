import styled from "styled-components";
const Navigation = ({mode, handleChangeTab}) => {
  return (
    <Wrapper>
      <ul className="navigation">
        {mode.map((item,index) => {
          return  <li key={index} role="button" className={`nav-item ${item.value ? 'active' : ''}`} onClick={() => handleChangeTab(item)}>{item.name}</li>
        })}
      </ul>
      <img
        src="https://i0.wp.com/i.pinimg.com/originals/89/54/38/895438247efa788551d1919d44f176ca.png"
        alt="avatar"
        className="avatar"
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navigation {
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    font-weight: 700;
    font-size: 1.25rem;
    .nav-item {
      margin: 0.5rem;
      cursor: pointer;
      color: #6c757d;
    }
    .active {
      color:#212529;
      border-bottom: 3px solid #212529;
    }
  }
  .avatar {
    width: 50px;
    border-radius: 50%;
  }
`;
export default Navigation;
