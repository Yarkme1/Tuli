export default function InsideContainerHome2Media(){
    return(
        <>
        <div className="flex desktop5:hidden justify-evenly px-10 mb-10 max-desktop9:hidden">
            <div className="w-[15rem] rounded-3xl shadow-Card max-desktop8:w-[12rem] max-desktop7.1:w-[10rem]">
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5 max-desktop8:text-base max-desktop7.1:text-sm">Toxina Botulínica</h2>
                    <p className="text-texto3 text-base font-prompt max-desktop8:text-sm max-desktop7.1:text-xs">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card max-desktop8:w-[12rem] max-desktop7.1:w-[10rem]">
                <div className="p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5 max-desktop8:text-base max-desktop7.1:text-sm">Bichectomia</h2>
                    <p className="text-texto3 text-base font-prompt max-desktop8:text-sm max-desktop7.1:text-xs">Cirurgia para remoção das bolsas de gordura nas bochechas, visando afinar o rosto.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card max-desktop8:w-[12rem] max-desktop7.1:w-[10rem]">
                <div className="p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5 max-desktop8:text-base max-desktop7.1:text-sm">Preenchimento Labial</h2>
                    <p className="text-texto3 text-base font-prompt max-desktop8:text-sm max-desktop7.1:text-xs">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                </div>
            </div>
        </div>
        <div className="desktop9:hidden px-10">
            <li className="text-texto2 font-prompt text-xl mb-2">Toxina Botulínica</li>
            <li className="text-texto2 font-prompt text-xl mb-2">Bichectomia</li>
            <li className="text-texto2 font-prompt text-xl mb-2">Preenchimento Labial</li>
            <li className="text-texto2 font-prompt text-xl mb-2">Peeling Químico</li>
            <li className="text-texto2 font-prompt text-xl mb-2">Microagulhamento</li>
        </div>
        </>
    )
}