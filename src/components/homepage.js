import React from "react";
import Features from "./features/features";
import Services from "./services/services";
import Testimonials from "./testimonials/testimonials"
import Newsletter from "./newsletter/newsletter"

function Layout () {
    return (
    <>
    <Features/>
    <Services />
    <Testimonials />
    <Newsletter />
    </>
    )
}

export default Layout;