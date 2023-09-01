import styles from "./menu.module.css"

const Menu =({click})=>{
    return(
        <>
        <div className={StyleSheetList.fundoMenu}></div>
        <div className={styles.menuBand} onClick={click}>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Catálogo</a></li>
            </ul>
        </div>
        </>
    )
}
export default Menu;