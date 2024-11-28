import { useEffect } from "react";
import addDummyData from "../../addDummyData";
import PostsList from "../../components/PostList";

const Home:React.FC=()=>{
      // useEffect(() => {
      //   addDummyData();
      // }, []);
    return (
      <>
      
        <PostsList />
      </>
    );
}
export default  Home;