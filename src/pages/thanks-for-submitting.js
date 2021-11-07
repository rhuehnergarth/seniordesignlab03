import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThanksForSubmitting = () => {
    return(
    <Layout>
        <Seo title ="Thanks For Submitting" />
        <div>
            <h1>Thanks For Submitting!</h1>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}
    


export default ThanksForSubmitting