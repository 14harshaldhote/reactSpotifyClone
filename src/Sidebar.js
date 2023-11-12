import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
//import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Sidebar() {
    const fontSize = '16px';
  return (
    <div className="sidebar">
    <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home" fontSize={fontSize}/>
      <SidebarOption Icon={SearchSharpIcon}  title="Search" fontSize={fontSize}/>
     
      <SidebarOption Icon={LibraryMusicOutlinedIcon}  title="Your Library" fontSize={fontSize}/>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>

        <hr style={{ width: '100%' }} />

        
      <SidebarOption title='hip hop' />
      <SidebarOption title='pop' />
      <SidebarOption title='rock' />

      
    </div>
  )
}

export default Sidebar