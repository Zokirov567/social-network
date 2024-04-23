import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { Bio } from "../../components/Bio/Bio";
import { FollowersList } from "../../components/FollowersList/FollowersList";
import { FriendsBlock } from "../../components/FriendsBlock/FriendsBlock";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { Header } from "../../components/UI/Header/Header";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import "./ProfilePage.scss";

export const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <FollowersList/>
      </aside>
      <ProfileHeader/>
    
      <main className="Main">
       <WhatsNew/>
       <UserPosts/>
       <AppPost/>
       <AppRepost/>
      </main>
      <aside className="RightSide">
       <Bio/>
        <FriendsBlock/>
       <MusicBlock/>
      </aside>
    </div>
  );
};
