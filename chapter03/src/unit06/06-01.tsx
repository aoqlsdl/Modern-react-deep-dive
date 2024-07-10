import { createContext, useContext } from "react";

// p.220 useContext 사용 예제
const Context = createContext<{hello:string} | undefined>(undefined);

function ParentComponent() {
    return(
        <>
            <Context.Provider value={{hello:'react'}}>
                <Context.Provider value={{hello:'typescript'}}>
                    <ChildComponent />
                </Context.Provider>
            </Context.Provider>
        </>
    )

}

function ChildComponent() {
    const value = useContext(Context);

    // react가 아닌 typescript를 반환
    return <>{value ? value.hello : ''}</>
}