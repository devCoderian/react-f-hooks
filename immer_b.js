import produce from "immer";
import { useRef, useCallback, useState} from "react";

// immer 예시
//import produce from 'immer';

/*
const originalState = [
    {
        id: 1, 
        todo: '전개 연산자와 배열 내장 함수로 불변성 유지하기',
        checked: true,
    },
    {
        id:2,
        todo: 'immer로 불변성 유지하기',
        checked: false,
    }
]

const nextState = produce(originalState, draft =>{
    const todo = draft.find(t => t.id === 2);
    todo.checked = true;

    //배열에 새로운 데이터 추가
    draft.push({
        id: 3,
        todo: '일정관리앱에 immer 적용하기',
        checked: false,
    })
    //id = 1인 항목 제거하기
    draft.splice(draft.findIndex(t => t.id ===1), 1);
});
*/
const Immer = () =>{
    const nextId = useRef(1);
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({
        array: [],
        uselessValue: null
    });

    //input 수정을 위한 함수
    const onChange = useCallback(
        e => {
            const { name, value} = e.target;
            setForm({
                ...form,
                [name]: [value]
            })
        },
        [form]
    );

        //form 등록을 위한 함수
        const onSubmit = useCallback(
            e => {
                e.preventDefault();
                const info= {
                    id: nextId.current,
                    name: form.name,
                    username: form.username
                }


            //array에 새 항목 등록
            setData({ 
                ...data,
                array: data.array.concat(info)
            });

            //form 초기화
            setForm({
                name:'',
                username: ''
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
        );

        const onRemove = useCallback(
            id => {
                setData({
                    ...data,
                    array: data.array.filter(info => info.id !== id)
                });
            },
            [data]
        );

        return (
            <div>
                <form onSubmit = {onSubmit}>
                    <input
                        name = "username"
                        placeholder = "아이디"
                        value = {form.username}
                        onChange = {onChange}
                    />
                    <input 
                    name = "name"
                    placeholder = "이름"
                    value = {form.name}
                    onChange = {onChange}
                    />
                    <button type = "submit">
                        등록
                    </button>
                </form>
                <div>
                    <ul>
                        {
                            data.array.map(info =>(
                                <li key = {info.id} onClick = {()=> onRemove(info.id)}>
                                    {info.username} ({info.name})
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
}