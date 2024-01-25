
import NavBar from "./Navbar";



const MainDiv = ({ children }) => {
  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#161716',
    color: '#7B7B7B',
    border: '2px solid #4B514B',
    borderRadius: '12px', // Updated for rounded borders
    width: '90%',
    height: '85%',
    
    zIndex: 1,
  };

  return <div style={boxStyle}>
     <NavBar />
    {children}</div>;
};

export default MainDiv;
