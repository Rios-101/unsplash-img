
import { useGlobalContext } from './../Context';

const ThemeToggle = ()=>{

   const {isDarkTheme,toggleDarkTheme} = useGlobalContext()
   console.log(isDarkTheme);

   const toggleTheme = ()=>{
        toggleDarkTheme();
        console.log("rios");
   }


    // if(isDarkTheme){
    //     return <button><i onClick={()=>toggleTheme()} className="fas fa-moon"></i></button>
    // }else{
    //     return <button><i onClick={()=>toggleTheme()} className="fas fa-sun"></i></button>
    // }

    return(
        <section className="toggle-container">
            <button className="dark-toggle" onClick={()=>toggleTheme()}>{isDarkTheme ? (<i className="fas fa-moon toggle-icon"></i>) : (<i style={{color: '#fff'}} className="far fa-sun toggle-icon"></i>)}</button>
        </section>
        
        
    )
   
}

export default ThemeToggle

