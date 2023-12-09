import Board from "../Components/Board";
import {useSelector} from "react-redux";
import {useEffect} from "react";


export default  function DashBoard(){
    const {boardsSearch,Boards,bookmarks} = useSelector(state => state.Boards);
    const board = boardsSearch;
     useEffect( ()=>{
         console.log(boardsSearch)
         console.log(bookmarks)
     },[Boards]);
    return(
        <div className='flex flex-col px-20 py-8 gap-y-10'>
            <p className='text-4xl'>My Boards</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    board?.map((board)=>{
                        return (<Board board={board} type={'boards'} key={board.title}/>)
                    })
                }
            </div>
            {bookmarks.length>0 &&
                <>
                <p className='text-4xl'>My BookMarks</p>
                <div className='grid grid-cols-3 gap-10'>
                 {
                bookmarks?.map((board)=>{
                return (<Board board={board} type={'bookmark'} key={board.title}/>)
                 })
                 }
                </div>
                    </>
            }
        </div>
    )
}
