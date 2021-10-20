import { useState, useMemo } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중')
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum/numbers.length;
}

// useMemo hook을 사용하면 이러한 을 최적화할 수 니다. 렌더 하는 과정에서 특정 값이 
// 바뀌 었을 때만 연산을 실행하고， 원하는 값이 바뀌지 않았다면 이전에 연산했던 결괴를 다시 용 
// 하는방식입니다.
const UseMemo = () =>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e =>{
        setNumber(e.target.value);
    }
    const onInsert = e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(()=> getAverage(list), [list])
    return(
        <div>
            
            <input value = { number } onChange = {onChange} />
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

export default UseMemo;