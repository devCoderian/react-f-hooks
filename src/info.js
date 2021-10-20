import { useEffect, useState } from "react";

const Info = () =>{
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect(() =>{
    //     console.log('렌더링이 완료되었습니다. 빈배열 받으면 마운트때만 실행 = 의 componentDidMount');
    //     console.log(name, nickname)
    // },[]);
    // useEffect(() =>{
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log(name, nickname)
    // })
    //특정값 실행
    // useEffect(() =>{
    //     console.log('렌더링이 완료되었습니다. 이름 바뀔때만');
    //     console.log(name, nickname)
    // },[name]);

    // 컴포넌트가 언마운트되기 전이나  업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 
    // useEffect에서 뒷정리 함수를 반환해 주어야 합니다 
    // useEffect(() =>{
    //     console.log('effect');
    //     console.log(name);
    //     return () =>{
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // });

     // 컴포넌트가 언마운트만 뒤에 빈 배열
     useEffect(() =>{
        console.log('effect');
        console.log(name);
        return () =>{
            console.log('cleanup');
            console.log(name);
        }
    }, []);


    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangenickName = e => {
        setNickname(e.target.value);
    }

    return(
        <>
        <div>
            <input value={name} onChange={onChangeName} /> 
            <input value={nickname} onChange={onChangenickName} />
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

export default Info;