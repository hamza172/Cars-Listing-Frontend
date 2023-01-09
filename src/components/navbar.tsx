import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import SwitchLanguage from './langSwitch';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { RiDonutChartLine, RiLayoutMasonryFill, RiStarFill } from "react-icons/ri";
import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappIcon,
  } from "react-share";
import { translation } from '../translation';

export default function NavBar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const shareUrl = window.location.href
  const [search, setSearch] = useState('');
    const handleMenu = () => {
      if(show)
      setShow(false)
      else
      setShow(true)
    }
  
    const handleSearch = () => {
      navigate('/search/'+search);
    }
    const toggleSocialIcons = () =>{
      if(showIcons){
        setShowIcons(false)
      } else {
        setShowIcons(true)
      }
    }

    return (<>
        <Navbar key='expand' bg="dark" expand={false}>
          <Container >
            <div className="d-flex align-items-center">
            <div onClick={()=>{handleMenu()}} className='menu-icon cursor'><span className='menubar' style={{color:"white",fontSize:'24px'}}><AiOutlineMenu/></span></div>
            
            <Link to='/' className='no-underline'><Navbar.Brand className='white-text'>SOLNCAR</Navbar.Brand></Link>
            </div>
            <div className="d-flex align-items-center">
            <Form className="d-flex" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    placeholder={translation.search[localStorage.getItem("language") || 'Search']}
                    onChange={(e) => setSearch(e.target.value)}
                    className="me-2 searchbar-nav"
                    aria-label="Search"
                  />
                  <Button className="search-button-navbar noHoverButton"><BsSearch/></Button>
                </Form>
                    <SwitchLanguage/>
                </div>
                
          </Container>  
        </Navbar>
        <Button className='share-button-float' onClick={()=> toggleSocialIcons()}>{translation.share[localStorage.getItem("language") || 'Share']} <AiOutlineShareAlt/></Button>
        {showIcons && <div className='socialIconsSlide'>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={40} />
          </TwitterShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={40} />
          </EmailShareButton>
          <RedditShareButton url={shareUrl}>
            <RedditIcon size={40} />
          </RedditShareButton>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
        </div>}
        {(show) && <div className='menuBox'>
              <Link to='/' className='no-underline grey-text'><span className='navbar-icons'><AiFillHome/></span>{translation.home[localStorage.getItem("language") || 'Home']}</Link>
              <Link to='/all-brands' className='no-underline grey-text'><span className='navbar-icons'><RiLayoutMasonryFill/></span>{translation.allBrands[localStorage.getItem("language") || 'All Brands']}</Link>
              <Link to='/all-electric-cars' className='no-underline grey-text'><span className='navbar-icons'><RiStarFill/></span>{translation.topElectricCars[localStorage.getItem("language") || 'Top Electric Cars']}</Link>
              <Link to='/all-cars' className='no-underline grey-text'><span className='navbar-icons'><RiStarFill/></span>{translation.allCars[localStorage.getItem("language") || 'Top Cars']}</Link>
              <Link to='/hot-cars' className='no-underline grey-text'><span className='navbar-icons'><RiStarFill/></span>{translation.hotCars[localStorage.getItem("language") || 'Hot Cars']}</Link>
              <Link to='/all-hybrid-cars' className='no-underline grey-text'><span className='navbar-icons'><RiStarFill/></span>{translation.topHybridCars[localStorage.getItem("language") || 'Top Hybrid Cars']}</Link>
              <Link to='/contact-us' className='no-underline grey-text'><span className='navbar-icons'><RiDonutChartLine/></span>{translation.contactUs[localStorage.getItem("language") || 'Contact Us']}</Link>
            </div>}
    </>)
}