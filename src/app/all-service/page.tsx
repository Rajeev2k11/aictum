// import AboutUs from "@/components/About/AboutPage";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {AllServiceCard} from "@/components/Service/AllServiceCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aictum"
  // other metadata
};

const AllService = () => {
  return (
    <>
      <Breadcrumb
        pageName="All Services"
        description="We are a global technology powerhouse dedicated to transforming businesses through innovative digital solutions. 
      Since our founding, we've been pushing boundaries and redefining what's possible in the tech industry."
      />
      <AllServiceCard />
    </>
  );
};

export default AllService;
