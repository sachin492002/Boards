import {BsFillBookmarkFill, BsPlus} from "react-icons/bs";
import {MdArrowBackIos} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai";
import {CiBookmark} from "react-icons/ci";
import {RxDividerVertical} from "react-icons/rx";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setBookMark, setCurrentBoard, setpostsModalOpen} from "../Store/boardReducer";
import AddPosts from "../Components/AddPost";
import Post from "../Components/Post";


export default function BoardPage() {

    const params = useParams();
    const dispatch =useDispatch();
    const {postModalOPen,Boards,currentboard} = useSelector((state) => state.Boards);
    const board = currentboard;

    useEffect(() => {
        dispatch(setCurrentBoard(params?.id));
    }, [dispatch, params.id,Boards]);
    const handleClick=()=>{
        dispatch(setpostsModalOpen(true));
    }
    const handleBookmark=()=>{
        dispatch(setBookMark(board));
    }

    return(
        <div className='flex flex-col h-full'>
            <div className='w-full h-16 flex px-10 py-4 justify-between  items-center'>
                <div className='inline-flex justify-center items-center gap-1.5'>
                    <Link to={'/'}><MdArrowBackIos className='text-[var(--clr-icon)]'/></Link>
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M4.93531 1.08022C10.9396 -3.46269 30.9856 8.57762 30.9856 16.1068C30.9856 23.6359 11.4161 34.9456 4.93531 31.1651C-1.54549 27.3529 -1.06896 5.59137 4.93531 1.08022ZM12.5597 18.8389C12.5597 20.6179 13.0998 22.111 15.546 22.111C15.959 22.111 16.372 22.0157 16.6897 21.8569C17.0391 21.6663 17.2615 21.3804 17.2615 20.9991C17.2615 20.5544 16.9438 20.1414 16.372 20.1414C16.3084 20.1414 16.2767 20.1414 16.1178 20.1732C16.0283 20.1732 15.9489 20.1833 15.8796 20.1921C15.8259 20.1989 15.7782 20.2049 15.7366 20.2049C15.1648 20.2049 14.8471 19.6966 14.8471 18.8071V14.5183H16.2767C17.1662 14.5183 17.325 13.9147 17.325 13.5971C17.325 13.2794 17.1662 12.6758 16.2767 12.6758H14.8471V11.0873C14.8471 10.039 14.0846 9.84836 13.7034 9.84836C13.3222 9.84836 12.5597 10.039 12.5597 11.0873V12.6758H11.7973C10.9078 12.6758 10.7489 13.2794 10.7489 13.5971C10.7489 13.9147 10.9078 14.5183 11.7973 14.5183H12.5597V18.8389Z" fill="#EB4762"/>
                    </svg>
                    <p>{board?.title}</p>
                </div>
                <div className='inline-flex gap-4 text-[var(--clr-icon)] text-xl items-center'>
                    <AiOutlineSearch/>
                    <RxDividerVertical/>
                    {board?.bookmark ? <BsFillBookmarkFill className='text-yellow-500'/> :<CiBookmark onClick={handleBookmark} className='cursor-pointer'/>}
                </div>
            </div>
            <div className='bg-[var(--clr-primary-3)] w-full flex flex-col min-h-[100vh]'>
                <div className='inline-flex w-full justify-between items-start px-10 py-4'>
                    <p className='text-4xl'>Your Posts</p>
                    <div onClick={handleClick} className='bg-[var(--clr-primary-1)] px-3 py-0.5 rounded-lg inline-flex items-center'>
                        <BsPlus className='text-white  text-4xl'/>
                        <button className='hidden lg:block text-white leading-6' >
                            Create new post
                        </button>
                    </div>
                </div>

                {(board?.posts?.length == 0||!board?.posts) && <div className='flex flex-col justify-center h-full items-center'>
                         <div>
                             <img src='/empty.svg'/>
                         </div>
                    <p className='text-base font-bold'>Nothing here yet</p>
                    <p className='text-sm font-normal '>Create your first post by clicking on the '+' button above</p>
                </div>}
                { board?.posts?.length > 0 &&
                    <div className='grid grid-cols-2 lg:grid-cols-3 px-10 gap-10 py-2'>
                        {
                            board?.posts?.map((post)=>{
                                return <Post post={post}/>
                            })
                        }
                    </div>
                }
            </div>
            {postModalOPen && <AddPosts id={params.id}/>}
        </div>
    )
}
