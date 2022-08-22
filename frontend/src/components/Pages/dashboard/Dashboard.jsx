import Navbar from "./Nav/Navbar";
import './style.scss'
import style from './style.module.scss'


const Dashboard=({children})=>{
  return(
    <div className={style.container}>
      <Navbar />
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default Dashboard;
