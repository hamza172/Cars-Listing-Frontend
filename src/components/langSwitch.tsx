import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function SwitchLanguage() {
    const [show, setShow] = useState(false);

    const languages = 
    [{
        name:"English",
        img: "https://qesot.com//images/flags/en.png",
        code:"en"
    },{
        name:"Français",
        img: "https://qesot.com//images/flags/fr.png",
        code:"fr"
    },{
        name:"Español",
        img: "https://qesot.com//images/flags/es.png",
        code:"es"
    },{
        name:"Русский",
        img: "https://qesot.com//images/flags/ru.png",
        code:"ru"
    },{
        name:"Deutsch",
        img: "https://qesot.com//images/flags/de.png",
        code:"de"
    },{
        name:"Italiano",
        img: "https://qesot.com//images/flags/it.png",
        code:"it"
    },{
        name:"Ελληνικά",
        img: "https://qesot.com//images/flags/gr.png",
        code:"gr"
    },{
        name:"Türkçe",
        img: "https://qesot.com//images/flags/tr.png",
        code:"tr"
    },{
        name:"Suomi",
        img: "https://qesot.com//images/flags/fi.png",
        code:"fi"
    },{
        name:"Română",
        img: "https://qesot.com//images/flags/ro.png",
        code:"ro"
    },{
        name:"Svenska",
        img: "https://qesot.com//images/flags/se.png",
        code:"se"
    },{
        name:"Norsk",
        img: "https://qesot.com//images/flags/no.png",
        code:"no"
    },{
        name:"Polski",
        img: "https://qesot.com//images/flags/pl.png",
        code:"pl"
    },]
    const [language, setLanguage] = useState(0)
    useEffect(()=>{
        if (localStorage.getItem("language")){
            setLanguage(languages.findIndex(x=> x.code===localStorage.getItem("language")))
        } else {
            localStorage.setItem('language','en')
            setLanguage(languages.findIndex(x=> x.code==='en'))
        }
    },[])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const manageLanguage = (code: string) => {
        localStorage.setItem("language", code);
        let index= languages.findIndex(x=> x.code===code)
        setLanguage(index)
        handleClose()
        window.location.reload();
    }

    return (<>

        <Button style={{marginLeft:"10px"}} variant="dark" onClick={handleShow} className="me-2 lang-switch-but">
            <img className="languageImg" src={languages[language].img} alt=''/> {languages[language].name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Choose Language</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul className='languagelist'>
            {languages.map((lan)=><>
                <li onClick={()=>manageLanguage(lan.code)}>
                    <img className="languageImg" src={lan.img} alt=''/> {lan.name}<br/>
                </li>
            </>)}
            </ul>
        </Offcanvas.Body>

      </Offcanvas>  
    </>)
}