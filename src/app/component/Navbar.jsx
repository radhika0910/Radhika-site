// NavBar.jsx

const NavBar = () => {
  const sectionStyle = {
    margin: '0 10px', // Adjust margin as needed
   // Bottom border
    borderRight: '2px solid grey', // Vertical line
    display: 'inline-block',
    // width: 'calc(100% - 20px)', // Set width to cover the container
    boxSizing: 'border-box', // Include border in the width calculation
    padding: '10px 0', // Add padding for better spacing
    textAlign: 'center',
    //  // Center text within each section
  };
const mainsec ={
    borderBottom: '2px solid grey', 
};


  return (
    <div style={mainsec} >
      <div style={sectionStyle}>Section 1</div>
      <div style={sectionStyle}>Section 2</div>
      <div style={sectionStyle}>Section 3</div>
      <div style={sectionStyle}>Section 4</div>
      <div style={sectionStyle}>Section 5</div>
      <div style={sectionStyle}>Section 6</div>
      <div style={sectionStyle}>Section 7</div>
      <div style={sectionStyle}>Section 8</div>
    </div>
  );
};

export default NavBar;
