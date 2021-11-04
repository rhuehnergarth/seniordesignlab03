
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Login page" />
    <h1>Hi from the login page</h1>
    <p>Welcome to page 2</p>
    <Link to="/nav/">Go to the index page</Link>

  </Layout>
)

export default IndexPage
