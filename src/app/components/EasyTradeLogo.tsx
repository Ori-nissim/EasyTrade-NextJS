import Image from "next/image"

export default function EasyTradeLogo(props: {isDarkMode:boolean}) {
    return (
        <div className="flex items-center gap-x-2">
             <Image
            className={`h-12 w-fit rounded-md ${props.isDarkMode ? "filter invert" : "filter-none"}`}
            src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-trading-line-icon-vector-png-image_6708688.png"
            alt="EasyTrade Logo"
            width={50}
            height={50}

          />
          <h1 className="text-2xl text-text text-gray-800 inter font-bold">
            EasyTrade
          </h1>
        </div>
        
    );
}