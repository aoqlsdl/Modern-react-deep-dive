import { createContext, PropsWithChildren, useContext } from "react"

const MyContext = createContext<{hello: string} | undefined>(undefined);

function ContextProvider({
    children,
    text
}: PropsWithChildren<{text:string}>) {
    return (
        <MyContext.Provider value={{hello:text}}>{children}</MyContext.Provider>
    )
}

function useMyContext() {
    const context = useContext(MyContext);

    if (context === undefined) {
        throw new Error(
            'useMyContext는 ContextProvider 내부에서만 사용할 수 있습니다.'
        )
    }

    return context;
}

function ChildComponent() {
    // 타입이 명확히 설정되어 있으므로 undefined 체크를 하지 않아도 됨
    // 이 컴포넌트가 Provider 하위에 없으면 에러가 발생
    const {hello} = useMyContext();

    return <>{hello}</>
}

function ParentComponent() {
    return(
        <>
            <ContextProvider text="react">
                <ChildComponent />
            </ContextProvider>
        </>
    )
}