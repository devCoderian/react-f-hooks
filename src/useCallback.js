import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중')
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum/numbers.length;
}

// useCa ll back은 seMe 와 상당히 슷한 함수입 니다. 주로 렌더링 성능을 최적화해야 하는 상황 
// 에서 시용하는 . 이 Hook 냉학면 벤투핸둘러 근요찰꽤많 생성할 및숲니 다 
// 료콰 훈}-Av: :a-ge-i컴포널트를 요. onC ange와 nln se rt 라는 함수를 선언해 주었지요? 이 
// 렇게 선언하면 컴포넌트가 리렌더링될 때마다 이 함수들이 새로 생성됩 다. 대부분의 경우 이러 
// 한 방식은 문제없지만， 컴포넌트의 렌더링이 지주 발생하거 나 렌더링해야 할 컴포넌트의 개수가 
// 많아지면 이 부분을 최적화해 주는 것이 좋습니다. 
// 그럼 seCa ll back을 시용하여 한번 최적화해 봅시다 
const UseCallBack  = () =>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const inputEl = useRef();


    const onChange = useCallback((e) =>{
        setNumber(e.target.value);
    },[]); //컴포넌트 처음 렌더링 될때만 생성
    const onInsert = useCallback((e) =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[list, number]); //number 혹은 list가 바뀌었을때만 생성

    const avg = useMemo(()=> getAverage(list), [list])
    return(
        <div>
            
            <input value = { number } onChange = {onChange} ref={inputEl} />
            <button onClick = {onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>{
                    <li key = {index}>{value}</li>
                })}
            </ul>
            <div>
                {/* <b>평균값:{getAverage(list)}</b> */}
                {avg}
            </div>
        </div>
    )
}

export default UseCallBack;

// 4ζ hange 처럼 비어 있는 배열을 넣게 되면 검폰넌트가 렌더링될 때 단 한 번만힘갚간갱성되며， 
// onlnsert 처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목인 ~될 
// 때마다함수가생성됩니다. 
// 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어 
// 야합니다. 예를들어 onChange 의 경우기존의 값을조회하지 않고바로설정만하기 때문에 배열 
// 이 바어 있어도 상관없지만， onlnsert는 기존의 number와 list를 조회해서 nex tL ist 를 생성하기 
// 때문에 배열 안에 number와 list를 꼭 넣어 주어야 합니다. 
// 보로 다음 두 코드는 완전히 똑같은 코드입니다 useCallback은 결국 useMemo로 함수를 반환하 
// l 는 상황에서 더 편하게 사용할 수 있는 Hook입니다 숫자， 문자열， 객체처럼 일반 값을 재사용하 
// p 려면 useMemo를 사용하고， 함수를 재사용하려변 useCallback을 시용하세요. 