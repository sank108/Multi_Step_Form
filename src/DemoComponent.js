import React, { useState , useEffect} from 'react';
import Occupation from './components/Occupation';
import InterestedField from './components/InterestedField';
import toast from 'react-hot-toast';
import { MdChevronLeft } from "react-icons/md";
import Information from './components/Information';
import Levels from './components/Levels';
import FinalPage from './components/FinalPage';
import Spinner from './components/Spinner';
import Courses from './components/Courses';

const DemoComponent = () => {

  const [page,setPage] = useState(0);
  const [width,setWidth] = useState(0);
  const [selected,setSelected] = useState(false);
  const [loading,setLoading] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  

  async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (page === 0) {
      setWidth(20);
    }else if(page === 1){
      setWidth(40);
      setSelected(false)
    }else if(page === 2){
      setWidth(60);
      setSelected(false);
    }else if(page === 3){
      setWidth(80);
      setSelected(false);
    }else if(page === 4){
      setWidth(100);
      setSelected(false);
    }else if (page === 5) {
      setLoading(true); 
      sleep(1200).then(() => {
        setLoading(false); 
        setShowCourses(true); 
      });
    }
  }, [page]);

  // useEffect(() => {
  //   if (page === 5 && !loading) { 
  //     setLoading(true);
  //     sleep(200).then(() => setLoading(false)); 
  //   }
  // }, [page, loading]); 


  function pageDecider() {
    if(page === 0){
      return <Occupation selected={selected} setSelected={setSelected}/>
    }else if(page === 1){
      return <InterestedField selected={selected} setSelected={setSelected}/>
    }else if(page === 2){
      return <Information/>
    }else if(page === 3){
      return <Levels selected={selected} setSelected={setSelected}/>
    }else if(page === 4){
      return <FinalPage/>
    }else if(page === 5){
      return ( 
         loading ? <Spinner /> : (showCourses && <Courses />)
      
        
      )
    }
  }
  
  
  function clickHandler() {
    if(selected === true){
      setPage(page+1);
    }else if(page === 2 || page === 4){
      setPage(page+1);
    }else{
      toast.error("Please select an option")
    }
  }

  function backKeyHandler() {
    setPage(page-1);
  }
  return (
    <div className='flex justify-center md:mt-8 max-h-[100vh]'>
      <div>{
        page > 0 && page <= 4 && 
        <MdChevronLeft
        onClick={backKeyHandler}
        className='mt-[18px] ml-[-2px] cursor-pointer min-[1024px]:text-xl min-[1024px]:mt-[15px]'
        />
      }</div>
      <div className='w-[80%]  mt-6 flex-col items-center'>
        {page <= 4 && 
          <div className='w-[100%] h-[4px] bg-gray-500/20 rounded-full'>
          <div
          style={{width:`${width}%`}}
           className={`h-[100%]  bg-green-800 rounded-full transition-all duration-200`}></div>
        </div>
        }

        <div className='min-[768px]:w-[50%] min-[1024px]:w-[55%] mx-auto mt-3'>{pageDecider()}</div>

        <div>
          {
            page <= 4 && 
            <div 
            onClick={clickHandler}
            className='h-[30px] w-[100px] bg-black text-white text-[11px] flex items-center justify-center mx-auto mt-[10px] rounded-md cursor-pointer hover:opacity-50
            transition-opacity duration-200
            max-[767px]:hover:opacity-100
            md:h-[35px] md:w-[125px] 
            min-[1024px]:h-[45px] min-[1024px]:w-[150px] min-[1024px]:text-sm'
            >
              Continue
          </div>
          }
        </div>
      
      </div>

      
    </div>
  );
}

export default DemoComponent;
