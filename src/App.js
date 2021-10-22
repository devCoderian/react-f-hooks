import { useState } from "react";
import ColorBox from "./components/ColorBox";
import Info from "./info";
import UseCallBack from "./useCallback";
import UseMemo from "./useMemo";
import ColorContext from './contexts/color';

function App() {
  const [visible, setVisible] = useState(false);
  return(
    <>
    {/* <button
    onClick = {() => {
      setVisible(!visible);
    }}>
    {visible? '숨기기': '보이기'}
    </button>
    {visible &&  <Info />} */}
    {/* <UseMemo /> */}
    <UseCallBack />
    <ColorContext.Provider value ={{color: 'red'}}>
    <ColorBox />
    </ColorContext.Provider>

    </>
 
  );
}

export default App;
