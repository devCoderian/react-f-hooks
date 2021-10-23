import React, { useContext } from 'react';
// import ColorContext from '../contexts/color';
import ColorContext, {ColorConsumer} from '../contexts/color';
const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
                <>
                <div
                style ={{
                    width:'64px',
                    height: '64px',
                    background: state.color
                }}>

                </div>
                <div
                style ={{
                    width:'64px',
                    height: '64px',
                    background: state.subcolor
                }}>

                </div>
                </>
            )

}

export default ColorBox;
// 동적 컨텍스트 
 
// <ColorConsumer>
// {({state})=>(
//     <>
//     <div
//     style ={{
//         width:'64px',
//         height: '64px',
//         background: state.color
//     }}>

//     </div>
//     <div
//     style ={{
//         width:'64px',
//         height: '64px',
//         background: state.subcolor
//     }}>

//     </div>
//     </>
// )
// }
// </ColorConsumer>
//  // <ColorContext.Consumer>
// {
//     value=>(
//         <div
//         style ={{
//             width:'64px',
//             height: '64px',
//             background: value.color
//         }}>

//         </div>
//     )
// }
//        {/* </ColorContext.Consumer> */}