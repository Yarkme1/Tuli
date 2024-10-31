import { Link } from "react-router-dom"

export default function BotaoEspecialista2(){
    return(
        <>
        <Link to="/especialista/beneficios">
            <button className="flex items-center w-[60rem] bg-texto2 rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150 max-desktop8:w-[40rem] max-desktop8:p-3 max-desktop9:w-[20rem] max-desktop9:p-1 max-desktop11:w-[15rem]">
                <div className="w-screen p-7 max-desktop11:p-5">
                    <h1 className="flex justify-center font-prompt text-white text-4xl max-desktop9:text-2xl">BENEFÍCIOS</h1>
                </div>
            </button>
        </Link>
        </>
    )
}