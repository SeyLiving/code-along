import laptopp from "../assets/image/laptopp.jpg";
import lapy from "../assets/image/lapy.jpg";

function Practice() {
    return(
        <div className="flex justify-center items-center h-screen space-x-10">
            <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden">
                <img src={laptopp} alt="" />
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                <h3 className="font-bold capitalize">Dell Laptop</h3>
                <h6>GHC 3,500</h6>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatem, inventore quia dolorem nobis tempora quidem.</p>
            </div>
        </div>
            <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden">
                <img src={lapy} alt="" />
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                <h3 className="font-bold capitalize">HP Pavilion</h3>
                <h6>GHC 5,500</h6>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatem, inventore quia dolorem nobis tempora quidem.</p>
            </div>
        </div>
    </div>
    );
}

export default Practice