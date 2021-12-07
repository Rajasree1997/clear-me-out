import "./demo.css"
const Demo = () => {
    return (
        <div  className="demo_page">
            {[...Array(24)].map((_v,i)=><div key={i} className="box">
                { i%7 !== 0 && i%7 !==3 && <div className="black_box">

                </div>}
            </div>)}
            
        </div>
    )
}

export default Demo
