import React from 'react'
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const MyPolls = () => (
    <Layout>
        <Seo title="Page two" />
        <h1>My Polls</h1>
        <Link to="/">Log-out</Link> <br />
    </Layout>
)

export default MyPolls

