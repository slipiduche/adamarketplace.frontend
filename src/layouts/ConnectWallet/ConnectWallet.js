


const ConnectWallet = () => {
    return(
        <div className = "text-white" style = {{background: "#414662"}}>
            <div className="lg:container mx-auto px-4 pb-8 pt-20">

                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4">
                    You Need an cardano Wallet to use <span className = "text-gold">Digirack</span>  
                </h1>
                <p className="text-lg md:text-xl font-bold text-center">
                    Connect with one of our available <span className = "text-gold">Wallet</span> provider create a new account
                </p>

                
                <div className="max-w-[969px] mx-auto rounded-xl border-2 border-white mb-[156px] mt-[68px]">

                    <div className="flex items-center justify-between w-full px-4 md:px-8 xl:px-12 py-6 border-b-2 border-gray-400">
                        <div className="flex items-center w-full">
                            <img src = {require('../../images/wallets/wallet1.png')} alt = 'namiwallet' className='w-full max-w-[46px] mr-3'/>
                            <p className="text-lg md:text-xl font-medium">Nami Wallet</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium">Popular</p>
                    </div>

                    <div className="flex items-center justify-between w-full px-4 md:px-8 xl:px-12 py-6 border-b-2 border-gray-400">
                        <div className="flex items-center w-full">
                            <img src = {require('../../images/wallets/wallet2.png')} alt = 'namiwallet' className='w-full max-w-[46px] mr-3'/>
                            <p className="text-lg md:text-xl font-medium">CCvault wallet</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium"></p>
                    </div>

                    <div className="flex items-center justify-between w-full px-4 md:px-8 xl:px-12 py-6 border-b-2 border-gray-400">
                        <div className="flex items-center w-full">
                            <img src = {require('../../images/wallets/wallet3.png')} alt = 'namiwallet' className='w-full max-w-[46px] mr-3'/>
                            <p className="text-lg md:text-xl font-medium">Cero wallet</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium"></p>
                    </div>

                    <div className="flex items-center justify-between w-full px-4 md:px-8 xl:px-12 py-6 border-b-2 border-gray-400">
                        <div className="flex items-center w-full">
                            <img src = {require('../../images/wallets/wallet4.png')} alt = 'namiwallet' className='w-full max-w-[46px] mr-3'/>
                            <p className="text-lg md:text-xl font-medium">Yoroi wallet</p>
                        </div>
                        <p className="text-lg md:text-xl font-medium"></p>
                    </div>
                
                </div>


            </div>
        </div>
        
    )
}

export default ConnectWallet;