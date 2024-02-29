import React from 'react'
import influ_logo from '../assets/influ_logo.png'
import { Link, useNavigate} from 'react-router-dom'
const Login = () => {
    // const history = useHistory();

    const handleDelayedNavigation = (path, delay) => {
        setTimeout(() => {
          history.push(path);
        }, delay);
      };

      const navigate = useNavigate()

    // this is a function which returning a promise in the requested time
    function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
    }

    // this is the routing function
    async function goToPage() {
        // it will navigate to the page 500ms after clicing the div
        await wait(1500);
        navigate(`/home`);
    }
    
  return (
    <div className={`flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 min-w-screen min-h-screen`}>

        <div className={`w-[20vw] h-[40vh] bg-white rounded-[10px] flex flex-col bg-opacity-89`}>
                <form className={`flex flex-col items-center justify-center w-full h-full`}>
                    <div className={`flex flex-col m-4 h-1/3`}>
                        <img src={influ_logo} className={`pl-8 pr-8`}></img>
                    </div>
                    <div className={`h-1/3 flex flex-col `}>
                        <input placeholder="   Username" className={`bg-gray-500 w-60 h-10 m-4 rounded-[10px] bg-opacity-20`}/>
                        <input placeholder="   Password" type={`password`} className={`bg-gray-500 w-60 h-10 m-4 rounded-[10px] bg-opacity-20`}/>
                    </div>
                    <div className={`h-1/3 flex flex-col items-center `}>
                        <div className={`flex flex-col items-center justify-start`}>
                           <button type="button" onClick={() => goToPage()} className={`bg-blue-500 w-60 h-10 m-2 rounded-[10px] text-white mt-6`}>LOGIN</button>
                        </div>
                        
                        <div className={`flex flex-col items-center justify-end mt-2`}>
                            <Link to="/forgotten"><p className={`text-right`}>FORGOT PASSWORD?</p></Link>
                            <Link to="/signup"><p className={`text-right`}>SIGN UP</p></Link>
                        </div>
                        
                    </div>
                    
                </form>
                
        </div>
        
    </div>
  )
}

export default Login