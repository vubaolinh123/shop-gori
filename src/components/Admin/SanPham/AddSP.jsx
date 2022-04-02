import React from 'react'

const AddSP = () => {
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
                                        <form action="" id="form-add-post">
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label  className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                                            <input type="text" name="product-name" id="product-name" placeholder="Nhập tên sản phẩm"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label 
                                                                className="block text-sm font-medium text-gray-700">Ảnh</label>
                                                            <input type="file" multiple name="image-product" id="image-product"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                            <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="img-preview" width="200" />
                                                        </div>

                                                        <div className="col-span-6 sm:col-span-4">
                                                            <label className="block text-sm font-medium text-gray-700">Nội
                                                                dung sản phẩm</label>
                                                            <textarea type="text" name="desc-product" id="desc-product"
                                                                autocomplete="email"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label 
                                                                className="block text-sm font-medium text-gray-700">Giá</label>
                                                            <input type="number" min="0" name="price-product" id="price-product" placeholder="Nhập giá sản phẩm"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                        </div>
                                                        <div className="col-span-6 sm:col-span-3">
                                                            <label 
                                                                className="block text-sm font-medium text-gray-700">Giảm Giá</label>
                                                            <input type="number" min="0" name="discout-product" id="discout-product" placeholder="Nhập số % muốn giảm"
                                                                className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                        </div>

                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 my-5">
                                                        <label className="block text-sm font-medium text-gray-700">Chọn danh mục muốn thêm</label>
                                                        <select name="select-category" id="select-category" className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">

                                                            <option value="1">DAH MUC</option>

                                                        </select>
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