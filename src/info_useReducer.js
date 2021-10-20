import { useReducer, useState } from "react";

 // useReducer의 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info_useReducer= () =>{

    const [state, dispatch] = useReducer(reducer,{
        name:'',
        nickname:'',
    })
    //useReducer 는 첫번째 파라미터에 리듀서 함수를 넣고, 두 번째 파라미터에
    //해당 리듀서의 기본값을 넣어준다.
    //이 Hook을 사용하면 state값과 dispatch 함수를 받아오는데 여기서 state는 현재 가리키고 있는 상태이고,
    // dispatch 는 액션을 발생시키는 함수이다.

    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
    }
 
    return(
        <>
        <div>
            <input value={name} onChange={onChange} /> 
            <input value={nickname} onChange={onChange} />
        </div>
        <div>
            이름:{name}
        </div>
        <div>
            별명:{nickname}
        </div>
        </>
    )

}

export default Info_useReducer;