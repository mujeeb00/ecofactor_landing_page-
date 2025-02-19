import colorbar from '../../Assets/COLORBAR.png'
import circleThick from '../../Assets/THICK_circle.svg'
import circleThin from '../../Assets/Thin_Circle.svg'
import '../../App.css'


const Layout = ({ children }) => {
    return <>
        <div className="container-fluid p-0" style={{position : 'relative'}} >
            <img src={colorbar} alt="c-bar" style={{ position: 'absolute', top: '-17px', left: '-10px', zIndex: '-1' }} />
            <img src={circleThick} alt="c-bar" style={{ width: '10rem', position: 'absolute', right: '-50px', top: '-50px', zIndex: '-1' }} />
            <img src={circleThin} alt="c-bar" style={{ width: '10rem', position: 'absolute', bottom: '50px', left: '-50px', zIndex: '-1' }} />
            <img src={colorbar} alt="c-bar" style={{ position: 'absolute', bottom: '0px', right: '-10px', zIndex: '-1' }} />


            <div className="container">
                <div className="row " >
                    <div className="col-12 col-lg-9 mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Layout;
