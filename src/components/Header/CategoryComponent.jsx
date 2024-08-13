import { useEffect, useState } from "react";
// Product Services
import productServices from "../../services/productServices";
// redux
import { useDispatch, useSelector } from "react-redux";
// slice
import { saveAllCategoryAction } from "../../store/categorySlice";
// components
import LoaderComponent from "../LoaderComponent";

function CategoryComponent() {
    const [toggleCategory, setToggleCategory] = useState(false)

    const { allCategory, categoryLoader } = useSelector((state) => state.categoryStore);
    const dispatch = useDispatch();

    useEffect(() => {
        productServices.getAllCategoryService()
            .then(res => dispatch(saveAllCategoryAction(res.data)))
            .catch((err) => console.log(err))
    }, [])

    function handleToggleCategory() {
        setToggleCategory(!toggleCategory)
    }

    return (
        <div className=" bg-slate-200">
            <div className="container mx-auto p-8 flex flex-wrap items-start justify-center lg:justify-between" >
                <button onClick={handleToggleCategory} className="bg-mainYellow duration-500 hover:bg-mainBlue text-white px-5 py-3 rounded self-start">{toggleCategory ? 'Close' : 'Show'} Category</button>

                {toggleCategory && <ul className="flex flex-wrap justify-center lg:justify-end my-4 lg:my-0 gap-2 lg:w-[80%] xl:w-[87%] ">
                    {!categoryLoader ? allCategory.map((category, index) => {
                        return <li className="w-[200px] bg-mainBlue rounded text-white text-center py-1 hover:bg-mainYellow cursor-pointer duration-500" key={index}>{category}</li>
                    }) : <div className="flex w-full justify-center"> <LoaderComponent size={40} /></div>}
                </ul>}

            </div>
        </div>
    )
}

export default CategoryComponent;