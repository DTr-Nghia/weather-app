import React, { lazy, useState, Suspense } from "react";
import "./index.css";
import styled from "styled-components";
import Navigation from "./component/Navigation";
import {useSearchContext} from './context/SearchContext'
const Today = lazy(() => import("./component/Today"));
const Week = lazy(() => import("./component/Week"));
const Hour = lazy(() => import("./component/Hour"));
const SideBar = lazy(() => import("./component/Sidebar"));

const App = () => {
  const {error} = useSearchContext()
  const [mode, setMode] = useState([
    { index: 1, name: "Today", value: true },
    { index: 2, name: "Week", value: false },
    { index: 3, name: "Hour", value: false },
  ]);
  const handleChangeTab = (e) => {
    setMode(
      mode.map((item) =>
        item.index === e.index
          ? { ...item, value: true }
          : { ...item, value: false }
      )
    );
  };
  return (
    <div className="container position-absolute">
      <Wrapper className="row h-100 ">
        <Suspense fallback={<div className="circle-loading"></div>}>
          <SideBar />
        </Suspense>
        <div className="detail-content col-9 col-12">
          {error !== '' && <div className="alert-danger">{error}</div>}
          <Navigation handleChangeTab={handleChangeTab} mode={mode} />
          <Suspense fallback={<div className="circle-loading"></div>}>
            {mode.map((item,index) => {
              return item.value === true && item.name === "Today" ? (
                <Today key={index}/>
              ) : item.value === true && item.name === "Week" ? (
                <Week key={index}/>
              ) : item.value === true && item.name === "Hour" ? (
                <Hour key={index}/>
              ) : (
                ""
              );
            })}
          </Suspense>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  .detail-content {
    flex: 0 0 auto;
    padding: 1.5rem;
    background-color: rgb(246, 246, 248);
  }
`;
export default App;
