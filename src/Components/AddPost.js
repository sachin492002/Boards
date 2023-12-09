import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setBoardPosts, setpostsModalOpen} from "../Store/boardReducer";
import {GoImage} from "react-icons/go";

export default function AddPosts({id}) {
    const dispatch= useDispatch();
    const [sub,setSub] = useState('');
    const [des,setDes] = useState('');
    const [imageUrl,setImageUrl] = useState(null);
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            setImageUrl(URL.createObjectURL(file));
        }
    }
   function handleClick(event){
       event.preventDefault();
        const post ={'subject':sub,'description':des,'image':imageUrl,'month':new Date().toLocaleString('default', { month: 'long' }),'date':new Date().getDate(),'likes':0}
        dispatch(setBoardPosts({id:id,post:post}))
       hnadleSubmitted();
   }
    function handleChange(event){
        if(event.target.name=='subject') setSub(event.target.value);
        else if(event.target.name=='description') setDes(event.target.value);
        else setImageUrl(event.target.value);
    }
    function hnadleSubmitted(){
        dispatch(setpostsModalOpen(false))
    }

    return(
        <div className="w-full fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="bg-white p-2 rounded w-96">
                <form onSubmit={(event)=>handleClick(event)} className='flex flex-col flex-1 p-4 gap-8'>
                    <div className='flex flex-col gap-1'>
                    <div className='inline-flex justify-between items-center'>
                        <p className='text-xl font-bold'>Add a name for your board</p>
                        <AiOutlineClose className='text-xl text-[var(--clr-icon)] font-bold cursor-pointer' onClick={hnadleSubmitted}/>
                    </div>
                    <p className='text-sm'>Write something for your post</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold'>Subject</p>
                    <input required name='subject' className='w-full py-2 border rounded-md border-2 border-[var(--clr-border)] outline-0' value={sub} onChange={(e)=>handleChange(e,'subject')}/>
                        <label htmlFor="imageInput" className="cursor-pointer border-2 w-auto rounded-lg">
                            <label htmlFor="imageInput" className=" text-xl text-[var(--clr-icon)] cursor-pointer inline-flex items-center gap-2">
                                <GoImage className="text-2xl" /> Add your image
                            </label>
                        </label>
                        <input
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="sr-only w-full py-2 border rounded-md border-2 border-[var(--clr-border)] outline-0"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-bold'>What’s on your mind?</p>
                        <textarea name='description' value={des} onChange={(e)=>handleChange(e,'description')} className='p-4 w-full border-2 outline-0'/>
                    </div>

                    <div className='flex justify-end items-end'>
                        <div className='bg-[var(--clr-primary-1)] px-3 py-0.5 rounded-lg '>
                            <button className='text-white text-lg leading-6' type='submit' >
                                Publish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
