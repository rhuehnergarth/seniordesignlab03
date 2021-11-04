
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Login page" />
    <h2>Please enter your login credentials below</h2>
    {
        <div>
            <label>
                Username
                <input type="text" name="username"/><br />
            </label>
            <label>
                Password
                <input type="password"name="password"/><br />
            </label>
            <button id = "login"> Login </button>
        </div>
    }

    <Link to="/nav/">Go to the index page</Link>

  </Layout>
)

export default IndexPage
