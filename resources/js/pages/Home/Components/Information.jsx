import React from 'react'

function Information(props,children) {
    const P_STYLE="text-md font-extralight my-2";
    const TITLE_STYLE="text-left text-secondary font-semibold text-xl mb-3"
  return (
    <div className='w-full  my-3 cursor-pointer bg-gray-100 py-2'>
        <div className='w-11/12 mx-auto'>
            <h4 className={TITLE_STYLE}>Information</h4>
            <p className={P_STYLE}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente porro corrupti doloremque labore error repellendus expedita est, cum ab maiores! Hic voluptas alias dolorem. Commodi fuga, vel itaque enim provident quod facere, officia expedita doloremque culpa doloribus sint nemo dicta officiis assumenda repellendus! Ratione optio id illum hic quis atque recusandae voluptates, quam temporibus magnam mollitia reiciendis sapiente est dolores expedita totam voluptatum laborum corporis perferendis eaque? Ad dolor soluta, beatae repellat ipsum, ullam debitis et tenetur, nulla dolore nesciunt non sint? Nemo minima possimus at beatae, sunt iusto quisquam animi eos numquam velit mollitia voluptatum commodi harum error?</p>
            <p className={P_STYLE}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sapiente porro corrupti doloremque labore error repellendus expedita est, cum ab maiores! Hic voluptas alias dolorem. Commodi fuga, vel itaque enim provident quod facere, officia expedita doloremque culpa doloribus sint nemo dicta officiis assumenda repellendus! Ratione optio id illum hic quis atque recusandae voluptates, quam temporibus magnam mollitia reiciendis sapiente est dolores expedita totam voluptatum laborum corporis perferendis eaque? Ad dolor soluta, beatae repellat ipsum, ullam debitis et tenetur, nulla dolore nesciunt non sint? Nemo minima possimus at beatae, sunt iusto quisquam animi eos numquam velit mollitia voluptatum commodi harum error?</p>
        </div>
        
    </div>
  )
}

export default Information