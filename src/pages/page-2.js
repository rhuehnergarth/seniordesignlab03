import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql  } from 'gatsby'

const SecondPage = ({data}) => {
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>{data.allMysqlAdmin.edges[0].node.username}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMysqlAdmin{
      edges {
        node {
          idAdmins
          username
          password
        }
      }
    }
  }
`
export default SecondPage