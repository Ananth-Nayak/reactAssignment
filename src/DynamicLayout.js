import React, {useState, useEffect} from "react"

const DynamicLayout = ({url}) => {

    const images = url

    // usestate hook to maintain the state of selected number and for layout
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [layout, setLayout] = useState({ rows: 1, cols: 1 });

  useEffect(() => {
    calculateLayout(selectedNumber); 
  }, [selectedNumber]); 
  // calculateLayout will be called when ever the selectednumber(layout) is changed

  // main logic of dynamic layout
  const calculateLayout = (number) => {
    if (number === 1){
        setLayout({rows: 1, cols: 1})
    }
    else  if (number === 2){
      setLayout({rows: 1, cols: 2})
  }
    else if (number <= 4) {
      setLayout({ rows: 2, cols: 2 });
    } 
    else if (number <= 6) {
      setLayout({ rows: 2, cols: 3 });
    } 
    else if (number <= 9) {
      setLayout({ rows: 3, cols: 3 });
    } 
    else {
      setLayout({ rows: 3, cols: 4 });
    }
  };

  const handleNumberChange = (event) => {
    setSelectedNumber(parseInt(event.target.value, 10));
  };

  return (
    <div className="container mx-auto p-4">

      {/* starting of dropdown menu */}
      <div className="mb-4">
        <label htmlFor="layout-select" className="mr-2">Select number of images:</label>
        <select
          id="layout-select"
          value={selectedNumber}
          onChange={handleNumberChange}
          className="border rounded p-1"
        >
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      {/* ending of dropdown menu */}
      
      {/* layout code */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${layout.cols}, 1fr)`,
          gridTemplateRows: `repeat(${layout.rows}, 1fr)`,
        }}
      >
        {images.slice(0, selectedNumber).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full object-cover rounded"
          />
        ))}
      </div>
    </div>
  );

};

export default DynamicLayout;