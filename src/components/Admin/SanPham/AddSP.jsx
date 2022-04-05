import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCategory } from '../../../features/Category/category';
import { addProducts } from '../../../features/Product/product';

const AddSP = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const Category = useSelector(data => data.category.value);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = (data) =>{
        const dataProduct = {
            name: data.name,
            image: data.image,
            desc: data.desc,
            price: data.price*1,
            status: data.status*1,
            oldPrice: data.oldPrice*1,
            CategoryProduct: data.CategoryProduct
        }
        dispatch(addProducts(dataProduct));
        navigate("/admin/product")
    }
    
    useEffect(()=>{
        dispatch(getCategory());
    },[])

    return (
        <div>
            <div>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Thêm Mới Sản Phẩm</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 ">

                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label  className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                                            <input type="text" {...register('name',{required: true})}   placeholder="Nhập tên sản phẩm" 
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                                 {errors.name && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng nhập tên sản phẩm</span>  }
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label 
                                                                className="block text-sm font-medium text-gray-700">Ảnh</label>
                                                            <input type="text"  {...register('image',{required: true})} value="https://product.hstatic.net/200000015470/product/8_1_d17ff435a1c2406494b50d8f29298ecf_large.jpg"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                            <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="img-preview" width="200" />
                                                             {errors.image && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng chọn trạng thái sản phẩm</span>  }
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-4">
                                                            <label className="block text-sm font-medium text-gray-700">Nội
                                                                dung sản phẩm</label>
                                                            <textarea type="text" {...register('desc',{required: true})}
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-500 rounded-md "></textarea>
                                                                 {errors.desc && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng nhập mô tả sản phẩm</span>  }
                                                        </div>
                                                        

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label 
                                                                className="block text-sm font-medium text-gray-700">Giá Cũ</label>
                                                            <input type="number" min="0" {...register('oldPrice',{required: true})}  placeholder="Nhập giá cũ sản phẩm"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                        </div>
                                                         {errors.oldPrice && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng nhập giá cũ sản phẩm</span>  }
                                                    </div>
                                                    

                                                    <div className="col-span-6 sm:col-span-3">
                                                            <label className="block text-sm font-medium text-gray-700">Giá Mới</label>
                                                            <input type="number" min="0" {...register('price',{required: true})}  placeholder="Nhập giá mới phẩm"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                                 {errors.price && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng nhập giá mới sản phẩm</span>  }
                                                    </div>
                                                        
                                                        <div className="col-span-6 sm:col-span-3 my-[20px]">
                                                            <label className="block text-sm font-medium text-gray-700">Trạng Thái Sản Phẩm</label>
                                                        <select {...register('status',{required: true})}  className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                            <option value={0}>Còn Hàng</option>
                                                            <option value={1}>Hết Hàng</option>
                                                        </select>
                                                         {errors.status && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng chọn trạng thái sản phẩm</span>  }
                                                        </div>
                                                    
                                                    <div className="col-span-6 sm:col-span-3 my-5">
                                                        <label className="block text-sm font-medium text-gray-700">Chọn danh mục muốn thêm</label>
                                                        <select {...register('CategoryProduct',{required: true})} className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                                            {Category?.map((data)=>(
                                                                <option key={data._id} value={data._id}>{data.name}</option>
                                                            ))}
                                                        </select>
                                                         {errors.CategoryProduct && <span className="text-red-500 block my-[5px] text-[15px]">Vui lòng chọn danh mục</span>  }
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    Thêm Mới
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main >
            </div >
        </div>
    )
}

export default AddSP