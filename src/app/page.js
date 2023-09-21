import Image from 'next/image'
import Link from 'next/link'
import TableIndex from "@/components/Table.Index";
export default function Home() {
  return (
    <>
      <nav className='w-full  shadow-md relative '>
        <div className="p-3 flex mob:flex-col m-auto max-w-6xl justify-between items-center">
          <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
            <div className="img w-16 h-1w-16 rounded-full ">
              <Image src="/assets/gdsc-logo.png" alt="me" width="64" height="64" />
            </div>
            <div className="text flex flex-col justify-start items-start">
              <p className="text-base">Google Devloper Student Club</p>
              <p className="text-xs"> Samrat Ashok Technological Institute </p>

            </div>
          </div>
          
          <div className="links mob:py-3 flex justify-center items-center space-x-5">
            
            {/* <Link href="https://www.linkedin.com/company/google-developer-student-clubs-soit-rgpv"><div className="cursor-pointer linkedin">
              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="#3b82f6" /></svg>
            </div></Link> */}
            <Link href="https://instagram.com/gdsc_sati?igshid=MzRlODBiNWFlZA=="><div className="cursor-pointer insta">

              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#" /></svg>
            </div></Link>
            
            {/* <Link href="https://www.youtube.com/@GDSCSOITRGPV"><div className="cursor-pointer youtube">
            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="#000000"></path> </svg>
            </div></Link> */}
            
          </div>
        </div>
      </nav>

      <TableIndex />

      <div className="  w-full p-2 text-center bg-gray-900 text-orange-50"> 
      <p>Devloped by :- 
      </p>  
       </div>
      <div className="  w-full p-2 text-center bg-gray-900 text-gray-300"> 
      <kbd>Ctrl</kbd> + <kbd>C</kbd>  
       </div>
       <div className="  w-full p-2 text-center bg-gray-900 text-orange-300"> 
      <kbd>Ctrl</kbd> + <kbd>V</kbd>  
       </div>
       <div className="  w-full p-2 text-center bg-gray-900 text-orange-50 "> 
       <p>♥</p>  
       </div>
    </>
  )
}
