import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css'
import Header from './component/Header/Header'
import MainContainer from './component/Main_base/Styles_tatoo/MainContainer'
import Masters_list_Container from './component/Main_base/Masters_tatoo/Masters_list/Masters_list_Container';
import NowStyleContainer from './component/Main_base/Styles_tatoo/NowStyle/NowStyleContainer'
import MasterIDContainer from './component/Main_base/Masters_tatoo/Masters_list/MasterID/MasterIDContainer';
import Works_Img from './component/Main_base/Works_Img/Works_Img';


function App() {
  // className={header => header.isActive ? style.header : style.header2}
  return (
    <BrowserRouter>

      <div className={style.grid}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.main}>
          <Routes>
            <Route path="*" element={<MainContainer />}></Route>
            <Route path='/card/*' element={<MainContainer />} />
            <Route path='/works_img' element={<Works_Img />} />
            <Route path='/masters/*' element={<Masters_list_Container />} />
            <Route path='/masters/:id' element={<MasterIDContainer />} />
            <Route path='/card/:id' element={<NowStyleContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
