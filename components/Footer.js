
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="bg-gray-100 pt-5 pl-15 ">
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 max-w-7xl px-32 py-14">
                <div className="space-y-5 text-sm text-gray-800 font-rubik">
                   
                        <h1 className="uppercase font-bold text-black text-lg">About</h1>
                        <p>How Airbnb works</p>
                        <p>Newsroom</p>
                        <p>Airbnb 2021</p>
                        <p>Investors</p>
                        <p>Airbnb Plus</p>
                        <p>Airbnb Luxe</p>
                        <p>HotelTonight</p>
                        <p>Airbnb for Work</p>
                        <p>Made possible by Hosts</p>
                        <p>Careers</p>
                        <p>Founders' Letter</p>
                        

                </div>
                <div className="space-y-5 text-sm text-gray-800 font-rubik">
                
                        <h1 className="uppercase font-bold text-black text-lg">Community</h1>
                        <p>Diversity & Belonging</p>
                        <p>Accessibility</p>
                        <p>Airbnb Associates</p>
                        <p>Host Afghan refugees</p>
                        <p>Guest Referrals</p>
                        <p>Airbnb.org</p>
                        
                        
                </div>
                <div className="space-y-5 text-sm text-gray-800 font-rubik">
                
                        <h1 className="uppercase font-bold text-black text-lg">Host</h1>
                        <p>Host your home</p>
                        <p>Host an Online Experience</p>
                        <p>Host an Experience</p>
                        <p>Responsible hosting</p>
                        <p>Resource Centre</p>
                        <p>Community Centre</p>
                        
                       
                </div>
                <div className="space-y-5 text-sm text-gray-700 font-rubik">
                    
                <h1 className="uppercase font-bold text-black text-lg">Support</h1>
                        <p>Our COVID-19 Response</p>
                        <p>Help Centre</p>
                        <p>Cancellation options</p>
                        <p>Neighbourhood Support</p>
                        <p>Trust & Safety</p>
                        
                        
                         
                </div>
                </div>
                <div className="ml-12 pl-12 max-w-7xl">
                    <hr className="color-bg gray-300"/>
                    <div>
                   
                    <div className="flex text-gray-700 space-y-4 ml-6 text-xs">
                        <p className="mt-4">  © 2021 Airbnb, Inc.</p>
                        <p className="mt-4 ml-4"> · Privacy</p>
                        <p className="mt-4 ml-4"> · Terms</p>
                        <p className="mt-4 ml-4"> · Sitemap</p>
                        <p className="mt-4 ml-4"> · Company details</p>
                        

                    </div>
                    <div className="flex justify-end  text-gray-700 text-xs mt-0 pb-0 gap-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
<p><u>English(IN)</u></p>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>INR</p>
<FacebookIcon/>
<TwitterIcon/>
<InstagramIcon/>



                    </div>
                    </div>

                </div>
            
            
        </div>
    )
}

export default Footer
