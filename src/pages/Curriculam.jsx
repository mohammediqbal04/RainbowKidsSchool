import React from 'react'
import assets from '../assets/assets'

const Curriculam = () => {
  return (
    <div>
      <div className='banner h-60 md:h-96 w-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: `url(${assets.hero2})`,backgroundSize: 'cover', backgroundPosition: 'center',}}>
      </div>

      <div className='space-y-4 p-10 md:p-30'>
        {/* curriculam heading */}
        <div>
          <p className='text-center'>Our Core Value</p>
          <h1 className='text-3xl font-semibold text-center mt-'>Our Curriculam</h1>
        </div>

        {/* curriculam content */}
        <div className='md:flex md:justify-between md:mr-30'>
          {/* curriculam details 1 */}
          <div className='md:w-1/4'>
            <div className='flex gap-5 mt-10'>
              <div>
                <h1 className='bg-[#4E2976] text-black w-15 h-15 rounded-full flex justify-center items-center font-bold text-xl'>1</h1>            
              </div>
              <div>
                <h1 className='text-lg font-semibold'>Active Learning</h1>
                <p className='text-[#6b6b84] text-sm'>We Provide Fun Activities While Learning.</p>
              </div>
            </div>

            <div className='flex gap-5 mt-10'>
              <div>
                <h1 className='bg-[#b6fdd6] text-black w-15 h-15 rounded-full flex justify-center items-center font-bold text-xl'>2</h1>            
              </div>
              <div>
                <h1 className='text-lg font-semibold'>Safe Environment</h1>
                <p className='text-[#6b6b84] text-sm'>CCTV Camera surveillance</p>
              </div>
            </div>

            <div className='flex gap-5 mt-10'>
              <div>
                <h1 className='bg-[#fdbea8] text-black w-15 h-15 rounded-full flex justify-center items-center font-bold text-xl'>3</h1>            
              </div>
              <div>
                <h1 className='text-lg font-semibold'>Fully Equipment</h1>
                <p className='text-[#6b6b84] text-sm'>Fully equipped classrooms with Versatile learning materials, puzzles,montessori toys aided Audio visual classrooms.</p>
              </div>
            </div>
          </div>

          {/* curriculam png */}
          <div>
            <img src={assets.png} alt="" className='mt-5 rounded-4xl md:w-100' />
          </div>

          {/* curriculam details 2 */}
          <div className='justify-center'>
            <div className='flex gap-5 mt-10'>
                <div>
                  <h1 className='bg-[#fd91a8] text-black w-15 h-15 rounded-full flex justify-center items-center font-bold text-xl'>4</h1>            
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Sport Section</h1>
                  <p className='text-[#6b6b84] text-sm'>Attractive play area.</p>
                </div>
              </div>    

            <div className='flex gap-5 mt-10'>
              <div>
                <h1 className='bg-[#fce0ad] text-black w-15 h-15 rounded-full flex justify-center items-center font-bold text-xl'>5</h1>            
              </div>
              <div>
                <h1 className='text-lg font-semibold'>Art Class</h1>
                <p className='text-[#6b6b84] text-sm'>Artistic Classes</p>
              </div>
            </div>                
          </div>          
        </div>    

        {/* Our Curriculum */}   
        <div>
          <h1 className='text-3xl font-semibold text-center mt-10 mb-10'>Our Curriculum</h1>
          <div className='md:grid md:grid-cols-3 md:space-x-10 md:space-y-10'>
            <div className='flex flex-col'>
              <img src={assets.cur1} alt="" className='rounded h-100' />
              <h1 className='font-semibold text-xl mt-5 pl-3'>Drawing and Painting</h1>
              <ol className='list-disc list-inside space-y-1 pl-3 mt-3'>
                <li>Freehand Drawing</li>
                <li>Cartoon Drawing</li>
                <li>Painting</li>
                <li>Pattern Drawing</li>
                <li>Colouring</li>
              </ol>
            </div>


            <div className='flex flex-col mt-10 md:mt-0'>
              <img src={assets.cur4} alt="" className='rounded h-100' />
              <h1 className='font-semibold text-xl mt-5 pl-3'>Daycare & Nuturing</h1>
              <ol className='list-disc list-inside space-y-1 pl-3 mt-3'>
                <li>Preschool Day Care</li>
                <li>After School Care</li>
                <li>Tution for Hindi</li>
                <li>Tution for Tamil</li>
                <li>Special Needs Care</li>
              </ol>
            </div> 

            <div className='flex flex-col mt-10 md:mt-0'>
              <img src={assets.cur2} alt="" className='rounded h-100' />
              <h1 className='font-semibold text-xl mt-5 pl-3'>Clay Crafting</h1>
              <ol className='list-disc list-inside space-y-1 pl-3 mt-3'>
                <li>Hand Building Shapes</li>
                <li>Pressing clay into molds</li>
                <li>Clay Painting & Decoration</li>
                <li>Clay Pottery</li>
              </ol>
            </div> 

            <div className='flex flex-col mt-10'>
              <img src={assets.cur6} alt="" className='rounded h-100 w-100' />
              <h1 className='font-semibold text-xl mt-5 pl-3'>Chess & Abacus</h1>
              <ol className='list-disc list-inside space-y-1 pl-3 mt-3'>
                <li>Beginner Chess</li>
                <li>Fun puzzle and teamwork</li>
                <li>Junior Abacus</li>
                <li>Speed Abacus</li>
              </ol>
            </div> 

            <div className='flex flex-col mt-10'>
              <img src={assets.cur7} alt="" className='rounded h-100' />
              <h1 className='font-semibold text-xl mt-5 pl-3'>Handwriting</h1>
              <ol className='list-disc list-inside space-y-1 pl-3 mt-3'>
                <li>Pre-Writing Skills</li>
                <li>Cursive Writing</li>
                <li>Block letters writing</li>
                <li>Neatness Practice</li>
              </ol>
            </div>                         

          </div>
        </div> 
      </div>
    </div>
  )
}

export default Curriculam