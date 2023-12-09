import {CiBookmark} from "react-icons/ci";
import {PiDotsThreeVertical} from "react-icons/pi";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, setLiked} from "../Store/boardReducer";

export default function Post({post}){
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const {boardSearch,postModalOPen} = useSelector(state => state.Boards);
    useEffect(()=>{
        console.log(post)
    },[boardSearch])
    const handleDelte=()=>{
        dispatch(deletePost(post.subject));
    }

    const handleLike=()=>{
        dispatch(setLiked(post.subject));
    }
    return (
        <div className='flex flex-col px-4 py-4 gap-2 relative bg-white justify-between rounded-lg '>
            <div className='flex flex-col gap-2'>
            <div className='inline-flex justify-between items-start gap-2'>
                <p className='text-xl font-bold'>{post.subject}</p>
                <div className='inline-flex items-center'>
                 <CiBookmark className='text-2xl text-[var(--clr-icon)]'/>
                    <PiDotsThreeVertical className='text-[#222222] mr-4 cursor-pointer' onClick={()=>setModal(!modal)}/>
                </div>
            </div>
                <div className='inline-flex  text-[var(--clr-icon)] gap-2'><p>{post?.date}</p><p>{post?.month}</p></div>

            <img className='w-full rounded-lg ' src={post.image}/>

            <p className='text-sm text-[#2B2B2B] line-clamp-4'>{post.description}</p>
            </div>
            <div className='inline-flex gap-2 justify-start  text-xl pt-2 border-t-2 items-center text-[var(--clr-icon)] '>
                {post?.likes>0 ? <AiFillHeart className='text-red-600' onClick={handleLike}/> : <AiOutlineHeart className='' onClick={handleLike}/>}
                <p className=''>{post?.likes}</p>
            </div>
            {modal &&
                <div className='absolute flex flex-col box-border border-1 p-4 rounded-lg gap-4 right-0 top-10 bg-white shadow-xl'>
                    <div className='inline-flex items-center gap-2' ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="PencilLineOutlined">
                            <g id="Union">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 13.75C1.875 13.5842 1.94085 13.4253 2.05806 13.3081L12.7903 2.57583C14.0107 1.35544 15.9893 1.35544 17.2097 2.57583L17.4242 2.7903C18.6446 4.01068 18.6446 5.98932 17.4242 7.20971L6.69194 17.9419C6.57473 18.0592 6.41576 18.125 6.25 18.125H2.5C2.33424 18.125 2.17527 18.0592 2.05806 17.9419C1.94085 17.8247 1.875 17.6658 1.875 17.5V13.75ZM3.125 14.0089L3.125 16.875H5.99112L14.7411 8.12498L11.875 5.25886L3.125 14.0089ZM12.7589 4.37498L15.625 7.2411L16.5403 6.32583C17.2725 5.5936 17.2725 4.40641 16.5403 3.67418L16.3258 3.45971C15.5936 2.72748 14.4064 2.72748 13.6742 3.45971L12.7589 4.37498Z" fill="#717171"/>
                                <path d="M10 17.5C10 17.1548 10.2798 16.875 10.625 16.875H16.875C17.2202 16.875 17.5 17.1548 17.5 17.5C17.5 17.8452 17.2202 18.125 16.875 18.125H10.625C10.2798 18.125 10 17.8452 10 17.5Z" fill="#717171"/>
                            </g>
                        </g>
                    </svg><p className='text-[var(--clr-icon)]'>Edit</p></div>
                    <button onClick={handleDelte} className='inline-flex items-center gap-2' ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="DeleteOutlined">
                            <path id="Delete" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.25C6.46447 1.25 5.625 2.08947 5.625 3.125V3.75H3.125H2.4406H1.875C1.52982 3.75 1.25 4.02982 1.25 4.375C1.25 4.72018 1.52982 5 1.875 5H2.55424L3.54587 15.9079C3.6922 17.5175 5.04178 18.75 6.65804 18.75H13.342C14.9582 18.75 16.3078 17.5175 16.4541 15.9079L17.4458 5H18.125C18.4702 5 18.75 4.72018 18.75 4.375C18.75 4.02982 18.4702 3.75 18.125 3.75L17.5594 3.75H16.875H14.375V3.125C14.375 2.08947 13.5355 1.25 12.5 1.25H7.5ZM13.125 3.75V3.125C13.125 2.77982 12.8452 2.5 12.5 2.5H7.5C7.15482 2.5 6.875 2.77982 6.875 3.125V3.75H13.125ZM6.25 5H3.8094L4.79074 15.7948C4.87853 16.7605 5.68828 17.5 6.65804 17.5H13.342C14.3117 17.5 15.1215 16.7605 15.2093 15.7948L16.1906 5H13.75H6.25ZM8.75 7.5C8.75 7.15482 8.47018 6.875 8.125 6.875C7.77982 6.875 7.5 7.15482 7.5 7.5V13.75C7.5 14.0952 7.77982 14.375 8.125 14.375C8.47018 14.375 8.75 14.0952 8.75 13.75V7.5ZM11.875 6.875C12.2202 6.875 12.5 7.15482 12.5 7.5V13.75C12.5 14.0952 12.2202 14.375 11.875 14.375C11.5298 14.375 11.25 14.0952 11.25 13.75V7.5C11.25 7.15482 11.5298 6.875 11.875 6.875Z" fill="#D33852"/>
                        </g>
                    </svg>
                        <p className= 'text-[#D33852]' >Delete</p></button>
                </div>}
        </div>
    )
}
