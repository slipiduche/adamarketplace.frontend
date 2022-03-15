import LineGraph from "../../components/LineGraph/LineGraph";
import { data1, options1 } from "./GraphOptions";


const PlatformStats = () => {
    return(
        <div className="text-white tracking-wider" style={{background : "#131129"}}>

            <div className="lg:container mx-auto px-4 pb-32">

                <div className="max-w-[1250px] mx-auto mb-[32px]">
                    <div className="text-black px-[25px] py-6" style={{background: "#6DD68A"}}>
                        <p className="text-lg md:text-xl font-medium">All Systems Operational</p>
                    </div>
                </div>

                <div className="max-w-[969px] mx-auto rounded-xl border-2 border-white mb-[156px]">
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">API</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">Alchemy API</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">Website</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">Mobile Application</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">Support Services ?</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">Emails</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                    <div className="flex justify-between w-full px-4 py-6 border-b-2 border-gray-400">
                        <p className="text-lg md:text-xl font-medium">Developer Testnets</p>
                        <p className="text-lg md:text-xl text-green-500 font-medium">Operational</p>
                    </div>
                </div>


                <div className="max-w-[1250px] mx-auto mb-[62px]">
                    <p className="text-xl md:text-2xl font-medium mb-3">Scheduled Maintenace</p>
                    <p className="text-lg md:text-xl font-medium pb-3 mb-3 border-b-2 border-gray-400">System Maintenance</p>
                    <p className="text-base md:text-lg text-gray-300">We will be undergoing scheduled maintenance during this time.</p>
                    <p className="text-base md:text-lg text-gray-300">Posted on Jan 27, 20:26 UTC</p>
                </div>


                <div className="mb-[63px]">
                    <div className="flex w-full justify-between mb-2">
                        <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text=3xl text-gray-300">System Metrics</h2>
                        <p className="text-base lg:text-lg xl:text-xl 2xl:text=2xl text-gray-300">Day/Month/Year</p>
                    </div>

                    <div className = "p-5 border-2 border-white rounded-[20px] mb-[50px]">
                        <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text=3xl text-gray-300">Average Platform Response Time</h2>
                        <LineGraph data = {data1} options={options1}/>
                    </div>

                    <div className = "p-5 border-2 border-white rounded-[20px]">
                        <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text=3xl text-gray-300">Polygon Transaction Processing Time</h2>
                        <LineGraph data = {data1} options={options1}/>
                    </div>

                </div>
                



                <div className="mb-[63px]">
                    <h3 className="text-base md:text-lg mb-[32px]">Past Incidents</h3>

                    <div className="max-w-[969px] flex flex-col mb-[40px]">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 29, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-[40px]">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 28, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-[40px]">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 27, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-[40px]">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 27, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-[40px]">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 27, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    
                </div>



                <div className="mb-[63px]">
                    <h3 className="text-lg md:text-2xl mb-[32px] text-gold">Programmatic order submission access disabled</h3>

                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Resolved</span> This incident has been resolved.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 26, 22:06 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Update</span> We are currently investigating a site performance issue. During this time, programmatic order submission will be disabled. Check status.opensea.io for updates
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 25, 21:24 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Investigating</span> We are experiencing technical issues leading to a site outage and have temporarily disabled programmatic order submission via the API.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 25, 19:01 UTC</p>
                    </div>


                    <div className="max-w-[969px] flex flex-col mb-4">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 24, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-4">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 23, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
           
                </div>


                <div className="mb-[63px]">

                    <h3 className="text-lg md:text-2xl mb-[32px] text-gold">Programmatic API Access disabled</h3>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Resolved</span> Programmatic access to the API has been fully restored.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 23:37 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Update</span> The events endpoint has been enabled. We are continuing to monitor our systems.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 23:32 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Update</span> We have restored API endpoints with the exception of events and orders. We are continuing to monitor.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 23:01 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Update</span> A fix has been implemented and we are monitoring the issue. Programmatic API access remains disabled.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 21:39 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Monitoring</span> A fix has been implemented and we are monitoring the issue. Programmatic access remains disabled.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 16:43 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Identified</span>  We have identified the issue and a fix is being implemented.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 16:03 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Update</span> While we continue to investigate the issue, all programmatic access has been disabled.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 15:31 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Investigating</span> We are experiencing technical issues leading to a site outage. Teams are currently investigating.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 20, 14:21 UTC</p>
                    </div>
                
                </div>    


                <div className="mb-[63px]">

                    <h3 className="text-lg md:text-2xl mb-[32px] text-gold">Web and API Degraded Performance</h3>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Resolved</span> This incident has been resolved.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 19, 20:12 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Monitoring</span> A fix has been implemented and we are monitoring the results.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 19, 19:40 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Identified</span> Our site is currently experiencing a high volume of requests. We're working to resolve the related performance issues.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 19, 19:13 UTC</p>
                    </div>

                </div>   

                <div className="mb-[63px]">

                    <h3 className="text-lg md:text-2xl mb-[32px] text-gold">Issue with upstream provider</h3>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Resolved</span> This incident has been resolved.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 19, 02:27 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Monitoring</span> Our upstream provider has fixed the issue and we are monitoring our systems as they recover.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 19, 02:18 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Investigating</span> We are experiencing failures with one of our upstream providers and have notified them of the problem, and they are investigating.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 19, 02:07 UTC</p>
                    </div>

                    <div className="max-w-[969px] flex flex-col mb-4">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 18, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-4">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 17, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-4">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 17, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>
                    <div className="max-w-[969px] flex flex-col mb-4">
                        <p className="text-sm sm:text-base text-gray-400 pb-2 mb-4 border-b-2 border-gray-400">Jan 17, 2022</p>
                        <p className="text-sm sm:text-base text-gray-400">No incidents reported today</p>
                    </div>

                </div>      


                <div className="mb-[63px]">

                    <h3 className="text-lg md:text-2xl mb-[32px] text-gold">Programmatic order submission disabled</h3>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Resolved</span> This incident has been resolved.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 15, 18:35 UTC</p>
                    </div>
                    <div className="flex flex-col mb-2">
                        <p className="text-base sm:text-lg ext-gray-400">
                            <span className = "text-green-500">Investigating</span> Due to increased site load, programmatic access to orders has been temporarily disabled.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300">Jan 15, 16:46 UTC</p>
                    </div>           

                </div>       

            </div>

        </div>
    )
}

export default PlatformStats;