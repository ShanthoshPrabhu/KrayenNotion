import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react'
import { getDatabase } from '../library/notion';



export default function MyModal() {
  const router =useRouter();
  let [isOpen, setIsOpen] = useState(false);
  let [subModalIsOpen,setSubModalIsOpen] = useState(false);
  const [pageName,setPageName]=useState('');
  const [pageUrl,setPageUrl]=useState('');
  const [pageId,setPageId]=useState('');
  const [databaseId,setDatabaseId]=useState('')

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function submodalclose(){
    setSubModalIsOpen(false)
    setIsOpen(true)
  }

  function submodalopen(){
    setSubModalIsOpen(true)
    setIsOpen(false)
  }

  function closeAll(){
    setIsOpen(false)
    setSubModalIsOpen(false)
  }
  function validatePageUrl(){
    const path = pageUrl.split('/')[3]
    console.log(path)
    if(path?.split('-')){
      const Id=path?.split('-')[1]
      console.log('pageid',Id)
      console.log(Id?.length == 32)
            
    }
    if(path?.split('?')) {
    const Id= path.split('?')[0] 
    console.log(Id);
    
    async function checkData(){
      const getdata = await axios.post(`/api/notion`, {
        databaseId:Id
       })
       console.log('getdata',getdata)
    }
    checkData()
    
    // window.location.replace(`/pages/table/${pageId}`)
} 
  }
  const solutions = [
    {
      name: 'Blog',
      description: 'Create a blog site',
      href: '##',
      icon: IconOne,
    },
    {
      name: 'Documentation',
      description: 'Create a single page site',
      href: '##',
      icon: IconTwo,
    },
  ]
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create a site
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
            <Dialog.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <div className="-m-3 flex items-center cursor-pointer rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50" onClick={submodalopen}>
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 "  >
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4 ">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={subModalIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={submodalclose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
            <Dialog.Panel className="absolute top-[100px] mb-[120px] left-1/2 z-30 min-w-[400px] mt-3 sm:max-w-[600px] justify-center -translate-x-1/2 transform md:max-w-xl sm:px-0 lg:max-w-4xl xl:w-[1200px]">
                <div className='flex flex-col rounded-lg bg-white lg:w-full mb-[100px] min-h-[80vh] sm:w-full md:w-full xl:w-full lg:p-[100px] p-[30px] sm:p-[40px] overflow-y-auto'>
                  <div className='flex flex-col'>
                    <span className='flex font-bold lg:text-xl'>Step 1</span>
                    <span className=' flex font-medium lg:ml-[40px] mt-4 lg:text-lg'>Do share your Notion page to public</span>
                    <img alt='' src='https://notaku.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotion_page_copy_url.0c316447.png&w=750&q=75' className=' min-h-[160px] sm:w-[420px] lg:w-[500px] xl:ml-[50px] lg:h-[280px]'/>
                  </div>
                  <div className='mt-10'>
                  <span className='flex font-bold lg:text-xl'>Step 2</span>
                    <span className='flex font-medium lg:ml-[40px] mt-4 lg:text-lg max-w-[600px]'>Click the button below in order to select and authorize your notion page. Ignore if you have done it already.</span>
                    <div className='mt-4'>
                      <button className=' text-white bg-black rounded-md p-2'>Go to my notion page</button>
                    </div>
                  </div>
                  <div className='flex flex-col mt-10'>
                    <span className=' font-bold flex lg:text-xl'>Site name</span>
                    <div className='mt-2 flex'>
                      <input type='text' className=' min-w-[280px] flex-grow lg:w-[500px] max-w-[650px] border-2 border-gray-200 outline-none rounded-md p-2'/>
                    </div>
                  </div>
                  <div className='flex flex-col mt-10'>
                    <span className=' font-bold flex lg:text-xl'>Notion page URL</span>
                    <div className='mt-2 flex'>
                      <input type='text' onChange={e => setPageUrl(e.target.value)} className=' min-w-[280px] flex-grow lg:w-[400px] max-w-[650px] border-2 border-gray-200 outline-none rounded-md p-2' placeholder=''/>
                    </div>
                  </div>
                  <div className='mt-10 flex justify-center'>
                      <button className=' text-white bg-black rounded-md p-2' onClick={closeAll}>Cancel</button>
                      <button className=' text-white bg-black rounded-md p-2 ml-[30px]' onClick={validatePageUrl}>Create Website</button>
                    </div>
                </div>
            </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }