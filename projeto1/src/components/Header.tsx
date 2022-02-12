type Props = {
    name: string;
    age: number;
}


export const Header = ({name, age}: Props) => {
    return(
        <header>
            <h1>Oi {name}, tudo bem? parabéns pelos {age} anos</h1>
        </header>
    )
}