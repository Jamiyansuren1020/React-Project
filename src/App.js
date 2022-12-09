import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import BMIndex from './bmi/bmi';
import ClassWorkLayOut from './classworklayout/classworklayout';
import CarOwners from './car-owners-props/parent';
import DemoUseState from './components/useState-demo/object-example';
// import ToDoListParent from './to-do-list/to-do-list-parent';
import Airbnb from './air-bnb/air-bnb-parent';
import FireWorks from './fireworks/fireworks-parent';
import DataManipulationEx from './sample-data/sample-data-parent';
import ImageSlider from './image-sliders/image-slider-parent';
// import DemoUseStates from './components/useState-demo/index';
// import GameTool from './tic-tac-toe/tic-tac-toe-child';
import RatingStar from './star-rating/star-rating';
// import NamesOfPeople from './name-field/name-field-child';
// import ControlledComp from './forms/controlled-comp';
// import ToDoComp from './forms/todo-comp-parent';
// import GameIndex from './tic-tac-toe/tic-tac-toe-parent';
// import LocalStoragePlayground from './local-storage/local-storage';
// import Design from './exercise';
// import TicTacToe from './tic-tac-toe/tic-tac-toe-child';
// import UseEffectPlayground from './use-effect/use-effect';
import ToDoList from './to-do-list/to-do-list-parent';
// import UseEffectExercise from './use-effect/use-effect-exercise';
// import Pictures from './memory-game/memory-game';
import Page1 from './router-playground/page1'
import Page2 from './router-playground/page2'
import Page3 from './router-playground/page3'
import DemoUseStates from './components';
import UseEffectExercise from './use-effect/use-effect-exercise';
import ColorA from './color-picker/color-picker';
import ApiCallPlayground from './api-data/api-first';
import Chuck from './api-data/chuckjoke';
import GitHub from './api-data/github-info';
import MovieData from './api-data-movie/api-movie-data';
import MovieDetails from './api-data-movie/api-movie';
import CounterEx from './use-reducer/counter-use-reducer';
import ShoppingList from './shoppinglist/shoppinglist';
import HTMLTablePlayground from './table-playground/table';
import HTMLTableExercise from './table-playground/table-exercise';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='pages'>
        <Route path='page1' element={<Page1/>}/>
        <Route path='page2' element={<Page2/>}/>
        <Route path='page3' element={<Page3/>}/>
        </Route>
        <Route element={<ClassWorkLayOut/>}>
          <Route path='bmi' element={<BMIndex />}/>
          {/* <Route path='tictactoe' element={<TicTacToe/>}/> */}
          <Route path='airbnb' element={<Airbnb/>}/>
          <Route path='firework' element={<FireWorks />}/>
          <Route path='star-rating' element={<RatingStar/>}/>
          <Route path='to-do-list' element={< ToDoList />}/>
          <Route path='sample-data' element={< DataManipulationEx />}/>
          <Route path='car-owner' element={<CarOwners  />}/>
          <Route path='students' element={<DemoUseState/>}/>
          <Route path='age-up' element={<DemoUseStates />}/>
          <Route path='update-time' element={<UseEffectExercise/>}/>
          <Route path='image-slider' element={<ImageSlider/>}/>
          <Route path='color-picker' element={<ColorA/>}/>
          <Route path='chuck-joke' element={<Chuck/>}/>
          <Route path='api-playground' element={<ApiCallPlayground/>}/>
          <Route path='github-info' element={<GitHub/>}/>
          <Route path='movie-info' element={<MovieData/>}/>
          <Route path='movie-detail' element={<MovieDetails/>}/>
          <Route path='counter' element={<CounterEx/>}/>
          <Route path='shoppinglist' element={<ShoppingList/>}/>
          <Route path='table-playground' element={<HTMLTablePlayground/>}/>
          <Route path='table-exercise' element={<HTMLTableExercise/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <BMIndex2 /> */}
      
      {/* <Pictures /> */}
      {/* <UseEffectExercise /> */}
      
      {/* < UseEffectPlayground /> */}
      {/* <TicTacToe /> */}
      {/* < Design /> */}
      {/* <LocalStoragePlayground/> */}
      {/* <GameTool /> */}
      {/* <ToDoComp/> */}
      {/* <ControlledComp /> */}
      {/* <GameIndex/> */}
      {/* <NamesOfPeople/> */}
      
      {/* <GameTool/> */}
      
      
      {/* <Airbnb/> */}

      

        {/* <ToDoListParent/> */}
      
          
          
      
      {/* <PersonComponent firstName='Anar'/>
      <PersonComponent firstName='Huluguu'/>
      <PersonComponent firstName='James'/> */}
    </div>
  );
}

export default App;
