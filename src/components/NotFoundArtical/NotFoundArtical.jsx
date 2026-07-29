import React from 'react'

export default function NotFoundArtical({setSearch}) {
    function test(){
        setSearch('')
        
    }
  return (
    <>
        <div className="container my-5">
            <div className=" d-flex flex-column justify-content-center align-items-center">
                <div className="not-fond-icon">
                    <i className="fa-regular fa-face-frown"></i>
                </div>
                <h2 className='text-white fw-bold'>لا توجد مقالات</h2>
                <p className='not-found-p'>حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.</p>
                <button onClick={test} className='not-found-btn'><i className="fa-solid fa-rotate"></i>إعادة تعيين الفلاتر</button>
            </div>
        </div>
    </>
  )
}
