import {AiOutlineClose} from "react-icons/ai";
import {BsPlus} from "react-icons/bs";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setboards, setblogsModalOpen} from "../Store/boardReducer";

export default function AddBlogs() {
    const colors = ['--clr-board-1','--clr-board-2','--clr-board-3','--clr-board-4']
    const [blog,setName] = useState('');
    const [activeColor,setActiveColor]=useState(null);
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(setBlogs({title:blog,color:activeColor}));
        dispatch(setblogsModalOpen(false));
        console.log({title:blog,color:activeColor,'bookmark':false})
    }
    function handleChange(event){
         setName(event.target.value)
    }
    function handleColorClick(color) {
          setActiveColor(color);
    }
    function hnadleSubmitted(){
        dispatch(setblogsModalOpen(false))
    }

    return(
            <div className="fixed w-full inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                <div className="bg-white p-2 rounded w-96">
                      <form onSubmit={handleClick} className='flex flex-col flex-1 p-4 gap-8'>
                          <div className='inline-flex justify-between items-center'>
                          <p className='text-xl font-bold'>Add a name for your board</p>
                              <AiOutlineClose className='text-xl text-[var(--clr-icon)] font-bold cursor-pointer' onClick={hnadleSubmitted}/>
                          </div>
                          <input required className='w-full py-2 border rounded-md border-2 border-[var(--clr-border)] outline-0' value={blog.name} onChange={handleChange}/>
                          <div className='flex flex-col'>
                              <p className='text-xl font-bold'>Select post colour</p>
                              <p className='text-sm'>Here are some templates to help you get started</p>
                              <div className="flex justify-start mt-4 gap-4">
                                  {colors.map((color) => (
                                      <div
                                          key={color}
                                          className={`w-6 h-6 rounded-full cursor-pointer ${
                                              activeColor === color ? 'border-2 border-indigo-600' : ''
                                          }`}
                                          style={{ backgroundColor: `var(${color})` }}
                                          onClick={() => handleColorClick(color)}
                                      ></div>
                                  ))}
                              </div>
                          </div>

                          <div className='flex justify-end mt-8 items-end'>
                          <div className='bg-[var(--clr-primary-1)] px-3 py-0.5 rounded-lg '>
                              <button className='text-white text-lg leading-6' type='submit' >
                                  Create board
                              </button>
                          </div>
                          </div>
                      </form>
                </div>
            </div>
    )
}
