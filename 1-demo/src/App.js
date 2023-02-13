import logo from './logo.svg';
import './App.css';
import ThirdComponent, { FirstComponent, FiveComponent, FourComponent, SecondComponent, SevenComponent, SixComponent } from './component/Component';
import { Car } from './component/Car';
import { EventComponent } from './component/Event';



function App() {




  return (
    <>   
   
     
      {/* <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent message={"coucou"}></ThirdComponent>
      <FourComponent message={"Mon quatriéme component !!!"}></FourComponent>
      <FiveComponent message={"Mon cinquiéme component !!!"}></FiveComponent>
        
    
    <SixComponent>
        <>Et enfin mon sixieme component !!!</>
      </SixComponent>    */}
      {/* <SevenComponent /> */}
      {/* <Car></Car> */}
      <EventComponent />
    </>
  );
}

export default App;
