import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const AddDM = () => {

    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Thêm Mới Danh Mục</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 ">

                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <form action="" id="form-add-post" onSubmit={ handleSubmit(onSubmit) }>
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label className="block text-sm font-medium text-gray-700">Tên sản Danh Mục</label>
                                                        <input type="text" name="category-name" id="category-name" placeholder="Nhập tên danh mục" { ...register('name') }
                                                            className="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    Thêm Mới
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddDM