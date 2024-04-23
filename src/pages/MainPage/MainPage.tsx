import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { FollowersList } from "../../components/FollowersList/FollowersList";
import { FriendList } from "../../components/FriendList/FriendList";
import { History } from "../../components/History/History";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/UI/Header/Header";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <FollowersList/>
        
        
      </aside>
      <main className="Main">
        <WhatsNew/>
      <History/>
        <AppPost/>
        <AppRepost/>
       
      </main>
      <aside className="RightSide">
        <FriendList/>
        <MusicBlock/>
        
       
      </aside>
    </div>
  );
};
