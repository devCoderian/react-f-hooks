import { useState } from "react";
import Info from "./info";
import UseCallBack from "./useCallback";
import UseMemo from "./useMemo";
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
    </>
 
  );
}

export default App;
