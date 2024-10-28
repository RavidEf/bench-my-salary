import Image from 'next/image';
import Amazon from '../../public/images/amazon.png';
import Cola from '../../public/images/coca_cola-logo.png';
import Deloitte from '../../public/images/deloitte.png';
import Google from '../../public/images/google-logo-removebg.png';
import Deer from '../../public/images/john_deere.png';
import Oracle from '../../public/images/oracle.png';
import Paypal from '../../public/images/paypal.png';
import Porsce from '../../public/images/porsche.png';
import Samsung from '../../public/images/samsung-logo.png';
import SAP from '../../public/images/sap-logo.png';
import Siemens from '../../public/images/siemens.png';
import Toyota from '../../public/images/toyota-logo.png';
import Xbox from '../../public/images/xbox.png';
import Yelp from '../../public/images/yelp.png';

export default function CarouselCompanies() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      <div className="flex animate-carousel items-center">
        {/* First set of logos */}
        <div className="flex space-x-12">
          <div className="carousel-item flex-none w-48">
            <Image
              src={Google}
              alt="google logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Cola}
              alt="cola logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Samsung}
              alt="samsung logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={SAP}
              alt="sap logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Siemens}
              alt="siemens logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Toyota}
              alt="toyota logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Deloitte}
              alt="deloitte logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Deer}
              alt="john deere logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Oracle}
              alt="oracle logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Paypal}
              alt="paypal logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Porsce}
              alt="porsche logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Amazon}
              alt="amazon logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Xbox}
              alt="porsche logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Yelp}
              alt="porsche logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex">
          <div className="carousel-item flex-none w-48">
            <Image
              src={Google}
              alt="google logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Cola}
              alt="cola logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Samsung}
              alt="samsung logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={SAP}
              alt="sap logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Siemens}
              alt="siemens logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Toyota}
              alt="toyota logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Deloitte}
              alt="deloitte logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Deer}
              alt="john deere logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Oracle}
              alt="oracle logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Paypal}
              alt="paypal logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="carousel-item flex-none w-48">
            <Image
              src={Porsce}
              alt="porsche logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
